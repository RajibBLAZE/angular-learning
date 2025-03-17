import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { CategoryComponent } from "./category/category.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/guards/auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],// applied only for the child root.
    children: [
      { path: ':id/:name', component: UserComponent },
      { path: ':id/:name/edit', component: EditUserComponent },
    ],
  },

  { path: 'category', component: CategoryComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found' }
      // path for unknown urls
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {

}