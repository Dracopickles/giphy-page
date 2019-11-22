let dinosaurs = ["Triceratops", "Stegosaurus", "Velociraptor", "Spinosaurus",
"Tyranosaurus"];

// let topics = dinosaurs;

function rendorButtons(){
  $("#buttonsView").empty();

  for (let i = 0; i < dinosaurs.length; i++) {
    let a = $("<button>");

    a.addClass("movieBtn");

    a.attr("dataName", dinosaurs[i]);

    a.text(dinosaurs[i]);

    $("#buttonsView").append(a);
  }
}

const dinoClick = function(){
  let dinosaur = $(this).attr("dataName");
  
  let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
  dinosaur + "&api_key=bdt2T4fEiBi60Hz8wOfbFA4m5aMAcC08&limit=10"

  $.ajax({
    url:queryURL,
    method:"GET"
  })
   .then(function(response){
     let results = response.data;

     for (i = 0; i < results.length; i++) {

     let dinoDiv = $("<div>");

     let p = $("<p>").text("Rating: " + results[i].rating);

     let dinoImage = $("<img>");

     dinoImage.attr("src", results[i].images.fixed_height.url);

     dinoDiv.append(p);
     dinoDiv.append(dinoImage);

     $("#dinosaur-view").prepend(dinoDiv);
    }
   });
  };

rendorButtons();
// $(document).ready(function(){
//   $("#button").on("click", dinoClick);
// });

$(document).on("click", ".movieBtn",dinoClick);