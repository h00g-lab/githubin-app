import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'loading-component',
    templateUrl: './loading-component.component.html',
    styleUrls: ['./loading-component.component.scss']
})
export class LoadingComponentComponent implements OnInit {
    @Input() loading: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
