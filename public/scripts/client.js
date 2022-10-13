/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function() {
  const $tweet = $('<article>');
  const $header = $('<header>');
  const $footer = $('<footer>');
  $tweet.append($header, $footer);
  return $tweet;
}