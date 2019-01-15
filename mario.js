document.querySelector(".follow-button").addEventListener("mouseover", function () {
  this.textContent = "$59.99"; 
});
document.querySelector(".follow-button").addEventListener("mouseleave", function () {
  this.textContent = "Buy it now"; 
});




var text = document.getElementById('text');
var counter = 200;

window.setInterval(function()
{ 
  text.style['background-position'] = counter+'px';
  counter+=7;
},60)
console.log(text);
