import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {

  projects = [
    { name: 'project1' },
    { name: 'project2' },
    { name: 'project3' },
    { name: 'project4' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
