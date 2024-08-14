document.addEventListener('DOMContentLoaded', () => {
  let shapeTl = gsap.timeline({ paused: true });

  shapeTl.from('.box.red', { x: '-100vw', y: '-100vh', duration: 0.5 })
         .from('.box.green', { x: '100vw', y: '-100vh', duration: 1 }, '-=0.5') 
         .from('.box.blue', { x: '100vw', y: '100vh', duration: 1.5 }, '-=1')
         .from('.box.yellow', { x: '-100vw', y: '100vh', duration: 2 }, '-=1.5');

  shapeTl.to(['.box.red', '.box.green', '.box.blue', '.box.yellow'], 
             { 
               x: (index, target) => {
                 return target.classList.contains('red') ? '87vw' :
                        target.classList.contains('green') ? '0vw' :
                        target.classList.contains('blue') ? '-87vw' :
                        '0vw';
               },
               y: (index, target) => {
                 return target.classList.contains('red') ? '0vh' :
                        target.classList.contains('green') ? '73vh' :
                        target.classList.contains('blue') ? '0vh' :
                        '-73vh';
               },
               borderRadius: '50%',
               backgroundColor: (index, target) => {
                 return target.classList.contains('red') ? 'green' :
                        target.classList.contains('green') ? 'blue' :
                        target.classList.contains('blue') ? 'yellow' :
                        'red';
               },
               duration: 0.5
             });

  shapeTl.to(['.box.red', '.box.green', '.box.blue', '.box.yellow'], 
             { 
               x: (index, target) => {
                 return target.classList.contains('red') ? '137vw' :
                        target.classList.contains('green') ? '50vw' :
                        target.classList.contains('blue') ? '-137vw' :
                        '-50vw';
               },
               duration: 5
             });

  shapeTl.play();
});
