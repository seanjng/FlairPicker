// Initialize values
var team = "plainflair";
var poke = 0;
var text = "Flair Text";
var subject = team + "-" + poke.toString();

function changeTeam(event) {
    var teamFlair = document.getElementById("flairTeam");
    teamFlair.src = "Images/"+event.target.id+".png";

    
    team = event.target.id + "flair";
}

function changePoke(event) {
    var pokeFlair = document.getElementById("flairPoke");
    pokeFlair.src = "Images/Pokemon-min/"+event.target.id+"-min.png";
    poke=parseInt(event.target.id);
}

function updateText(words) {
    var word = document.getElementById("flairText");
    word.innerHTML = words;
    
    text = words;
}

function showPokemon(num) {
    gen = "gen" + num.toString();
    for (var i=1; i<7; i++) {
        temp = "gen" + i.toString();
        document.getElementById(temp).style.display="none";
    }
    document.getElementById(gen).style.display="inline";
}

function openCompose() {
    if (poke === 0) {
        subject = team.slice(0, -5);
    } else {
        subject = team + "-" + poke.toString();
    }
    text = encodeURIComponent(text)
    window.open("https://www.reddit.com/message/compose/?to=PokemonGoFlairs&subject="+subject+"&message="+text)
}

$(document).ready(function() {
    var sprite = document.getElementById("sprites");
    var box = document.createElement("div");
    box.className = "col-xs-12 col-sm-10";
    box.style.display="none";
    
    for (var i=1; i<7; i++) {
        var gen = "gen"+i.toString();
        box.setAttribute("id", gen);
        var start=1;
        var end=152;
        switch(i) {
            case 2:
                start=152;
                end=252;
                break;
            case 3:
                start=252;
                end=387;
                break;
            case 4:
                start=387;
                end=494;
                break;
            case 5:
                start=494;
                end=650;
                break;
            case 6:
                start=650;
                end=722;
                break;
        }
        var pokemon = document.createElement("label");
        pokemon.className = "radio-inline";
        for (var j=start; j<end; j++) {
            var num = j.toString();
            for(var k = num.length; k < 3; k++) {
                num = "0" + num;
            }
//          pokemon.innerHTML="<input type='radio' name='poke' value='"+j+"'><img src='http://www.serebii.net/pokedex-xy/icon/"+num+".png'>";
//          pokemon.innerHTML="<input type='radio' name='poke' value='"+j+"'><img src='Images/Pokemon/"+num+".png'>";
            pokemon.innerHTML="<input type='radio' name='poke' id='"+num+"' value='"+j+"' onclick='changePoke(event)'><img src='Images/Pokemon-min/"+num+"-min.png'>";
            box.appendChild(pokemon.cloneNode(true));
        }
        sprite.appendChild(box.cloneNode(true));
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
    }
    
});