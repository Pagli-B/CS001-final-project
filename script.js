var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/** script for cs*/
  function show_cs2018(){
      document.getElementById('csccm2').style.display= 'none';
      document.getElementById('csccm1').style.display= 'block';
      document.getElementById('s_csccm2').style.backgroundColor= '#dcdde1';
      document.getElementById('s_csccm1').style.backgroundColor= '#2f3640';
  }

  function show_cs2012(){
      document.getElementById('csccm1').style.display= 'none';
      document.getElementById('csccm2').style.display= 'block';
      document.getElementById('s_csccm2').style.backgroundColor= '#2f3640';
      document.getElementById('s_csccm1').style.backgroundColor= '#dcdde1';
  }

  function show_is2018(){
      document.getElementById('isccm1').style.display= 'none';
      document.getElementById('isccm2').style.display= 'block';
      document.getElementById('s_isccm2').style.backgroundColor= '#dcdde1';
      document.getElementById('s_isccm1').style.backgroundColor= '#2f3640';
      document.getElementById('s_isccm1').style.color= 'white';
      document.getElementById('s_isccm2').style.color= 'black';
  }

  function show_is2012(){
      document.getElementById('isccm2').style.display= 'none';
      document.getElementById('isccm1').style.display= 'block';
      document.getElementById('s_isccm2').style.backgroundColor= '#2f3640';
      document.getElementById('s_isccm1').style.backgroundColor= '#dcdde1';
      document.getElementById('s_isccm1').style.color= 'black';
      document.getElementById('s_isccm2').style.color= 'white';
  }

function show_it2018(){
    document.getElementById('def').style.display= 'none';
    document.getElementById('abc').style.display= 'block';
    document.getElementById('s_itccm2').style.backgroundColor= '#dcdde1';
    document.getElementById('s_itccm1').style.backgroundColor= '#2f3640';
  }

  function show_it2012(){
    document.getElementById('abc').style.display= 'none';
    document.getElementById('def').style.display= 'block';
    document.getElementById('s_itccm2').style.backgroundColor= '#2f3640';
    document.getElementById('s_itccm1').style.backgroundColor= '#dcdde1';
  }
