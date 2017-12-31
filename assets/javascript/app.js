var topics = $(this).attr("data-topics");
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa&tag=whales&rating=G";

$("#whale-button").on("click", function() {

  $.ajax({
      url: queryURL,
      method: 'GET'
    })

    .done(function(response) {
      console.log(response);
      var imageUrl = response.data.image_original_url;
      var whaleImage = $("<img>");
      whaleImage.attr("src", imageUrl);
      $("#images").prepend(whaleImage);

    });
});

// 0000000------ TEST AREA -----00000000

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
