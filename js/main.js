const star = document.getElementById('star');
const moon = document.getElementById('moon');
const mountains1 = document.getElementById('mountains1');
const mountains2 = document.getElementById('mountains2');
const river = document.getElementById('river');
const boat = document.getElementById('boat');
const name = document.querySelector('.name');
const main = document.querySelector('.main');
window.onscroll=function(){
    let value = scrollY
    star.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value  +'px'; 
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    name.style.fontSize = value + 'px';
    if (scrollY >= 80)
    {
        name.style.fontSize = 80 + 'px';
        name.style.position = 'fixed'
    }
    if(scrollY>= 420)
    {
        name.style.display = 'none'
    }
    else{
        name.style.display = 'block'

    }
    if(scrollY>=104)
    {
        main.style.background = 'linear-gradient(rgba(21, 92, 179, 0.91) ,rgb(24, 136, 201))'
    }
    else
    {
         main.style.background = 'linear-gradient(#200016 , #10001f)'
    }

}

