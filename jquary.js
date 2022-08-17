$(document).ready(function () {

    // $(".learn").click(function(){


    //     $(".learn2").append(" this text is add in p tag later to make it big we use append event here to add any text in exciting text by the append tag we can esaily add any line to pera head or any were ");






    // });

    $(".make").hide();

    $(".abou").click(function () {

        $(".make").toggle(1000)
    });

    $(".sp").hide();

    $(".learn").click(function () {

        $(".sp").toggle(200)
    });



    $(".fbutt").click(function () {
        $(".finput").addClass("white"), alert("Your Email submitted successfully");

    });

    $(".sp").on('click', function () {
        if ("finput") {
            $(this).hasClass("show").parent(".accrodian-item").hide();
        }
        else{
            $("this").parent(".accrodian-item").show();
        }
    })





});