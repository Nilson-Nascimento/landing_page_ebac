
const carregamento = window.onload = function(){
    console.log("Olá Parcel")
    console.log(carregamento)

    AOS.init();
    
}

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
