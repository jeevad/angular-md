import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

// import { FuseSharedModule } from '@fuse/shared.module';

import { MyformsComponent } from './myforms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: MyformsComponent
    }
];

@NgModule({
    declarations: [
      MyformsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        // FuseSharedModule,
    ]
})
export class UIFormsModule
{
}
