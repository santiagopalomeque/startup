/*********************** LISTA DE OBSERVERS ****************************/

function ObserverList(){
	this.lista= [];
}
ObserverList.prototype.add= function(observer){
  return this.lista.push(observer);
};
ObserverList.prototype.count = function(){
  return this.lista.length;
};
ObserverList.prototype.get= function(index){
  if( index > -1 && index < this.lista.length){
    return this.lista[index];
  }
};
ObserverList.prototype.indexOf= function(observer, startIndex){
  var i = startIndex;
  while(i < this.lista.length){
    if( this.lista[i] === observer){
      return i;
    }
    i++;
  }
  return -1;
};
ObserverList.prototype.removeAt = function(index){
  this.lista.splice(index, 1);
};

/*********************** SUJETO ***************************************/

function Movie(attr,valor){
	this.atributos= {};
	this.misObserversPlay= new ObserverList();//lista de observers que quieren saber sobre Play
	this.misObserversStop= new ObserverList();//lista de observers que quieren saber sobre Stop

Movie.prototype.play= function(){
	for(var i= 0; i < this.misObserversPlay.count(); i++){
		this.misObserversPlay.get(i).update("PLAYING");
		console.log("console: evento PLAYING");
  	}

    //$.trigger('Play');
};
Movie.prototype.stop= function(){
	for(var i= 0; i < this.misObserversStop.count(); i++){
		this.misObserversStop.get(i).update("STOPING");
		console.log("console: evento STOP");
  	};
    //$.trigger('Stop');
};
Movie.prototype.set= function(attr,valor){
	this.atributos[attr]= valor;
};
Movie.prototype.get= function(attr){
	return this.atributos[attr];
};
Movie.prototype.addObserverPlay= function(observer){
  this.misObserversPlay.add(observer);
};
Movie.prototype.addObserverStop= function(observer){
  this.misObserversStop.add(observer);
};
Movie.prototype.removeObserverPlay= function(observer){
  this.misObserversPlay.removeAt(this.misObserversPlay.indexOf(observer, 0 ));
};
Movie.prototype.removeObserverStop= function(observer){
  this.misObserversStop.removeAt(this.misObserversStop.indexOf(observer, 0 ));
};
Movie.prototype.printObserverPlay= function(){
  this.misObserversPlay.count();
};
Movie.prototype.printObserverStop= function(){
  this.misObserversStop.count();
};

};

/*********************** OBSERVER *************************************/
function MovieObserver(id){
	this.id= id;
	this.update= function(context){
	var contexto= context;
	return "id: " + this.id + " recibio la notificacion: " + contexto;

  /*$.on('Play',function(){
    console.log()
  })
*/

  /*$.on('Stop',function(){
    console.log()
  })
*/
};
};
/**************************PUNTO 8*************************************/

function DownloadableMovie() {};
DownloadableMovie.prototype= new Movie();
DownloadableMovie.prototype.download= function(){
  console.log("estoy bajando una peli");
}