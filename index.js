//// Seleciona o elemento de entrada de texto e o botão de pesquisa
//var searchBar = document.getElementById('search-bar');
//var searchButton = document.getElementById('search-button');
//
//// Adiciona um ouvinte de evento ao botão de pesquisa
//searchButton.addEventListener('click', function () {
//    var searchTerm = searchBar.value;
//
//    // Execute a lógica de pesquisa aqui (por exemplo, redirecione para uma página de resultados)
//    // Exemplo: window.location.href = "pagina-de-resultados.html?search=" + searchTerm;
//});
//
//const app = require('./src/app');
//
//const port = process.env.PORT || 3000;
//
//app.listen(port, () => {
//    console.log(`Express server listening on port ${port}`);
//});
//searchButton.addEventListener('click', function () {
//    var searchTerm = searchBar.value;
//
//    // URL da API que você deseja usar (substitua pela sua própria)
//    var apiUrl = 'https://adventure-time-api.herokuapp.com/api/v1/' + searchTerm;
//
//    // Faz a solicitação à API usando fetch()
//    fetch(apiUrl)
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (data) {
//            // Processa os dados da resposta da API
//            console.log(data);
//            // Faça algo com os dados, como exibir os resultados na página
//        })
//        .catch(function (error) {
//            console.log('Ocorreu um erro:', error);
//        });
//});
//