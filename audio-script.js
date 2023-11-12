let audio = new Audio ("Music/bgm.mp3");
audio.volume = 0.4;
var play = document.getElementById("play");
var count = 0;
function playMusic(){
  if(count == 0){
      count = 1;
      audio.play();    
      }
      else{
        count = 0;
        audio.pause();
        audio.currentTime = 0;
      }   
}
