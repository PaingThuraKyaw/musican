export interface AlbumProp {
  album: string;
  album_image: string;
  artist_id: string;
  id: string;
  artist: {
    id: number;
    artist: string;
    artist_image: string;
    about: string;
    birth: string;
  };
}