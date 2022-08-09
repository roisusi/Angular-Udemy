import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Section2Ass2Component } from './section2-ass2/section2-ass2.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, Section2Ass2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
