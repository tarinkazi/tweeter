/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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



// Test / driver code (temporary)


const createTweetElement = function(data) {
  console.log("DATA IS INSIDE");
    console.log(data)
    const item = `
    <div class="item">
        <img src="${data.user.avatars}" />
        <h2>${data.content}</h2>
        <h4>${data.created_at}</h4>
    </div>`

  const $tweet = $(`<article class="tweet">Hello world</article>`);
 // console.log($tweet);
 return item;

}

const $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 