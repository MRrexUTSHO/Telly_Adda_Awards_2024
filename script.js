const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll(".image")



let slidenumber =1;
const length = images.length;






const bottom = document.querySelector('.bottom');
for(let i=0;i<length;i++)
    {
        const div= document.createElement('div');
        div.className = 'button';
        bottom.appendChild(div);
    }



    

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetbg =()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor=`transparent`;
        button.addEventListener('mouseover',stopslideshow);
        button.addEventListener('mouseout',startslideshow);
    })
}
buttons.forEach((button,i)=>{
    button.addEventListener('click',()=>{
        resetbg();
        slider.style.transform=`translateX(-${i*100}%)`;
        slidenumber = i+1;
        button.style.backgroundColor='white';
    })
})   



const changecolor =()=>{
    resetbg();
    buttons[slidenumber-1].style.backgroundColor='white';
}

const nextslide = ()=>{
    slider.style.transform = `translateX(-${slidenumber*100}%)`;
    slidenumber++;
}


const prevslide = ()=>{
    slider.style.transform = `translateX(-${(slidenumber-2)*100}%)`;
    slidenumber--;
}

const firstslide =()=>{
    slider.style.transform = `translateX(0%)`;
    slidenumber = 1;
}

const lastslide =()=>{
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slidenumber = length;
}


right.addEventListener("click",()=>{
    if(slidenumber < length)
   {
    nextslide();
    changecolor();
   }
   else
   {
   firstslide();
   changecolor();
   }
});

left.addEventListener("click",()=>{
    slidenumber > 1 ? prevslide() : lastslide();
    changecolor();
})




//auto slider
let slideinterval;
const startslideshow = ()=>{
    slideinterval = setInterval(()=>{
        if(slidenumber < length)
            {
             nextslide();
             changecolor();
            }
            else
            {
            firstslide();
            changecolor();
            }
            
    },2000);
};

const stopslideshow =()=>{
    clearInterval(slideinterval);
};

startslideshow();
slider.addEventListener('mouseover',stopslideshow);
slider.addEventListener('mouseout',startslideshow);
right.addEventListener('mouseover',stopslideshow);
right.addEventListener('mouseout',startslideshow);
left.addEventListener('mouseover',stopslideshow);
left.addEventListener('mouseout',startslideshow);
