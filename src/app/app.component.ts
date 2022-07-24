import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { appservice } from './services/services';
import { Entrys } from './model/entrys';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public p: string;

  constructor(
    private router: Router,
    private appService: appservice,
    private storage: AngularFireStorage
  ) {
  }



  ngOnInit() {

    this.reloadArticles();

  }

  articles$: Observable<Entrys[]>

  public show: boolean = true;
  public articles: boolean = false;
  public title: string = null;
  public date: string = null;
  public body: string = null;
  public imageurl: string;
  allArticles() {
    // this.articles = true;
  }

  toggle() {
    this.show = true;
  }

  // clicked(index) {
  //   this.articles$.subscribe(
  //     data => {
  //       this.title = data[index].title;
  //       this.date = data[index].date;
  //       this.body = data[index].fullarticle;
  //       this.imageurl = data[index].previewImage;
  //       this.router.navigate(['/article']);
  //     }
  //   )
  // }

  reloadArticles() {
    this.articles$ = this.appService.loadAllArticles()
  }

}



// [
//   {
//       "id": "",
//       "previewDescription": "eeeeeeeeee",
//       "date": "April 13",
//       "title": "asdeasef asdf",
//       "fullarticle": "jsadfj klsidjflah laksjgjkl a;lfdasdf",
//       "link": ""
//   },
//   {
//       "id": "",
//       "fullarticle": "eeeee",
//       "title": "eeeeeee",
//       "link": "",
//       "previewdescription": "asdfasdfdf",
//       "date": "arpasdf"
//   },
//   {
//       "id": "",
//       "previewdescription": "asdfasfd",
//       "fullarticle": "asdfsadfdf",
//       "title": "ooh lal haa",
//       "link": "",
//       "date": "asdfasdf"
//   }
// ]