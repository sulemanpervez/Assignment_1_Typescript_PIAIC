"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// creating albums
const album1 = make_album('The Beatles', 'Abbey Road');
const album2 = make_album('Pink Floyd', 'The Wall', 26);
const album3 = make_album('Led Zeppelin', 'IV');
// printing albums
console.log(album1);
console.log(album2);
console.log(album3);
