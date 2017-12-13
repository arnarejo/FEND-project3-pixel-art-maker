// define global veriables
let height, width, color;

// create a makeGrid function
function makeGrid(x, y) {
  $("#pixel_canvas").empty();
  let html = "";
  for (let i = 0; i < x; i++) {
    html += "<tr>";
    for (let j = 0; j < y; j++) {
      html += "<td></td>";
    }
    html += "</tr>";
  }
  $("#pixel_canvas").append(html);
};

$(document).ready(function() {
  height = $('#input_height').val();
  width = $('#input_width').val();
  makeGrid(height, width);

  // Reset grid on click of 'submit' input
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#input_height').val();
    width = $('#input_width').val();
    makeGrid(height, width);
  });

  $('#pixel_canvas').mouseover(function(x) {
    color = $('#colorPicker').val();
    $(x.target).css('background-color', color);
  });

});
