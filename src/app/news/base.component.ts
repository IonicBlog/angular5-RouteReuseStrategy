import { OnInit } from "@angular/core";

export class BaseComponent implements OnInit {


    public constructor() {
        console.log("BaseComponent constructor")
    }

    ngOnInit() {
        console.log('BaseComponent ngOnInit')
    }
}
