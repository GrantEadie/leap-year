function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return "This is a Leap Year";
  } else {
    return "This is not a Leap Year";
  }
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
      event.preventDefault();
    let year = parseInt($("input#userInput").val());

    alert(isLeapYear(year));

  });
});