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
  // Reset grid on click of 'submit' input
  $('#sizePicker').submit(function() {
    $('#colorPicker').val('#ff8000');
    height = $('#input_height').val();
    width = $('#input_width').val();
    makeGrid(height, width);
    $('td').on('click', function(x) {
      color = $('#colorPicker').val();
      // $(x.target).css('background-color', color);
      $(this).css('background-color', color);
    });
    return false;
  });
});
