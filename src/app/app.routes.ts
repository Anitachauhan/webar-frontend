
export const appRoutes=[
    {
        path:'',
        redirectTo:'web-ar/Furniture',
        pathMatch:'full'
    },
    {
        path:'web-ar/:industry',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'web-ar/:industry/:category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'web-ar/:industry/:category',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'web-ar/cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
];