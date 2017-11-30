$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    $("#questions").fadeOut();

    var species = $("input:radio[name=species]:checked").val();
    var japan = $("input:radio[name=japan]:checked").val();
    var hairy = $("input:radio[name=hairy]:checked").val();
    var weather = $("input:radio[name=weather]:checked").val();
    var breath = $("input:radio[name=breath]:checked").val();

    if (species === "no") {
      $(".barney").fadeIn();
    } else if (species === "yes" && japan === "no" && hairy === "no") {
      $(".nessie").fadeIn();
    } else if (species === "yes" && japan === "no" && hairy === "yes" && weather === "no") {
      $(".sasquatch").fadeIn();
    } else if (species === "yes" && japan === "no" && hairy === "yes" && weather === "yes") {
      $(".yeti").fadeIn();
    } else if (species === "yes" && japan === "yes" && breath === "yes") {
      $(".godzilla").fadeIn();
    } else if (species === "yes" && japan === "yes" && breath === "no") {
      $(".mothra").fadeIn();
    }
  });
});


//here is a comment
