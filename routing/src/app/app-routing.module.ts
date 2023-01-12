import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.services';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { CanDeactivateGuard } from './servers/edit-server/canDeactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!!!' }, //static router message
  },
  { path: '**', redirectTo: '/not-found' }, //Wildcard must be last else it will override good paths
];

@NgModule({
  //Add the router we configured above        // add # for old browser routing that dont know to return the index.html it ignore roisusi(have index.html)/#/ignore all
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
