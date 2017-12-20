import { NgModule } from '@angular/core';
import { NzCodeBoxComponent } from './nz-codebox.component';
import { CommonModule } from '@angular/common';
import { NzHighlightModule } from '../nz-highlight/nz-highlight.module';
import { EsenNgZorroAntdModule } from '../../../../index.showcase';

@NgModule({
  imports     : [ CommonModule, NzHighlightModule, EsenNgZorroAntdModule ],
  declarations: [ NzCodeBoxComponent ],
  exports     : [ NzCodeBoxComponent ]
})

export class NzCodeBoxModule {
}
