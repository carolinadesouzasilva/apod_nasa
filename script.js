$('#encontra').on('click', function(event) {
    event.preventDefault()
    let dia = $('#data').val()
    let url = `https://api.nasa.gov/planetary/apod?api_key=b1wJnNwUEeSxNry4NAJhuOUy7xBp3SOD0cr6UGOH&date=${dia}`

    $.ajax({
        url: url,
        type: "GET",
        dataType: 'json',

        success: function(result) {
            console.log(result)
            if (result.media_type == "image") {
                $('#picday').html(`<img id='img' width="426" height="240" src="${result.url}"/>`)
            }  else { $('#picday').html(`<iframe width="426" height="240" src="${result.url}"/>`) }

            $ ('#titulo1').html(`${result.title}`)
            $ ('#explicacao').html(`${result.explanation}`)
            
        },

        error: function() {
            $ ('#titulo1').html('Ah não...')
            $('#picday').html(`<img id='picday' width="300" height="300" src="./img/error.jpg"/>`)
            $('#explicacao').html('Desculpe o transtorno. Não é possível exibir o contaeúdo. Esta aplicação exibirá informações e imagens a partir do dia 20/06/1995 até hoje. Escolha uma nova data e divirta-se!')
        }
    })
})






//https://api.nasa.gov/planetary/apod?api_key=b1wJnNwUEeSxNry4NAJhuOUy7xBp3SOD0cr6UGOH