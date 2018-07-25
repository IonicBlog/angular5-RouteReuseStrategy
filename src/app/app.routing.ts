import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsNavComponent } from './news-nav/news-nav.component';
import { SimpleReuseStrategy } from './provider/SimpleReuseStrategy';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent, data: { title: '首页', module: 'home', power: "SHOW" } },
    {
        path: 'nav',
        component: NewsNavComponent,
        data: { title: '新闻管理nav', module: 'news', power: "SHOW" },
        children: [
            {
                path: 'news',
                component: NewsComponent
            }
        ]
    },
    { path: 'contact', component: ContactComponent, data: { title: '联系我们', module: 'contact', power: "SHOW" } },
    { path: 'about', component: AboutComponent, data: { title: '关于我们', module: 'about', power: "SHOW" } },
]
@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
    providers: [
        // { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
