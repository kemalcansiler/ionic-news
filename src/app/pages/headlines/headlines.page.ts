import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-headlines',
    templateUrl: './headlines.page.html',
    styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
    @ViewChild('mySlider') slider: IonSlides;
    news;
    categories = [
        'India',
        'World',
        'Business',
        'Technology',
        'Entertainment',
        'Sports',
        'Science'
    ];

    constructor(private newsService: NewsService) {
    }

    ngOnInit() {
        this.getCategoryData(this.categories[0]);
    }

    onGetCategoryData(category: string) {
        this.getCategoryData(category);
    }

    getCategoryData(category: string) {
        this.news = this.newsService.getData('everything?q=' + category.toLowerCase());
    }

    onHeadlinesRefresh(event) {
        this.slider.getActiveIndex().then(
            (number) => this.getCategoryData(this.categories[number])
        );

        setTimeout(() => {
            event.target.complete();
        }, 100);
    }
}
