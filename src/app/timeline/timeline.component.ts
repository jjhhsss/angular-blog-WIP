import { Component, OnInit, Input } from '@angular/core';
import { Entrys } from '../model/entrys';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

    @Input()
    article!: Entrys;

    @Input()
    entryIndex: number;

    constructor() { }

    ngOnInit(): void {
    }

    readArticle(article) {

    }

}
