var main = function() {
  var cities = [
      "New York",
      "Atlanta",
      "Boston",
      "San Francisco",
      "Los Angeles",
      "Chicago",
      "Miami",
      "Seattle"
    ];
    $( "#myCity" ).autocomplete({
      source: cities
    });
};
 
$(document).ready(main);