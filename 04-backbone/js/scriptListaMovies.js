$(document).ready(function(){
	var data = {
	    movies: [
	        {
	            nombre: 'Fight Club',
	            año: '1999',
	            descripcion: 'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...',
	            genero: 'Drama',
	            rating: '8,9',
	            director: 'David Fincher', 
	        },
	        {
	            nombre: 'The Shawshank Redemption',
	            año: '1994',
	            descripcion: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
	            genero: 'Crime | Drama',
	            rating: '9,3',
	            director: 'Frank Darabont', 
	        },
	        {
	            nombre: 'Pulp Fiction',
	            año: '1994',
	            descripcion: 'The lives of two mob hit men, a boxer, a gangster´s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
	            genero: 'Crime | Drama | Thiller',
	            rating: '8,9',
	            director: 'Quentin Tarantino', 
	        }
	    ]
	};
	var template_txt = $('#movie_info').html();
	var txtCompilado = Handlebars.compile(template_txt);
	var resultado_txt = txtCompilado(data);
	$('.texto').append(resultado_txt);

	//script para la imagen
	var img={
			picture:[{imagen:'http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX214_AL_.jpg'},
			 	   	{imagen:'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX214_AL_.jpg'},
			 	    {imagen:'http://ia.media-imdb.com/images/M/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY317_CR4,0,214,317_AL_.jpg'},
			]
	};
	var template_foto= $('#movie_picture').html();
	var fotoCompilada = Handlebars.compile(template_foto);
	var resultado_foto = fotoCompilada(img);
	$('.imagen').append(resultado_foto);
});
