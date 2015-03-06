$(document).ready(function(){

    var Movie= Backbone.Model.extend();

    var movie1= new Movie();
    movie1.set('nombre', 'The Godfather I');
    movie1.set('año','1972');
    movie1.set('descripcion','The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.');
    movie1.set('genero','Crime | Drama');
    movie1.set('rating','9,2');
    movie1.set('director','Francis Ford Coppola');

    var movie2= new Movie()
	movie2.set('nombre','Fight Club');
    movie2.set('año', '1999');
    movie2.set('descripcion', 'An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...');
    movie2.set('genero', 'Drama');
    movie2.set('rating', '8,9');
    movie2.set('director', 'David Fincher');

    var movie3= new Movie()
    movie3.set('nombre','The Shawshank Redemption');
    movie3.set('año', '1994');
    movie3.set('descripcion', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.');
    movie3.set('genero', 'Crime | Drama');
    movie3.set('rating', '9,3');
    movie3.set('director', 'Frank Darabont');

    var movie4= new Movie()
    movie4.set('nombre','Pulp Fiction');
    movie4.set('año', '1994');
    movie4.set('descripcion', 'The lives of two mob hit men, a boxer, a gangster´s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.');
    movie4.set('genero', 'Crime | Drama | Thiller');
    movie4.set('rating', '8,9');
    movie4.set('director', 'Quentin Tarantino');

    var MovieCollection= Backbone.Collection.extend({
        Model: Movie,
        localStorage: new Backbone.LocalStorage("moviePersistedInLH"),
    });
    var coleccion= new MovieCollection;
    coleccion.fetch();
    coleccion.create(movie1);
    coleccion.create(movie2);
    coleccion.create(movie3);
    coleccion.create(movie4);
});