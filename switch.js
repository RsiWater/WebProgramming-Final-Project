var text = document.getElementById('text');
var counter = 200;

window.setInterval(function(){
  text.style['background-position'] = counter+'px';
  counter+=7;
  console.log('test')
},60)


