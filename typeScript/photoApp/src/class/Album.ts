import { Item } from "./Item"
import { Picture } from "./Picture"

export class Album extends Item{
  #title: string
  pictures: Picture[]

  constructor(id: number, title: string) {
    super(id)
    this.#title = title
    this.pictures = []
  }

  get title() {
    return this.#title
  }

  set title(title: string) {
    this.#title = title
  }

  addPicture(picture: Picture){
    this.pictures.push(picture)
  }
}