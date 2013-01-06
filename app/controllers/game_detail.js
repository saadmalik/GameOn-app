var args = arguments[0] || {};

Ti.API.info("ARGUMENTS PASSED TO GAME DETAIL: " + JSON.stringify(args));


function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameDetail, {animated: true});
}

var gameLocation = Titanium.Map.createAnnotation({
    latitude:40.580888,
    longitude:-74.306688,
    title:'Merrill Park',
    subtitle:'Colonia, NJ',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    rightButton: '/images/game_detail/mapRightButton.png',
    myid:1 // Custom property to uniquely identify this annotation.
});

$.map_view.annotations = [gameLocation];

// Handle click events on any annotations on this map.
$.map_view.addEventListener('click', function(evt) {

    if (evt.clicksource == 'rightButton') {
        if (OS_IOS) {
            Ti.Platform.openURL('https://maps.apple.com/?q='+evt.annotation.title+','+evt.annotation.subtitle);
        } else {
            Ti.Platform.openURL('https://maps.google.com/?q='+evt.annotation.title+','+evt.annotation.subtitle);
        }
    }   
}); 

function viewComments(e) {
  var foo = Alloy.createController('comments', args).getView();
  Alloy.globals.tabgroup.activeTab.open(foo);
}

function viewMembers(e) {
  var foo = Alloy.createController('members_joined', args).getView();
  Alloy.globals.tabgroup.activeTab.open(foo);
}

function joinGame(game){

}

function leaveGame(game){

}

function changeBtnState(e) {
  if ($.btnJoinLeave.joined) {
    leaveGame();
    $.btnJoinLeave.image = '/images/game_detail/joinGameButton.png';
  } else {
    joinGame();
    $.btnJoinLeave.image = '/images/game_detail/leaveGameButton.png';
  }
  $.btnJoinLeave.joined = ! ($.btnJoinLeave.joined);

}
