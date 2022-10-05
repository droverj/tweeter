// $(document).ready(() => {
//   console.log('document ready')
// })

function getTweets() {
  $.get('/tweets').then((data) => {
    console.log(data);
    const $user = addUser(data[0]);
    $('.tweet').prepend($user);
  })
}

function addHandle(tweets) {
  const $handle = $('<h3 class="handle">').text(tweets.user.handle);
  // const $tweet = $('<article>').text(tweets.content.text);
  // const $date = $('<footer>').text(tweets.created_at);

  // const $icon = $('<img id="icon">');
  // $icon.attr('src', tweets.user.avatar);
  // $icon.appendTo('#icon');

  
  return $handle;
}

function addUser(tweets) {
  const $user = $('<div>').addClass("user");
  const $username = $('<h3>').text(tweets.user.name);

  const $icon = $('<img id="icon">');
  $icon.attr('src', tweets.user.avatar);
  $icon.appendTo('#icon');

  const $header = $('<header id="tweet">');
  $user.append($icon, $username);
  $header.append($user);

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
})

