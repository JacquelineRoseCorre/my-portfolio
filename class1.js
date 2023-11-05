let sections = document.querySelector('section');
let navLinks = document.querySelector('navHeader a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttributes('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
                
            
            })
        };
    })
}

var conten1 = document.getElementById('content1');  
 var conten2 = document.getElementById('content2');  
 var conten3 = document.getElementById('content3');  
 var btn1 = document.getElementById('btn1');  
 var btn2 = document.getElementById('btn2');  
 var btn3 = document.getElementById('btn3');  
 function tab1(){  
      conten1.style.transform='translateX(0px)';  
      conten2.style.transform='translateX(100%)';  
      conten3.style.transform='translateX(100%)';  
 }  
 btn1.addEventListener('click',function(){  
           btn1.classList.add('active');  
           btn2.classList.remove('active');  
           btn3.classList.remove('active');  
      });  
 function tab2(){  
      conten2.style.transform='translateX(0px)';  
      conten1.style.transform='translateX(100%)';  
      conten3.style.transform='translateX(100%)';  
 }  
 btn2.addEventListener('click',function(){  
           btn2.classList.add('active');  
           btn1.classList.remove('active');  
           btn3.classList.remove('active');  
      });  
 function tab3(){  
      conten3.style.transform='translateX(0px)';  
      conten2.style.transform='translateX(100%)';  
      conten1.style.transform='translateX(100%)';  
 }  
 btn3.addEventListener('click',function(){  
           btn3.classList.add('active');  
           btn1.classList.remove('active');  
           btn2.classList.remove('active');  
      });  
