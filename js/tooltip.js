/**
 * Created by manasabharatesha on 10/5/2016.
 */
$( document ).ready(function() {
    var charLengthIcon = $("#charLengthIcon");
    var capLetterIcon = $("#capLetterIcon");
    var numberIcon = $("#numberIcon");
    var pwMatchIcon = $("#pwMatchIcon");
    var lowLetterIcon = $("#lowLetterIcon");
    var Passuserid = $("#Passuserid");
    var engChar = $("#engChar");
   var userid = $('input[id=uid]');
    var pass = $('input[id=pwd]');
    var strpass = String(pass);
   // var testpasschars = /^[a-zA-Z0-9~_&*%@$]*$/;
    //var strtp = String(testpasschars);
    var pwLength = 0;

    $("#pwd").on("keyup", function () {

        pwLength = this.value.length;

        if (pwLength > 8) {
            charLengthIcon.addClass("pass").removeClass("fail");
        }
        else{
            charLengthIcon.addClass("fail").removeClass("pass");
        }


        if (this.value.match(/[a-z]/g)) {
            lowLetterIcon.addClass("pass").removeClass("fail");
        }
        else{
            lowLetterIcon.addClass("fail").removeClass("pass");
        }


        if (this.value.match(/[A-Z]/g)) {
            capLetterIcon.addClass("pass").removeClass("fail");
        }
        else{
            capLetterIcon.addClass("fail").removeClass("pass");
        }


        if (this.value.match(/[0-9]/g)) {
            numberIcon.addClass("pass").removeClass("fail");
        }
        else{
            numberIcon.addClass("fail").removeClass("pass");
        }
        if(!(pass.val()==userid.val()))

        {
            Passuserid.addClass("pass").removeClass("fail");
        }
        else{
            Passuserid.addClass("fail").removeClass("pass");
        }
        if(/^[a-zA-Z0-9-_.@$]*$/.test(pass.val()))
        {
            engChar.addClass("pass").removeClass("fail");
        }
        else{
            //alert("fail");
            engChar.addClass("fail").removeClass("pass");
        }




    });


    $("#pwd, #pwd2").on("focusin", function(){
        $(".tooltip").toggleClass("visible");
    });

    $("#pwd, #pwd2").on("focusout", function(){
        $(".tooltip").toggleClass("visible");
    });


    });