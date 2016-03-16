import { EventEmitter } from 'events';
import carParcsDispatcher from '../dispatchers/CarParcsDispatcher';

class CarParcsStore extends  EventEmitter {
    constructor() {
        super();
        this.parcs = [];
    }

    getAll() {
        return this.parcs;
    }

    handleAction(action) {
        switch (action.type) {
            case 'GOT_CAR_PARCS': {
                this.parcs = action.parcs;
                this.emit('change');
                break;
            }
        }
    }
}

var carParcsStore = new CarParcsStore();
carParcsDispatcher.register(carParcsStore.handleAction.bind(carParcsStore));

export default carParcsStore;