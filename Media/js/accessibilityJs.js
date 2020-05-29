//==============================================================================//
var mac2 = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

var intorIns = "Here is a Venn diagram. What type of shapes would belong in each category? What type of shapes would belong in more than one category?";
var activityText = "Click each shape to see where it belongs in the diagram. Select the correct lablel when you think you know the category for each circle.";
//var txt_puzzle = 1;
var initialIns = true;
var initialResetBtn = false;
var puzzle1_ansArr = ["Regular", "Concave", "Irregular"];
var puzzle1_valArr =[];
var resultArry =[];
var setA = "";
var setBC ="";
var setC ="";
var count = 1;
var shapesArr = [];
////========================================================================////

$(document).keyup(function(event){
    if (event.keyCode == 27) {
        $("#startIntro").blur();
        $("#btn_back").blur();
        $("#rdobtn01").blur();       
        $("#rdobtn02").blur();
        $("#openIns").blur();
        $("#closeIns").blur();      
       }else{

         event.preventDefault();
      }
});

$("#startIntro").keyup(function(event) { 
            if (event.keyCode === 13) { 
              $("#welcome").hide();
              $("#updateText").text(activityText);
              $("#activityArea").show();
              $("#txt_puzzle").text(count);
            } 
            $("#openIns").focus(); 
        });

$("#btn_back").keyup(function(event) { 
          if(event.keyCode == 13){
            $("#welcome").show();
            $("#activityArea").hide();
            $("#intorIns").text(intorIns);
            $("#instruction").animate({ top: "987px"},0);
            
              count = 1;
              var id = [];
              var resultArry =[];
              var setA = "";
              var setB ="";
              var setC ="";
              // $(".menu_item_img_disable").each(function(){

              //   id = $(this).attr("id");
              //   imgSrc = $("#"+id).attr("src");
              //   imgIndex = imgSrc.lastIndexOf("/");
              //   imgName = imgSrc.substring(imgIndex+1, 20);
              //   // if(("#"+id).attr("src")!=="")
              //   //console.log(id +":"+ imgName);
              //   if(imgName != ""){
              //     $("#"+id).attr("src","Media/img/toolbar/"+imgName+".png").addClass("menu_item_img")
              //     .removeClass("menu_item_img_disable menu_item_img_distate");
              //   }	
                
              //   $("img").remove(".rotate_img");

              // });
              $("#btn_puzzle").css("display","block");
	          	$("#menu_container > img").remove("#btn_puzzleDis");
			        $("img").remove(".rotate_img");
              $("#menu_third").removeClass("menu_item_img_distate").css({"color":"#ccc"});
              $("#checkCorrectAns").hide();
              $("#dropdown-a").hide();
              $("#dropdown-b").hide();
              $("#dropdown-c").hide();
              $("#verifyAnswer").hide();
              $("#resultText").hide();
              $("#ansVal_a").text("Label A");
              $("#ansVal_b").text("Label B");
              $("#ansVal_c").text("Label C");
              $(".dropdown-content-a").css("display","none");
              $(".dropdown-content-b").css("display","none");
              $(".dropdown-content-c").css("display","none");


          }
          $("#startIntro").focus();  

});

$("#openIns").keyup(function(event) { 
            if (event.keyCode === 13) { 
            
              $("#instruction").animate({
                      top: "-90px",
                 }, 1000);
                 initialIns = true;
                 $("#closeIns").attr("tabindex","3");
            } 
        });

$("#closeIns").keyup(function(event) { 
 
            if (event.keyCode === 13) {
              $("#closeIns").removeAttr("tabindex");		
              $("#instruction").animate({
                      top: "987px",
                 }, 1000);
                 initialIns = false;	 
              $("#btn_puzzle").focus();   
                //$("#btn_puzzle_1").attr("tabindex","9");
            } 
              
        });


$("#dropdown-a").keyup(function(event) { 
    
    if (event.keyCode === 13) { 
      $(".dropdown-content-a").toggle();
      $(".dropdown-content-b").hide();
      $(".dropdown-content-c").hide();
    }
      
});
$("#dropdown-b").keyup(function(event) { 
    
  if (event.keyCode === 13) { 
    $(".dropdown-content-b").toggle();
		$(".dropdown-content-a").hide();
		$(".dropdown-content-c").hide()
  }
    
});

$("#dropdown-c").keyup(function(event) { 
    
  if (event.keyCode === 13) { 
    $(".dropdown-content-c").toggle();
		$(".dropdown-content-b").hide();
		$(".dropdown-content-a").hide();
  }
    
});



$("#menu_first").keyup(function(event) { 
    if (event.keyCode === 13) { 
      count++;
      $('#txt_puzzle').html(" "+count);
    
        var resultArry =[];
        var setA = "";
        var setB ="";
        var setC ="";
  
        $("#btn_puzzle").css("display","block");
	    	$("#menu_container > img").remove("#btn_puzzleDis");
			  $("img").remove(".rotate_img");
        $("#menu_third").removeClass("menu_item_img_distate").css({"color":"#ccc"});
        $("#checkCorrectAns").hide();
        $("#dropdown-a").hide();
        $("#dropdown-b").hide();
        $("#dropdown-c").hide();
        $("#verifyAnswer").hide();
        $("#resultText").hide();
        $("#ansVal_a").text("Label A");
        $("#ansVal_b").text("Label B");
        $("#ansVal_c").text("Label C");
        $(".dropdown-content-a").css("display","none");
        $(".dropdown-content-b").css("display","none");
        $(".dropdown-content-c").css("display","none");
          
      if(count == 5){			
        $("#menu_reset").show();
        $("#menu_first").hide();
        var id = [];
        var resultArry =[];
        var setA = "";
        var setBC ="";
        var setC ="";
  
        $("#btn_puzzle").css("display","block");
        $("#menu_container > img").remove("#btn_puzzleDis");
			  $("img").remove(".rotate_img");
        $("#menu_third").removeClass("menu_item_img_distate").css({"color":"#ccc"});
        $("#checkCorrectAns").hide();
        $("#dropdown-a").hide();
        $("#dropdown-b").hide();
        $("#dropdown-c").hide();
        $("#verifyAnswer").hide();
        $("#resultText").hide();
        $("#ansVal_a").text("Label A");
        $("#ansVal_b").text("Label B");
        $("#ansVal_c").text("Label C");
        $(".dropdown-content-a").css("display","none");
        $(".dropdown-content-b").css("display","none");
        $(".dropdown-content-c").css("display","none");
      }
          
    
  } 
});

$("#menu_reset").keyup(function(event) { 
            if (event.keyCode === 13) {
              count = 1;
              $('#txt_puzzle').html(" "+count);
              $("#menu_reset").hide();
              $("#menu_first").show();	
              if(count == 1){
              var id = [];
                var resultArry =[];
                var setA = "";
                var setB ="";
                var setC ="";
                


                $("#btn_puzzle").css("display","block");
	            	$("#menu_container > img").remove("#btn_puzzleDis");
		        	  $("img").remove(".rotate_img");
                $("#menu_third").removeClass("menu_item_img_distate").css({"color":"#ccc"});
                $("#checkCorrectAns").hide();
                $("#dropdown-a").hide();
                $("#dropdown-b").hide();
                $("#dropdown-c").hide();
                $("#verifyAnswer").hide();
                $("#resultText").hide();
                $("#ansVal_a").text("Label A");
                $("#ansVal_b").text("Label B");
                $("#ansVal_c").text("Label C");
                $(".dropdown-content-a").css("display","none");
                $(".dropdown-content-b").css("display","none");
                $(".dropdown-content-c").css("display","none");
              
              }		               

            } 

        });

$("#verifyAnswer").keyup(function(event) { 
  if (event.keyCode === 13) {     
    if(count == 1){
      //alert(count);
      compareResult1();
      $("#btn_back").focus();
    }
    if(count == 2){
      //alert(count);
      compareResult2();
      $("#btn_back").focus();
    }
    if(count == 3){
      //alert(count);
      compareResult3();
      $("#btn_back").focus();
    }
    if(count == 4){
      //alert(count);
      compareResult4();
      $("#btn_back").focus();
    }
    if(count == 5){
      compareResult5();
      $("#btn_back").focus();
    }      	               
  } 

});

$("#menu_third").keyup(function(event) { 
  if (event.keyCode === 13) {     
    if(count == 1){
      $("#checkCorrectAns").attr("src","Media/img/correctAns1.png");
      $("#checkCorrectAns").show();
    }
    if(count == 2){
      $("#checkCorrectAns").attr("src","Media/img/correctAns2.png");
      $("#checkCorrectAns").show();
    }
    if(count == 3){
      $("#checkCorrectAns").attr("src","Media/img/correctAns3.png");
      $("#checkCorrectAns").show();
    }
    if(count == 4){
      $("#checkCorrectAns").attr("src","Media/img/correctAns4.png");
      $("#checkCorrectAns").show();
    }
    if(count == 5){
      $("#checkCorrectAns").attr("src","Media/img/correctAns5.png");
      $("#checkCorrectAns").show();
    }  	               
  } 

});



$("#menu_second").keyup(function(event) { 
  if (event.keyCode === 13) {     
    var id = [];
		var resultArry =[];
		var setA = "";
		var setB ="";
    var setC ="";
    
    $("#btn_puzzle").css("display","block");
		$("#menu_container > img").remove("#btn_puzzleDis");
		$("img").remove(".rotate_img");
    $("#menu_third").removeClass("menu_item_img_distate").css({"color":"#ccc"});
		$("#checkCorrectAns").hide();
		$("#dropdown-a").hide();
		$("#dropdown-b").hide();
		$("#dropdown-c").hide();
		$("#verifyAnswer").hide();
		$("#resultText").hide();
		$("#ansVal_a").text("Label A");
		$("#ansVal_b").text("Label B");
    $("#ansVal_c").text("Label C");   
    $(".dropdown-content-a").css("display","none");
    $(".dropdown-content-b").css("display","none");
    $(".dropdown-content-c").css("display","none"); 
   
  } 

});

$(".menu_item_img").keyup(function(event){
  if(event.keyCode ===13){} 
});
$(".menu_item_img").keyup(function(event){

  if(event.keyCode ===13){
    
    if(count==1){

      itemAnimation01(count);
      itemAnimation02(count);
      itemAnimation03(count);
      itemAnimation04(count);
      itemAnimation05(count);
      itemAnimation06(count);
      itemAnimation07(count);
      itemAnimation08(count);
      itemAnimation09(count);
      itemAnimation10(count);
      itemAnimation11(count);
      itemAnimation12(count);
      itemAnimation13(count);
      itemAnimation14(count);	
     
    }
    if(count==2){
      itemAnimation01(count);
      itemAnimation02(count);
      itemAnimation03(count);
      itemAnimation04(count);
      itemAnimation05(count);
      itemAnimation06(count);
      itemAnimation07(count);
      itemAnimation08(count);
      itemAnimation09(count);
      itemAnimation10(count);
      itemAnimation11(count);
      itemAnimation12(count);
      itemAnimation13(count);
      itemAnimation14(count);
    
    }
    if(count==3){
      itemAnimation01(count);
      itemAnimation02(count);
      itemAnimation03(count);
      itemAnimation04(count);
      itemAnimation05(count);
      itemAnimation06(count);
      itemAnimation07(count);
      itemAnimation08(count);
      itemAnimation09(count);
      itemAnimation10(count);
      itemAnimation11(count);
      itemAnimation12(count);
      itemAnimation13(count);
      itemAnimation14(count);	
     
    }
    if(count==4){
      itemAnimation01(count);
      itemAnimation02(count);
      itemAnimation03(count);
      itemAnimation04(count);
      itemAnimation05(count);
      itemAnimation06(count);
      itemAnimation07(count);
      itemAnimation08(count);
      itemAnimation09(count);
      itemAnimation10(count);
      itemAnimation11(count);
      itemAnimation12(count);
      itemAnimation13(count);
      itemAnimation14(count);	
      
    }
    if(count==5){
      itemAnimation01(count);
      itemAnimation02(count);
      itemAnimation03(count);
      itemAnimation04(count);
      itemAnimation05(count);
      itemAnimation06(count);
      itemAnimation07(count);
      itemAnimation08(count);
      itemAnimation09(count);
      itemAnimation10(count);
      itemAnimation11(count);
      itemAnimation12(count);
      itemAnimation13(count);
      itemAnimation14(count);	
     
    }
    
  }
      
});
 
//=============================================================================//
///////////////////F12 disable code////////////////////////
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
   document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {

    return false;
    }
    }

  function disableCtrlKeyCombination(e)
   {
   //list all CTRL + key combinations you want to disable
   var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j' , 'w');
   var key;
   var isCtrl;
   if(window.event)
   {
   key = window.event.keyCode; //IE
   if(window.event.ctrlKey)
   isCtrl = true;
   else
   isCtrl = false;
   }
   else
   {
   key = e.which; //firefox
   if(e.ctrlKey)
   isCtrl = true;
   else
   isCtrl = false;
   }
   //if ctrl is pressed check if other key is in forbidenKeys array
   if(isCtrl)
   {
   for(i=0; i<forbiddenKeys.length; i++)
   {
   //case-insensitive comparation
   if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
   {
   //alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
   return false;
   }
   }
   }
   return true;
   }
//----------------disable mac command key-------------------------------//
jQuery(window).keydown(function(e) {
  if (e.metaKey || (e.keyCode >= 65 && e.keyCode <= 90)) {
        event.preventDefault();
        event.stopPropagation();
  }
});











