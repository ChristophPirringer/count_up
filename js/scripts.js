var countUp = function(target_number, step_number) {

  var numbers = [];
  var increment_number = step_number;
   do{
          numbers.push(increment_number);
          increment_number += step_number;
      } while(increment_number <= target_number )
  return numbers;
};


$(document).ready(function()  {
  $("form#count_up").submit(function(event) {
    var target_number = parseInt($("input#target_number").val());
    var step_number = parseInt($("input#step_number").val());
    var result = countUp(target_number,step_number);

    $(".count_up").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
