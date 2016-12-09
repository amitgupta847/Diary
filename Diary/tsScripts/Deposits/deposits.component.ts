import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { RangesFormatsComponent } from './rangesFormats.component';
import { Router, ActivatedRoute } from '@angular/router';
//import { RangeType } from '../shared/enums';
//import { RangeLine, RangeFormat } from '../shared/ranges';
//import { RangesService } from '../ranges.service';

@Component({
    moduleId: module.id,
    selector: 'dr-deposits',
    template: `
    
     <div class="row">
         <div class="col-xs-9">
            <ul class="nav nav-pills">
             
            </ul>
        </div>
    </div>
   
    <hr />
    <div class="row">
        <div class="col-xs-12">
            <router-outlet>  </router-outlet>
        </div>
    </div>
  `,
    styles: []
})
export class DepositsComponent implements OnInit {
   // @Output()
    //RangeTypeSelectionChanged = new EventEmitter<RangeFormat[]>();
    //private rangeTypes: any[] = RangeType;

    private selectedRangeTypeKey: number = 0; //defaultvalue for divisions.
    constructor(private router: Router) { }

    ngOnInit() {
        //to have default selection of first range type , i.e for division
        //this.router.navigate(['/ranges', this.selectedRangeTypeKey]);
    }

    OnRangeTypeSelectionChanged(rangeType: any) {
       // console.log("Selected range type is" + rangeType.key);
       // this.selectedRangeTypeKey = rangeType.key;
       // this.router.navigate(['/ranges', rangeType.key]);
    }
}
