var args = arguments[0] || {};

Ti.API.info("ARGUMENTS PASSED TO GAME DETAIL: " + JSON.stringify(args));


function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameDetail, {animated: true});
}

var mountainView = Titanium.Map.createAnnotation({
    latitude:40.578585,
    longitude:-74.290932,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // Custom property to uniquely identify this annotation.
});

$.map_view.annotations = [mountainView];
// Handle click events on any annotations on this map.
$.map_view.addEventListener('click', function(evt) {

    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);

    // Check for all of the possible names that clicksouce
    // can report for the left button/view.
    if (evt.clicksource == 'leftButton' || evt.clicksource == 'leftPane' ||
        evt.clicksource == 'leftView') {
        Ti.API.info("Annotation " + evt.title + ", left button clicked.");
    }
}); 