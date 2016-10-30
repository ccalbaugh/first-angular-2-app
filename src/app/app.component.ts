import { Component } from '@angular/core';

@Component({ // This is a component decorator
  // metadata is addtnl info you attach to a class which
  // you can't or don't want to include in the body which
  // tells js(angular) what the class should be transformed to
  // moduleId: module.id, // This is needed to find the appropriate external files
  selector: 'app-root', // the instruction angular searches for in the html
  // to know where to render the component
  templateUrl: './app.component.html', //refers to the file that holds the Component HTML
  // It is good style to use an external template when you have more than
  // 3 lines in your template. (Template uses `HTML CODE`)
  styleUrls: ['./app.component.css'], // refers to the css file for the Component
  // Can take multiple strings in the array
  // The styles in this template will ONLY affect THIS component
})
export class AppComponent {
  title = 'Root Component';
} //exporting turns this code into a module
// making it available outside of this file
// This is being exported to app.module and then
// bootstrapped in main.ts
