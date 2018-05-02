import {Routes} from '@angular/router';
import { gallery1Component} from './gallery1/gallery1.comoponent'; 
import {imagecomponent} from '../app/image/image.comoponent';
import { Component } from '@angular/core';

export const appRoutes:Routes = [
    {path: "gallery1" , component: gallery1Component},
    {path: "image/:id", component:imagecomponent },
    {path: "", redirectTo:"/gallery1", pathMatch:'full'}



]


