"use strict";
var router_1 = require('@angular/router');
//import { RecipesComponent } from './recipes/recipes.component';
//import { ShopingListComponent } from './shoping-list/shoping-list.component';
//import { PracticeComponent } from './practice.component';
//import { recipeRoutes } from './recipes/recipes.routes';
//import { TemplateDrivenComponent } from './template-driven/template-driven.component';
//import { DataDrivenComponent } from './data-driven/data-driven.component';
//import { SignupComponent } from './unprotected/signup.component';
//import { SigninComponent } from './unprotected/signin.component';
//import { ProtectedComponent } from './protected/protected.component';
//import { AuthGuard } from './shared/auth.guard';
var deposits_component_1 = require('./deposits/deposits.component');
//import { rangesRoutes } from './ranges/ranges.routes';
var appRoutes = [
    { path: '', redirectTo: '/deposit', pathMatch: 'full' },
    //{ path: '', redirectTo: '/practice', pathMatch: 'full' },
    //{ path: '', redirectTo: '/ranges', pathMatch: 'full' },
    //{ path: 'signup', component: SignupComponent },
    //{ path: 'signin', component: SigninComponent },
    //{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    //{ path: 'deposit', component: DepositComponent, children: rangesRoutes },
    //{ path: 'recipes', component: RecipesComponent, children: recipeRoutes },
    { path: 'deposit', component: deposits_component_1.DepositsComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
