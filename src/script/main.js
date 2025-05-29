
const carregamento = window.onload = function(){
    console.log("Olá Parcel")
    // console.log(carregamento)

    AOS.init();

    
}
const stop = '00:00:00'
const timeEvent = new Date("Mon Dec 28 2025 22:47:26")
const timeStampEvent = timeEvent.getTime()
// console.log(timeStampEvent + " timeStampEvent")

const counterHours = setInterval(function(){
    const now = new Date()
    const timeStampNow = now.getTime()
    // console.log(timeStampNow + " timeStampNow")
    
    const targetToEvent = timeStampEvent - timeStampNow
    console.log(targetToEvent + " targetToEvent")
    
    const targetDayEvent = Math.floor( targetToEvent / (1000 * 60 * 60 * 24))
    const targetHoursEvent = String(Math.floor((targetToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0")
    const targetMinutesEvent = String(Math.floor(targetToEvent % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0")
    const targetSecondsEvent = String(Math.floor(targetToEvent % (1000 * 60) / 1000)).padStart(2, "0")
    
    // console.log(targetDayEvent + " dias")
    
    const counterDown = targetDayEvent + " Dias " + targetHoursEvent + ":" + targetMinutesEvent + ":" + targetSecondsEvent
    
    document.getElementById('counter').innerHTML = "começa em " + `${counterDown}`
    
    if (targetToEvent < 0) {
        clearInterval(counterHours)
        document.getElementById('counter').innerHTML = "Terminou!"
    }
        
        
    }, 1000)
    
// #####################################################################################################
// const timeEventHours = String(timeEvent.getHours()).padStart(2, "0")
// const timeEventMinutes = String(timeEvent.getMinutes()).padStart(2, "0")
// const timeEventSeconds = String(timeEvent.getSeconds()).padStart(2, "0")

// const counter = setInterval(function(){
//     const timeNow = new Date()
//     const conterHours = String(timeNow.getHours()).padStart(2, "0")
//     const counterMinutes = String(timeNow.getMinutes()).padStart(2, "0" )
//     const counterSeconds = String(timeNow.getSeconds()).padStart(2, "0");
//     // parseFloat(timeNow.getSeconds().padStart(2,'0'))

//     const counterHoursDown = timeEventHours - conterHours
//     const counterMinutesDown = timeEventMinutes - counterMinutes
//     const counterSecondsDown = timeEventSeconds - counterSeconds

//     const counterDown = String(counterHoursDown).padStart(2, "0") + ":" + String(counterMinutesDown).padStart(2, "0") + ":" + String(counterSecondsDown).padStart(2, "0")

//     console.log(counterDown)

//     document.getElementById('counter').innerHTML = `${counterDown}`

// }, 1000)





// ##############################################################
// Função para monitorar o carregamento da página
// function monitorarCarregamento() {
//     // Evento disparado quando a página começa a carregar
//     window.addEventListener('loadstart', function() {
//         console.log('O carregamento da página começou.');
//     });

//     // Evento disparado quando a página termina de carregar
//     window.addEventListener('load', function() {
//         console.log('O carregamento da página foi concluído.');
//     });

//     // Evento disparado quando há um erro no carregamento da página
//     window.addEventListener('load', function(event) {
//         console.error('Erro no carregamento da página:', event);
//     });

//     // Evento disparado quando a página está sendo descarregada
//     window.addEventListener('beforeunload', function() {
//         console.log('A página está sendo descarregada.');
//     });
// }

// // Chama a função para iniciar o monitoramento
// monitorarCarregamento();
