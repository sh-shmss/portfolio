import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ML Deployment using Flask and Angular';

  serverData: JSON;
  public result;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    this.getResults();
  }

  publishResult(obj){
    console.log(obj);
    this.result=obj.text;
  }

  getResults(){
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data=>{
      this.serverData = data as JSON},
      err => console.error(err),
      () => (this.publishResult(this.serverData)),

    )
  }

}
