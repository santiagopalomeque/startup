var director= require("../node_modules/movieModule.js");

var dire = new director();
console.log(dire.set('title', 'Rambo'));
console.log(dire.get('title'));

director= function(){
			var model= {
					attributes: {
						nombre: string,
						quotes: [],
					}
				};
			model.setNombre= function(nom){
				this.attributes.nombre= nom;
			};
			model.setQuote= function(txt){
				this.attributes.quotes.push(txt);
			}
			model.speak= function(){
				return this.attributes.quotes;
			};
			return model;
};
