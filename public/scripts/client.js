/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


function renderTweets(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweets);
    $('#tweet-history').append($tweet);
  }
}
// Test / driver code (temporary)


const createTweetElement = function(data) {
  const {user, content, created_at} = tweetData;
  const tweetElementHTML = $(`<article class="tweet">
  <header class="th-header">
   <div class='name-left'>
    <img src="${user.avatars}">
    <h3>${user.name}</h3>
   </div>
   <div class='userID'>
     <p>${user.handle}</p>
   </div>
</header> 
<div class="display-tweet">
<p>
  ${content.text}
</p>
</div>

<footer>
<span class="time-passed">${timeago.format(created_at)}</span>
<div class='icons'>
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
</div>
</footer>
</article>`)
  return tweetElementHTML;

}

// const $tweet = createTweetElement(tweetData);
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); 

$(document).ready(function() {
  renderTweets(data);


});