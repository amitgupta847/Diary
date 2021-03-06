
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

//import { RangesComponent } from './ranges/ranges.component';
//import { rangesRoutes } from './ranges/ranges.routes';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', redirectTo: '/practice', pathMatch: 'full' },
    { path: '', redirectTo: '/ranges', pathMatch: 'full' },
    //{ path: 'signup', component: SignupComponent },
    //{ path: 'signin', component: SigninComponent },
    //{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },


    //{ path: 'ranges', component: RangesComponent, children: rangesRoutes },

    //{ path: 'recipes', component: RecipesComponent, children: recipeRoutes },

    //{ path: 'shoping-list', component: ShopingListComponent },
    //{ path: 'practice', component: PracticeComponent },
    //{ path: 'template', component: TemplateDrivenComponent },
    //{ path: 'datadriven', component: DataDrivenComponent },


];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
