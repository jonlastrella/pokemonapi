$(document).ready(function() {
    for (var i = 1; i < 151; i++) {
        $('.pokemon').append(`<img id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`);
    }
    $('img').click(function(){
        $.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`, function(res) {
            var stat = "";
            stat += "<img id=" + res.id + " " + "src=" + res.sprites.front_default + ">"
            stat += "<h3 class = 'name'>" + res.name + "</h3>"
            stat += "<p>Id:" + res.id + "</p>"
            stat += "<p>Height:" + res.height + "</p>"
            stat += "<p>Weight:" + res.weight + "</p>"
            stat += "<p>Moves:</p>"
            stat += "<ul>"; 
            for(var i = 0; i < res.abilities.length; i++) {
                stat += "<li>" + res.abilities[i].ability.name + "</li>";
            }
            stat += "</ul>";
            $(".stats").html(stat);
        }, "json");
    })
})