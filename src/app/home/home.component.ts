import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { appservice } from '../services/services';
import { Entrys } from '../model/entrys';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public p: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: appservice,
    private storage: AngularFireStorage,
  ) {
  }

  public id: number = null;

  ngOnInit() {
    this.reloadArticles();
  }

  articles$: Observable<Entrys[]>


  clicked(index) {
    let link: string = '/article/' + index
    this.router.navigate(['/article/' + index]);
  }

  reloadArticles() {
    this.articles$ = this.appService.loadAllArticles()
  }

}
