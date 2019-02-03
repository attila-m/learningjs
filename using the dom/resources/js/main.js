var newWordCounter = 1;
var mainHeadline = document.getElementById('mainHeadline');
var wordListItems = document.getElementById('wordList').getElementsByTagName('li');
var addButton = document.getElementById('addButton');
var wordList = document.getElementById('wordList');

wordList.addEventListener('click', activateItem);

function activateItem(e) {
    var item = e.target
    if(item.nodeName == 'LI') {
        mainHeadline.innerHTML = item.innerHTML;
        for (i = 0; i < item.parentNode.children.length; i++) {
            item.parentNode.children[i].classList.remove('active'); 
        }
        item.classList.add('active');
    }
}

addButton.addEventListener('click', createNewItem);

function createNewItem() {
    wordList.innerHTML += "<li>New Word " + newWordCounter + "</li>"
    newWordCounter++;
}
