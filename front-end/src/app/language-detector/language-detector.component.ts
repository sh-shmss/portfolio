import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-language-detector',
  templateUrl: './language-detector.component.html',
  styleUrls: ['./language-detector.component.css']
})
export class LanguageDetectorComponent implements OnInit {
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
    this.myFunction();
  }

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getInfo()
  }

  showResult(result) {
    this.result = result.text;
  }


  //
  myFunction() {
    this.httpClient.post('http://localhost:5000/predict', { 'text': this.sentence }).subscribe((responseData) => {
      this.showResult(responseData);
    });
    // this.myFunction2()
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

  resultReset() {
    this.result = ""
  }

}
