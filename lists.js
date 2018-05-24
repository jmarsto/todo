ulcount = 0
function newList() {
  var ul = document.createElement("ul");
  var inputValue = document.getElementById("inputField").value;
  var text = document.createTextNode(inputValue);
  var ulHeader = document.createElement("SPAN")
  ulHeader.appendChild(text)
  ulHeader.className = "ulHeader"
  if (inputValue == '') {
//not doing anything
  }
  else {
    //create an unordered list
    var firstultop = 140
    var firstulleft = 10
    ul.appendChild(ulHeader);
    ul.id = inputValue
    function setUlPosition() {
      ul.style.top = firstultop + 10*ulcount + 'px'
      ul.style.left = firstulleft + 10*ulcount + 'px'
      ulcount ++
    }
    setUlPosition()
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
  //creates new list items from input field
  var openBox = document.createTextNode("\u2610")
  var openBoxSpan = document.createElement("SPAN")
  openBoxSpan.appendChild(openBox)
  openBoxSpan.className = "openBoxSpan"
  //creates checkbox
  openBoxSpan.onclick = function clickbox() {
    //checkbox can be clicked and unclicked
      openBoxSpan.innerText = "\u2611"
      if (openBoxSpan.parentElement.className == "") {
        openBoxSpan.parentElement.className = "checked"
      }
      else if (openBoxSpan.parentElement.className == "checked") {
        openBoxSpan.parentElement.className = ""
        openBoxSpan.innerText = "\u2610"
      }
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
    //onmouseenter we get the option to remove list item
    //onmouseleave it disappears
    li.onmouseenter = function hovertoClose() {
      var closebutton = document.createElement("SPAN")
      closebutton.onclick = function remove() {
        closebutton.parentElement.parentElement.removeChild(li)
      }
      var closebuttontext = document.createTextNode("\u00D7")
      closebutton.appendChild(closebuttontext)
      closebutton.id = "closebuttonid"
      li.appendChild(closebutton)
    }
    li.onmouseleave = function stopHover() {
      var closebutton = document.getElementById("closebuttonid")
      li.removeChild(closebutton)
    }
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
