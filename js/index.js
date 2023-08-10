window.addEventListener('scroll', () => {
    const scrollFraction = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    const rotationValue = scrollFraction * 360;

    document.querySelector('.triangle img').style.transform = `rotateZ(${rotationValue}deg)`;
    console.log(scrollFraction);
    let opacityValue;
    if ( scrollFraction == 1 || scrollFraction == 0) {
        opacityValue = 1;
    }else if (scrollFraction > 0.9 || scrollFraction < 0.1) {
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