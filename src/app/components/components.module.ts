import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ShowPostComponent } from './show-post/show-post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShowPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ShowPostComponent
  ]
})
export class ComponentsModule { }
