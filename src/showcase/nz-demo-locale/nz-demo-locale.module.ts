import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzMarkdownModule } from '../share/nz-markdown/nz-markdown.module';
import { EsenNgZorroAntdModule } from '../../../index.showcase';
import { NzCodeBoxModule } from '../share/nz-codebox/nz-codebox.module';

import { NzDemoLocaleComponent } from './nz-demo-locale.component';
import { NzDemoLocaleAllComponent, NzDemoLocaleAllPageComponent } from './nz-demo-locale-all.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: NzDemoLocaleComponent },
    ]),
    NzMarkdownModule,
    EsenNgZorroAntdModule,
    NzCodeBoxModule,
  ],
  declarations: [
    NzDemoLocaleComponent,
    NzDemoLocaleAllComponent,
    NzDemoLocaleAllPageComponent,
  ],
})
export class NzDemoLocaleModule { }
