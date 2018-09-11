import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';
import { Category } from 'src/app/class/category';
import { Company } from 'src/app/class/company';
import { ListProductControllerService } from 'src/app/shared_service/list-product-controller.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  products:Product[] =new Array<Product>();
  constructor(private listProductContorllerService:ListProductControllerService) { }

  getProducts(){
   
    this.products = this.listProductContorllerService.listProduct();
    
    console.log(this.products)
    for(let product of this.products){
      console.log(product.getCategory())
    }

  }

  ngOnInit() {
  }

}
