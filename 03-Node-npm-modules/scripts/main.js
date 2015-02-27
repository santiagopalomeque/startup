(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
var movie= require("./movieModule.js").Movie;

//movie.set("title","rambo");
//console.log(movie.get("title"));
},{"./movieModule.js":1}]},{},[2]);
