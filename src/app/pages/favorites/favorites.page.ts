import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
    sources = [];

    constructor(private storage: Storage,
                private navCtrl: NavController,
                private toastController: ToastController) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.storage.get('favorite').then(
            value => {
                let items = [];
                if (value != null) {
                    items = JSON.parse(value);
                }
                this.sources = items;
            }
        );
    }

    onFavoritesRefresh(event) {
        this.getData();

        setTimeout(() => {
            event.target.complete();
        }, 100);
    }

    onClickSourceF(id) {
        this.navCtrl.navigateForward('/tabs/sources/' + id);
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Removed To Favorite.',
            duration: 2000
        });
        toast.present();
    }

    unFavorite(source) {
        const index = this.sources.indexOf(source);
        this.sources.splice(index, 1);
        this.storage.set('favorite', JSON.stringify(this.sources));
        this.presentToast();
    }
}
