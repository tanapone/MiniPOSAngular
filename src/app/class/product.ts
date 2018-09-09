import { Category } from './category';
import { Company } from './company';
import { Deserializable } from './deserializable';
export class Product{
    private id:Number;
    private productName:String;
    private productBarcodeID:String;
    private productCapitalPrice:Number;
    private productSalePrice:Number;
    private productMinimum:Number;
    private productQty:Number;
    private category:Category;
    private company:Company;
}
