import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    industry:string;
    category:string;
    private sub;
    constructor(
        private route: ActivatedRoute,
         private productService:ProductService,
         private cartService:CartService,
         private router: Router
    ) { }

    ngOnInit() {
      
        this.getIndustry()
        this.getCategory()


    this.load()
    }
    // public reloadCurrentRoute() {
    //     let currentUrl = this.router.url;
    //     console.log(this.router.url)
    //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //         this.router.navigate([currentUrl]);
    //     });
    // }
    load = () => {
    //    this.sub = this.productService.getProducts('http://localhost:5000/api/v1/Furniture/getAll')
    //         .subscribe(res => {
    //             this.products = res.Products;     
    //             console.log(this.products)    
    //         })
    if(this.category == "all")
{   

    this.sub = this.productService.getProducts('http://localhost:5000/api/v1/'+this.industry+'/getAll').subscribe(
        res=>{
          this.products=res.Products;
        })}
        else{

            var query = 'http://localhost:5000/api/v1/'+this.industry+'/'+this.category+'/getAll'

            this.sub = this.productService.getProducts(query).subscribe(
        res=>{
          this.products=res.Product;
        })
        }
    };
    addToCart = (product) => {
        this.cartService.addToCart({product,quantity:1})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getIndustry(){
        if(this.route.params!==null){
            // console.log("inside if")
            this.route.params.subscribe(res => {
            if(res.industry != null){
                this.industry = res.industry
            }
            else{
                this.industry = "Furniture" 
            }
            
        })
    }
}
    getCategory(){
        if(this.route.params!==null){
            this.route.params.subscribe(res => {
            if(res.category != null){
                this.category = res.category
            }
            else{
                this.category = "all" 
            }
            
        })
    }
}
}
