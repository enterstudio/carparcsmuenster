import { EventEmitter } from 'events';
import CarParcsDispatcher from './../dispatchers/CarParcsDispatcher';

class LocationStore extends EventEmitter {
    constructor() {
        super();
        this.location = null;
    }

    getCoords() {
        return this.location.coords;
    }

    handleAction(action) {
        switch (action.type) {
            case 'GOT_LOCATION': {
                this.location = action.position;
                this.emit('change');
                break;
            }
        }
    }
}

var locationStore = new LocationStore();
CarParcsDispatcher.register(locationStore.handleAction.bind(locationStore));

export default locationStore;

