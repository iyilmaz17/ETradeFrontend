import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: TestComponent }
    ])
  ]
})
export class TestModule { }
