import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DataDisplayComponent } from './components/data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [DataDisplayComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector){
    const webComponent = createCustomElement(DataDisplayComponent, { injector });
    customElements.define('data-display', webComponent);
  }
  
  ngDoBootstrap() { }
}
