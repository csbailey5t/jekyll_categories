$(document).ready(function() {
    $('#grad').hide();
    $('#undergrad').hide();
    $('#other').hide();

    $("#undergrad_btn").on('click', function() {
        $("#institutions").hide();
        $("#other").hide();
        $("#grad").hide();
        $("#undergrad").show();
    });

    $("#grad_btn").on('click', function() {
        $("#institutions").hide();
        $("#other").hide();
        $("#undergrad").hide();
        $("#grad").show();
    });

    $("#other_btn").on('click', function() {
        $("#institutions").hide();
        $("#undergrad").hide();
        $("#grad").hide();
        $("#other").show();
    });

    $("#all_btn").on('click', function() {
        $("#other").hide();
        $("#undergrad").hide();
        $("#grad").hide();
        $("#institutions").show();
    });
});
