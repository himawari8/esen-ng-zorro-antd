import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsenNgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EsenNgZorroAntdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
