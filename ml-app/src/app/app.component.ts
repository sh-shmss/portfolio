import { Component, OnInit, Input } from '@angular/core';

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
  languages = ['Arabic', 'German', 'English', 'Spanish', 'French', 'Italian',
                  'Japanese', 'Dutch', 'Polish', 'Portugese', 'Russian']

  onSubmit() {
    this.createEmployee();
    // this.getAsyncData()
  }

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
  }

  showResult(result) {
    this.result = result;
  }

  // getResults(){
  //   this.httpClient.get('http://127.0.0.1:5002/prediction').subscribe(data=>{
  //     this.serverData = data as JSON},
  //     err => console.error(err),
  //     () => (this.publishResult(this.serverData)),
  //
  //   )
  // }


  postInput() {
    console.log('You submitted: ' + this.sentence);
    this.httpClient.post('http://0.0.0.0:5000/prediction', {
      text: this.sentence
    }).subscribe(res => { console.log() },
      err => console.error(err),
      // () => (console.log('Data sent to backend successfully!')),

    )
  }

  getPrediction() {
    this.httpClient.get('http://0.0.0.0:5000/result').subscribe(data => {
      this.prediction = data as JSON
    },
      err => console.error(err),
      () => (this.showResult(this.prediction.text)),

    )
  }

  //
  async createEmployee() {
    this.sent = await this.httpClient.post('http://0.0.0.0:5000/prediction', {
      text: this.sentence
    }).toPromise();
    await this.getPrediction();
  }

  //

}
