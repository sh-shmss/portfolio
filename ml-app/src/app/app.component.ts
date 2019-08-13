import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';


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
  public result = "";
  public prediction;
  public sent;
  public test;
  languages = ['Arabic', 'German', 'English', 'Spanish', 'French', 'Italian',
    'Japanese', 'Dutch', 'Polish', 'Portugese', 'Russian']

  onSubmit() {
    this.MyFunction();
  }

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getInfo()
  }

  showResult(result) {
    this.result = result;
  }


  getPrediction() {
    this.httpClient.get('http://localhost:5000/result').subscribe(data => {
      this.prediction = data as JSON
    },
      err => console.error(err),
      () => (this.showResult(this.prediction.text)),

    )
  }

  //
  async MyFunction() {
    this.sent = await this.httpClient.post('http://localhost:5000/prediction', {
      'text': this.sentence
    }).toPromise();
    await this.getPrediction();
  }

  //
  getInfo() {
    this.httpClient.get('http://localhost:5000/').subscribe(data => {
      this.test = data as JSON
    },
      err => console.error(err),
      () => (console.log(this.test.text)),

    )
  }

  resultReset(){
    this.result = ""
  }

}
