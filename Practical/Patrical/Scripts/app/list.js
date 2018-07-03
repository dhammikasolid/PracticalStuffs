
import { Service } from './service.js';

class ListVM {

    constructor(str, num, bool) {
        this.str = ko.observable(str);
        this.num = ko.observable(num);
        this.bool = ko.observable(bool);
    }

    eventHandler() {
        this.str(this.str() + ' *');
        this.num(this.num() + 1);
        this.bool(!this.bool());
    }
};

export class List extends ListVM {

    constructor() {
        super('default', 1, false);
    }
}

ko.applyBindings(new List())