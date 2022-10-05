// $(document).ready(() => {
//   console.log('document ready')
// })

function getTweets() {
  $.get('/tweets').then((data) => {

    for (const tweets of data) {
      const $user = addUser(tweets); // change data[0] to tweets for loop
      const $tweet = addTweet(tweets);
      const $date = addDate(tweets);
      $('.tweet').prepend($user, $tweet, $date);
      // $('.tweet').append($tweet);
      // $('.tweet').append($date);      
    }


    console.log(data);
  })
}

function addTweet(tweets) {
  const $tweet = $('<article>').text(tweets.content.text);
  return $tweet;
}

function addDate(tweets) {
  const $date = $('<footer>').text(tweets.created_at);
  const symbols = $('<span>').text("symbols here");
  $date.append(symbols);
  return $date;
}


function addUser(tweets) {
  const $user = $('<div>').addClass("user");
  const $username = $('<h3>').text(tweets.user.name);
  const $handle = $('<h3 class="handle">').text(tweets.user.handle);

  const $icon = $('<img id="icon">');
  $icon.attr('src', tweets.user.avatars);
  $icon.appendTo('#icon');

  const $header = $('<header id="tweet">');
  $user.append($icon, $username);
  $header.append($user);
  $header.append($handle);

  return $header;
}

//   <div class="user">
//     <i id="tweetButton" class="fa-solid fa-angles-down"></i>
//     <h3>username here</h3>
//   </div>
//     <h3 class="handle">handle here</h3>
// // </header>

// <article> TWEET HERE</article>
// <footer> FOOTER HERE
// <span>symbols here</span>
// </footer>



$(() => {
  console.log('document ready')
  getTweets();

  const $newTweet = $("")

  $newTweet.on("event", event => {
    event.preventDefault();
  })
})

