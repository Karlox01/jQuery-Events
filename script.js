$(document).ready(function () {
    $("#stream1_btn").on("click", function () { // You can also use $('#stream1_btn').click(function() { You can also use mousedown mouseenter mouseleave etc options.
        // $('.stream1').toggle(1000);
        // $('.stream1').hide(1000);
        // $('.stream1').slideDown(1000);
        $('.stream1').fadeOut(1000);
        $('.stream1').fadeIn(1000);
        $('.stream1').fadeToggle(1000);
        $('.stream1').fadeTo(1000, 0.5); // speed and opacity 0 - 1
       
    });

    //     $(".stream1").removeClass('highlight_stream');
    //     $(".stream2").removeClass('highlight_stream');
    //     $(".stream3").removeClass('highlight_stream');
    //     $(".stream1").addClass('highlight_stream');
    // });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    // $('#myButton').removeClass('blueBox');
    // $('#myButton').addClass('blueBox'); // Standard method of removing and than adding a class
    $('#myButton').removeClass('blueBox').addClass('border'); // This is chaining, You are chaining remove and add topgether.
    $('p').css('color', 'blue').slideUp(2000).slideDown(2000); // Another example of chaining , here we have content slide up than slide down
}); 