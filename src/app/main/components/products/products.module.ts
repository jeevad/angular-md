import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../../../app.material.module';

import { SlpComponent } from './slp/slp.component';
import { FnfComponent } from './fnf/fnf.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const heroesRoutes: Routes = [
  {
    path: '',
    component: SlpComponent
  },
  {
    path: 'slp',
    component: SlpComponent,
    // children: [
    //   {path: '', component: HeroListComponent},
    //   {path: ':id', component: HeroDetailComponent}
    // ]
  },
  {
    path: 'fnf',
    component: FnfComponent,
    // children: [
    //   {path: '', component: HeroListComponent},
    //   {path: ':id', component: HeroDetailComponent}
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(heroesRoutes)
  ], exports: [
    RouterModule
  ],
  declarations: [SlpComponent,
    FnfComponent,
    PortfolioComponent]
})
export class ProductsModule { }
