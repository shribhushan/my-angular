import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <div><h2>First Component</h2></div>
  </div>`
})

export class AppComponent{
  pageTitle: string = 'SP Product Management'
}