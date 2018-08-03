$('.accordian').click(function () {
    //$('.slider').slideToggle("slow");
    //alert('hello');
    $(this).toggleClass('active');
    /// alert($(this).next().css('display'));
    if ($(this).next().css('display') === 'none') {
        $(this).next().css("display", "block");
    } else {
        $(this).next().css("display", "none");
    }
});

$('#reponsivebar').click(function () {
     //alert($('#navbarchange').hasClass('topnavbar'));
    if ($('#navbarchange').attr('class')==='topnavbar') {
        $('#navbarchange').addClass('responsive');
    } else {
        $('#navbarchange').attr('class', 'topnavbar');
    }
});

$('#launchModal').click(function(){

    $('#myModal').css('display','block');

});


$('span').click(function(){

    $('#myModal').css('display','none');


});

window.onclick = function(event) {
    if (event.target == $('#myModal')) {
        // $('#myModal').style.display = "none";
        $('#myModal').css('display','none');
    }
}








// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("launchModal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }