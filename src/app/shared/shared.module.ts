import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';



@NgModule({
  declarations: [
    NavbarComponentComponent,
    LoadingComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    NavbarComponentComponent,
    FormsModule,
    LoadingComponentComponent
  ]
})
export class SharedModule { }
