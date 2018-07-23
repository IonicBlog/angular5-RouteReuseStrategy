import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent, data: { title: '首页', module: 'home', power: "SHOW" } },
    { path: 'news', component: NewsComponent, data: { title: '新闻管理', module: 'news', power: "SHOW" } },
    { path: 'contact', component: ContactComponent, data: { title: '联系我们', module: 'contact', power: "SHOW" } },
    { path: 'about', component: AboutComponent, data: { title: '关于我们', module: 'about', power: "SHOW" } },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
