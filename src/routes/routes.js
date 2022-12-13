import MainRoutes from "./mainRoutes";

import { ListProductPage } from "../pages";

import { PageNotFound } from "../components";


export const main = {
    path: '/', 
    component: MainRoutes,
    error404: { path:'', component: PageNotFound }, 
    peticiones: { path: '/products', component:  ListProductPage },
}