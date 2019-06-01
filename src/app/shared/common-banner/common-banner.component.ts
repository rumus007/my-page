import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.css']
})
export class CommonBannerComponent implements OnInit {
  @Input() title:any; 
  bannerHeading: string;
  constructor() { }

  ngOnInit() {
    this.bannerHeading = this.title || 'test';
  }

}
