function homeFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById('ham-menu');
    var z = document.getElementById('home-page');
    var work = document.getElementById('view-my-work');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    var bar1 = document.getElementById('bar1');
    var bar3 = document.getElementById('bar3');
    if (y.style.display === "block") {
      y.style.display = "none";
      z.style.display = "block";
      logo.style.display = "block";
      work.style.display = "block";
      nav.style.borderBottom = "1px solid #d9d9d9";
      bar1.style.marginBottom = "10px";
      bar3.style.marginTop = "10px";
    } else {
      y.style.display = "block";
      work.style.display = "none";
      z.style.display = "none";
      logo.style.display = "none";
      nav.style.borderBottom = "none";
      bar1.style.marginBottom = "18px";
      bar3.style.marginTop = "18px";
    }
  }

  function projectFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById('ham-menu');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    var pPage = document.getElementById('project-page');
    var bar1 = document.getElementById('bar1');
    var bar3 = document.getElementById('bar3');
    if (y.style.display === "block") {
      y.style.display = "none";
      logo.style.display = "block";
      pPage.style.display = "block";
      nav.style.borderBottom = "1px solid #d9d9d9";
      bar1.style.marginBottom = "10px";
      bar3.style.marginTop = "10px";
    } else {
      y.style.display = "block";
      logo.style.display = "none";
      nav.style.borderBottom = "none";
      pPage.style.display = "none";
      bar1.style.marginBottom = "18px";
      bar3.style.marginTop = "18px";
    }
  }

  

  function indiFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById('ham-menu');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    var pPage = document.getElementById('projectContent');
    var bar1 = document.getElementById('bar1');
    var bar3 = document.getElementById('bar3');
    if (y.style.display === "block") {
      y.style.display = "none";
      logo.style.display = "block";
      pPage.style.display = "block";
      nav.style.borderBottom = "1px solid #d9d9d9";
      bar1.style.marginBottom = "10px";
      bar3.style.marginTop = "10px";
    } else {
      y.style.display = "block";
      logo.style.display = "none";
      nav.style.borderBottom = "none";
      pPage.style.display = "none";
      bar1.style.marginBottom = "18px";
      bar3.style.marginTop = "18px";
    }
  }