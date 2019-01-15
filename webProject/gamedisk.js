var text = document.getElementById('text');
var counter1 = 200;
var counter2 = 200;
const text2 = document.querySelector('#gamedisk .gamedisk-text h1');

window.setInterval(function(){
  text.style['background-position'] = counter1+'px';
  counter1-=4;
},60)


window.setInterval(function(){
  text2.style['background-position'] = counter2+'px';
  counter2+=4;
},60)
