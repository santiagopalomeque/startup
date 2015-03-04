$(document).ready(function(){
	//script para el texto
	var data = {
	    movies:[{
	            nombre: 'The Godfather',
	            año: '1972',
	            descripcion: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
	            genero: 'Crime | Drama',
	            rating: '9,2',
	            director: 'Francis Ford Coppola'
	        }]
	};
	var template_txt = $('#movie_info').html();
	var txtCompilado = Handlebars.compile(template_txt);
	var resultado_txt = txtCompilado(data);
	$('.texto').append(resultado_txt);

	//script para la imagen
	var img={picture:[{imagen:'http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX214_AL_.jpg'}]};
	var template_foto= $('#movie_picture').html();
	var fotoCompilada = Handlebars.compile(template_foto);
	var resultado_foto = fotoCompilada(img);
	$('.imagen').append(resultado_foto);

	/*$('.boton').click(function(){
		window.open('https://www.youtube.com/watch?v=sY1S34973zA', 'The Godfather - Trailer - (1972)', '');
  		return false;
	});    */
});