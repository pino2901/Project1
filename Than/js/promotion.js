$(document).ready(function(){
    $("a[href='?option=promotion']").css({"border":"1px solid white"});

    form_ok = 0;
    $("input[name=codepd]").on('blur, keyup', function() {
        if($(this).val()!=""){
            $.ajax({
                url:"check_pm.php",
                type:'post',
                data:"codepd="+$(this).val(),
                dataType:'json',
                async:true,
                success:function(kq){
                    if(typeof kq.error != "undefined"){
                        form_ok = 1;
                        $("#checkcodepd_pm").html(kq.error);
                        $("#cpd").css({
                            "border":"2px solid #dadada",
                            "outline":"none",
                            "border-color":"#ED9E9E",
                            "box-shadow":"0 0 10px #ED9E9E"
                            });                                                                               
                    }else{
                        form_ok = 0;
                        $("#checkcodepd_pm").html('');
                        $("input[name=codepd]").attr({"style":""});  
                    }
                }
            });
            
        }
        
    });
    
           

    $("input[name=codepd]").on('focus, click', function() {            
        $(this).next(".check_error").html('');
        $(this).attr({"style":""});  
        form_ok = 0;
    });
    $("input[name=percent]").on('focus, click, keyup', function() {
        value = $(this).val();
        if(value!=""){
            validation_pattern = new RegExp('^[0-9]*$');
            if(!validation_pattern.test(value)){
                $("#check_percent").html("Please enter the number!");
                $(this).css({
                    "border":"2px solid #dadada",
                    "outline":"none",
                    "border-color":"#ED9E9E",
                    "box-shadow":"0 0 10px #ED9E9E"
                });
            }else{
                $("#check_percent").html("");
                $(this).attr({"style":""});
            }
        }else{
            $("#check_percent").html("");
            $(this).attr({"style":""});
        }
    });

    $("form").submit(function(e){
       
         
        if(form_ok!=0){  
            e.preventDefault();              
            $("input[name=codepd]").focus();
        }else{
            
            $(this).unbind('submit').submit();
        }
        
    });

    $("input").on("keyup",function(){
            if(typeof $(this).attr('maxlength') !== "undefined" && $(this).attr('maxlength') !== false ){
                length = $(this).val().length;
                max = parseInt($(this).attr('maxlength'));
                if(length!=0){
                    $(this).next(".maxlengthpm").html("("+length+"/"+max+" characters)");
                }else{
                    $(this).next(".maxlengthpm").html("");
                }                   
            }
        });

});
function exit_home(){
    location.assign('index.php');
}
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}