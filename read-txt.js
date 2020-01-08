const fs = require('fs');

const songs = fs.readFileSync('song.txt', 'utf8');

console.log(songs);
