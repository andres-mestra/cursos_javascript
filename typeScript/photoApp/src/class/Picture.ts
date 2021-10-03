import { Item } from "./Item";
import { PhotoOrientation } from "../enums/PhotoOrientation";
import { PictureInterface } from "../interfaces";

export class Picture extends Item{
  static photoOrientation = PhotoOrientation
  title: string;
  orientation: PhotoOrientation;
   
  constructor({id, title, orientation}: PictureInterface){
    super(id)
    this.title = title
    this.orientation = orientation
  }

  toString(): string{
    return `id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}`
  }

}