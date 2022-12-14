import MainRoutes from "./mainRoutes";

import { ListProductPage, DetailProduct, PageNotFound } from "../pages";


export const main = {
    path: '/', 
    component: MainRoutes,
    error404: { path:'', component: PageNotFound }, 
    products: { path: '/products', component:  ListProductPage },
    detailProduct: { path: '/detailproduct', component: DetailProduct }
}