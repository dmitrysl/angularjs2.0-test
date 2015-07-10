/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
import {FriendsService} from 'services/friends_service';
import {TodoComponent} from 'components/todos/todo'


@Component({
    selector: 'my-app',
    appInjector: [FriendsService]
})
@View({
    templateUrl: '/view/main.html',
    directives: [NgFor, NgIf, TodoComponent]
})
class AppComponent {
    myName: string;
    names: Array<string>;

    constructor(friendsService: FriendsService) {
        this.myName = 'Alice';
        this.names = friendsService.names;
    }
}

bootstrap(AppComponent);