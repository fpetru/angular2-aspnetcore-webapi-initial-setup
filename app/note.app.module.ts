import {Component, NgModule} from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule, JsonpModule } from "@angular/http";

@Component({
    selector: 'notes-app',
    template: `<div>
              <h2>NotebookApp with {{name}}</h2>
              <h4>This application is based on Angular2 
              and it is just a starter setup.
              <br /><br />
              Full tutorial on QAppDesign: 
              <br/><br/>
                <a href="{{link}}" target="_blank">
                  {{article}}
                </a>
              </h4>
            </div>`
})

export class App {
    name: string;
    link: string;
    article: string;

    constructor() {
        this.name = 'Angular 2';
        this.link = 'http://qappdesign.com/getting-started-with-angular2-with-aspnet-core-webapi-build-notebook-app';
        this.article = 'Getting started with Angular 2 with ASP.NET Core Web API - Build a simple Notebook app - Part 1';
    }
}

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, ReactiveFormsModule],
    declarations: [App],
    bootstrap: [App]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
