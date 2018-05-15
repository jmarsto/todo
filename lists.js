function newList() {
  var ul = document.createElement("ul");
  var inputValue = document.getElementById("inputField").value;
  var text = document.createTextNode(inputValue);
  if (document.getElementById("inputField").value == '') {

  }
  else {
    ul.appendChild(text);
    ul.id = inputValue
    document.getElementById("slate").appendChild(ul)
    document.getElementById("inputField").value = "";
    dragElement(document.getElementById((`${inputValue}`)));
    thisList = document.getElementById((`${inputValue}`))
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.onclick = function() {
      var div = this.parentElement
      div.style.display = "none"
    }
    span.appendChild(text);
    document.getElementById((inputValue)).appendChild(span);
  }
}

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    newList()
  }
});
