import {Component, OnInit, ViewChild} from "@angular/core";
import {DrawerTransitionBase, SlideInOnTopTransition} from "nativescript-pro-ui/sidedrawer";
import {RadSideDrawerComponent} from "nativescript-pro-ui/sidedrawer/angular";

class DataItem {
    constructor(public author: string, public text: string) {
    }
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`.split(/[ \n]/);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    myItems: Array<DataItem>;

    private _sideDrawerTransition: DrawerTransitionBase;
    private counter: number;

    constructor() {
        this.myItems = [];
        this.counter = 0;
        for (let i = 0; i < 14; i++) {
            const text = loremIpsum.slice(0, 3 * i + 3).join(" ");
            this.myItems.push(new DataItem("Jantina Loperina", text));
            console.log(text);
            this.counter = i;
        }
    }

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

}
