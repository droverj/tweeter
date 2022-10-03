// const { text } = require("body-parser");

const characterCount = function() {
  $(document).ready(function() {

    const textInput = $('#tweet-text');

    textInput.on('input', function () {
      const maxChars = 140;
      const currentCount = this.value.length;
      // return maxChars - currentCount;
      const result = maxChars - currentCount;
      const counter = $(this).siblings('.counter');
      counter[0].value = result;
    })
  })
};

// $( document.body ).click(function() {
//   $( "div" ).each(function( i ) {
//     if ( this.style.color !== "blue" ) {
//       this.style.color = "blue";
//     } else {
//       this.style.color = "";
//     }
//   });