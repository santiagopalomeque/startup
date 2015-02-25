var Movie = function () {

  var model = {
    attributes : {
        title : '',
        duration : '',
        director : '',
        actor : []
        }
    };

    model.set = function (attr , value) {
        model.attributes[attr] = value;
    }

    model.get  = function () {
        return model.attributes;
    }

    model.play = function (){
        console.log ('Playing '+this.attributes['title']+'...');
    }

    model.stop= function(){
        console.log ('Stopped '+this.attributes['title']+'...');
    }

    return model;
};