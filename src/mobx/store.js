import { observable } from 'mobx'

class Store {
    @observable menuItems = [];
    @observable notifications = [];
    @observable colorTheme = 'red';

    setMenuItems(items) {
        this.menuItems = items;
    }

    setNotifications(items) {
        this.notifications = items.length > 0 ?
            items :
            [{
                message: 'No new messages'
            }];
    }

    setColorTheme(color) {
        this.colorTheme = color;
    }
}

export default new Store();