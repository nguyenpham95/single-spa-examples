import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExampleNg2App} from './example-ng2-app.component.ts';

@NgModule({
  imports: [BrowserModule],
  declarations: [ExampleNg2App],
  bootstrap: [ExampleNg2App]
})
export default class MainModule {
}