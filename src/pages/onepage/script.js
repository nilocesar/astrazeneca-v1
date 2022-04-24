events.on("ready", function () {
  scorm.setCompleted();
  // Helper function for add element box list in WOW
  WOW.prototype.addBox = function (element) {
    this.boxes.push(element);
  };

  var wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  $(".wow")
    .on("scrollSpy:exit", function () {
      $(this)
        .css({
          "animation-name": "none",
        })
        .removeClass("animated");
      wow.addBox(this);
    })
    .scrollSpy();

  // var rellax = new Rellax('.rellax');
});

$(document).scroll(function () {
  $('section').each(function () {
      if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
          // if($(this).attr('id')==="sec1") {
          //     $(".logo").addClass("rotate");
          //     console.log("com rotate");
          // }           
          if($(this).attr('id')==="final") {
              scorm.setCompleted();
          }           
      }
  });
});