function homeFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById('ham-menu');
    var z = document.getElementById('home-page');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    if (y.style.display === "block") {
      y.style.display = "none";
      z.style.display = "block";
      logo.style.display = "block";
      nav.style.borderBottom = "1px solid #d9d9d9";
    } else {
      y.style.display = "block";
      z.style.display = "none";
      logo.style.display = "none";
      nav.style.borderBottom = "none";
    }
  }

  function projectFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById('ham-menu');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    var pPage = document.getElementById('project-page');
    if (y.style.display === "block") {
      y.style.display = "none";
      logo.style.display = "block";
      pPage.style.display = "block";
      nav.style.borderBottom = "1px solid #d9d9d9";
    } else {
      y.style.display = "block";
      logo.style.display = "none";
      nav.style.borderBottom = "none";
      pPage.style.display = "none";
    }
  }