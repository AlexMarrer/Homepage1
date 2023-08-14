window.addEventListener('scroll', () => {
    const scrollFraction = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    const rotationValue = scrollFraction * 360;

    document.querySelector('.triangle img').style.transform = `rotateZ(${rotationValue}deg)`;
    //console.log(scrollFraction);
    let opacityValue;
    if ( scrollFraction >= 1 || scrollFraction <= 0) {
        opacityValue = 1;
    }else if (scrollFraction > 0.94 || scrollFraction < 0.06) {
        opacityValue = 0.5;
    }else {
        opacityValue = 0;
    }

    document.querySelector('.img__background').style.opacity = opacityValue;
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animation-element');

    function checkPosition() {
        for (let element of elements) {
            const positionFromTop = element.getBoundingClientRect().top;
            const positionFromBottom = element.getBoundingClientRect().bottom;

            if (positionFromTop - window.innerHeight <= 0 && positionFromBottom >= 0) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    checkPosition(); 
});
document.addEventListener('DOMContentLoaded', function() {
  const aTag = document.getElementById('aWork');
  const transitionElements = document.querySelectorAll('.transition');
  const workAnker = document.getElementById('portfolio-work');
  let p = 3;
  let q = 7;
  if(!workAnker) {
    console.log('no workAnker');
    return;
  }
  const pxToScroll = 3500;

      aTag.addEventListener('click', e => {
      e.preventDefault();
      for (let i = 0; i < 3; i++) {
          window.scrollBy(0, pxToScroll / 10);
          console.log(pxToScroll / 10)
      }
      
      transitionElements.forEach(element => {
          element.classList.add('transition--opacity');
          element.classList.remove('transition');
      });
      for (let i = p; i < 7; i++) {
          window.scrollBy(0, pxToScroll / 10);
          console.log("scroll");
      }

      setTimeout(() => {
          transitionElements.forEach(element => {
              element.classList.add('transition');
              element.classList.remove('transition--opacity');
              for(let i = q; i < 10; i++) {
                window.scrollBy(0, pxToScroll / 10);
                console.log("scroll");
            }
          });
      }, 500); 
  });
});