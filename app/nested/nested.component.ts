import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import "rxjs/add/operator/pluck";

@Component({
    selector: "Nested",
    moduleId: module.id,
    templateUrl: "./nested.component.html"
})
export class NestedComponent implements OnInit {

    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    nesting: number;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(activatedRoute: ActivatedRoute, routerExtensions: RouterExtensions) {
        activatedRoute.params.pluck("nesting").subscribe((nesting: number) => {
            this.nesting = nesting || 0;
        });
    }

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

}
