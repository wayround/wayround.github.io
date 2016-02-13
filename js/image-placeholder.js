


$(window).bind("load", function() {
   
$('#carousel-example-generic > .carousel-inner > .item > div[rel]').each(function() {
	  var rel = $(this).attr('rel');
	  var self = $(this);
	  var img = new Image();
	  $(img).load(rel, '', function() {
	    self.css('background-image', 'url('+rel+')');
	  });
	});

   
});
	
