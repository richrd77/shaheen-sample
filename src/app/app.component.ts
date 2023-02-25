import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shaheen-sample';

  constructor(public httpClient: HttpClient) {
    this.message = 'this is the default message and response string will be populated';
  }

  public get url(): string {
    const sessionValue = sessionStorage.getItem('url');
    return sessionValue ? sessionValue : '';
  }

  public message: string;

  public Callapi(): void {
    alert(`apiurl='${this.url}'`);
    this.httpClient.get(this.url, { responseType: 'text' }).subscribe(
      {
        next: r => this.message = r,
        error: r => {
          alert('error occured check console for more details');
          console.error(r);
        },
      }
    )
  }
}
