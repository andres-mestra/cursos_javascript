
let user : object

user = {
  id: 1,
  username: 'andres',
  isPro: true
}

let curso = {
  id: 1,
  name: "typescript"
}

let users: string[]
users = ["hola", "mundo"]

let colors: Array<string>
colors = ["#000", "#b1b"]

//duple
let prop: [string, number]
prop = ["nombre", 0]

//enum
enum State {
  onPLublin,//0
  publish, // 1
}

const myState: State = State.publish;
console.log(myState)

enum CustomEmun {
  publish = 'publish',
  onPublish= 'onPublish'
}
console.log(CustomEmun.onPublish)

let uid: number | string;
uid = "hfjalsfjañfl"
uid = 123443

const findUser = (id: number | string): string => {
  //logica de negocio
  return 'andres'
}

//alias de tipos
type idUser = number | string
type Username = string

let id: idUser
uid = "hfjalsfjañfl"
uid = 123443

const find = (id: idUser): Username => {
  //logica de negocio
  return 'andres'
} 

type SquareSize = '100x100' | '500x500' | '1000x1000'
//let smallPinture: SquareSize = '200x200'
let mediumPinture: SquareSize = '500x500'

//interfaces

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

function showPicture( { title, date, orientation }: Picture ): void {
  console.log(`
    title: ${title}, 
    date: ${date}
    orientation: ${orientation}`
  )
}

let myPic: Picture = {
  title: 'Test picture',
  date: '2021-09',
  orientation: PhotoOrientation.Portrait
}
showPicture(myPic)

interface User {
  readonly id: number,
  username: string,
  isPro: boolean,
}

let newUser: User = { id: 1, username: "andres", isPro: false}

interface Entity {
  id: number,
  title: string
}

interface Album extends Entity{
  description: string
}

interface Picture extends Entity {
  orientation: PhotoOrientation
}

const album: Album = {
  id: 2,
  title: "hlsjfls",
  description: "descripción album"
}

















