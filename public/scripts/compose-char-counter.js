// const { text } = require("body-parser");

const characterCount = function() {
  $(document).ready(function() {

    const textInput = $('#tweet-text');

    textInput.on('input', function () {
      const maxChars = 140;
      const currentCount = this.value.length;
      console.log(maxChars - currentCount);
    })
  })
};