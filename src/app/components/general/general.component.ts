import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  public apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = '';
  }

  Callapi(): void {
    this.httpClient.get(this.apiUrl).subscribe({
      next: r => console.log(r),
      error: e => {
        alert('error occured, check console for more');
        console.error(e);
      }
    });
  }

  Refresh(): void {
    window.location.reload();
  }
}
