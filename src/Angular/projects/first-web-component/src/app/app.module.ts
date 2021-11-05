import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { UIButtonComponent } from './components/uibutton/uibutton.component';

@NgModule({
  declarations: [
    AppComponent,
    UIButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [UIButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UIButtonComponent, { injector });
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap() { }
}
