import {Injectable} from '@angular/core';
@Injectable()
    
    export class ImageService{
        visibleImage = [];
        getImages(){
            return this.visibleImage = IMAGES.slice(0);
        }

        getImage(id:number){
            return IMAGES.slice(0).find(image =>image.id == id);
        }
        
    }

    const IMAGES = [
        {"id":1,"category":"boats","caption":"view from a boat","url":"assets/img/ap.jpg"},
        {"id":2,"category":"cat","caption":"view from a cat","url":"assets/img/ap2.jpg"},
        {"id":3 , "category":"bat", "caption":"view", "url":"assets/img/app5.jpg"},
        {"id":4 , "category":"bat", "caption":"view", "url":"assets/img/app6.jpg"},
        {"id":5 , "category":"bat", "caption":"view", "url":"assets/img/app7.jpg"},
        {"id":6 , "category":"dog", "caption":"view", "url":"assets/img/app8.jpg"},
        {"id":7 , "category":"dog", "caption":"view", "url":"assets/img/app9.jpg"},
        {"id":8 , "category":"dog", "caption":"view", "url":"assets/img/app10.jpg"},
        {"id":9 , "category":"dog", "caption":"view", "url":"assets/img/app11.jpg"},
        {"id":10 , "category":"dog", "caption":"view", "url":"assets/img/app12.jpg"},
        {"id":11 , "category":"dog", "caption":"view", "url":"assets/img/app13.jpg"},

   
    ]

   
   
   
   
   
   
   
   
   
   
   
   
   
