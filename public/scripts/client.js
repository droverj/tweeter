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
  $container.append($footer);

  $footer.append($date, $symbols);

  return $container;
}