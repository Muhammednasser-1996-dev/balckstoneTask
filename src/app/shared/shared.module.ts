import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModuleModule } from './ui-module/ui-module.module';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [CardComponent, LoaderComponent],
  imports: [CommonModule, UiModuleModule],
  exports: [UiModuleModule, CardComponent,LoaderComponent],
})
export class SharedModule {}
