###
CUSTOM
###
jQuery.noConflict() ($) ->
  $(document).ready ->
    alert "請用新版瀏覽器 :-)"  if $.browser.version.substr(0, 1) isnt "1"  if $.browser.msie and $.browser.version.substr(0, 1) < 7
    
    #---- SERVICES LAST BLOCK NO MARGIN ----
    $("ul#services li:last-child").css "margin-right", "0px"
    
    #---- TO TO ARROW ----
    $("#to-top").click ->
      $((if window.opera then "html" else "html, body")).animate
        scrollTop: 0
      , "slow"




###
SCHEDULE
###
jQuery.noConflict() ($) ->
  $(document).ready ->
    $('.popup').each (i, el) ->
      $(el).attr('href', "#intro_#{i}")
      $(el).siblings('pre').attr('id', "intro_#{i}")

    $('.popup').fancybox()

###
MAP
###
jQuery.noConflict() ($) ->
  $(document).ready ->
    if $("#map_link").length isnt 0
      $("#map_link").click ->
        $("#map_iframe").attr "src", "http://maps.google.com/maps/ms?msid=214503238037408218491.0004b8d230d9f25821783&msa=0&ll=25.043586,121.616453&spn=0.007173,0.013926&output=embed"

      $("#map_link").fancybox
        autoScale: false
        transitionIn: "elastic"
        transitionOut: "elastic"



