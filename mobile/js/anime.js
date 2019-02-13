(function() {

    const arrOpts = [
        {
            type: 'triangle',
            easing: 'easeOutQuart',
            size: 6,
            particlesAmountCoefficient: 4,
            oscillationCoefficient: 2
        }
    ];
    
    const items = document.querySelectorAll('.grid__item');
    items.forEach((el,pos) => {
        const bttn = el.querySelector('button.particles-button');
        let particlesOpts = arrOpts[pos];
        const particles = new Particles(bttn,particlesOpts);

        let buttonVisible = true;
        bttn.addEventListener('click', () => {
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
        });
    });

})();
