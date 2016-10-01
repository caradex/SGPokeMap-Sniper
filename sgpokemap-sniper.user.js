// ==UserScript==
// @name          	SGPokeMap Sniper
// @namespace     	SGPokeMap
// @description   	Add PokeSniper link to SGPokeMap
// @include       	https://sgpokemap.com/*
// @version       	1.0
// @require			http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

function addPokeSniper(){
    var pokemonName=$( "div.leaflet-popup-content b").last().text();
    var hrefVal=$( "div.leaflet-popup-content a").attr('href');
    var coords = hrefVal.substring(hrefVal.indexOf("q=")+2, hrefVal.indexOf("&zoom"));
    console.log( pokemonName  + coords);
    //pokesniper2://Snorlax/1.341639,103.809264
    $( "div.leaflet-popup-content-wrapper").last().append( "<a class='snipe-link' href='pokesniper2://"+pokemonName+"/"+coords+"'>Snipe</a>" );
}

try {
    var clickedPokemon = null;

    $( document ).delegate( "div.pokemon_icon","click", function() {
        window.setTimeout( addPokeSniper, 50 );
        clickedPokemon = $(this);
        console.log( clickedPokemon);
    });

    $( document ).delegate( "a.snipe-link","click", function() {
        console.log($(clickedPokemon).find("img.pokemon_icon_img"));
        $(clickedPokemon).find("img.pokemon_icon_img").css("background-color","green");
    });
} catch (err) {
    // If an error was thrown, go ahead and present it as an alert to help
    // with debugging any problems
    alert(err.toString());
}