//
// var topics = ["Whales", "Stingray", "Starfish", "Lionfish", "Sharks", "Eel", "Catfish", ""];
//
// $("button").on("click", function() {
//   console.log("TEST")
// });


// --------------------------
// Sample
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
// //
// $.ajax({
//   url: queryURL,
//   method: 'GET'
// }).done(function(response) {
//   console.log(response);
// });

// ---------------------------



var topics = $(this).attr("data-topics");
var queryURL = "https://api.giphy.com/v1/gifs/trending/search?q=" +
  topics + "&api_key=baxeYaupSI7166qIg8Gf1hH55cyhiGFa";
console.log("topics");


$.ajax({
  url: queryURL,
  method: "GET"

}).done(function(response) {
  console.log(response);

});




//
//   // Creating an image tag
//   var personImage = $("<img>");
//
//   // Giving the image tag an src attribute of a proprty pulled off the
//   // result item
//   personImage.attr("src", results[i].images.fixed_height.url);
//
//   // Appending the paragraph and personImage we created to the "gifDiv" div we created
//   gifDiv.append(p);
//   gifDiv.append(personImage);
//
//   // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//   $("#gifs-appear-here").prepend(gifDiv);
// }

// });
