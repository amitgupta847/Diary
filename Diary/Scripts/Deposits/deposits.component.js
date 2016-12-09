"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { RangesFormatsComponent } from './rangesFormats.component';
var router_1 = require('@angular/router');
//import { RangeType } from '../shared/enums';
//import { RangeLine, RangeFormat } from '../shared/ranges';
//import { RangesService } from '../ranges.service';
var DepositsComponent = (function () {
    function DepositsComponent(router) {
        this.router = router;
        // @Output()
        //RangeTypeSelectionChanged = new EventEmitter<RangeFormat[]>();
        //private rangeTypes: any[] = RangeType;
        this.selectedRangeTypeKey = 0; //defaultvalue for divisions.
    }
    DepositsComponent.prototype.ngOnInit = function () {
        //to have default selection of first range type , i.e for division
        //this.router.navigate(['/ranges', this.selectedRangeTypeKey]);
    };
    DepositsComponent.prototype.OnRangeTypeSelectionChanged = function (rangeType) {
        // console.log("Selected range type is" + rangeType.key);
        // this.selectedRangeTypeKey = rangeType.key;
        // this.router.navigate(['/ranges', rangeType.key]);
    };
    DepositsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dr-deposits',
            template: "\n    \n     <div class=\"row\">\n         <div class=\"col-xs-9\">\n            <ul class=\"nav nav-pills\">\n             \n            </ul>\n        </div>\n    </div>\n   \n    <hr />\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <router-outlet>  </router-outlet>\n        </div>\n    </div>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DepositsComponent);
    return DepositsComponent;
}());
exports.DepositsComponent = DepositsComponent;
