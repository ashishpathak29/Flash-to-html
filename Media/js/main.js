/*variable -------------------------------*/
var intorIns = "Here is a Venn diagram. What type of shapes would belong in each category? What type of shapes would belong in more than one category?";
var activityText = "Click each shape to see where it belongs in the diagram. Select the correct lablel when you think you know the category for each circle.";
//var txt_puzzle = 1;
var initialIns = true;
var initialResetBtn = false;
var puzzle1_ansArr = ["Regular", "Concave", "Irregular"];

var resultArry =[];
var result2Arry =[];
var result3Arry =[];
var result4Arry =[];
var resul5tArry =[];
var setA = "";
var setB = "";
var setC ="";
// var setAB =""; 
// var setAC = "";
// var setBC ="";
// var setABC = "";
var count = 1;
var shapesArr = [];


//------------------------------------------------------------------//

$(document).ready(function(){	
	
	
	console.log(count);
	$(".menu_item_img").each(function(){

		shapesArr =$(this).attr("id");		
			//console.log(shapesArr);		
   });	

	$("#intorIns").text(intorIns);
	

	$("#startIntro").click(function(){		
		
		$("#welcome").hide();
		$("#updateText").text(activityText);
		$("#activityArea").show();
		$("#txt_puzzle").text(count);
	});

	
	$("#btn_back").click(function(){
		
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
		
			$("#btn_puzzle").css("display","block");
		    $("#menu_container > img").remove("#btn_puzzleDis");
			$("img").remove(".rotate_img");
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
			
	});

	$("#openIns").click(function(){		
		$("#closeIns").attr("tabindex","9");
		$("#instruction").animate({
   				 top: "-90px",
   		}, 1000);
   		initialIns = true;
   			
		//$("#instruction .bottomBtn").css('bottom','1098px');
	});
	$("#closeIns").click(function(){
		$("#closeIns").removeAttr("tabindex");		
		$("#instruction").animate({
   				 top: "987px",
   		}, 1000);
   		initialIns = false;			
		//$("#instruction .bottomBtn").css('bottom','20px');
	});

	/* instruction code end*/
	
	$("#dropdown-a").click(function(){
		$(".dropdown-content-a").toggle();
		$(".dropdown-content-b").hide();
		$(".dropdown-content-c").hide();

	});
	$("#dropdown-b").click(function(){
		$(".dropdown-content-b").toggle();
		$(".dropdown-content-a").hide();
		$(".dropdown-content-c").hide();

	});
	$("#dropdown-c").click(function(){
		$(".dropdown-content-c").toggle();
		$(".dropdown-content-b").hide();
		$(".dropdown-content-a").hide();

	});

 
	$("#menu_first").click(function(){
		count++;
		$('#txt_puzzle').html(" "+count);
		
		
			var resultArry =[];
			var setA = "";
			var setB ="";
			var setC ="";
			$("#btn_puzzle").css("display","block");
			$("#menu_container > img").remove("#btn_puzzleDis");
			$("img").remove(".rotate_img");
			$("#checkCorrectAns").hide();
			$("#dropdown-a").hide();
			$("#dropdown-b").hide();
			$("#dropdown-c").hide();
			$("#verifyAnswer").hide();
			$("#resultText").hide();
			$("#ansVal_a").text("Label A");
			$("#ansVal_b").text("Label B");
			$("#ansVal_c").text("Label C");
				
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
  });
  
  $("#menu_reset").click(function(){
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
			$(".dropdown-content-a").css("display","none");
			$(".dropdown-content-b").css("display","none");
			$(".dropdown-content-c").css("display","none");
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
		
		}		
	});	

$(".menu_item_img").click(function(){
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
	
});


/*Check Final Answer*/

$("#verifyAnswer").click(function(){

	if(count == 1){
		//alert(count);
		compareResult1();
	}
	if(count == 2){
		//alert(count);
		compareResult2();
	}
	if(count == 3){
		//alert(count);
		compareResult3();
	}
	if(count == 4){
		//alert(count);
		compareResult4();
	}
	if(count == 5){
		compareResult5();
	}
	

});

/*Clear Button */
$("#menu_second").click(function(){
		
		var id = [];
		var resultArry =[];
		var setA = "";
		var setB ="";
		var setC ="";
		$("#btn_puzzle").css("display","block");
		$("#menu_container > img").remove("#btn_puzzleDis");
		$("img").remove(".rotate_img");
		$(".dropdown-content-a").css("display","none");
		$(".dropdown-content-b").css("display","none");
		$(".dropdown-content-c").css("display","none");
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
			
});

$("#menu_third").click(function(){
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

});
	
});//document end


function itemAnimation01(count){
	
	
    if(count == 1){
			//console.log(count);
				
		$("#menu_container").append('<img src="Media/img/toolbar/tool-bar01.png" class="menu_item_img_disable" id="btn_puzzleDis">');
		$("#btn_puzzle").css("display","none");      
        $("#activityArea").append('<img src="Media/img/menu/1icon.png" class="rotate_img" id="rotImg1">');
        $("#rotImg1").attr({"set":"abc"}); 
        var angle =60;
        
        var top = $("#rotImg1").css("top");
        top = parseInt(top);
        var pos = 0;
        var id = setInterval(startAnimation, 100);
        
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg1").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 136){
                
                $("#rotImg1").animate({
                    top:230,
                    left:300,
                    width:150
                },300);
                
            }if(top == 138){
                $("#rotImg1").animate({
                    top:500,
                    left:500,
                    width:200,
                },300);
            }if(top == 140){
                //angle = angle + 240;
                $("#rotImg1").css({'transform': 'rotate(' + 240 + 'deg)'});						
                $("#rotImg1").animate({
                    top:290,
                    left:565,
                    width:50
                },100);
				//alert();
				
			   // enbleDropdownList_A();
			    puzzle1();
				clearInterval(id);
				
            }
            
			
        }
    
    

}	
if(count == 2){
	//console.log(count);
	$("#menu_container").append('<img src="Media/img/toolbar/tool-bar01.png" class="menu_item_img_disable" id="btn_puzzleDis">');
	$("#btn_puzzle").css("display","none");
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});     
	$("#activityArea").append('<img src="Media/img/menu/1icon.png" class="rotate_img" id="rotImg1">');
	
	$("#rotImg1").attr({"set":"abc"}); 
	var id = setInterval(startAnimation, 100);
	var angle =60;
	
	var top = $("#rotImg1").css("top");
	top = parseInt(top);
	var pos = 0;
	
	
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg1").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 136){
			
			$("#rotImg1").animate({
				top:230,
				left:300,
				width:150
			},300);
			
		}if(top == 138){
			$("#rotImg1").animate({
				top:450,
				left:400,
				width:200,
			},300);
		}if(top == 140){
			//angle = angle + 240;
			$("#rotImg1").css({'transform': 'rotate(' + 240 + 'deg)'});						
			$("#rotImg1").animate({
				top:540,
				left:655,
				width:50
			},500,);
			//alert();
			puzzle2();
			clearInterval(id);
			
		}
		

	}
}	
if(count == 3){

    $("#menu_container").append('<img src="Media/img/toolbar/tool-bar01.png" class="menu_item_img_disable" id="btn_puzzleDis">');
		$("#btn_puzzle").css("display","none");
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});     
        $("#activityArea").append('<img src="Media/img/menu/1icon.png" class="rotate_img" id="rotImg1">');
        $("#rotImg1").attr({"set":"abc"}); 

        var angle =60;
        
        var top = $("#rotImg1").css("top");
        top = parseInt(top);
        var pos = 0;
        var id = setInterval(startAnimation, 100)
        
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg1").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 136){
                
                $("#rotImg1").animate({
                    top:230,
                    left:300,
                    width:150
                },300);
                
            }if(top == 138){
                $("#rotImg1").animate({
                    top:500,
                    left:500,
                    width:200,
                },300);
            }if(top == 140){
                //angle = angle + 240;
                $("#rotImg1").css({'transform': 'rotate(' + 240 + 'deg)'});						
                $("#rotImg1").animate({
                    top:435,
                    left:765,
                    width:50
                },500);
                //alert();
                puzzle3();
                clearInterval(id);
            }
            

        }
}	
if(count == 4){

		$("#menu_container").append('<img src="Media/img/toolbar/tool-bar01.png" class="menu_item_img_disable" id="btn_puzzleDis">');
		$("#btn_puzzle").css("display","none");
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});     
        $("#activityArea").append('<img src="Media/img/menu/1icon.png" class="rotate_img" id="rotImg1">');
        $("#rotImg1").attr({"set":"abc" }); 

        var angle =60;
        
        var top = $("#rotImg1").css("top");
        top = parseInt(top);
        var pos = 0;
        var id = setInterval(startAnimation, 100)
        
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg1").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 136){
                
                $("#rotImg1").animate({
                    top:230,
                    left:300,
                    width:150
                },300);
                
            }if(top == 138){
                $("#rotImg1").animate({
                    top:500,
                    left:500,
                    width:200,
                },300);
            }if(top == 140){
                //angle = angle + 240;
                $("#rotImg1").css({'transform': 'rotate(' + 240 + 'deg)'});						
                $("#rotImg1").animate({
                    top:580,
                    left:654,
                    width:50
                },500);
                //alert();
                puzzle4();
                clearInterval(id);
            }
            

        }
}

if(count == 5){

	$("#menu_container").append('<img src="Media/img/toolbar/tool-bar01.png" class="menu_item_img_disable" id="btn_puzzleDis">');
	$("#btn_puzzle").css("display","none");
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});     
	$("#activityArea").append('<img src="Media/img/menu/1icon.png" class="rotate_img" id="rotImg1">');
	$("#rotImg1").attr({"set":"abc", "correctAns":"Regular"}); 

	var angle =60;
	
	var top = $("#rotImg1").css("top");
	top = parseInt(top);
	var pos = 0;
	var id = setInterval(startAnimation, 100)
	
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg1").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 136){
			
			$("#rotImg1").animate({
				top:230,
				left:300,
				width:150
			},300);
			
		}if(top == 138){
			$("#rotImg1").animate({
				top:500,
				left:500,
				width:200,
			},300);
		}if(top == 140){
			//angle = angle + 240;
			$("#rotImg1").css({'transform': 'rotate(' + 240 + 'deg)'});						
			$("#rotImg1").animate({
				top:465,
				left:800,
				width:50
			},500);
			//alert();
			puzzle5();
			clearInterval(id);
		}
		

	}
}//5th if	
}

/*item 2*/
function itemAnimation02(){

    if(count == 1){			
       
        
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
      
        var angle =60;   
        $("#activityArea").append('<img src="Media/img/menu/2icon.png" class="rotate_img" id="rotImg2">');
        $("#rotImg2").attr({"set":"abc", "correctAns":"Irregular"}); 
      
        var top = $("#rotImg2").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg2").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
           // console.log(top);
            if(top == 139){

                $("#rotImg2").animate({
                    top:230,
                    left:300,
                    width:150
                },200);
                
            }if(top == 141){
                $("#rotImg2").animate({
                    top:430,
                    left:500,
                    width:200,
                },200);
            }if(top == 143){
                //angle = angle + 240;
                $("#rotImg2").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg2").animate({
                    top:645,
                    left:790,
                    width:54
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

  
        
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
      
        var angle =60;   
        $("#activityArea").append('<img src="Media/img/menu/2icon.png" class="rotate_img" id="rotImg2">');
        $("#rotImg2").attr({"set":"abc", "correctAns":"Tringle"}); 
      
        var top = $("#rotImg2").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg2").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
           // console.log(top);
            if(top == 139){

                $("#rotImg2").animate({
                    top:230,
                    left:300,
                    width:150
                },200);
                
            }if(top == 141){
                $("#rotImg2").animate({
                    top:430,
                    left:500,
                    width:200,
                },200);
            }if(top == 143){
                //angle = angle + 240;
                $("#rotImg2").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg2").animate({
                    top:445,
                    left:545,
                    width:54
                },200);
				puzzle2();	
                clearInterval(id);
            }
            

        }
}	
if(count == 3){

	
	
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
  
	var angle =60;   
	$("#activityArea").append('<img src="Media/img/menu/2icon.png" class="rotate_img" id="rotImg2">');
	$("#rotImg2").attr({"set":"abc" }); 
  
	var top = $("#rotImg2").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg2").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 139){

			$("#rotImg2").animate({
				top:230,
				left:300,
				width:150
			},200);
			
		}if(top == 141){
			$("#rotImg2").animate({
				top:430,
				left:500,
				width:200,
			},200);
		}if(top == 143){
			//angle = angle + 240;
			$("#rotImg2").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg2").animate({
				top:560,
				left:625,
				width:54
			},200);
			puzzle3();	
			clearInterval(id);
		}
		

	}
}	
if(count == 4){


	
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
  
	var angle =60;   
	$("#activityArea").append('<img src="Media/img/menu/2icon.png" class="rotate_img" id="rotImg2">');
	$("#rotImg2").attr({"set":"abc" }); 
  
	var top = $("#rotImg2").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg2").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 139){

			$("#rotImg2").animate({
				top:230,
				left:300,
				width:150
			},200);
			
		}if(top == 141){
			$("#rotImg2").animate({
				top:430,
				left:500,
				width:200,
			},200);
		}if(top == 143){
			//angle = angle + 240;
			$("#rotImg2").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg2").animate({
				top:570,
				left:710,
				width:54
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){


	
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
  
	var angle =60;   
	$("#activityArea").append('<img src="Media/img/menu/2icon.png" class="rotate_img" id="rotImg2">');
	$("#rotImg2").attr({"set":"abc", "correctAns":"Irregular"}); 
  
	var top = $("#rotImg2").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg2").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 139){

			$("#rotImg2").animate({
				top:230,
				left:300,
				width:150
			},200);
			
		}if(top == 141){
			$("#rotImg2").animate({
				top:430,
				left:500,
				width:200,
			},200);
		}if(top == 143){
			//angle = angle + 240;
			$("#rotImg2").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg2").animate({
				top:600,
				left:850,
				width:54
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	

}

/*item 3*/
function itemAnimation03(){
    if(count == 1){			
       
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
       
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/3icon.png" class="rotate_img" id="rotImg3">');
        $("#rotImg3").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg3").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg3").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 333){

                $("#rotImg3").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 335){
                $("#rotImg3").animate({
                    top:530,
                    left:500,
                    width:200,
                },200);
            }if(top == 335){
                //angle = angle + 240;
                $("#rotImg3").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg3").animate({
                    top:645,
                    left:892,
                    width:85
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

	
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/3icon.png" class="rotate_img" id="rotImg3">');
	$("#rotImg3").attr({"set":"abc", "correctAns":"Line Symmetry"}); 
	var top = $("#rotImg3").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg3").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 333){

			$("#rotImg3").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 335){
			$("#rotImg3").animate({
				top:530,
				left:500,
				width:200,
			},200);
		}if(top == 335){
			//angle = angle + 240;
			$("#rotImg3").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg3").animate({
				top:297,
				left:700,
				width:85
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/3icon.png" class="rotate_img" id="rotImg3">');
	$("#rotImg3").attr({"set":"abc" }); 
	var top = $("#rotImg3").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg3").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 333){

			$("#rotImg3").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 335){
			$("#rotImg3").animate({
				top:530,
				left:500,
				width:200,
			},200);
		}if(top == 335){
			//angle = angle + 240;
			$("#rotImg3").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg3").animate({
				top:433,
				left:560,
				width:85
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){


   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/3icon.png" class="rotate_img" id="rotImg3">');
	$("#rotImg3").attr({"set":"abc" }); 
	var top = $("#rotImg3").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg3").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 333){

			$("#rotImg3").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 335){
			$("#rotImg3").animate({
				top:530,
				left:500,
				width:200,
			},200);
		}if(top == 335){
			//angle = angle + 240;
			$("#rotImg3").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg3").animate({
				top:650,
				left:676,
				width:85
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/3icon.png" class="rotate_img" id="rotImg3">');
	$("#rotImg3").attr({"set":"abc" }); 
	var top = $("#rotImg3").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg3").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 333){

			$("#rotImg3").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 335){
			$("#rotImg3").animate({
				top:530,
				left:500,
				width:200,
			},200);
		}if(top == 335){
			//angle = angle + 240;
			$("#rotImg3").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg3").animate({
				top:635,
				left:460,
				width:85
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}

/*item 4*/
function itemAnimation04(){
    if(count == 1){

		
        $("#btn_puzzle_4").attr({"src":"Media/img/toolbar/04_tr.png"}).removeClass('menu_item_img')
        .addClass("menu_item_img_disable menu_item_img_distate");
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
        
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/4icon.png" class="rotate_img" id="rotImg4">');
        $("#rotImg4").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg4").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg4").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 329){

                $("#rotImg4").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 331){
                $("#rotImg4").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 333){
                //angle = angle + 240;
                $("#rotImg4").css({'transform': 'rotate(' + 270 + 'deg)'});						
                $("#rotImg4").animate({
                    top:294,
                    left:660,
                    width:40
                },200);
				puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/4icon.png" class="rotate_img" id="rotImg4">');
	$("#rotImg4").attr({"set":"abc", "correctAns":"Regular"}); 
	var top = $("#rotImg4").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg4").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 329){

			$("#rotImg4").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 331){
			$("#rotImg4").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 333){
			//angle = angle + 240;
			$("#rotImg4").css({'transform': 'rotate(' + 270 + 'deg)'});						
			$("#rotImg4").animate({
				top:430,
				left:732,
				width:40
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

    
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/4icon.png" class="rotate_img" id="rotImg4">');
        $("#rotImg4").attr({"set":"abc", "correctAns":"Not Concave"}); 
        var top = $("#rotImg4").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg4").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 329){

                $("#rotImg4").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 331){
                $("#rotImg4").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 333){
                //angle = angle + 240;
                $("#rotImg4").css({'transform': 'rotate(' + 270 + 'deg)'});						
                $("#rotImg4").animate({
                    top:320,
                    left:663,
                    width:40
                },200);
                puzzle3();
                clearInterval(id);
            }
            

        }
}	
if(count == 4){

	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/4icon.png" class="rotate_img" id="rotImg4">');
	$("#rotImg4").attr({"set":"abc" }); 
	var top = $("#rotImg4").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg4").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 329){

			$("#rotImg4").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 331){
			$("#rotImg4").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 333){
			//angle = angle + 240;
			$("#rotImg4").css({'transform': 'rotate(' + 270 + 'deg)'});						
			$("#rotImg4").animate({
				top:660,
				left:620,
				width:40
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/4icon.png" class="rotate_img" id="rotImg4">');
	$("#rotImg4").attr({"set":"abc" }); 
	var top = $("#rotImg4").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg4").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 329){

			$("#rotImg4").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 331){
			$("#rotImg4").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 333){
			//angle = angle + 240;
			$("#rotImg4").css({'transform': 'rotate(' + 270 + 'deg)'});						
			$("#rotImg4").animate({
				top:445,
				left:552,
				width:40
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}

}

/*item 5*/
function itemAnimation05(){
    if(count == 1){
		
     
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/5icon.png" class="rotate_img" id="rotImg5">');
        $("#rotImg5").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg5").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg5").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            console.log(top);
            if(top == 419){

                $("#rotImg5").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 421){
                $("#rotImg5").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 423){
                //angle = angle + 240;
                $("#rotImg5").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg5").animate({
                    top:572,
                    left:820,
                    width:115
                },200);
				puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/5icon.png" class="rotate_img" id="rotImg5">');
	$("#rotImg5").attr({"set":"abc", "correctAns":"Triangle"}); 
	var top = $("#rotImg5").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg5").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 419){

			$("#rotImg5").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 421){
			$("#rotImg5").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 423){
			//angle = angle + 240;
			$("#rotImg5").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg5").animate({
				top:645,
				left:463,
				width:115
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){


  
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/5icon.png" class="rotate_img" id="rotImg5">');
	$("#rotImg5").attr({"set":"abc" }); 
	var top = $("#rotImg5").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg5").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		console.log(top);
		if(top == 419){

			$("#rotImg5").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 421){
			$("#rotImg5").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 423){
			//angle = angle + 240;
			$("#rotImg5").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg5").animate({
				top:582,
				left:663,
				width:115
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
  
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/5icon.png" class="rotate_img" id="rotImg5">');
	$("#rotImg5").attr({"set":"abc" }); 
	var top = $("#rotImg5").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg5").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		console.log(top);
		if(top == 419){

			$("#rotImg5").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 421){
			$("#rotImg5").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 423){
			//angle = angle + 240;
			$("#rotImg5").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg5").animate({
				top:460,
				left:534,
				width:115
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/5icon.png" class="rotate_img" id="rotImg5">');
	$("#rotImg5").attr({"set":"abc" }); 
	var top = $("#rotImg5").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg5").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 419){

			$("#rotImg5").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 421){
			$("#rotImg5").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 423){
			//angle = angle + 240;
			$("#rotImg5").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg5").animate({
				top:665,
				left:848,
				width:115
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	

}

/*item 6*/
function itemAnimation06(){
	if(count == 1){

		
       
        
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/6icon.png" class="rotate_img" id="rotImg6">');
        $("#rotImg6").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg6").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg6").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 432){

                $("#rotImg6").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 434){
                $("#rotImg6").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 436){
                //angle = angle + 240;
                $("#rotImg6").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg6").animate({
                    top:700,
                    left:830,
                    width:115
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

   
	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/6icon.png" class="rotate_img" id="rotImg6">');
	$("#rotImg6").attr({"set":"out" }); 
	var top = $("#rotImg6").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg6").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 432){

			$("#rotImg6").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 434){
			$("#rotImg6").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 436){
			//angle = angle + 240;
			$("#rotImg6").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg6").animate({
				top:500,
				left:1050,
				width:115
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

   
	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/6icon.png" class="rotate_img" id="rotImg6">');
	$("#rotImg6").attr({"set":"abc" }); 
	var top = $("#rotImg6").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg6").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 432){

			$("#rotImg6").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 434){
			$("#rotImg6").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 436){
			//angle = angle + 240;
			$("#rotImg6").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg6").animate({
				top:463,
				left:520,
				width:115
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/6icon.png" class="rotate_img" id="rotImg6">');
	$("#rotImg6").attr({"set":"abc" }); 
	var top = $("#rotImg6").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg6").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 432){

			$("#rotImg6").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 434){
			$("#rotImg6").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 436){
			//angle = angle + 240;
			$("#rotImg6").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg6").animate({
				top:625,
				left:431,
				width:115
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/6icon.png" class="rotate_img" id="rotImg6">');
	$("#rotImg6").attr({"set":"abc" }); 
	var top = $("#rotImg6").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg6").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 432){

			$("#rotImg6").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 434){
			$("#rotImg6").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 436){
			//angle = angle + 240;
			$("#rotImg6").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg6").animate({
				top:665,
				left:445,
				width:115
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}

/*item 7*/
function itemAnimation07(){
    if(count == 1){

		
      
        
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/7icon.png" class="rotate_img" id="rotImg7">');
        $("#rotImg7").attr({"set":"abc" }); 
        var top = $("#rotImg7").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg7").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 497){

                $("#rotImg7").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 499){
                $("#rotImg7").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 501){
                //angle = angle + 240;
                $("#rotImg7").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg7").animate({
                    top:568,
                    left:930,
                    width:40
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){
	
	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/7icon.png" class="rotate_img" id="rotImg7">');
	$("#rotImg7").attr({"set":"abc", "correctAns":"Line Symmetry"}); 
	var top = $("#rotImg7").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg7").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 497){

			$("#rotImg7").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg7").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg7").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg7").animate({
				top:340,
				left:815,
				width:40
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/7icon.png" class="rotate_img" id="rotImg7">');
	$("#rotImg7").attr({"set":"abc", "correctAns":"Irregular"}); 
	var top = $("#rotImg7").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg7").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 497){

			$("#rotImg7").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg7").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg7").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg7").animate({
				top:525,
				left:715,
				width:40
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/7icon.png" class="rotate_img" id="rotImg7">');
	$("#rotImg7").attr({"set":"abc" }); 
	var top = $("#rotImg7").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg7").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 497){

			$("#rotImg7").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg7").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg7").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg7").animate({
				top:515,
				left:715,
				width:40
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

   
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/7icon.png" class="rotate_img" id="rotImg7">');
        $("#rotImg7").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg7").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg7").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 497){

                $("#rotImg7").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 499){
                $("#rotImg7").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 501){
                //angle = angle + 240;
                $("#rotImg7").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg7").animate({
                    top:640,
                    left:728,
                    width:36
                },200);
                puzzle5();
                clearInterval(id);
            }
            

        }
}	
}

/*item 8*/
function itemAnimation08(){
    if(count == 1){

        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/8icon.png" class="rotate_img" id="rotImg8">');
        $("#rotImg8").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg8").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg8").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 497){

                $("#rotImg8").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 499){
                $("#rotImg8").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 501){
                //angle = angle + 240;
                $("#rotImg8").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg8").animate({
                    top:648,
                    left:604,
                    width:50
                },200);
				puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){

   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/8icon.png" class="rotate_img" id="rotImg8">');
	$("#rotImg8").attr({"set":"abc", "correctAns":"Line Symmetry"}); 
	var top = $("#rotImg8").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg8").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 497){

			$("#rotImg8").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg8").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg8").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg8").animate({
				top:285,
				left:635,
				width:50
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/8icon.png" class="rotate_img" id="rotImg8">');
	$("#rotImg8").attr({"set":"abc" }); 
	var top = $("#rotImg8").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg8").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 497){

			$("#rotImg8").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg8").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg8").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg8").animate({
				top:625,
				left:480,
				width:50
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){


	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/8icon.png" class="rotate_img" id="rotImg8">');
	$("#rotImg8").attr({"set":"abc" }); 
	var top = $("#rotImg8").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg8").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 497){

			$("#rotImg8").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg8").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg8").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg8").animate({
				top:625,
				left:860,
				width:50
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){


   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/8icon.png" class="rotate_img" id="rotImg8">');
	$("#rotImg8").attr({"set":"abc" }); 
	var top = $("#rotImg8").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg8").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 497){

			$("#rotImg8").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 499){
			$("#rotImg8").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 501){
			//angle = angle + 240;
			$("#rotImg8").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg8").animate({
				top:525,
				left:445,
				width:50
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}

/*item 9*/
function itemAnimation09(){
    if(count == 1){

		
        $("#activityArea").append('<img src="Media/img/menu/9icon.png" class="rotate_img" id="rotImg9">');
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
        
        var angle =60;	
        
        $("#rotImg9").attr({"set":"abc" }); 
        var top = $("#rotImg9").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg9").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 600){

                $("#rotImg9").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 602){
                $("#rotImg9").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 604){
                //angle = angle + 240;
                $("#rotImg9").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg9").animate({
                    top:735,
                    left:788,
                    width:70
                },200);
				puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){

    
        $("#activityArea").append('<img src="Media/img/menu/9icon.png" class="rotate_img" id="rotImg9">');
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
        
        var angle =60;	
        
        $("#rotImg9").attr({"set":"out" }); 
        var top = $("#rotImg9").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg9").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 600){

                $("#rotImg9").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 602){
                $("#rotImg9").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 604){
                //angle = angle + 240;
                $("#rotImg9").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg9").animate({
                    top:535,
                    left:1088,
                    width:70
                },200);
                puzzle2();
                clearInterval(id);
            }
            

        }
}	
if(count == 3){

    
        $("#activityArea").append('<img src="Media/img/menu/9icon.png" class="rotate_img" id="rotImg9">');
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
        
        var angle =60;	
        
        $("#rotImg9").attr({"set":"abc" }); 
        var top = $("#rotImg9").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg9").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 600){

                $("#rotImg9").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 602){
                $("#rotImg9").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 604){
                //angle = angle + 240;
                $("#rotImg9").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg9").animate({
                    top:495,
                    left:518,
                    width:70
                },200);
				puzzle3();
                clearInterval(id);
            }
            

        }
}	
if(count == 4){

	
	$("#activityArea").append('<img src="Media/img/menu/9icon.png" class="rotate_img" id="rotImg9">');
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
	
	var angle =60;	
	
	$("#rotImg9").attr({"set":"abc" }); 
	var top = $("#rotImg9").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg9").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 600){

			$("#rotImg9").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 602){
			$("#rotImg9").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 604){
			//angle = angle + 240;
			$("#rotImg9").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg9").animate({
				top:665,
				left:475,
				width:70
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	$("#activityArea").append('<img src="Media/img/menu/9icon.png" class="rotate_img" id="rotImg9">');
	//$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
	
	var angle =60;	
	
	$("#rotImg9").attr({"set":"abc" }); 
	var top = $("#rotImg9").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg9").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 600){

			$("#rotImg9").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 602){
			$("#rotImg9").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 604){
			//angle = angle + 240;
			$("#rotImg9").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg9").animate({
				top:700,
				left:500,
				width:70
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}
}

/*item 10*/
function itemAnimation10(){
    if(count == 1){

		
        
            
        $("#activityArea").append('<img src="Media/img/menu/10icon.png" class="rotate_img" id="rotImg10">');
        $("#rotImg10").attr({"set":"abc", "correctAns":"Regular"}); 
      
        var top = $("#rotImg10").css("top");
        var angle =60;
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg10").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 595){

                $("#rotImg10").animate({
                    top:530,
                    left:550,
                    width:150
                },200);
                
            }if(top == 597){
                $("#rotImg10").animate({
                    top:350,
                    left:500,
                    width:200,
                },200);
            }if(top == 599){
                //angle = angle + 240;
                $("#rotImg10").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg10").animate({
                    top:340,
                    left:634,
                    width:60
                },200);
                //alert();
                puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

	
		
	$("#activityArea").append('<img src="Media/img/menu/10icon.png" class="rotate_img" id="rotImg10">');
	$("#rotImg10").attr({"set":"abc" }); 
  
	var top = $("#rotImg10").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg10").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 595){

			$("#rotImg10").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 597){
			$("#rotImg10").animate({
				top:350,
				left:500,
				width:200,
			},200);
		}if(top == 599){
			//angle = angle + 240;
			$("#rotImg10").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg10").animate({
				top:428,
				left:795,
				width:60
			},200);
			//alert();
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	
		
	$("#activityArea").append('<img src="Media/img/menu/10icon.png" class="rotate_img" id="rotImg10">');
	$("#rotImg10").attr({"set":"abc" }); 
  
	var top = $("#rotImg10").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg10").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 595){

			$("#rotImg10").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 597){
			$("#rotImg10").animate({
				top:350,
				left:500,
				width:200,
			},200);
		}if(top == 599){
			//angle = angle + 240;
			$("#rotImg10").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg10").animate({
				top:440,
				left:818,
				width:60
			},200);
			//alert();
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

    
            
        $("#activityArea").append('<img src="Media/img/menu/10icon.png" class="rotate_img" id="rotImg10">');
        $("#rotImg10").attr({"set":"abc" }); 
      
        var top = $("#rotImg10").css("top");
        var angle =60;
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg10").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 595){

                $("#rotImg10").animate({
                    top:530,
                    left:550,
                    width:150
                },200);
                
            }if(top == 597){
                $("#rotImg10").animate({
                    top:350,
                    left:500,
                    width:200,
                },200);
            }if(top == 599){
                //angle = angle + 240;
                $("#rotImg10").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg10").animate({
                    top:470,
                    left:650,
                    width:60
                },200);
                //alert();
                puzzle4();
                clearInterval(id);
            }
            

        }
}
if(count == 5){

	
		
	$("#activityArea").append('<img src="Media/img/menu/10icon.png" class="rotate_img" id="rotImg10">');
	$("#rotImg10").attr({"set":"abc" }); 
  
	var top = $("#rotImg10").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg10").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 595){

			$("#rotImg10").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 597){
			$("#rotImg10").animate({
				top:350,
				left:500,
				width:200,
			},200);
		}if(top == 599){
			//angle = angle + 240;
			$("#rotImg10").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg10").animate({
				top:455,
				left:660,
				width:60
			},200);
			//alert();
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}

/*item 11*/
function itemAnimation11(){
    if(count == 1){

		
      
        $("#activityArea").append('<img src="Media/img/menu/11icon.png" class="rotate_img" id="rotImg11">');        
        var angle =60;	        
        $("#rotImg11").attr({"set":"abc", "correctAns":"Irregular"}); 
        var top = $("#rotImg11").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg11").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 695){

                $("#rotImg11").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 697){
                $("#rotImg11").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 699){
                //angle = angle + 240;
                $("#rotImg11").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg11").animate({
                    top:720,
                    left:656,
                    width:70
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){

	
	$("#activityArea").append('<img src="Media/img/menu/11icon.png" class="rotate_img" id="rotImg11">');        
	var angle =60;	        
	$("#rotImg11").attr({"set":"out" }); 
	var top = $("#rotImg11").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg11").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 695){

			$("#rotImg11").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 697){
			$("#rotImg11").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 699){
			//angle = angle + 240;
			$("#rotImg11").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg11").animate({
				top:620,
				left:1070,
				width:70
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	
	$("#activityArea").append('<img src="Media/img/menu/11icon.png" class="rotate_img" id="rotImg11">');        
	var angle =60;	        
	$("#rotImg11").attr({"set":"abc" }); 
	var top = $("#rotImg11").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg11").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 695){

			$("#rotImg11").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 697){
			$("#rotImg11").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 699){
			//angle = angle + 240;
			$("#rotImg11").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg11").animate({
				top:715,
				left:650,
				width:70
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
	$("#activityArea").append('<img src="Media/img/menu/11icon.png" class="rotate_img" id="rotImg11">');        
	var angle =60;	        
	$("#rotImg11").attr({"set":"abc" }); 
	var top = $("#rotImg11").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg11").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 695){

			$("#rotImg11").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 697){
			$("#rotImg11").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 699){
			//angle = angle + 240;
			$("#rotImg11").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg11").animate({
				top:300,
				left:655,
				width:70
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	$("#activityArea").append('<img src="Media/img/menu/11icon.png" class="rotate_img" id="rotImg11">');        
	var angle =60;	        
	$("#rotImg11").attr({"set":"abc", "correctAns":"Irregular"}); 
	var top = $("#rotImg11").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg11").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 695){

			$("#rotImg11").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 697){
			$("#rotImg11").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 699){
			//angle = angle + 240;
			$("#rotImg11").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg11").animate({
				top:690,
				left:618,
				width:70
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}

/*item 12*/
function itemAnimation12(){
    if(count == 1){

		
        $("#btn_puzzle_12").attr({"src":"Media/img/toolbar/12_tr.png"}).removeClass('menu_item_img')
        .addClass("menu_item_img_disable menu_item_img_distate");
        //$("#btn_puzzle_1").attr({"id":"btn_puzzle_1dis"});
            
        $("#activityArea").append('<img src="Media/img/menu/12icon.png" class="rotate_img" id="rotImg12">');
        $("#rotImg12").attr({"set":"abc"});         
        var top = $("#rotImg12").css("top");
        var angle =60;
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg12").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
        //	console.log(top);
            if(top == 693){

                $("#rotImg12").animate({
                    top:530,
                    left:550,
                    width:150
                },200);
                
            }if(top == 695){
                $("#rotImg12").animate({
                    top:450,
                    left:500,
                    width:200,
                },200);
            }if(top == 697){
                //angle = angle + 240;
                $("#rotImg12").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg12").animate({
                    top:340,
                    left:770,
                    width:75
                },200);
                //alert();
                puzzle1();
                clearInterval(id);
            }
            

        }
    
    

}	
if(count == 2){

	
		
	$("#activityArea").append('<img src="Media/img/menu/12icon.png" class="rotate_img" id="rotImg12">');
	$("#rotImg12").attr({"set":"abc" });         
	var top = $("#rotImg12").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg12").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 693){

			$("#rotImg12").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 695){
			$("#rotImg12").animate({
				top:450,
				left:500,
				width:200,
			},200);
		}if(top == 697){
			//angle = angle + 240;
			$("#rotImg12").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg12").animate({
				top:510,
				left:775,
				width:75
			},200);
			//alert();
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	
	$("#activityArea").append('<img src="Media/img/menu/12icon.png" class="rotate_img" id="rotImg12">');
	$("#rotImg12").attr({"set":"abc" });         
	var top = $("#rotImg12").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg12").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 693){

			$("#rotImg12").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 695){
			$("#rotImg12").animate({
				top:450,
				left:500,
				width:200,
			},200);
		}if(top == 697){
			//angle = angle + 240;
			$("#rotImg12").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg12").animate({
				top:510,
				left:775,
				width:75
			},200);
			//alert();
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
		
	$("#activityArea").append('<img src="Media/img/menu/12icon.png" class="rotate_img" id="rotImg12">');
	$("#rotImg12").attr({"set":"abc" });         
	var top = $("#rotImg12").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg12").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 693){

			$("#rotImg12").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 695){
			$("#rotImg12").animate({
				top:450,
				left:500,
				width:200,
			},200);
		}if(top == 697){
			//angle = angle + 240;
			$("#rotImg12").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg12").animate({
				top:550,
				left:590,
				width:75
			},200);
			//alert();
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
		
	$("#activityArea").append('<img src="Media/img/menu/12icon.png" class="rotate_img" id="rotImg12">');
	$("#rotImg12").attr({"set":"abc" });         
	var top = $("#rotImg12").css("top");
	var angle =60;
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg12").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
	//	console.log(top);
		if(top == 693){

			$("#rotImg12").animate({
				top:530,
				left:550,
				width:150
			},200);
			
		}if(top == 695){
			$("#rotImg12").animate({
				top:450,
				left:500,
				width:200,
			},200);
		}if(top == 697){
			//angle = angle + 240;
			$("#rotImg12").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg12").animate({
				top:550,
				left:650,
				width:75
			},200);
			//alert();
			puzzle5();
			clearInterval(id);
		}
		

	}
}
}

/*item 13*/
function itemAnimation13(){
    if(count == 1){

		
       
        $("#activityArea").append('<img src="Media/img/menu/13icon.png" class="rotate_img" id="rotImg13">');
        $("#rotImg13").attr({"set":"abc", "correctAns":"Irregular"}); 
        var angle =60;    
        var top = $("#rotImg13").css("top");
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);        
       
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg13").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 778){

                $("#rotImg13").animate({
                    top:430,
                    left:400,
                    width:150
                },200);
                
            }if(top == 780){
                $("#rotImg13").animate({
                    top:500,
                    left:500,
                    width:200,
                },200);
            }if(top == 782){
                //angle = angle + 240;
                $("#rotImg13").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg13").animate({
                    top:504,
                    left:870,
                    width:70
                },200);
                puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){

	
	$("#activityArea").append('<img src="Media/img/menu/13icon.png" class="rotate_img" id="rotImg13">');
	$("#rotImg13").attr({"set":"abc", "correctAns":"Line Symmetry"}); 
	var angle =60;    
	var top = $("#rotImg13").css("top");
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);        
   
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg13").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 778){

			$("#rotImg13").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 780){
			$("#rotImg13").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 782){
			//angle = angle + 240;
			$("#rotImg13").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg13").animate({
				top:300,
				left:555,
				width:70
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){


	$("#activityArea").append('<img src="Media/img/menu/13icon.png" class="rotate_img" id="rotImg13">');
	$("#rotImg13").attr({"set":"abc" }); 
	var angle =60;    
	var top = $("#rotImg13").css("top");
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);        
   
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg13").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 778){

			$("#rotImg13").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 780){
			$("#rotImg13").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 782){
			//angle = angle + 240;
			$("#rotImg13").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg13").animate({
				top:475,
				left:642,
				width:70
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
	$("#activityArea").append('<img src="Media/img/menu/13icon.png" class="rotate_img" id="rotImg13">');
	$("#rotImg13").attr({"set":"abc" }); 
	var angle =60;    
	var top = $("#rotImg13").css("top");
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);        
   
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg13").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 778){

			$("#rotImg13").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 780){
			$("#rotImg13").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 782){
			//angle = angle + 240;
			$("#rotImg13").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg13").animate({
				top:690,
				left:660,
				width:70
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){


	$("#activityArea").append('<img src="Media/img/menu/13icon.png" class="rotate_img" id="rotImg13">');
	$("#rotImg13").attr({"set":"abc" }); 
	var angle =60;    
	var top = $("#rotImg13").css("top");
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);        
   
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg13").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 778){

			$("#rotImg13").animate({
				top:430,
				left:400,
				width:150
			},200);
			
		}if(top == 780){
			$("#rotImg13").animate({
				top:500,
				left:500,
				width:200,
			},200);
		}if(top == 782){
			//angle = angle + 240;
			$("#rotImg13").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg13").animate({
				top:708,
				left:680,
				width:60
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}
}

/*item 14*/
function itemAnimation14(){
	if(count == 1){

		
       
       
        var angle =60;	
        $("#activityArea").append('<img src="Media/img/menu/14icon.png" class="rotate_img" id="rotImg14">');
        $("#rotImg14").attr({"set":"abc", "correctAns":"Concave"}); 
        var top = $("#rotImg14").css("top"); 
        top = parseInt(top);
        var id = setInterval(startAnimation, 100);
        function startAnimation(){	
                        
            //console.log("angle:"+angle);	
            $("#rotImg14").css({'transform': 'rotate(' + angle + 'deg)'});													
            angle = angle + 60;					
            top = top+1;
            //console.log(top);
            if(top == 791){

                $("#rotImg14").animate({
                    top:700,
                    left:400,
                    width:150
                },200);
                
            }if(top == 793){
                $("#rotImg14").animate({
                    top:600,
                    left:500,
                    width:200,
                },200);
            }if(top == 795){
                //angle = angle + 240;
                $("#rotImg14").css({'transform': 'rotate(' + 360 + 'deg)'});						
                $("#rotImg14").animate({
                    top:650,
                    left:645,
                    width:120
                },200);
				puzzle1();
                clearInterval(id);
            }
            

        }


}	
if(count == 2){


   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/14icon.png" class="rotate_img" id="rotImg14">');
	$("#rotImg14").attr({"set":"abc" }); 
	var top = $("#rotImg14").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg14").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 791){

			$("#rotImg14").animate({
				top:700,
				left:400,
				width:150
			},200);
			
		}if(top == 793){
			$("#rotImg14").animate({
				top:600,
				left:500,
				width:200,
			},200);
		}if(top == 795){
			//angle = angle + 240;
			$("#rotImg14").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg14").animate({
				top:365,
				left:665,
				width:120
			},200);
			puzzle2();
			clearInterval(id);
		}
		

	}
}	
if(count == 3){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/14icon.png" class="rotate_img" id="rotImg14">');
	$("#rotImg14").attr({"set":"abc" }); 
	var top = $("#rotImg14").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg14").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 791){

			$("#rotImg14").animate({
				top:700,
				left:400,
				width:150
			},200);
			
		}if(top == 793){
			$("#rotImg14").animate({
				top:600,
				left:500,
				width:200,
			},200);
		}if(top == 795){
			//angle = angle + 240;
			$("#rotImg14").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg14").animate({
				top:655,
				left:620,
				width:120
			},200);
			puzzle3();
			clearInterval(id);
		}
		

	}
}	
if(count == 4){

	
   
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/14icon.png" class="rotate_img" id="rotImg14">');
	$("#rotImg14").attr({"set":"abc", "correctAns":"Concave"}); 
	var top = $("#rotImg14").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg14").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 791){

			$("#rotImg14").animate({
				top:700,
				left:400,
				width:150
			},200);
			
		}if(top == 793){
			$("#rotImg14").animate({
				top:600,
				left:500,
				width:200,
			},200);
		}if(top == 795){
			//angle = angle + 240;
			$("#rotImg14").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg14").animate({
				top:455,
				left:750,
				width:120
			},200);
			puzzle4();
			clearInterval(id);
		}
		

	}
}
if(count == 5){

	
	var angle =60;	
	$("#activityArea").append('<img src="Media/img/menu/14icon.png" class="rotate_img" id="rotImg14">');
	$("#rotImg14").attr({"set":"abc" }); 
	var top = $("#rotImg14").css("top"); 
	top = parseInt(top);
	var id = setInterval(startAnimation, 100);
	function startAnimation(){	
					
		//console.log("angle:"+angle);	
		$("#rotImg14").css({'transform': 'rotate(' + angle + 'deg)'});													
		angle = angle + 60;					
		top = top+1;
		//console.log(top);
		if(top == 791){

			$("#rotImg14").animate({
				top:700,
				left:400,
				width:150
			},200);
			
		}if(top == 793){
			$("#rotImg14").animate({
				top:600,
				left:500,
				width:200,
			},200);
		}if(top == 795){
			//angle = angle + 240;
			$("#rotImg14").css({'transform': 'rotate(' + 360 + 'deg)'});						
			$("#rotImg14").animate({
				top:650,
				left:600,
				width:120
			},200);
			puzzle5();
			clearInterval(id);
		}
		

	}
}	
}



function puzzle1(){
	resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
    var section;

    $(".rotate_img").each(function(){
        section =$(this).attr("set");		
      //  console.log("section:"+section);
    });    
            
    if(section == 'a'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelA();
    
    }
    if(section == 'b'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelB();
    
    }
    if(section == 'c'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelC();
    
    }
    if(section == 'ab'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelAB();
    
    }
    if(section == 'ac'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelAC();
    
    }
    if(section == 'bc'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelBC();
    
    }
    if(section == 'abc'){
		resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
        showLabelABC();
    
    }else{
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        return;
    }
 }

 function puzzle2(){
    resultArry =[];
    var section;
	setA =""; 
	setB ="";
	setC ="";
    $(".rotate_img").each(function(){
		resultArry =[];
        section =$(this).attr("set");		
        console.log("section:"+section);
    });    
            
    if(section == 'a'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelA();
    
    }
    if(section == 'b'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelB();
    
    }
    if(section == 'c'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelC();
    
    }
    if(section == 'ab'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAB();
    
    }
    if(section == 'ac'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAC();
    
    }
    if(section == 'bc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelBC();
    
    }
    if(section == 'abc'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelABC();
    
    }else{
		resultArry =[];
        return;
    }
 }

 function puzzle3(){
	resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
    var section;

    $(".rotate_img").each(function(){
		resultArry =[];
        section =$(this).attr("set");		
        console.log("section:"+section);
    });    
            
    if(section == 'a'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelA();
    
    }
    if(section == 'b'){

        showLabelB();
    
    }
    if(section == 'c'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelC();
    
    }
    if(section == 'ab'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAB();
    
    }
    if(section == 'ac'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAC();
    
    }
    if(section == 'bc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelBC();
    
    }
    if(section == 'abc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelABC();
    
    }else{
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        return;
    }
 }

 function puzzle4(){
	resultArry =[];
		setA =""; 
		setB ="";
		setC ="";
    var section;

    $(".rotate_img").each(function(){
		resultArry =[];
        section =$(this).attr("set");		
        console.log("section:"+section);
    });    
            
    if(section == 'a'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelA();
    
    }
    if(section == 'b'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelB();
    
    }
    if(section == 'c'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelC();
    
    }
    if(section == 'ab'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAB();
    
    }
    if(section == 'ac'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAC();
    
    }
    if(section == 'bc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelBC();
    
    }
    if(section == 'abc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelABC();
    
    }else{
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        return;
    }
 }

 function puzzle5(){
    resultArry =[];
    var section;

    $(".rotate_img").each(function(){
		resultArry =[];
        section =$(this).attr("set");		
        console.log("section:"+section);
    });    
            
    if(section == 'a'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelA();
    
    }
    if(section == 'b'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelB();
    
    }
    if(section == 'c'){
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelC();
    
    }
    if(section == 'ab'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAB();
    
    }
    if(section == 'ac'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelAC();
    
    }
    if(section == 'bc'){
		setA =""; 
		setB ="";
		setC ="";  
		resultArry =[];
        showLabelBC();
    
    }
    if(section == 'abc'){
        setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        showLabelABC();
    
    }else{
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
        return;
    }
 }



function showLabelA(){
   		var value;
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
    if(setA == ""){
        //alert("setA is not empty");
     $("#dropdown-a").show();
     $("#ansVal_a").html("A: ");
     $("#ansVal_a").show();   	  
   
     $(".dropdown-content-a").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_a").html("A: " + value);
        $(".dropdown-content-a").hide();
        $("#resultText").hide();
        setA = value;	        
        checkCategories();
	   });

	   $(".dropdown-content-a > p").keyup(function(event){
			if(event.keyCode === 13) {
			//alert();
				value = $(this).text();
				$("#ansVal_a").html("A: " + value);
				$(".dropdown-content-a").hide();
				$("#resultText").hide();
				setA = value;	        
				checkCategories();
			
			} 
		
		});
	   
  }
}

function showLabelB(){
  	  var value;    
		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
    if(setB == ""){
        //alert("setA is not empty");
     $("#dropdown-b").show();
     $("#ansVal_b").html("B: ");
	 $("#ansVal_b").show();  
	  	  
     $(".dropdown-content-b").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_b").html("B: " + value);
        $(".dropdown-content-b").hide();
        $("#resultText").hide();
        setB = value;	
        //alert(setA);
        checkCategories();
	});

	
    $(".dropdown-content-b > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_b").html("B: " + value);
			$(".dropdown-content-b").hide();
			$("#resultText").hide();
			setB = value;	
			//alert(setA);
			checkCategories();
		
		} 
	
	});

  }

}

function showLabelC(){
    	var value;
   		setA =""; 
		setB ="";
		setC =""; 
		resultArry =[]; 
    if(setC == ""){
        //alert("setA is not empty");
     $("#dropdown-c").show();
     $("#ansVal_c").html("C: ");
     $("#ansVal_c").show();   	  
   
     $(".dropdown-content-c").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_c").html("C: " + value);
        $(".dropdown-content-c").hide();
        $("#resultText").hide();
        setC = value;			
        checkCategories();
	   });
	   
	   $(".dropdown-content-c > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_c").html("C: " + value);
			$(".dropdown-content-c").hide();
			$("#resultText").hide();
			setC = value;			
			checkCategories();
		
		} 
	
	});
  }

}

function showLabelAB(){
    var value;
	setA =""; 
	setB ="";
	setC ="";
	resultArry =[];
    if(setA=="" && setB ==""){
        $("#dropdown-a").show();
        $("#dropdown-b").show(); 
        $("#ansVal_a").html("A: ");
        $("#ansVal_b").html("B: "); 

     
   
     $(".dropdown-content-a").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_a").html("A: " + value);
        $(".dropdown-content-a").hide();
        $("#resultText").hide();
        setA = value;			
        checkCategories();
       }); 

		$(".dropdown-content-b").on("click","p", function(){
			value = $(this).text();
			$("#ansVal_b").html("B: " + value);
			$(".dropdown-content-b").hide();
			$("#resultText").hide();
			setB = value;			
			checkCategories();
		}); 
		$(".dropdown-content-a > p").keyup(function(event){
			if(event.keyCode === 13) {
				value = $(this).text();
				$("#ansVal_a").html("A: " + value);
				$(".dropdown-content-a").hide();
				$("#resultText").hide();
				setA = value;			
				checkCategories();
			
			} 
		
		});
		$(".dropdown-content-b > p").keyup(function(event){
			if(event.keyCode === 13) {
				value = $(this).text();
				$("#ansVal_b").html("B: " + value);
				$(".dropdown-content-b").hide();
				$("#resultText").hide();
				setB = value;			
				checkCategories();
			
			} 
		
		});







} 
  
}
function showLabelAC(){
    var value;
	setA =""; 
	setB ="";
	setC ="";  
	resultArry =[];
    if(setA=="" && setC ==""){
        $("#dropdown-a").show();
        $("#dropdown-c").show(); 
        $("#ansVal_a").html("A: ");
        $("#ansVal_c").html("C: "); 

     
   
     $(".dropdown-content-a").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_a").html("A: " + value);
        $(".dropdown-content-a").hide();
        $("#resultText").hide();
        setA = value;			
        checkCategories();
       }); 

	$(".dropdown-content-c").on("click","p", function(){
		value = $(this).text();
		$("#ansVal_c").html("C: " + value);
		$(".dropdown-content-c").hide();
		$("#resultText").hide();
		setC = value;			
		checkCategories();
	}); 

	$(".dropdown-content-a > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_a").html("A: " + value);
			$(".dropdown-content-a").hide();
			$("#resultText").hide();
			setA = value;			
			checkCategories();
		
		} 
	
	});
	$(".dropdown-content-c > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_c").html("C: " + value);
			$(".dropdown-content-c").hide();
			$("#resultText").hide();
			setC = value;			
			checkCategories();
		
		} 
	
	});
	

} 
  
}

function showLabelBC(){
    var value;
   		setA =""; 
		setB ="";
		setC ="";
		resultArry =[];
    if(setB=="" && setC ==""){
        $("#dropdown-b").show();
        $("#dropdown-c").show(); 
        $("#ansVal_b").html("B: ");
        $("#ansVal_c").html("C: "); 

    
   
     $(".dropdown-content-b").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_b").html("B: " + value);
        $(".dropdown-content-b").hide();
        $("#resultText").hide();
        setB = value;			
        checkCategories();
       }); 

		$(".dropdown-content-c").on("click","p", function(){
			value = $(this).text();
			$("#ansVal_c").html("C: " + value);
			$(".dropdown-content-c").hide();
			$("#resultText").hide();
			setC = value;			
			checkCategories();
		}); 

		$(".dropdown-content-b > p").keyup(function(event){
			if(event.keyCode === 13) {
				value = $(this).text();
				$("#ansVal_b").html("B: " + value);
				$(".dropdown-content-b").hide();
				$("#resultText").hide();
				setB = value;			
				checkCategories();
			
			} 
		
		});
		$(".dropdown-content-c > p").keyup(function(event){
			if(event.keyCode === 13) {
				value = $(this).text();
				$("#ansVal_c").html("C: " + value);
				$(".dropdown-content-c").hide();
				$("#resultText").hide();
				setC = value;			
				checkCategories();
			
			} 
		
		});
		


}
  
}

function showLabelABC(){
    var value;
    setA =""; 
    setB =""; 
	SetC ="";  
	resultArry =[];
    if(setA=="" && setB=="" && setC ==""){
        $("#dropdown-a").show();
        $("#dropdown-b").show();
        $("#dropdown-c").show(); 
        $("#ansVal_a").html("A: ");
        $("#ansVal_b").html("B: ");
        $("#ansVal_c").html("C: "); 

    
     $(".dropdown-content-a").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_a").html("A: " + value);
        $(".dropdown-content-a").hide();
        $("#resultText").hide();
        setA = value;			
        checkCategories();
       });
   
     $(".dropdown-content-b").on("click","p", function(){
        value = $(this).text();
        $("#ansVal_b").html("B: " + value);
        $(".dropdown-content-b").hide();
        $("#resultText").hide();
        setB = value;			
        checkCategories();
       }); 

	$(".dropdown-content-c").on("click","p", function(){
		value = $(this).text();
		$("#ansVal_c").html("C: " + value);
		$(".dropdown-content-c").hide();
		$("#resultText").hide();
		setC = value;			
		checkCategories();
	}); 
	$(".dropdown-content-a > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_a").html("A: " + value);
			$(".dropdown-content-a").hide();
			$("#resultText").hide();
			setA = value;			
			checkCategories();
		
		} 
	
	});
	$(".dropdown-content-b > p").keyup(function(event){
		if(event.keyCode === 13) {
		value = $(this).text();
        $("#ansVal_b").html("B: " + value);
        $(".dropdown-content-b").hide();
        $("#resultText").hide();
        setB = value;			
        checkCategories();
		
		} 
	
	});
	$(".dropdown-content-c > p").keyup(function(event){
		if(event.keyCode === 13) {
			value = $(this).text();
			$("#ansVal_c").html("C: " + value);
			$(".dropdown-content-c").hide();
			$("#resultText").hide();
			setC = value;			
			checkCategories();
		
		} 
	
	});




} 
  
}





//Check categories

function checkCategories(){   

        resultArry[0] = setA;
        resultArry[1] = setB;
        resultArry[2] = setC;
    
        for(let i=0; i<resultArry.length;i++){
            if(resultArry[0]!= "" && resultArry[1]!= "" && resultArry[2]!= "" ){
                $("#verifyAnswer").show();                                
                
            }else{
                return;
            }
            
        }
       
    }

    /* check result*/
function compareResult1(){
    var puzzle1_ansArr = ["Regular", "Concave", "Irregular"];
    //alert();
   	var countTrue =0;
	var countFalse =0;
	for(i = 0; i < resultArry.length; i++) {
		if(resultArry[i] == puzzle1_ansArr[i]){
			console.log("true");
			countTrue++
		}else{
			console.log("false");
			countFalse++;
		}
        console.log(resultArry[i]+ " :+: " + puzzle1_ansArr[i]);	
	}

	if(countTrue != 3){		
		if(countFalse == 1){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have one incorrect category.").show();
		}
		if(countFalse == 2){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}
		if(countFalse == 3){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}		

	}else{
		$("#verifyAnswer").hide();
		$("#menu_third").addClass("menu_item_img_distate");
		$("#resultText").html("Correct!").show();
	}

}	

/* check result*/
function compareResult2(){
    var puzzle2_ansArr = ["Line Symmetry", "Triangle", "Regular"];
	var countTrue =0;
	var countFalse =0;
	for(i = 0; i < resultArry.length; i++) {
		if(resultArry[i] == puzzle2_ansArr[i]){
			console.log("true");
			countTrue++
		}else{
			console.log("false");
			countFalse++;
		}
        console.log(resultArry[i]+ " :+: " + puzzle2_ansArr[i]);	
	}

	if(countTrue != 3){		
		if(countFalse == 1){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have one incorrect category.").show();
		}
		if(countFalse == 2){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}
		if(countFalse == 3){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}		

	}else{
		$("#verifyAnswer").hide();
		$("#menu_third").addClass("menu_item_img_distate");
		$("#resultText").html("Correct!").show();
	}

}	

/* check result*/
function compareResult3(){
    var puzzle3_ansArr = ["Not Concave", "Irregular", "Not Quadrilateral"];
	var countTrue =0;
	var countFalse =0;
	for(i = 0; i < resultArry.length; i++) {
		if(resultArry[i] == puzzle3_ansArr[i]){
			console.log("true");
			countTrue++
		}else{
			console.log("false");
			countFalse++;
		}
		console.log(resultArry[i]+ " :+: " + puzzle3_ansArr[i]);
	}

	if(countTrue != 3){		
		if(countFalse == 1){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have one incorrect category.").show();
		}
		if(countFalse == 2){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}
		if(countFalse == 3){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}		

	}else{
		$("#verifyAnswer").hide();
		$("#menu_third").addClass("menu_item_img_distate");
		$("#resultText").html("Correct!").show();
	}

}	

    /* check result*/
	function compareResult4(){
		var puzzle4_ansArr = ["Not Quadrilateral", "Not Concave", "Line Symmetry"];
		var countTrue =0;
		var countFalse =0;
		for(i = 0; i < resultArry.length; i++) {
			if(resultArry[i] == puzzle4_ansArr[i]){
				console.log("true");
				countTrue++
			}else{
				console.log("false");
				countFalse++;
			}
			console.log(resultArry[i]+ " :+: " + puzzle4_ansArr[i]);	
		}
	
		if(countTrue != 3){		
			if(countFalse == 1){
				$("#verifyAnswer").hide();
				$("#resultText").html("You have one incorrect category.").show();
			}
			if(countFalse == 2){
				$("#verifyAnswer").hide();
				$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
			}
			if(countFalse == 3){
				$("#verifyAnswer").hide();
				$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
			}		
	
		}else{
			$("#verifyAnswer").hide();
			$("#menu_third").addClass("menu_item_img_distate");
			$("#resultText").html("Correct!").show();
		}
	
	}	

	/* check result*/
function compareResult5(){
    var puzzle5_ansArr = ["Regular", "Not Triangle", "Not Quadrilateral"];
	var countTrue =0;
	var countFalse =0;
	for(i = 0; i < resultArry.length; i++) {
		if(resultArry[i] == puzzle5_ansArr[i]){
			console.log("true");
			countTrue++
		}else{
			console.log("false");
			countFalse++;
		}
		console.log(resultArry[i]+ " :+: " + puzzle5_ansArr[i]);
	}

	if(countTrue != 3){		
		if(countFalse == 1){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have one incorrect category.").show();
		}
		if(countFalse == 2){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}
		if(countFalse == 3){
			$("#verifyAnswer").hide();
			$("#resultText").html("You have "+ countFalse +" incorrect categories.").show();
		}		

	}else{
		$("#verifyAnswer").hide();
		$("#menu_third").addClass("menu_item_img_distate");
		$("#resultText").html("Correct!").show();
	}

}	


function TriggeredKey(e)
{	
	alert();
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    if (window.event.keyCode = 13 ) return false;
}