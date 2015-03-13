app = {};

// Sample Data

var books = [
    		{title:'Memoria de la Copla', 	
    		author:'Conchita Piquera Isabel Pantoja',
    		image:'http://www.di-arezzo.es/multimedia/images/anaya/couv/3432144.jpg', 
			},
			{title:'No Hay Marcianos', 
			author: 'Clark Carrados',
			image:'http://www.ccapitalia.net/img/ciencia-ficcion-espacio-38.jpg', 
			},
			{title: 'El Escritor y sus Fantasmas',
			author: 'Ernesto Sabato',
			image: 'http://www.letralia.com/ciudad/hernandez/imagenes/fantasmas.jpg',
			},
			{title: 'Bormann',
			author: 'Jorge Gonzales Crespo',
			image: 'http://www.libreria-argentina.com.ar/tapas/ayer-y-hoy/crespo-bormann.jpg'
			},
			{title: 'Platero y yo',
			author: 'Juan Ramon Jimenez',
			image: 'https://soteromartin.files.wordpress.com/2014/10/cubierta-de-platero-y-yo.jpg',
			}
];
    
//Router     
app.Router = Backbone.Router.extend({

    routes: {
			 '' : 'home',
		'about' : 'about',
		 'edit' : 'edit',
	},

	home: function () {
        if(!this.bookListView){
    		this.bookListView = new app.BookListView({collection:app.books});
        }else{
            this.bookListView.render();
        }
	},

	about: function () { 
		if (!this.aboutView) {
	        this.aboutView = new app.AboutView();
		}
	    $('.feed').html(this.aboutView.render().el);
	},
    
    edit: function () {
		if (!this.editView) {
            //var coleccion = this.BookListView.collection; NO SE QUE ONDA ESTO ME TIRA ERROR!
    		this.editView = new app.EditView({collection:app.books});
		};
		$('.feed').html(this.editView.render().el);
	},
    	
});

// Model
    
app.Book = Backbone.Model.extend({
    defaults: {
		title:'',
		author: '',
		image:'',		
	},
	validate: function (attrs) {
        if (!attrs.title) {
            return 'Please fill the Book Title field!';
        }
});
    
// Collection    
    
app.BookList = Backbone.Collection.extend ({
    model: app.Book,
    localStorage: new Backbone.LocalStorage("catalogoDeLibros"),
}); 
app.books = new app.BookList(books);
for (var i= 0; i < books.length; i++) {
	app.books.create(books[i]);
};

// Book View    

app.BookView = Backbone.View.extend ({
    tagName: 'div',
	className: 'book',
	template: _.template( $('#bookTemplate').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});
    
// List of Books View
    
app.BookListView = Backbone.View.extend({
	el: '.feed',
    initialize: function() {
			this.render();
            this.listenTo( this.collection, 'add', this.renderBook );
		},
	render: function() {
        this.$el.empty();
		this.collection.each(function( item ){
			this.renderBook( item );
		}, this);
	},
	renderBook: function ( item ) {
		var bookview = new app.BookView ({
			model: item
		});            
		this.$el.append( bookview.render().el );
	} 
});
    
// Edit books view
    
app.EditView = Backbone.View.extend({
    tagName: 'div',
	className: 'edit',

	template: _.template( $( '#editTemplate' ).html()),
    
	events:{
			'click #add-book':'addBook',
			'click #delete-book':'deleteBook'
		},
    addBook:function(e){
		e.preventDefault();
		var title = this.$el.find("#title").val();
		var image = this.$el.find("#image").val();
		var author= this.$el.find("#author").val();
		var bookModel = new app.Book({title:title,image:image,author:author});	
		this.collection.add(bookModel);       
	},
	deleteBook:function(e){
		e.preventDefault();
		var tituloBuscado= this.$el.find("#title_delete").val();
		var ModeloBuscado= this.collection.find(function(model) { 
			return model.get('title') == tituloBuscado; 
			alert(ModeloBuscado.get('title'));
		});
		//this.collection.remove(modeloBuscado);	
	},
    render: function () {
		this.$el.html(this.template());
		return this;
	}
});

// About View
    
    
app.AboutView = Backbone.View.extend({
    tagName: 'div',
	className: 'about',
	template: _.template( $( '#aboutTemplate' ).html()),
	render: function () {
		this.$el.html(this.template());
		return this;
	}
});
    
    
  var router = new app.Router();
  Backbone.history.start();











