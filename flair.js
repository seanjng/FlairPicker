// Initialize values
var team = "plainflair";
var poke = 0;
var text = "Flair Text";
var subject = team + "-" + poke.toString();
var mega = "";

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

function makeMega(event) {
    var num = [3, 6, 9, 15, 18, 25, 65, 80, 94, 115, 127, 130, 142, 150, 181, 208, 212, 214, 229, 248, 254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 351, 354, 359, 362, 373, 376, 380, 381, 382, 383, 384, 386, 422, 423, 428, 445, 448, 460, 475, 479, 483, 487, 492, 531, 592, 593, 641, 642, 645, 646, 647, 648, 666, 668, 678, 681, 719]
    var altPoke = [6, 25, 130, 150, 351, 386, 392, 422, 423, 479, 483, 487, 492, 592, 593, 641, 642, 645, 646, 647, 648, 666, 668, 678, 681]
    var megaPoke = [3, 9, 15, 18, 65, 80, 94, 115, 127, 142, 181, 208, 212, 214, 229, 248, 254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362, 373, 376, 380, 381, 382, 383, 384, 428, 445, 448, 460, 475, 531, 719]
    
    var number = poke.toString();
    for(var k = number.length; k < 3; k++) {
        number = "0" + number;
    }
    
    var pokemon = document.createElement("label");
    pokemon.className = "radio-inline";
    var specialBody = document.getElementById("specialBody");
    var pokeFlair = document.getElementById("flairPoke");
    
    if (event.target.id === "true") {
        if(($.inArray(poke, num)) != -1) {
            if(($.inArray(poke, megaPoke)) != -1) {            
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"m-min.png";
                mega = "m";
            } else if(poke === 6 | poke === 150) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"xm'><img src='Images/PokemonSpecial-min/"+number+"xm-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"ym'><img src='Images/PokemonSpecial-min/"+number+"ym-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 25) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"b'><img src='Images/PokemonSpecial-min/"+number+"b-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"d'><img src='Images/PokemonSpecial-min/"+number+"d-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"l'><img src='Images/PokemonSpecial-min/"+number+"l-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"p'><img src='Images/PokemonSpecial-min/"+number+"p-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"r'><img src='Images/PokemonSpecial-min/"+number+"r-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 130) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"m'><img src='Images/PokemonSpecial-min/"+number+"m-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"s'><img src='Images/PokemonSpecial-min/"+number+"s-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 386) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"a'><img src='Images/PokemonSpecial-min/"+number+"a-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"d'><img src='Images/PokemonSpecial-min/"+number+"d-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"s'><img src='Images/PokemonSpecial-min/"+number+"s-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 351 | poke === 392) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='392' value='392f'><img src='Images/PokemonSpecial-min/392f-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='392' value='392i'><img src='Images/PokemonSpecial-min/392i-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='392' value='392w'><img src='Images/PokemonSpecial-min/392w-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 479) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"e'><img src='Images/PokemonSpecial-min/"+number+"e-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"f'><img src='Images/PokemonSpecial-min/"+number+"f-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"g'><img src='Images/PokemonSpecial-min/"+number+"g-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"i'><img src='Images/PokemonSpecial-min/"+number+"i-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"w'><img src='Images/PokemonSpecial-min/"+number+"w-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 487) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"o-min.png";
                mega = "o";
            } else if(poke === 492) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"s-min.png";
                mega = "s";
            } else if(poke === 646) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"b'><img src='Images/PokemonSpecial-min/"+number+"b-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"w'><img src='Images/PokemonSpecial-min/"+number+"w-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 647) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"r-min.png";
                mega = "r";
            } else if(poke === 666) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"a'><img src='Images/PokemonSpecial-min/"+number+"a-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                pokemon.innerHTML="<input type='radio' name='form' id='"+number+"' value='"+number+"p'><img src='Images/PokemonSpecial-min/"+number+"p-min.png'>";
                specialBody.appendChild(pokemon.cloneNode(true));
                $('#specialForm').modal('show');
            } else if(poke === 681) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"a-min.png";
                mega = "a";
            } else if(poke === 483 | poke === 648) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"p-min.png";
                mega = "p";
            } else if(poke === 422 | poke === 423) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"e-min.png";
                mega = "e";
            } else if(poke === 641 | poke === 642 | poke === 645) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"t-min.png";
                mega = "t";
            } else if(poke === 592 | poke === 593 | poke === 678) {
                while(specialBody.firstChild) {
                    specialBody.removeChild(specialBody.firstChild);
                }
                pokeFlair.src = "Images/PokemonSpecial-min/"+number+"f-min.png";
                mega = "f";
            }
        } else {
            alert(poke);
            var append = document.getElementById("megaPart");
            var warning = document.createElement("div");
            warning.className = "col-xs-12 alert alert-warning alert-dismissible";
            warning.setAttribute("role", "alert");
            warning.innerHTML = "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Warning:</strong> Special form not available for this Pokemon.";
            append.appendChild(warning);
            mega ="";
        }
    } else if (event.target.id === "false") {
        var pokeFlair = document.getElementById("flairPoke");
        pokeFlair.src = "Images/Pokemon-min/"+number+"-min.png";
        mega = "";
    }
}

function updateText(words) {
    var word = document.getElementById("flairText");
    word.innerHTML = words;
    
    text = words;
}

function specialUpdate(event) {
    var value = $('input[name=form]:checked').val();
    document.getElementById("flairPoke").src = "Images/PokemonSpecial-min/"+value+"-min.png";
    mega = value.substring(3);
    if (poke === 351) { poke = 392; }
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
        subject = team + "-" + poke.toString() + mega;
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