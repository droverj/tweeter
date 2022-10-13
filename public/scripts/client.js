/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweets) {
  const $container = $('<article>');
  const $header = $('<header>').addClass("user");
  const $username = $('<label class="username">').text(tweets.user.name);
  const $handle = $('<label class="handle">').text(tweets.user.handle);

  // Displays generated icon for user
  const $icon = $('<img id="icon">');
  $icon.attr('src', tweets.user.avatars);
  $icon.appendTo('#icon');

  // Displays time since tweet was created
  const $timestamp = (tweets.created_at);
  const date = timeago.format($timestamp);
  const $date = $('<date>').text(date);

  // Displays icons
  const $symbols = $('<div>').addClass("symbols");
  const flag = $('<i class="fa-solid fa-flag"></i>');
  const retweet = $('<i class="fa-solid fa-retweet"></i>');
  const like = $('<i class="fa-solid fa-heart"></i>');
  $symbols.append(flag, retweet, like);

  // Add header to the main container
  $container.append($header);
  $header.append($username);
  $header.append($icon, $username, $handle);

  // Add tweet text to main container
  const $tweet = $('<p>').text(tweets.content.text);
  $container.append($tweet);

  // Add footer to main container
  const $footer = $('<footer>').addClass("tweet-info");
  $footer.append($date, $symbols);
  $container.append($footer);

  return $container;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const eachTweet = createTweetElement(tweet);
    $('#tweets-container').prepend(eachTweet);
  }
};

$(() => {
  function loadTweets() {
    $.get('/tweets').then((data) => {
      renderTweets(data);
    });
  }

  loadTweets();

  const $form = $('#newTweet');

  $form.on("submit", event => {
    event.preventDefault();

    // Text in the textarea
    const $tweetText = $('#tweet-text').val();

    if (!$tweetText) {
      const $validation = $('.validation').text("⛔️ Please fill in the required field.");
      $validation.slideDown();

      // Change background color of text area
      const textArea = $('#tweet-text');
      textArea[0].style.background = 'rgba(100%, 0%, 0%, 0.25)';
      $validation.slideUp(5000, () => textArea[0].style.background = '#f4f1ec');
      return;
    }

    // Number of characters in textarea
    const $counter = $('.counter');
    const count = $counter[0].innerText;

    // Prevents user from submitting tweet if over 140 chars
    if (count < 0) {
      const $validation = $('.validation').text("⛔️ Your tweet has too many characters!");
      $validation.slideDown();
      $validation.slideUp(5000);
      return;
    }

    const formSubmission = $(event.target).serialize();
    $.post('/tweets', formSubmission).then(response => {
      $('#tweet-text').val('');
      $counter[0].innerText = 140;
      loadTweets();
    });
  });
});