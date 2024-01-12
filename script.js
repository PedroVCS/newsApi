$(document).ready(function() {
    // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API da News API
    const apiKey = '3b9cc4406ed44e919e567be237fe0574';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${apiKey}`;

      // Função para carregar e exibir notícias com base na categoria
      function carregarNoticias(categoria) {
        const apiKey = '3b9cc4406ed44e919e567be237fe0574';
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

        if (categoria) {
            apiUrl += `&category=${categoria}`;
        }

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                exibirNoticias(data.articles);
            },
            error: function(error) {
                console.error('Erro ao carregar notícias:', error);
            }
      
        });
    // Inicializa o carrossel após carregar as notícias
        $('.news-container').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 10
                    }
                }
            ]
          
       
        });
    }

   // Função para exibir as notícias na página
function exibirNoticias(noticias) {
    const container = $('.news-container');
    container.empty(); // Limpa o conteúdo existente

    // Itera sobre as notícias e cria elementos HTML para cada uma
    noticias.forEach(function(noticia) {
        const article = $('<article>').addClass('news-item');
        const link = $('<a>').attr('href', noticia.url).attr('target', '_blank'); // Adiciona o link
        const image = $('<img>').attr('src', noticia.urlToImage).attr('alt', noticia.title); // Adiciona a imagem
        const title = $('<h2>').text(noticia.title);
        const description = $('<p>').text(noticia.description);

        link.append(image, title); // Adiciona a imagem e o título dentro do link
        article.append(link, description);
        container.append(article);
    });

    // Inicializa o carrossel após adicionar as notícias
    container.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    }

     // Função para carregar e exibir notícias com base na categoria da URL
     function carregarNoticias() {
        const apiKey = '3b9cc4406ed44e919e567be237fe0574';
        const urlParams = new URLSearchParams(window.location.search);
        const categoria = urlParams.get('category') || 'technology';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&category=${categoria}&apiKey=${apiKey}`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(data) {
                exibirNoticias(data.articles);
            },
            error: function(error) {
                console.error('Erro ao carregar notícias:', error);
            }
        });
    }
        carregarNoticias();

        noticias.forEach(function(noticia) {
            const article = $('<article>').addClass('news-item');
            const link = $('<a>').attr('href', noticia.url).attr('target', '_blank'); // Adiciona o link
            const image = $('<img>').attr('src', noticia.urlToImage || 'caminho_da_imagem_padrao.jpg').attr('alt', noticia.title); // Adiciona a imagem padrão se urlToImage não estiver disponível
            const title = $('<h2>').text(noticia.title);
            const description = $('<p>').text(noticia.description);
        
            link.append(image, title); // Adiciona a imagem e o título dentro do link
            article.append(link, description);
            container.append(article);
        });

});
