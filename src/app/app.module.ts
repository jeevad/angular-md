import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SampleComponent } from './main/components/sample/sample.component';
// import { ProductsModule } from './main/components/products/products.module';
// import { SlpComponent } from './main/components/products/slp/slp.component';
// import { FnfComponent } from './main/components/products/fnf/fnf.component';
// import { PortfolioComponent } from './main/components/products/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: SampleComponent},
  {path: '**', component: SampleComponent},
  {path: 'products', loadChildren: './main/components/products/products.module#ProductsModule'},
  // {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  // {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    // SlpComponent,
    // FnfComponent,
    // PortfolioComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
