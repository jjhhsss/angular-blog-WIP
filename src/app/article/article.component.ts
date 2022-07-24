import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrys } from '../model/entrys';
import { appservice } from '../services/services';



@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class articleComponent implements OnInit {

    articles$: Observable<Entrys[]>

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private appService: appservice,
    ) {

    }
    public dataIndex: Entrys;

    public id: number

    ngOnInit() {
        this.getroute()
        this.reloadArticles();
        this.sub()
    }


    sub() {
        this.articles$.subscribe(
            data => {
                this.consolei(data)
            }
        )
    }

    getroute() {
        const id = Number(this.route.snapshot.paramMap.get('id'))
        this.id = id
    }

    consolei(data) {
        this.dataIndex = data[this.id];
        console.log(this.dataIndex)
    }

    reloadArticles() {
        this.articles$ = this.appService.loadAllArticles()
    }
}