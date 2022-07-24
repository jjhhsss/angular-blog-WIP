import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  imagepath:string;
  constructor(private afStorage: AngularFireStorage) { 
    this.imagepath = '../../assets/images/searching.gif'
  }

  ngOnInit(): void {
  }

}
