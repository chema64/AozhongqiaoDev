$(document).ready(function() {


    $("#collapse1").on("hide.bs.collapse", function() {
        $("#collLink01").html('点击了解更多信息 <span class="glyphicon glyphicon-chevron-down"></span>');
        /*$("#collLink01").addClass("btn-primary");*/
        $("#collLink01").toggleClass("btn-info");
    });
    $("#collapse1").on("show.bs.collapse", function() {
        $("#collLink01").html('点击隐藏 <span class="glyphicon glyphicon-chevron-up"></span>');
        $("#collLink01").toggleClass("btn-info");
    });

    $("#collapse2").on("hide.bs.collapse", function() {
        $("#collLink02").html('点击了解更多信息 <span class="glyphicon glyphicon-chevron-down"></span>');
        $("#collLink02").toggleClass("btn-info");
    });
    $("#collapse2").on("show.bs.collapse", function() {
       $("#collLink02").html('点击隐藏 <span class="glyphicon glyphicon-chevron-up"></span>');
       $("#collLink02").toggleClass("btn-info");
    });

    $("#collapse3").on("hide.bs.collapse", function() {
        $("#collLink03").html('点击了解更多信息 <span class="glyphicon glyphicon-chevron-down"></span>');
        $("#collLink03").toggleClass("btn-info");
    });
    $("#collapse3").on("show.bs.collapse", function() {
       $("#collLink03").html('点击隐藏 <span class="glyphicon glyphicon-chevron-up"></span>');
       $("#collLink03").toggleClass("btn-info");
    });

    $("#collapse4").on("hide.bs.collapse", function() {
        $("#collLink04").html('点击了解更多信息 <span class="glyphicon glyphicon-chevron-down"></span>');
        $("#collLink04").toggleClass("btn-info");
    });
    $("#collapse4").on("show.bs.collapse", function() {
       $("#collLink04").html('点击隐藏 <span class="glyphicon glyphicon-chevron-up"></span>');
       $("#collLink04").toggleClass("btn-info");
    });

    $("#collapse5").on("hide.bs.collapse", function() {
        $("#collLink05").html('点击了解更多信息 <span class="glyphicon glyphicon-chevron-down"></span>');
        $("#collLink05").toggleClass("btn-info");
    });
    $("#collapse5").on("show.bs.collapse", function() {
       $("#collLink05").html('点击隐藏 <span class="glyphicon glyphicon-chevron-up"></span>');
       $("#collLink05").toggleClass("btn-info");
    });



});