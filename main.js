$(document).ready(function(){
  var $body = $('body');
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"></div>');
    var t_user = "<div>@<span class='user'>"+tweet.user+"</span>:</div>"
    var t_now = " ("+tweet.created_at.toString().slice(4,25)+")";
    var t_message = "<div class='message'>"+tweet.message+t_now+"</div>"
    $tweet.html(t_user+t_message);
    $tweet.appendTo($('#tweets'));
    index -= 1;
  }

  $('button').click(function(){
    window.location.reload();
  })

  $(".user").click(function(event){
    var username = this.innerHTML;
    pullStreams(username);
    username = username[0].toUpperCase()+username.slice(1);
    $(".profile").show();
    $("h3").html(username+"'s Timeline");
  })

});

function pullStreams(name){
  var tweets = window.streams.users[name];
  $(".timeline").html('');
  tweets.forEach(function(t){
    var li = "<li>"+t.message+"</li>"
    $(".timeline").append(li);
  });
}

// var twittlerApp = angular.module('twittlerApp', []);

// <li class="personal" ng-repeat="user in users"> {{ user.message }} </li>
// twittlerApp.controller('profileController',
//     function profileController($scope) {
//       $scope.users = window.users;

//       $scope.contacts = ["hi@email.com", "hello@email.com"];
//       console.log("runs");
//     }
// );
    // function profileController($scope) {
    //     $scope.users = window.streams.home;
    // }


// Yes, I know this code is pretty horrible, but I'm just messing around with
// Angular right now.  Promise to do better later.