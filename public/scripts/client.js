/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const { text } = require("body-parser");


// A function which returns user data as html
function createTweetElement(tweets) {
  // Create a div for each tweet
  // Container for border and shadowbox
  const $container = $('<div id="container">');
  const $newDiv = $('<div>').addClass("all-tweets");
  $('.tweets').append($newDiv);

  // Create a div for user and icon for styling
  const $user = $('<div>').addClass("user");
  const $username = $('<h3 class="username">').text(tweets.user.name);
  const $icon = $('<img id="icon">');
  $icon.attr('src', tweets.user.avatars);
  $icon.appendTo('#icon');

  const $handle = $('<h3 class="handle">').text(tweets.user.handle);
  const $header = $('<header>');

  $user.append($icon, $username);
  $header.append($user);
  $header.append($handle);
  $newDiv.append($header);

  const $tweet = $('<article>').text(tweets.content.text);
  $newDiv.append($tweet);
  
  // Display time since tweet created
  const $timestamp = (tweets.created_at);
  const date = timeago.format($timestamp);
  const $date = $('<footer>').text(date);

  const $symbols = $('<span>').addClass("symbols");
  const flag = $('<i class="fa-solid fa-flag"></i>');
  const retweet = $('<i class="fa-solid fa-retweet"></i>');
  const like = $('<i class="fa-solid fa-heart"></i>');
  $symbols.append(flag, retweet, like);
  $date.append($symbols);
  $newDiv.append($date);
  $container.append($newDiv);

  return $container;
}

// function renderTweets() {
  
// }

$(() => {
  function loadTweets() {
    $.get('/tweets').then((data) => {
      for (const tweets of data) {
        const $user = createTweetElement(tweets);
        $('.tweets').prepend($user);
      }
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
      return;
    }

    // Number of characters for the textarea
    const $counter = $('.counter');
    const count = $counter[0].innerText;

    // Prevents the user from submitting their tweet if it is over 140 chars
    if (count < 0) {
      alert(`Your tweet has too many characters! ${count}/140 characters used.`);
      return;
    }
    
    const formSubmission = $(event.target).serialize();
    $.post('/tweets', formSubmission).then(response => {
    $('#tweet-text').val('');
      console.log(response);
      loadTweets();
    })
  });
});