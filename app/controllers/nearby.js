/* Add create button for iOS */
if (OS_IOS) {
  $.nearbyWindow.rightNavButton = Ti.UI.createButton({
    title: 'Create'
  });
}

var games = [
  {
    id: '12345',
    sport: "soccer",
    distance: '0.2',
    comment_count: 4,
    nearby_user: {
      id: '007',
      name: 'Saad Malik',
      photo: '/images/profile-photo.png',
      timestamp: '101321312'
    }
  },
  {
    id: '12345',
    sport: "soccer",
    distance: '0.2',
    comment_count: 4,
    nearby_user: {
      id: '007',
      name: 'Saad Malik',
      photo: '/images/profile-photo.png',
      timestamp: '101321312'
    }
  },
  {
    id: '12345',
    sport: "soccer",
    distance: '0.2',
    comment_count: 4,
    nearby_user: {
      id: '007',
      name: 'Saad Malik',
      photo: '/images/profile-photo.png',
      timestamp: '101321312'
    }
  },
  {
    id: '12345',
    sport: "soccer",
    distance: '0.2',
    comment_count: 4,
    nearby_user: {
      id: '007',
      name: 'Saad Malik',
      photo: '/images/profile-photo.png',
      timestamp: '101321312'
    }
  },
  {
    id: '12345',
    sport: "soccer",
    distance: '0.2',
    comment_count: 4,
    nearby_user: {
      id: '007',
      name: 'Saad Malik',
      photo: '/images/profile-photo.png',
      timestamp: '101321312'
    }
  },
];

/* Add games to the scroll view */
for (var i = 0; i < games.length; i += 1) {
  var gameBox = Alloy.createController('game_box', games[i]).getView();
  $.scroller.add(gameBox);
}
