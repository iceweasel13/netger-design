import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footers/footer/footer.component';
import { LinkComponent } from './link/link.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { BannerComponent } from './banner/banner.component';
import { WidgetComponent } from './widget/widget.component';
import { CardComponent } from './card/card.component';
import { NavbarTopComponent } from './header/navbar-top/navbar-top.component';
import { FooterTopComponent } from './footers/footer-top/footer-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LinkComponent,
    ButtonComponent,
    LogoComponent,
    BannerComponent,
    WidgetComponent,
    CardComponent,
    NavbarTopComponent,
    FooterTopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}