import {Component,OnChanges, Input} from '@angular/core';
import {ImageService} from '../image/shared/image.service'; 


@Component({
    selector:'app-gallery1',
    templateUrl: './gallery1.component.html',
    styleUrls : ['./gallery1.component.css']
})

export class gallery1Component implements OnChanges{
    title='Recent Photos';
    @Input() filterby? : string = 'all'
    visibleImage: any[] =[];
    constructor(private imageService : ImageService){
        this.visibleImage = this.imageService.getImages();
    }

    ngOnChanges(){
        this.visibleImage = this.imageService.getImages();
    }
} 