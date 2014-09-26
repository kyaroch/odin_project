function changeColor(square, transition) {
  var currentOpacity = +square.css("opacity");
  if (currentOpacity < 1 && transition > 0) {
    if (transition === 2 && square.css("background-color") === "rgb(0, 0, 0)") {
      var newColor = Math.floor(Math.random() * 16777215 + 1).toString(16);
      square.css("background-color", "#" + newColor);
    }
    square.animate({opacity: (currentOpacity + 0.2)});
  } else if (currentOpacity < 1) {
    square.animate({opacity: 1});
  }
}

function drawGrid() {
  var gridSize = +$("input").val();
  var transition = +$("select").val();
  var rowDiv;
  var boxSize;
  var gridWidth;
  if (gridSize <= 100 && gridSize >= 1) {
    rowDiv = "<div class='row'>" + Array(gridSize + 1).join("<div class='square'></div>") + "</div>";
    $("#gridwrapper").empty();
    $("#alert").empty();
    gridWidth = $(window).height() * 0.9;
    boxSize = Math.floor(gridWidth / gridSize);
    for (var i = 0; i < gridSize; i++) {
      $("#gridwrapper").append(rowDiv);
    }
    $(".square").css("width", boxSize);
    $(".row").css("height", boxSize);
    $(".square").mouseenter( function() {
      changeColor($(this), transition)
    });
  } else {
    $("#alert").text("Size must be between 1 and 100");
  }
}

$(document).ready( function() {
  drawGrid();
  $("button").click( function() {
    drawGrid();
  });
});
