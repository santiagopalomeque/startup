
$(document).ready(function(){
  $('#hid').fadeIn(2000,function () {
    $('.alias').focus();
   });

  $('.boton').click(function(){
    window.location.reload();
  });

  $.ajax({
    url: "http://bootcamp.aws.af.cm/welcome/yourname",
    success: function(data) {
      var saludo= data.response.substring(0, 8);
     $('.alias').text(saludo.concat('Santiago'));
    }
  });

  
  $.ajax({ type: "GET",   
           url: "https://api.spotify.com/v1/search",  
           data: { q:'Rolling Stones', type:'album' }          
  }).done(function(response){
    var resultado= response.albums.items;
    var section= document.createElement("section"); //seccion nueva
    section.setAttribute('possition','relative'); 
    section.setAttribute('top', '100px')
    document.body.appendChild(section);
    var div= document.getElementById('info'); 
    div.appendChild(section);
    for (var i = 0; i < resultado.length; i++) {
        var ul= document.createElement("ul");
        var li1= document.createElement("li");
        li1.innerHTML= resultado[i].name;
        ul.appendChild(li1);
        var li2= document.createElement("li");
        li2.innerHTML= resultado[i].type;
        ul.appendChild(li2);
        var sub_ul= document.createElement("ul");
        var li= document.createElement("li");
        for (var j = 0; j < resultado[i].images.length; j++) {   
          li.innerHTML= resultado[i].images[j].url;
          sub_ul.appendChild(li);
        };
        ul.appendChild(sub_ul);
        var li4= document.createElement("li");
        li4.innerHTML= resultado[i].external_urls.spotify;
        ul.appendChild(li4);
        var li5= document.createElement("li");
        li5.innerHTML= resultado[i].href;
        ul.appendChild(li5);
        section.appendChild(ul);
    };
  });


});
