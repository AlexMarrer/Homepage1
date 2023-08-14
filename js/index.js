window.addEventListener('scroll', () => {
    const scrollFraction = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    const rotationValue = scrollFraction * 360;

    document.querySelector('.triangle img').style.transform = `rotateZ(${rotationValue}deg)`;
    console.log(scrollFraction);
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

  aTag.addEventListener('click', e => {
      e.preventDefault();

      transitionElements.forEach(element => {
          element.classList.add('transition--opacity');
          element.classList.remove('transition--opacity--reverse');
      });

      setTimeout(() => {
          transitionElements.forEach(element => {
              element.classList.remove('transition--opacity');
              element.classList.add('transition--opacity--reverse');
          });
          window.location.href = aTag.href;
      }, 1500);
  });
});