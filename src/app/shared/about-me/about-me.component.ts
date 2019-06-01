import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resume() {
    let link = document.createElement("a");
    link.download = "Resume";
    link.href = "assets/files/Resume.pdf";
    link.click();
  }

}
