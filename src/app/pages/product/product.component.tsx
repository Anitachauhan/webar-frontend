import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import '@google/model-viewer'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    id:string;
    qrResult:string;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit() {
        

        this.route.params
            .subscribe(res => {
                this.getProduct(res.industry, res.id);
            })
            
          
    }
    getProduct = (industry, id) => {
        // this.sub = this.productService.getProducts('http://localhost:5000/api/v1/Furniture/'+id)
        //     .subscribe(res => {
        //         this.product = res.Product;
        //         // console.log(res)
        //     })
        this.sub = this.productService.getProducts('http://localhost:5000/api/v1/'+industry+'/'+id).subscribe(
            res=>{
              this.product=res.Product;
            })
            this.productService.getQrCode({"url": 'http://localhost:5000/api/v1/scanQrCode/'+industry+'/'+id}).subscribe(
                res=>{
                    this.qrResult = res.result;
                }
            )
    };
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };
    addToCart = (product) => {
        if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
