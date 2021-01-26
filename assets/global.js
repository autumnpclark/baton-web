const STAGE_CONST = {
    "joining":0, "active":1, "complete":2
};

const CHALLENGE_STATE_CONST = {
    "waiting":0, "active":1
}

class BluetoothManager {
    constructor(global) {
        this.char = null;
        this.charNotify = null;
        this.global = global;
        this.status = "disconnected";
    }

    async init() {
        this.status = "connecting";
        let device = await navigator.bluetooth.requestDevice({
            filters: [
                {"name": "Autumn"}
            ],
            optionalServices: [
                "955e60dd-e4d7-4880-94de-1647e0741a84",
            ],
        });

        let server = await device.gatt.connect();
        let service = await server.getPrimaryService("955e60dd-e4d7-4880-94de-1647e0741a84");
        this.char = await service.getCharacteristic("955e60dd-e4d7-4880-94de-1647e0741a85");
        this.charNotify = await service.getCharacteristic("955e60dd-e4d7-4880-94de-1647e0741a86");

        self = this;
        this.charNotify.addEventListener("characteristicvaluechanged", (e)=>{
            self.valueChanged(e);
        });
        await this.charNotify.startNotifications();

        this.updateLoop();
        this.status = "connected"
    }

    valueChanged(e) {
        let value = new Uint8Array(e.target.value.buffer)[0];
        if(value === 0) {
            if(!!this.global.swing0fn) {
                this.global.swing0fn();
                this.global.swing0fn = null;
            }
        }
        if(value === 1) {
            if(!!this.global.swing1fn) {
                this.global.swing1fn();
                this.global.swing1fn = null;
            }
        }
    }

    async updateLoop() {
        while(true) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            if(!this.global.relay) {
                this.char.writeValue((new Uint8Array([0, 0, 0, 0, 0, 0])).buffer);
                continue
            }

            let stage = STAGE_CONST[this.global.relay.status.stage];
            let challenge = this.global.relay.status.challenge
            let challenge_stage = CHALLENGE_STATE_CONST[this.global.relay.status.challenge_stage];
            let timeLeft = this.global.relay.timer * 60 + this.global.relay.status.challenge_time - Date.now()/1000;
            timeLeft = Math.floor(timeLeft);
            let i0 = timeLeft & 0xFF;
            let i1 = (timeLeft >> 8) & 0xFF


            let isMyTurn = 0;
            if(!!this.global.relay.challenge_to_users && this.global.relay.challenge_to_users[challenge] === this.global.username) {
                isMyTurn = 1;
            }

            this.char.writeValue((new Uint8Array([stage, challenge, challenge_stage, i0, i1, isMyTurn])).buffer);
        }
    }
}


let global = {
    username: null,
    relay: null,
    challenges: {
        "physical": ['Do 10 Jumping Jacks while holding the baton', 'Plank for 20 seconds', 'Do 3 push-ups', 
            'Run in place for 30 seconds', 'See how long you can stand on one foot', 
            'Jump rope for 30 seconds (invisible jump ropes are fine)', 'Do 5 squats', 'Stretch your arms as high up as you can'],
        "mental": ['Figure out how tall you are in centimeters', 'Learn how to say \'Hello, how are you?\' in Korean', 
            'Write down your age in binary', 'Tap your name in morse code with the baton', 'Calculate how many pieces of paper you would need to stack on top of each other to reach the moon', 
            'Find out what your state snack is', 'Identify 3 muscles in your face', 'Count to 5 in Swahili'],
        "creative": ['Write your name in the air with the baton', 'Use the baton as a fishing pole and cast a line out! (Then hold still and see what bites...)', 
            'Drum the rhythm of a favorite song with the baton', 'Draw a picture of your family with the baton held between your feet', 
            'Sing the chorus of your favorite song into the baton', 'Take a super close up picture of something in the room and see if anyone can tell what it is', 
            'Tap into your inner fashion designer and pick out a unique outfit for tomorrow', 'Use the baton to conduct an orchestra through a grand finale'],
        "service": ['Text a compliment to someone you haven\'t seen in over a month', 'Call a grandparent', 'Write a nice note for someone who lives on your block', 
            'Hold the baton as still as possible while you take 5 deep breaths', 'Point out a family member or roommate\'s best features to them (bonus points if you point with the baton)', 
            'List 10 things you\'re grateful for', 'Take a picture of something that makes you happy and share it with someone else', 
            'Look in a mirror (or camera) and list 5 reasons why you are super cool'],
        "random": ['Do 10 Jumping Jacks while holding the baton', 'Learn how to say \'Hello, how are you?\' in Korean', 
            'Sing the chorus of your favorite song into the baton', 'Hold the baton as still as possible while you take 5 deep breaths']
    },
    timers: {
        "-1": "Zen",
        "2": "Screaming",
        "5": "Blazing",
        "15": "Cruising",
        "30": "Chillin\'"
    },
    api_url: "https://baton.autumnpajant.com"
    // api_url: "http://localhost:3000"
}

let bleManager = new BluetoothManager(global);
global.bleManager = bleManager

export default global;