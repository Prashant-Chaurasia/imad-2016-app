console.log('Loaded!');

//change the main-text

var element=document.getElementById('main_content');
element.innerHTML='Hello MADI';

//move the image when clicked

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};