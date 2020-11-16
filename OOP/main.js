// function Song(title, writer, singer, released){
//     this.title = title;
//     this.writer = writer;
//     this.singer = singer;
//     this.released = new Date(released);
// }

class Song{
    constructor(title, writer, singer, released){
        this.title = title;
        this.writer = writer;
        this.singer = singer;
        this.released = new Date(released);
    }
    getReleasedDay(){
        return this.released.getDay();  
    }
    getSongInfo(){
        return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;  
    }
}

// Song.prototype.getReleasedDay = function(){
//     return this.released.getDay(); 
// }
// Song.prototype.getSongInfo = function(){
//     return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`; 
// }

//인스턴스 
const song1 = new Song('love yourself', 'eminem', 'eminem', '1998-07-11');
const song2 = new Song('jater', 'emim', 'nem', '2028-07-11');

console.log(song1.getReleasedDay(), song2.getSongInfo());