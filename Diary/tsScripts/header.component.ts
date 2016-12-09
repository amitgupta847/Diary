import { Component, OnInit } from '@angular/core';
//import { DropdownDirective } from './dropdown.directive';
//import { RecipeService } from './recipes/recipe.service';

//import { AuthService } from './shared/auth.service';

@Component({
    moduleId: module.id,
    selector: 'dr-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    constructor() { }


    //onStore() {
    //    this.recipeSrv.storeData().subscribe(
    //        data => console.log(data),
    //        error => console.log(error)
    //    );
    //}

    //onFetch() {
    //    this.recipeSrv.fetchData();
    //}

    logout() {
        
    }
    isAuth() {
        return false;

    }
}
