$(document).ready(function() {
    $('#myCarousel').carousel({
    interval: false
    })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
        //alert("slid");
    });
    
    
});

