function newParagraph() {

  var element = document.createElement("p");

  var main = document.getElementById("main");

    main.appendChild(element);

  if (main.style.display == 'none')
  main.style.display = 'block';
  else
  main.style.display = 'none';

  var text = document.createTextNode ("In her work one can see how her multicultural background of being born to her Chinese-Singapurian and French-Pakistani parents and being brought up in Australia has impacted her work and perception of the world.");

  element.appendChild(text);

}
