import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { DataDisplayComponent } from './components/data-display/data-display.component';

@NgModule({
  declarations: [
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [DataDisplayComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector){
    const webComponent = createCustomElement(DataDisplayComponent, { injector });
    customElements.define('data-display', webComponent);
  }
  
  ngDoBootstrap() { }
}
