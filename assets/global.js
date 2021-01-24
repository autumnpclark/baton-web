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
            let timeLeft = 100;

            let isMyTurn = 0;
            if(!!this.global.relay.challenge_to_users && this.global.relay.challenge_to_users[challenge] === this.global.username) {
                isMyTurn = 1;
            }

            this.char.writeValue((new Uint8Array([stage, challenge, challenge_stage, 0, 0, isMyTurn])).buffer);
        }
    }
}


let global = {
    username: null,
    relay: null,
    challenges: {
        "random": ['Do 10 Jumping Jacks', 'Plank for 20 seconds', 'Do 3 push-ups', 'Run in place for 30 seconds', 'See how long you can stand on one foot', 'Jump rope for 30 seconds (invisible jump ropes are fine)', 'Do 5 squats', 'Stretch your arms as high up as you can']
    },
    api_url: "http://home.wigington.me"
}

let bleManager = new BluetoothManager(global);
global.bleManager = bleManager

export default global;