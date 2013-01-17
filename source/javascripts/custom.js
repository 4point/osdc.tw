/***************************************************
			CUSTOM
***************************************************/

jQuery.noConflict()(function($){
    $(document).ready(function() {

        if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
          if ($.browser.version.substr(0, 1) !== '1') {
            alert('請用新版瀏覽器 :-)');
          }
        }

	  /*---- TABLE EVEN ROW BG ----*/	  
	   $('table.even tr:nth-child(even)').css( 'background', '#fdfdfd');
	   
	  /*---- SERVICES LAST BLOCK NO MARGIN ----*/
	  $('ul#services li:last-child').css('margin-right', '0px');    
	  
	  /*---- TO TO ARROW ----*/
      $('#to-top').click(function() {
		    $(window.opera ? 'html' : 'html, body').animate({
		        scrollTop: 0
		    }, 'slow');
        });
	
	 });
});


/***************************************************
		    SPEAKER
***************************************************/
jQuery.noConflict()(function($){
    $(document).ready(function() {
        $('.who-we-are-right ul li').click(function() {
            $.curr_speaker_id = $(this).attr('rel');
            $('.speaker_intro_block').slideUp();
            $('#'+$.curr_speaker_id).slideDown();
        }); 
    });
});

/***************************************************
		    MAP
***************************************************/
jQuery.noConflict()(function($){
    $(document).ready(function() {
        if ($('#map_link').length !== 0) {
            $('#map_link').click(function(){
                $('#map_iframe').attr("src","http://maps.google.com/maps/ms?msid=214503238037408218491.0004b8d230d9f25821783&msa=0&ll=25.043586,121.616453&spn=0.007173,0.013926&output=embed");
            });
            $('#map_link').fancybox({
                'autoScale'		: false,
                'transitionIn'	: 'elastic',
                'transitionOut'	: 'elastic',
            });
        }
    });
});

