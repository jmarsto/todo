function newList() {
  var ul = document.createElement("ul");
  var inputValue = document.getElementById("inputField").value;
  var text = document.createTextNode(inputValue);
  var ulHeader = document.createElement("SPAN")
  ulHeader.appendChild(text)
  ulHeader.className = "ulHeader"
  if (document.getElementById("inputField").value == '') {
//not doing anything
  }
  else {
    //create an unordered list
    ul.appendChild(ulHeader);
    ul.id = inputValue
    document.getElementById("slate").appendChild(ul)
    document.getElementById("inputField").value = "";
    //we've created the list, giving it the id of the input value
    dragElement(document.getElementById((`${inputValue}`)));
    //we've given it drag + drop functionality
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.onclick = function() {
      var div = this.parentElement
      div.style.display = "none"
    }
    span.appendChild(text);
    document.getElementById((inputValue)).appendChild(span);
    //we've given the list an x button that will kill it
    var further = document.createElement("SPAN");
    var furtherButton = document.createTextNode("+");
    further.appendChild(furtherButton)
    further.className = "addition";
    further.onclick = function() {
      alert("add functionality")
    }
    document.getElementById(inputValue).appendChild(further)
    //lastly, we leave the option to click to add items to the list 
  }
}

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    newList()
  }
});
//enter will also work in the inputField
