import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../servicelist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list;
  constructor(private servicel: ServicelistService) {
    this.servicel.getNews().subscribe((data)=>{
      this.list=data
      console.log(data)
    })
   }

  ngOnInit() {
  }

}
