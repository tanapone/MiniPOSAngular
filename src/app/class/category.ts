import { Deserializable } from "./deserializable";
export class Category implements Deserializable {
  private id: Number;
  private categoryName: String;

	public getId(): Number {
		return this.id;
	}

	public setId(id: Number): void {
		this.id = id;
	}

	public getCategoryName(): String {
		return this.categoryName;
	}

	public setCategoryName(categoryName: String): void {
		this.categoryName = categoryName;
	}


  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
