import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private storage: Storage,
                private toastController: ToastController) {
    }

    ngOnInit() {
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Clear Favorites.',
            duration: 2000
        });
        toast.present();
    }

    onClearFavorites() {
        this.storage.remove('favorite');
        this.storage.get('favorite').then(
            value => {
                let items = [];
                if (value != null) {
                    items = JSON.parse(value);
                }
                console.log(items);
            }
        );
        this.presentToast();
    }
}
