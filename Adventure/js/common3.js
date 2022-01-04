
$(document).ready(function(){

// We need to turn it into a function.
// To apply the changes both on document ready and when we resize the browser.

    var ravenous = function() {

// Set the matchMedia

        if (window.matchMedia('(max-width: 768px)').matches)
        {

// Changes when we reach the max-width

           $('.ft-label').toggle(function() {
               $('.content__block').css("padding-top", "280px");
           }, function () {
               $('.content__block').css("padding-top","0px");
               console.log('little screen')
           });

        } else {


            $('.content__block').css("padding-top","0px");
        }
    };
    $(window).resize(ravenous);
    // Call the function
    ravenous();
});