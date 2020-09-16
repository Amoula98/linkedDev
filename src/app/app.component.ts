import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProj';

  // const getUser = cb => {
  //   setTimeout(() => {
  //     cb({ name: 'Max' })
  //   }, 2000)
  // }

  // getUser(user => {
  //   console.log(user.name) // Prints 'Max' after 2 seconds
  // });
}
