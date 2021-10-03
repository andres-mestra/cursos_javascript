import { User } from './class/User';
import { Album } from './class/Album';
import { Picture } from './class/Picture';
import { PhotoOrientation } from './enums/PhotoOrientation';


const user = new User(1, 'andresdev', 'jhon', false )
const album = new Album(2, 'Nuevo album')
const picture = new Picture({
  id: 55,
  title: 'Picture title',
  orientation: PhotoOrientation.Landscape
})
album.addPicture(picture)
user.addAlbum(album)
console.log(user)

console.log('//// Remove album user ////')
user.removeAlbum(album)
console.log(user.album)
