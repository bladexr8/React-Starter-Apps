import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/Constants';

class AppActions {
    addItem(item) {
        AppDispatcher.handleViewAction({
            actionType: Constants.ADD_ITEM,
            item: item
        });
    }
}

export default new AppActions();