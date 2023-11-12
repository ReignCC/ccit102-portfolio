const msc = document.querySelector('.ccit-102');
var click = 0;
msc.addEventListener('click', () => {

  if(click == 0){
    click = 1;
    msc.classList.add('ccit-click');
  }
  else{
    click = 0;
    msc.classList.remove('ccit-click');
  }
  
});