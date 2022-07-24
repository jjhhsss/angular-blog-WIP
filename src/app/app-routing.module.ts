import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { articleComponent } from './article/article.component';
// import {AboutComponent} from './about/about.component';
// import {CourseComponent} from './course/course.component';
// import {LoginComponent} from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AngularFireAuthGuard, customClaims, hasCustomClaim, redirectUnauthorizedTo }
    from '@angular/fire/auth-guard';
import { AllarticlesComponent } from './allarticles/allarticles.component';
// import {CourseResolver} from "./services/course.resolver";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component'

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'article/:id',
        component: articleComponent,
    },
    {
        path: 'timeline',
        component: AllarticlesComponent,
    },
    {
        path: 'lost',
        component: LostComponent,
    },

    {
        path: '**',
        component: LostComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
