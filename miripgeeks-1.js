//<![CDATA[	
/*GLOBAL SETTINGS, USER CAN CHANGE*/
var disqus_shortname = 'miripgeeks';// disqus custom shortname for moderation
var DATE_FORMAT = 'MMM dd, yyyy';// global date format string for all javascript
if (typeof(PRIMARY_COMMENT_SYSTEM) == 'undefined') {
	var PRIMARY_COMMENT_SYSTEM = 'blogger'; // change the first priority comment system that you want to show to visitors	
}
var DEFAULT_COMMENT_AVATAR = 'http://img1.blogblog.com/img/anon36.png'; // you can upload avatar some where then replace here for default comment avatar
var MAX_REPLY_DEPTH = 2; // number reply depth level under a top comment
var MAX_BREADCRUMB_DEPTH = 2;// number labels will show in breadcrumb
var DEFAULT_POST_THUMBNAIL = 'http://lorempixel.com/400/200/sports/';// leave blank to use random images for non-thumbnail posts
var NUM_BREAK_LINKS = 3;// number break links inside blog posts after excerpt box
var THUMBNAIL_RAINBOW_COLORS = ['#292484,#DC4225', '#81AF59,#A83279', '#417711,#DC4225',  '#E0BE00,#FD340F', '#D38312,#002F4B', '#A83279,#292484', '#002F4B,#417711'];// color list for random for rainbow thumbnail overlay
var COMMENT_EMOTICONS = false; // disable / disable comment emoticon replacer
var COMMENT_MEDIA_ATTACH = false; // enable / disable comment link to media replacer
// var COMMENT_ROLE_TAG = false; // show / hide admin / author tag in comment name
// var COMMENT_SHARE_BUTTONS = true; // show / hide comment sharing button
var SHOW_AFTER_POST_SECTION = 'after-body'; // position for after post section, input none to hide, after post or before comment to show
var NUM_RELATED_POST = 4; // show number related post, set to 0 to disable
var INSTANT_LOAD = false; // instant loading posts without waiting mouse scroll
var GOOGLE_ADS_DELAY_1 = 50; /*number miliseconds delay before move ads from widget to real position on top of post content*/
var GOOGLE_ADS_DELAY_2 = 500; /*number miliseconds delay before move ads from widget to real position of post ads shortcode*/
var STICKY_SIDEBAR = true; // enable / disable sticky sidebar
var STICKY_MENU = 'always';// enable / disable sticky menu

/*
super important function:
http://www.sneeit.com/2015/06/develop-translated-ready-blogger-template.html
*/
function trans(id){var html=$('trans[data-id="'+id+'"]').html();if(typeof(html)=='undefined'||html==''){return id;}
if(typeof(arguments)!='undefined'&&arguments.length>1){var vars=html.split('$$');html='';for(var i=0;i<vars.length;i++){if(vars[i]&&!isNaN(vars[i])&&typeof(arguments[Number(vars[i])])!='undefined'){html+=arguments[Number(vars[i])];}else{if(i>0&&(!(vars[i]&&!isNaN(vars[i-1])&&typeof(arguments[Number(vars[i-1])])!='undefined'))){html+='$$';}
html+=vars[i];}}}
return html;}

//]]>
