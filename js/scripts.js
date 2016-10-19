// begin back end

var gallonsLiters = function(number1) {
  return number1 * 3.7851;
};

var gallonsOunces = function(number1) {
  return number1 * 128;
};

// begin front end

$(document).ready(function() {
  $("form#gallonsLiters").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#gallonsLitersInput").val());
    var result = gallonsLiters(number1);
    $(".output-gallonsLiters").text(result);
  });
});
