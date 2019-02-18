import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-source',
    templateUrl: './source.page.html',
    styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
    news;
    id;

    constructor(private newsService: NewsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getData();
    }

    getData() {
        this.news = this.newsService.getData('everything?sources=' + this.id);
    }

    onSourceRefresh(event) {
        this.getData();

        setTimeout(() => {
            event.target.complete();
        }, 100);
    }
}
