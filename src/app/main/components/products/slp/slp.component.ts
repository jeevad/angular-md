import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Slp } from './slp.model';
import { EcommerceSlpService } from './slp.service';
import { Location } from '@angular/common';

@Component({
    selector     : 'fuse-e-commerce-slp',
    templateUrl  : './slp.component.html',
    styleUrls    : ['./slp.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseEcommerceSlpComponent implements OnInit, OnDestroy
{
    slp = new Slp();
    onSlpChanged: Subscription;
    pageType: string;
    slpForm: FormGroup;

    constructor(
       private formBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        private location: Location
    )
    {
    }

    ngOnInit()
    {
      this.pageType = 'new';
          this.slp = new Slp();

      this.slpForm = this.createSlpForm();
    }

    createSlpForm()
    {
        return this.formBuilder.group({
            id              : [this.slp.id],
            name            : [this.slp.name],
            handle          : [this.slp.handle],
            description     : [this.slp.description],
            categories      : [this.slp.categories],
            tags            : [this.slp.tags],
            images          : [this.slp.images],
            priceTaxExcl    : [this.slp.priceTaxExcl],
            priceTaxIncl    : [this.slp.priceTaxIncl],
            taxRate         : [this.slp.taxRate],
            comparedPrice   : [this.slp.comparedPrice],
            quantity        : [this.slp.quantity],
            sku             : [this.slp.sku],
            width           : [this.slp.width],
            height          : [this.slp.height],
            depth           : [this.slp.depth],
            weight          : [this.slp.weight],
            extraShippingFee: [this.slp.extraShippingFee],
            active          : [this.slp.active]
        });
    }

    saveSlp()
    {
        const data = this.slpForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);
        this.slpService.saveSlp(data)
            .then(() => {

                // Trigger the subscription with new data
                this.slpService.onSlpChanged.next(data);

                // Show the success message
                this.snackBar.open('Slp saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    addSlp()
    {
        const data = this.slpForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);
        this.slpService.addSlp(data)
            .then(() => {

                // Trigger the subscription with new data
                this.slpService.onSlpChanged.next(data);

                // Show the success message
                this.snackBar.open('Slp added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this.location.go('apps/e-commerce/slps/' + this.slp.id + '/' + this.slp.handle);
            });
    }
}
