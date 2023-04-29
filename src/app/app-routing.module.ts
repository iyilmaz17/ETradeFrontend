import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './interfaceTemplates/user/components/product/product.component';
import { CategoryComponent } from './interfaceTemplates/user/components/category/category.component';
import { LoginGuard } from './guards/login.guard';
import { DashboardComponent } from './interfaceTemplates/admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './interfaceTemplates/admin/layout/layout.component';
import { DashboardModule } from './interfaceTemplates/admin/components/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      {path:'dashboard',loadChildren:()=>import("./interfaceTemplates/admin/components/dashboard/dashboard.module").then(module=>DashboardModule)},
      { path: "customers", loadChildren: () => import("./interfaceTemplates/admin/components/customer/customer.module").then(module => module.CustomerModule) },
      { path: "tests", loadChildren: () => import("./interfaceTemplates/admin/components/test/test.module").then(module => module.TestModule) }
    ]
  },
  { path: '', component: ProductComponent },
  {path:'category',loadChildren:()=>import('./interfaceTemplates/user/components/category/category.module').then(module=>module.CategoryModule)}
  //{ path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
