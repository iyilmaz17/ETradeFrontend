import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TestModule } from './test/test.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerModule,
    DashboardModule,
    TestModule
  ]
})
export class ComponentsModule { }
