import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'projects', component: ProjectsComponent, children: [
      { path: 'web', component: WebComponent },
      { path: 'mobile', component: MobileComponent }
    ]
  },
  { path: '**', component: NotfoundComponent }
];
