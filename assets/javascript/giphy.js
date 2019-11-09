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

rendorButtons();