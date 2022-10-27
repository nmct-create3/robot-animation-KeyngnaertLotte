
let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })

  tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
  .fromTo('#Robot',{
    y: 2.5,
  },{
    y: -2.5,
  })
  
  .fromTo('#Fire',{
    transformOrigin: '50% 0%',
    scale: 0.8,
  },{
    scale: 1
  },
  '<',
  )
  .from('#Arm-left',{
    transformOrigin: '100% 0%',
    rotation: 3,
  },
  '<',
  )
  .from('#Arm-right',{
    transformOrigin: '0% 50%',
    rotation: -3,
  },
  '<',
  )
  .to('#Head',{
    y: 1.5,
  },
  '-=.75',
  )
  .to('#Shadow',{
    scale: 0.75,
  },
    '-=.75',
  )
  
  


let btnPause = document.querySelector('.js-pause')
let SVGPlay = document.querySelector('.c-play-icon--play')
let SVGPause = document.querySelector('.c-play-icon--pause')
var playPause = true

btnPause.onclick = () => {
    tl.paused(!tl.paused())
    if (playPause == true){
        SVGPlay.classList.remove("is-paused")
        SVGPause.classList.add("is-paused")
        playPause = false
    }
    else if(playPause == false){
        SVGPlay.classList.add("is-paused")
        SVGPause.classList.remove("is-paused")
        playPause = true
    }
}




let btnFast = document.querySelector('.js-fast')
btnFast.onclick = () => tl.timeScale(4)

let btnNormal = document.querySelector('.js-normal')
btnNormal.onclick = () => tl.timeScale(2)

let btnSlow = document.querySelector('.js-slow')
btnSlow.onclick = () => tl.timeScale(1)


//Animeert de robot 50 eenheden naar rechts vanaf startpositie
//gsap.to(`#Robot`, {duration: 1, x: 50})

//Plaatst de robot eerst 50 eenheden naar rechts en animeert de robot naar de startpositie
//gsap.from('#Robot', { duration: 1, x: 50 });

//Plaatst de robot 50 eenheden naar rechts zonder animatie
//gsap.set('#Robot', { duration: 1, x: 50 });

//Animeert de robot van een positie -50 links naar rechts 50.
//gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

//De parameters tussen de haakjes bij out bepalen de sterkte van het effect. Niet elke easing heeft die parameters.
// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     x: 50,
//   })


//Op deze manier kan je animaties achter elkaar zetten. 
// let tl = gsap.timeline()

// tl.fromTo('#Robot',{
//   y: 2.5,
// },{
//   duration: .75,
//   y: -2.5,
// }).to('#Shadow', {
//   duration: .75,
//   scale: 0.75,
// })

//Laten toe om default properties voor de hele timeline in te stellen. Zo kan je de vorige code op deze manier schrijven:
// let tl = gsap.timeline({
//     defaults: {
//       duration: .75,
//       ease: 'power1.inOut',
//     },
//   })
  
//   tl.fromTo('#Robot',{
//     y: 2.5,
//   },{
//     y: -2.5,
//   }).to('#Shadow', {
//     scale: 0.75,
//   })


//Met de position parameter kan je bepalen hoe lang het duurt voor een volgende tween begint. Zo kan je delays steken tussen animaties of ze laten overlappen.
// tl.fromTo('#Robot',{
//     y: 2.5,
//   },{
//     y: -2.5,
//   })
//   .to('#Shadow', {
//     scale: 0.75,
//   },
//     '-=.75',
//   )

//Zorgt er voor dat de tween altijd start op het begin van de vorige tween.
// .to('#Shadow', {
//     scale: 0.75,
//   },
//     '<',
//   )

//Laat de animatie oneindig herhalen en voorwaarts en achterwaarts afspelen (yoyo).
// let tl = gsap.timeline({
//     defaults: {
//       duration: 1,
//       ease: 'power1.inOut',
//     },
//     repeat: -1,
//     yoyo: true,
//   })

//   tl.set('#Shadow', {
//     transformOrigin: '50% 100%',
//   })
//   .fromTo('#Robot',{
//     y: 2.5,
//   },{
//     y: -2.5,
//   })
//   .to('#Shadow',{
//     scale: 0.75,
//   },
//     '-=.75',
//   )


// https://leho-howest.instructure.com/courses/16794/pages/svg-animeren-met-gsap?module_item_id=494346


