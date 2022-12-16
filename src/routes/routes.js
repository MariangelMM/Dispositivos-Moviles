import MainRoutes from "./mainRoutes";

import { ListProductPage, DetailProduct } from "../pages";


export const main = {
    path: '/', 
    component: MainRoutes,
    error404: { path:''}, 
    products: { path: '/products', component:  ListProductPage },
    detailProduct: { path: '/detailproduct', component: DetailProduct }
}