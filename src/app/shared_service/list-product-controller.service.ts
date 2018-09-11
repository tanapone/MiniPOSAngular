import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators'
import { Product } from 'src/app/class/product';
import { Category } from 'src/app/class/category';
import { Company } from 'src/app/class/company';

@Injectable({
  providedIn: 'root'
})
export class ListProductControllerService {

  apiUrl = environment.apiUrl;
  authKey = 'be58e594-c02c-4a6b-9e31-b4942365be6d';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }

  listProduct(){
    let products:Product[] = new Array<Product>();
    this._http.get(this.apiUrl+'/products/mobile'+'?authKey='+this.authKey).pipe(
      map((response:Response)=>response.json())
    ).subscribe(data=>{
      let productsFromJson = data;
      for(let product of productsFromJson){
        let p = new Product();
        let category = new Category();
        let company = new Company();
          p.setId(product.id)
          p.setProductName(product.name)
          p.setProductBarcodeID(product.productBarcodeID)
          p.setProductCapitalPrice(product.productCapitalPrice)
          p.setProductSalePrice(product.ProductSalePrice)
          p.setProductMinimum(product.productMinimum)
          p.setProductQty(product.ProductQty)
          category.setId(product.category.id)
          category.setCategoryName(product.category.categoryName)
          company.setId(product.company.id)
          company.setCompanyName(product.company.companyName)
          company.setCompanyEmail(product.company.companyPhoneNumber)
          company.setCompanyPhoneNumber(product.company.companyEmail)
          company.setCompanyAddress(product.company.companyAddress)
          p.setCategory(category)
          p.setCompany(company)
        products.push(p)
      }
    }),error=>{
      console.log(error)
    }
    return products;
  }


}
