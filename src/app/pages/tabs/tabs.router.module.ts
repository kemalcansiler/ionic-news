import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {TopNewsPage} from '../top-news/top-news.page';
import {HeadlinesPage} from '../headlines/headlines.page';
import {SourcesPage} from '../sources/sources.page';
import {FavoritesPage} from '../favorites/favorites.page';
import {SettingsPage} from '../settings/settings.page';
import {SourcePage} from '../source/source.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'top-news',
                component: TopNewsPage
            },
            {
                path: 'headlines',
                component: HeadlinesPage
            },
            {
                path: 'sources',
                component: SourcesPage
            },
            {
                path: 'sources/:id',
                component: SourcePage
            },
            {
                path: 'favorites',
                component: FavoritesPage
            },
            {
                path: 'settings',
                component: SettingsPage
            },
            {
                path: '',
                redirectTo: '/tabs/top-news',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/top-news',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
