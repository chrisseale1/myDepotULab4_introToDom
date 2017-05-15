var btn = document.createElement('button');
var btnText = document.createTextNode('Touch It!');
btn.appendChild(btnText);

document.addEventListener('DOMContentLoaded',function() {
document.body.appendChild(btn);    
});

 
    
    
btn.addEventListener('click', function() {
  var div = document.createElement('div');
    div.className = 'box';
    var existingBoxCount = document.getElementsByClassName('box').length;
    div.id = existingBoxCount;
    div.addEventListener('mouseover', hoverNumber);
    div.addEventListener('mouseout', hoverNumRemove);
    div.addEventListener('click', colorChange);
    div.addEventListener('dblclick', boxRemove);
    document.body.appendChild(div);
});


function hoverNumber(e) {
    e.target.innerHTML = e.target.id;
};

function hoverNumRemove(e) {
    e.target.innerHTML = '';
};

function colorChange(e) {
    var divColorGen = (Math.random() * 0xFFFFFF << 0).toString(16);
    e.target.style.backgroundColor = '#' + divColorGen;
};

function boxRemove(e) {
    var dblClickedSquare = e.target;
    var boxIdNum = parseInt(dblClickedSquare.id, 10);
    if (boxIdNum % 2 === 0) { 
        if (dblClickedSquare.nextElementSibling) { 
            dblClickedSquare.nextElementSibling.remove();
        } else {
            alert('There is no box to remove'); 
        }
    } else {
        if (dblClickedSquare.previousElementSibling) {
            dblClickedSquare.previousElementSibling.remove();
        } else {
            alert('There is no box to remove');
        }
    }
};