const nav = document.getElementById("nav")

window.onscroll = function() {

  const scrollOffset = 20;

let scrollElement = document.querySelector(".square");

let learn = document.getElementById("square")

const elementInView = (el, offset = 0) => {

  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= 

    ((window.innerHeight || document.documentElement.clientHeight) - offset)
    
  );
};

const displayScrollElement = () => {

  scrollElement.classList.add('milk');

  learn.classList.add("milk")

}
const hideScrollElement = () => {

  scrollElement.classList.remove('milk');

  learn.classList.remove("milk")


}

const handleScrollAnimation = () => {

  if (elementInView(scrollElement, scrollOffset)) {

      displayScrollElement();

  } else {

    hideScrollElement();

  }
}

handleScrollAnimation();



    scrollFunction()

};



function scrollFunction() {

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

        nav.style.opacity = "98%";

        document.getElementById("nav").className="navbar navbar-expand-lg navbar-dark sticky-top"

        nav.style.backgroundColor="rgb(19, 20, 30)"

        

        nav.style.transition= ".2s ease-in-out"

        nav.style.color="black"

    } else {

        nav.style.opacity = "100%";

        document.getElementById("nav").className="navbar navbar-expand-lg bg-transparent navbar-dark sticky-top"


    }


}




