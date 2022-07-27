music = ['1','2','3'];
document.querySelector("audio").setAttribute("src",`music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
