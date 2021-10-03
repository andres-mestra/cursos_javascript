import { Album } from './Album';

export class User {
  private _album: Album[]

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ){
    this._album = []
  }

  addAlbum(album: Album) {
    this._album.push(album)
  }

  removeAlbum(album: Album) {
    const index = this._album.findIndex( a => a.id === album.id)
    index >= 0 && this._album.splice(index, 1)
  }

  get album(){
    return this._album
  }
}