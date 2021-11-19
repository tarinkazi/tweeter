/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//for checking html unknown char
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



//display code
function renderTweets(tweets) {
  $('#tweet-history').empty();
  document.getElementById("tweet-text").value = "";
 
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
     
      $('#tweet-text').empty();
     $('#tweet-history').prepend($tweet);
    
  }
 
}

//Html structure
const createTweetElement = function(data) {
  const {user, content, created_at} = data;
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
  ${escape(content.text)}
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

//JS logic
$(document).ready(function () {
  $(".error-alert1").hide();
  $(".error-alert2").hide();

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets",
      dataType: "json"
    }).then((res) => {
      renderTweets(res);
      
    })
  };
  loadTweets();
  $('#post_tweet').on('submit', function (evt) {
    evt.preventDefault();
    
 
    $(".error-alert1").hide();
    $(".error-alert2").hide();
  
       
    const $data = $(this).serialize();
    const $val = $('#tweet-text').val();
     
      if ($val.length > 140) {
        document.getElementById("tweet-text").value = "";
        $(this).find('.counter').text(140);
        return $(".error-alert2").slideDown();
       
      } 
      
      if ($val.length === 0) {
        document.getElementById("tweet-text").value = "";
        return $(".error-alert1").slideDown();
         
      }
      
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $data
      }).then((res) => {
        loadTweets();
      })
      $(this).find('.counter').text(140);
  });




});
 