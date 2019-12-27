var changeme = document.getElementById('mypol')
changeme.onclick = changeColor

function changeColor() {
    document.getElementsByClassName("json-formatter-string")[0].setAttribute("class", "democlass");
}