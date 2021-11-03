import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { UIButtonComponent } from './uibutton/uibutton.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UIButtonComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [UIButtonComponent, DataDisplayComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UIButtonComponent, { injector });
    customElements.define('ui-button', webComponent);

    const webComponent2 = createCustomElement(DataDisplayComponent, { injector });
    customElements.define('data-display', webComponent2);
  }

  ngDoBootstrap() { }
}
