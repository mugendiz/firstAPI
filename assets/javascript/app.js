

$(document).ready(function(){


var topics = $(this).attr("data-topics");
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=whales&rating=G";

// --------------------WHALE-----------------------------
$("#whale-button").on("click", function() {
  $.ajax({
      url: queryURL,
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var whaleImage = $("<img>");
      whaleImage.attr("src", imageUrl);
      $(".images").prepend(whaleImage);
    });
});

// --------------------STINGRAY------------------------------

$("#stingray-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=stingray&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var stingrayImage = $("<img>");
      stingrayImage.attr("src", imageUrl);
      $(".images").prepend(stingrayImage);
    });
});

// --------------------------STARFISH----------------------------
$("#starfish-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=starfish&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var starfishImage = $("<img>");
      starfishImage.attr("src", imageUrl);
      $(".images").prepend(starfishImage);
    });
});

// --------------------------LIONFISH----------------------------

$("#lionfish-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=lionfish",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var lionfishImage = $("<img>");
      lionfishImage.attr("src", imageUrl);
      $(".images").prepend(lionfishImage);
    });
});

// --------------------------SHARK----------------------------

$("#sharks-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=sharks&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var sharkImage = $("<img>");
      sharkImage.attr("src", imageUrl);
      $(".images").prepend(sharkImage);
    });
});

// --------------------------EEL----------------------------

$("#eel-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=eel&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var eelImage = $("<img>");
      eelImage.attr("src", imageUrl);
      $(".images").prepend(eelImage);
    });
});

// --------------------------CATFISH----------------------------

$("#dolphin-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=dolphin&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var dolphinImage = $("<img>");
      dolphinImage.attr("src", imageUrl);
      $(".images").prepend(dolphinImage);
    });
});

// --------------------------SALMON----------------------------

$("#salmon-button").on("click", function() {
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=salmon&rating=G",
      method: 'GET'
    })
    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.fixed_height_downsampled_url;
      var salmonImage = $("<img>");
      salmonImage.attr("src", imageUrl);
      $(".images").prepend(salmonImage);
    });
});


// ---------------------------SEARCH-----------------------------------

$("#find-gif").on("click", function(event) {
        event.preventDefault();

        var gif = $("#gif-input").val();

        $.ajax({
                  url: "https://api.giphy.com/v1/gifs/search?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&q=go&limit=20&offset=0&rating=G&lang=en",
                  method: "GET"
                }).done(function(response) {
                  console.log(response);
                  var imageUrl = response.data.fixed_height_downsampled_url;
                  var searchImage = $("<img>");
                  searchImage.attr("src", imageUrl);
                  $(".images").prepend(searchImage);
                });

              });
            });



// 0000000------ TEST AREA -----00000000

// $("input").search()
// $(".search").on("click", function() {
//   $.ajax({
//       url: "https://api.giphy.com/v1/gifs/search?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&q=&limit=25&offset=0&rating=G&lang=en",
//       method: 'GET'
//     })
//     .done(function(response) {
//       console.log(response);
//       var imageUrl = response.data.fixed_height_downsampled_url;
//       var searchImage = $("<img>");
//       searchImage.attr("src", imageUrl);
//       $(".images").prepend(searchImage);
//     });
// });



// .done(function(response) {
//
//         // Saving the image_original_url property
//         var imageUrl = response.data.image_original_url;
//
//         // Creating and storing an image tag
//         var catImage = $("<img>");
//
//         // Setting the catImage src attribute to imageUrl
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");
//
//         // Prepending the catImage to the images div
//         $("#images").prepend(catImage);
//       });
//     });

// 0000000------ TEST AREA -----00000000
