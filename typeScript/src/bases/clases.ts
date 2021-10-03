export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface PictureInterface {
  id: number,
  title: string,
  orientation: PhotoOrientation
}

//Super clase
//abstract: no permite crear objetos a partir de esta clase
abstract class Item {
  private readonly _id: number

  constructor(id: number){
    this._id = id
  }

  get id() {
    return this._id
  }

  //Error pues id es de solo lectura, readonly
  /* set id(id: string) {
    this._id = id
  } */
}

class Picture extends Item{
  static photoOrientation = PhotoOrientation
  //propiedades
  title: string;
  orientation: PhotoOrientation;
   
  constructor({id, title, orientation}: PictureInterface){
    super(id)
    this.title = title
    this.orientation = orientation
  }

  //comportamiento
  toString(): string{
    return `id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}`
  }

}

class Album extends Item{
  //Private of EcmaScript6
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

const album: Album = new Album(1, 'Personal picture')
const picture: Picture = new Picture({
  id: 3,
  title: 'Picture new',
  orientation: PhotoOrientation.Square
})
album.addPicture(picture)
console.log(album)


// Accediendo a los miembros publicos y privados
//picture.id = 100 //Error
/* album.title = "Este es otro titulo"
console.log('Titulo album:', album.title)
picture.title = 'Nuevo titulo picture'
console.log(album) */

//Error, Item es una clase abstract
//const item = new Item(1)
//console.log(item)

//Probar miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation)



