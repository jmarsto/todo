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
    further.onclick = function newInput() {
      var newinput = document.createElement("INPUT")
      newinput.type="text"
      newinput.placeholder="enter to submit"
      newinput.className = "additionalInput"
      newinput.id = "newIn"
      newinput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          submitNewInput()
        }
      });
      further.parentElement.appendChild(newinput)
      newinput.focus()
      further.parentElement.removeChild(further)
    }


    document.getElementById(inputValue).appendChild(further)
    //lastly, we leave the option to click to add items to the list
    //// // IDEA: when the further span is clicked, let's REPLACE it with the
    // newinput field, indented.  and then when you click away or press enter,
    // submit field and return the further span
  }
}


inputField.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    newList()
  }
});
//enter will also work in the inputField

function submitNewInput() {
  var li = document.createElement("li");
  var newInputValue = document.getElementById("newIn").value;
  var newText = document.createTextNode(newInputValue);
  var liHeader = document.createElement("SPAN")
  liHeader.appendChild(newText)
  liHeader.className = "liHeader"
  var openBox = document.createTextNode("\u2610")
  var openBoxSpan = document.createElement("SPAN")
  openBoxSpan.appendChild(openBox)
  openBoxSpan.className = "openBoxSpan"
  openBoxSpan.onclick = function clickbox() {
      openBoxSpan.innerText = "\u2611"
      openBoxSpan.parentElement.className = "checked"
  }
  if (document.getElementById("newIn").value == '') {
//not doing anything
  }
  else {
    //create list item
    li.appendChild(openBoxSpan);
    li.appendChild(liHeader);
    li.id = newInputValue
    document.getElementById("newIn").parentElement.appendChild(li)
    var further = document.createElement("SPAN");
    var furtherButton = document.createTextNode("+");
    further.appendChild(furtherButton)
    further.className = "addition";
    further.onclick = function newInput() {
      var newinput = document.createElement("INPUT")
      newinput.type="text"
      newinput.placeholder="enter to submit"
      newinput.className = "additionalInput"
      newinput.id = "newIn"
      newinput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          submitNewInput()
        }
      });
      further.parentElement.appendChild(newinput)
      further.parentElement.removeChild(further)
      newinput.focus()
    }
    document.getElementById("newIn").parentElement.appendChild(further)
    document.getElementById("newIn").parentElement.removeChild(newIn);
  }
}
