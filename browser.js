const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const bodyStyle = getComputedStyle(document.body);
const backGroundColorBody = bodyStyle.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = '#ffffff';
    
}

