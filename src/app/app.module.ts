import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { Child11Component } from './dynamic-comp/child11/child11.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    Child11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    Child11Component
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
