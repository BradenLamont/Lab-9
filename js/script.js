function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function alertMe(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').textContent = textbox.value;
    alert("Braden Lamont: " + textbox.value);
  }

  button.addEventListener('click', alertMe);
}

window.addEventListener('load', init);
