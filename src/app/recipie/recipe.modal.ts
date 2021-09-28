import { Ingredient } from "../shopping-list/ingredient";

export class Recipe{

public name:string;
public description :string;
public imagepath :string;
public ingredient :Ingredient[]

constructor (name :string ,description:string,imagepath:string,ingredient :Ingredient [])
{
this.name=name;
this.description=description;
this.imagepath=imagepath;
this.ingredient=ingredient;
}
}