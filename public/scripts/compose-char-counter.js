const characterCount = function() {
  $(document).ready(function() {
    const textInput = $('#tweet-text');

    textInput.on('input', function() {
      const maxChars = 140;
      const currentCount = this.value.length;
      const result = maxChars - currentCount;
      const $counter = $('.counter');

      $counter[0].innerText = result;
      if (result < 0) {
        $counter[0].style.color = 'red';
      } else {
        $counter[0].style.color = '#545149';
      }
    });
  });
};