import { Component,OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ML Deployment using Flask and Angular';
  @Input() sentence: string;

  serverData: JSON;
  public result;
  public prediction

  onSubmit(){
  // this._myService.addUsers (this.firstName , this.lastName, this.nickName, this.email, this.bookClub);
  // this.router.navigate(['/listUsers']);
  // window.location.replace('/listUsers'); //I referred to https://developer.mozilla.org/en-US/docs/Web/API/Location/reload to find this method.
  }

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    // this.getResults();
    // this.postInput();
  }

  publishResult(obj){
    this.result=obj.text;
    console.log(obj);
  }

  // getResults(){
  //   this.httpClient.get('http://127.0.0.1:5002/prediction').subscribe(data=>{
  //     this.serverData = data as JSON},
  //     err => console.error(err),
  //     () => (this.publishResult(this.serverData)),
  //
  //   )
  // }


  postInput(){
    console.log('You submitted: ' + this.sentence);
    this.httpClient.post('http://127.0.0.1:5002/prediction', {
        text: this.sentence
      }).subscribe(res=>{console.log()},
      err => console.error(err),
      // () => (console.log('Data sent to backend successfully!')),

    )
  }

  getPrediction() {
    this.httpClient.get('http://127.0.0.1:5002/result').subscribe(data=>{
      this.prediction = data as JSON},
      err => console.error(err),
      () => (console.log(this.prediction.text)),

    )
  }

}
