module.exports.Movie = function () {

                          var model = {
                            attributes: {
                                atributos: {}
                                }
                            };

                            model.set= function (attr , value) {
                                model.attributes[attr] = value;
                            }

                            model.get= function () {
                                return model.attributes;
                            }

                            model.play= function (){
                                console.log ('Playing '+this.attributes['title']);
                            }

                            model.stop= function(){
                                console.log ('Stopped '+this.attributes['title']);
                            }

                            return model;
                        };

