
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { productRoutes} from "./product.routes";
import {SharedModule} from "../../shared/shared.module";
import {ProductComponent} from "./product.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductComponent
    ]
})
export class ProductModule { }