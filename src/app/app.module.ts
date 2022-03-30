import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from './components/label/label.component';
import { BoxComponent } from './components/box/box.component';
import { NaviComponent } from './components/navi/navi.component';
import { ImageComponent } from './components/image/image.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    BoxComponent,
    NaviComponent,
    ImageComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
