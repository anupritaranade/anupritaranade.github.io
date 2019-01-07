function show_menu() {
  var content = document.getElementById('home-content');
  var menu = document.getElementById('ham-menu');

  content.style.display = "none";
  menu.style.display = "block";
}

function hide_menu() {
  var content = document.getElementById('home-content');
  var menu = document.getElementById('ham-menu');

  content.style.display = "block";
  menu.style.display = "none";
}