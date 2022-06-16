/* Image Slider script start*/

    var index = 0;

    showImage(index);

    function showImage(i){
        index += i;

        var images = document.getElementsByClassName("image");
        var dots = document.getElementsByClassName("dot");

        for(i = 0; i < images.length;i++)
            images[i].style.display = "none";

        for(i = 0; i < dots.length;i++)
            dots[i].className = dots[i].className.replace
            (" active", "");

            if(index > images.length - 1)
                index = 0;
            
            if(index < 0)
                index = images.length -1;

            images[index].style.display = "block";
            dots[index].className += " active";
    }

/* Image Slider script end*/

/* navigation show start*/

    const navShow = () =>{
        let navBar = document.querySelector(".navMenu")
        let burger = document.querySelector('.hamburger')

        burger.addEventListener('click', () =>{
            navBar.classList.toggle('isActive')
            burger.classList.toggle('toggle')
        })

        window.addEventListener('load', () =>{
    
            navBar.classList.remove("toggle");
            burger.classList.remove('toggle')
        })   
    }
 
navShow();

/* navigation show end*/

