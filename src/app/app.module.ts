import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { ResizableDirective } from './resizable.directive';
@NgModule({
  declarations: [AppComponent, ResizableDirective],
  imports: [BrowserModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
