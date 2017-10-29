$(window).load(function(){
                $('#myModal').modal('show');
            });
$(document).ready(function(){
   
     $("#parent-login").click(function(){
         
        $("#parent-account").slideDown('slow').css("display","block");
    }); 
    $('.child-login').click(function(){
        $('#parent-account').css("display","none");
    });
 });
 