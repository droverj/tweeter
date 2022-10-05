function getTweets() {
  $.get('/tweets').then((data) => {
    for (const tweets of data) {
      const $user = addTweet(tweets);
      $('.tweets').prepend($user);
    }
  });
}

// A function which returns user data as html
function addTweet(tweets) {
  // Create a div for each tweet
  const $newDiv = $('<div>').addClass("all-tweets");
  $('.tweets').append($newDiv);

  // Create a div for user and icon for styling
  const $user = $('<div>').addClass("user");
  const $username = $('<h3>').text(tweets.user.name);
  const $icon = $('<img id="icon">');
  $icon.attr('src', tweets.user.avatars);
  $icon.appendTo('#icon');

  const $handle = $('<h3>').text(tweets.user.handle);
  const $header = $('<header>');

  $user.append($icon, $username);
  $header.append($user);
  $header.append($handle);
  $newDiv.append($header);

  const $date = $('<footer>').text(tweets.created_at);
  const symbols = $('<span>').text("symbols here");
  $date.append(symbols);
  $newDiv.append($date);

  const $tweet = $('<article>').text(tweets.content.text);
  $newDiv.append($tweet);

  return $newDiv;
}

$(() => {
  console.log('document ready');
  getTweets();

  const $newTweet = $("");

  $newTweet.on("event", event => {
    event.preventDefault();
  });
});

