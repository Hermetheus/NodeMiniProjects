const fs = require('fs');

const song = 'Remember those walls I built';

fs.writeFileSync('song.txt', song);

const readNewData = fs.readFileSync('song.txt', 'utf8');

console.log(readNewData);
