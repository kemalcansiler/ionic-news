import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {NavController, ToastController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-sources',
    templateUrl: './sources.page.html',
    styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
    sources;
    term = '';

    constructor(private  newsService: NewsService,
                private navCtrl: NavController,
                private storage: Storage,
                private toastController: ToastController) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.newsService.getData('sources').subscribe(
            data => this.sources = data['sources']
        );
    }

    onSourcesRefresh(event) {
        this.getData();

        setTimeout(() => {
            event.target.complete();
        }, 100);
    }

    onClickSource(id) {
        this.navCtrl.navigateForward('/tabs/sources/' + id);
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Added To Favorite.',
            duration: 2000
        });
        toast.present();
    }

    favorite(source) {
        this.storage.get('favorite').then(
            value => {
                let items = [];
                if (value != null) {
                    items = JSON.parse(value);
                }
                items.push(source);
                this.storage.set('favorite', JSON.stringify(items));
                this.presentToast();
            }
        );
    }
}
