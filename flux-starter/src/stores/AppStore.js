import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/Constants';
import Events from 'events';

var CHANGE_EVENT = 'change';

class AppStore extends Events.EventEmitter {
    constructor(props) {
        super(props);
        // register to receive event from dispatcher
        this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));
    }

    handleAction(payload) {
        console.log('***AppStore.js - Received Action');
        console.log(payload);
        return true;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
}

export default new AppStore();