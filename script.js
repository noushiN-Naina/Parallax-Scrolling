let text = document.getElementById('text');
let moon = document.getElementById('moon');
let tree_1 = document.getElementById('tree_1');
let tree_2 = document.getElementById('tree_2');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    moon.style.marginTop = value * 1.5 + 'px';
    tree_1.style.left = value * 1.5 + 'px';
    tree_2.style.left = value * -1.5 + 'px';
});