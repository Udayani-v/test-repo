import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  constructor() { }

  arrow:string='arrow_forward_ios';
  isExpanded:boolean=true;
  ngOnInit() {
  }

  changeIcon(){
    this.isExpanded = !this.isExpanded;
 
    document.getElementById('side-content').style.marginLeft = '80px';
    console.log(document.getElementById('side-content').style.width);
    if(this.arrow == 'arrow_forward_ios')
    {
      this.arrow = 'arrow_back_ios';  
    }
    else
    {
      this.arrow = 'arrow_forward_ios';
    }

  }

}
