import { Deserializable } from './deserializable';
export class Category implements Deserializable{
    private id:Number;
    private categoryName:String;

    deserializable(input: any){
        Object.assign(this,input);
        return this;
    }
}
