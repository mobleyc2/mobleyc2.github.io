document.addEventListener('DOMContentLoaded', (event) =>{
    var today = new Date();
var time = today.getHours();
var greet;

if (time > 18) {
  greet = 'Good evening!';
} else if (time > 12) {
  greet = 'Good afternoon!';
} else if (time >= 0) {
  greet = 'Good Morning!';
} else {
  greet = 'Hi! I am Cait.';
}

var show = document.getElementById('message');
show.textContent = greet;
}) 