var maxY = 2020;
var minY = 1900;
var avgVal = 5;
var numOfTicks = ((maxY - minY) / avgVal );

var yearStep = [
	[
		{
			year : 1900,
			text : 'An icebox is used to keep food cool at the turn of the century. Your friendly local iceman delivers blocks of ice several times a week. The ice, which is cut from local ponds and lakes during the winter, is stored in cool places and packed in sawdust to keep it frozen during summer months.',
			img : {
				path: 'media/img/objects/obj1_img1.png',
			}
		},
		{
			year : 1913,
			text : "The first electric refrigerators are sold to the home market in 1913, although their sales won't climb until the 1920s. These devices use a motor and a compressor to remove heat from inside the refrigerator. The consistently cool temperatures they produce reduce food spoilage by slowing the rate of cell division in bacteria.",
			img : {
				path: 'media/img/objects/obj1_img2.png',
			}
		},
		{
			year : 1931,
			text : "Freon, a gas developed by Thomas Midgley, Jr., a year earlier, is mass produced by the Kinetic Chemical Corporation starting in 1931. Although it will later be identified as harmful to Earth's ozone layer, its nontoxic, nonflammable properties make it a much safer alternative to the gases used in refrigerators until now.",
			img : {
				path: 'media/img/objects/obj1_img3.png',
			}
		},
		{
			year : 1995,
			text : "In addition to being more energy efficient (in response to the 1970s energy crisis) new refrigerators no longer use ozone-harming CFCs (chlorofluorocarbons, or freon) as refrigerants. As a result, they are more effective at keeping foods fresh and less harmful to the environment.",
			img : {
				path: 'media/img/objects/obj1_img5.png',
			}
		},
		
	],
	[
		{
			year : 1910,
			text : "Crystal radio receivers are available to the public. Manufactured by the de Forest Radio Telephone Company, these kits are geared for amateur radio enthusiasts.",
			img : {
				path: 'media/img/objects/obj2_img1.png',
			}
		},
		{
			year : 1919,
			text : "The superheterodyne radio, developed by Edwin Armstrong, is sold to the general public. The radio uses vacuum tubes to amplify and tune in signals.",
			img : {
				path: 'media/img/objects/obj2_img2.png',
			}
		},
		{
			year : 1950,
			text : "Frequency modulation (FM) gains popularity in the 1950s as consumers become more interested in the high-fidelity sound this technology provides. FM was perfected in 1933 by Edwin Armstrong. The first FM radio broadcasts aired in 1940. By 1960, FM stations will begin broadcasting in stereo.",
			img : {
				path: 'media/img/objects/obj2_img3.png',
			}
		},
		{
			year : 1954,
			text : "The Regency radio, the first lightweight, portable radio, is made available  to the public in 1954. It uses recently developed transistors in place of vacuum tubes to amplify sound.",
			img : {
				path: 'media/img/objects/obj2_img4.png',
			}
		}
		,
		{
			year : '1980s',
			text : "The 1980s see miniature AM/FM radios that are incorporated into lightweight headphones.",
			img : {
				path: 'media/img/objects/obj2_img5.png',
			}
		}
		
	],
	[
		{
			year : '1965',
			text : "Microwave ovens are sold to the general public, although they won't see widespread use until the early 1980s. Microwave ovens designed for commercial use have been around since 1947.",
			img : {
				path: 'media/img/objects/obj3_img1.png',
			}
		},
		{
			year : '1980s',
			text : "Sales of microwave ovens take off throughout the 1980s. These ovens offer digital readouts, push button controls, and turntables to help cook food evenly. By 1986, the number of households that have microwave ovens will have risen to 25%, up from 1% in 1971. Today that percentage is closer to 90%.",
			img : {
				path: 'media/img/objects/obj3_img2.png',
			}
		}
		
		
	],
	[
		{
			year : '1945',
			text : "Tupperware containers become available in retail stores in 1945, but consumers have little confidence in the plastic containers. In 1951 Tupperware products are removed from retail shelves and instead sold through 'Tupperware parties.' Sales take off.",
			img : {
				path: 'media/img/objects/obj4_img1.png',
			}
		},
		{
			year : '2008',
			text : "Following the release of several government reports in 2008 concerning the safety of the chemical Bisphenol A (BPA), a compound used to make certain types of plastic, many people begin to think more carefully about the types of containers they use for food storage. Although many plastics, including most  Tupperware containers, are still considered safe, many people begin using glass and stainless steel containers for their foods and beverages.",
			img : {
				path: 'media/img/objects/obj4_img2.png',
			}
		}
	
	],
	[
		{
			year : '1975',
			text : "The Altair 8800, a build-it-yourself computer kit, appears in U.S. homes in 1975. Complete with an Intel 8080 processor and 256 bytes (not kilobytes) of memory, it can run BASIC programming language.",
			img : {
				path: 'media/img/objects/obj5_img1.png',
			}
		},
		{
			year : '1977',
			text : "A revolution in computing begins in 1977 when the first fully assembled personal computer, the Apple II, is made available to the public. Within 20 years, two out of five households will have a computer.",
			img : {
				path: 'media/img/objects/obj5_img2.png',
			}
		},
		{
			year : '1989',
			text : "Making use of LCD (liquid crystal displays) and ever smaller components, laptop computers see more and more use in the late 1980s.",
			img : {
				path: 'media/img/objects/obj5_img3.png',
			}
		},
		{
			year : '1994',
			text : "Spurred by the introduction of Mosaic, and events such as a 1994 Rolling Stones concert streamed live on the Web, interest in the Internet takes off. Within four years, an estimated 30 million people will be using the Internet to connect with people across town and around the world.",
			img : {
				path: 'media/img/objects/obj5_img4.png',
			}
		},
		{
			year : '1995',
			text : "Wireless networks, which have already been used in some hospitals and school campuses before now, begin to make their way into homes in 1995. These devices make it possible for a household's computers, televisions, audio equipment, and other high-tech devices to communicate with one another, and with other devices connected to the Internet, without physical connections of wires and cords.",
			img : {
				path: 'media/img/objects/obj5_img5.png',
			}
		}
		
	],
	[
		{
			year : '1946',
			text : "Television quickly becomes a part of American life starting around 1946. One year before, there were fewer than 10,000 TV sets. By 1950, there are 6 million. By 1960, there will be almost 60 million.",
			img : {
				path: 'media/img/objects/obj6_img1.png',
			}
		},
		{
			year : '1953',
			text : "NBC broadcasts the New Year's Day Tournament of Roses Parade in color in 1953, but it is not until 1966 that the three networks broadcast all of their primetime programs in color. In 1972, only half of the households in the U.S. have a color television.",
			img : {
				path: 'media/img/objects/obj6_img2.png',
			}
		},
		{
			year : '1975',
			text : "Sony's Betamax, a video cassette recorder (VCR) selling for $1,300, is introduced to the home market in 1975. VHS decks, which make their debut in 1977, eventually out-compete Betamax decks and come to dominate the home VCR market.",
			img : {
				path: 'media/img/objects/obj6_img3.png',
			}
		},
		{
			year : '1996',
			text : "High-definition television (HDTV) is first broadcast in the U.S. in 1996. An increased number of pixels (picture elements) per frame of video dramatically improves picture quality. The first flat-screen television is in stores just a year later. This 42-inch display uses millions of tiny plasma cells to produce the individual pixels. Introduced around the same time, LCD (liquid-crystal display) televisions are slow to take hold, but by 2006 will surpass plasma displays as the most popular flat-screen televisions.",
			img : {
				path: 'media/img/objects/obj6_img4.png',
			}
		},
		{
			year : '1997',
			text : "DVD disks and players are introduced in the United States in 1997. Digital information is encoded into the surface of these optical disks and is read by lasers built into the players. By the early 2000s, DVDs will have begun to overtake the VHS decks as the most popular format for playing pre-recorded video.",
			img : {
				path: 'media/img/objects/obj6_img5.png',
			}
		},
		{
			year : '1999',
			text : "TiVo introduces the first consumer digital video recorder (DVR) to the public in 1999. These and similar units, which record video in a digital format to disk drives, flash drives, and other mass-storage devices, enable viewers to record and play back all of their favorite television programs—and to skip the commercials by fast-forwarding.",
			img : {
				path: 'media/img/objects/obj6_img6.png',
			}
		},
		{
			year : '2009',
			text : "In June 2009, The Federal Communications Commission (FCC) requires that all high-power television broadcasts be made in a digital format. Because digital channels require less bandwidth than analog channels do, this requirement increases the number of channels available to the public and improves picture quality.",
			img : {
				path: 'media/img/objects/obj6_img7.png',
			}
		}
	],
	[
		{
			year : '1980',
			text : "Cellular telephones make callers mobile for the first time in the early 1980s. Japan's first commercially automated cellular network, launched in 1979, is followed quickly by similar systems in a number of countries, including the U.S. Between 1990 and 2009, the number of cellular subscribers grows from 12.4 million to 4.6 billion worldwide.",
			img : {
				path: 'media/img/objects/obj7_img1.png',
			}
		},
		{
			year : '2001',
			text : "As mobile as laptop computers are, smartphones take computing to a whole new level of portability. Starting in 2001, several companies launch their versions of the smartphone, handheld mini computers that enable users to receive and send email, surf the Web, and share photos and music with their friends.",
			img : {
				path: 'media/img/objects/obj7_img2.png',
			}
		}
	],
	[
		{
			year : '1900',
			text : "At the turn of the century, there are over one million telephones in the United States. This seemingly large number works out to fewer than two phones for every 100 people. The system relies heavily on human operators to make connections by manually plugging wires into a switchboard to connect two phone lines together.",
			img : {
				path: 'media/img/objects/obj8_img1.png',
			}
		},
		{
			year : '1905',
			text : "Almon Brown Strowger, an undertaker, develops a switching system that is controlled by a dial on the telephone. Callers can now dial directly to another phone without the assistance of an operator. Although Bell Telephone Laboratories installs Strowger's new system in many locations, switchboard operators are still used well into the second half of the century.",
			img : {
				path: 'media/img/objects/obj8_img2.png',
			}
		},
		{
			year : '1937',
			text : "Introduced in 1937, the popular Model 302 telephone is one of the first to have a built-in ringer. Although it is one of the most common phones in the 1940s and 1950s, very few people own one. Most people lease their phones for a monthly fee.",
			img : {
				path: 'media/img/objects/obj8_img3.png',
			}
		},
		{
			year : '1963',
			text : "Telephones with push buttons and touch-tone dialing appear in homes in selected areas around 1963. Each key on the new phones produces a specific combination of two audio frequencies. Switching centers responsible for routing calls then decode the signals electronically to determine a call's intended destination.",
			img : {
				path: 'media/img/objects/obj8_img4.png',
			}
		}
	],
	[
		{
			year : '1900',
			text : "Phonographs play sound that has been recorded onto wax-coated cardboard cylinders. Invented in 1885, these cylinders replaced Thomas Edison's foil-wrapped metal cylinders.",
			img : {
				path: 'media/img/objects/obj9_img1.png',
			}
		},
		{
			year : '1901',
			text : "Emile Berliner invents the gramophone, which uses flat disks made of shellac. The disks produce better sound quality, are more durable, and are easier to mass produce than wax cylinders. Disk-shaped records quickly replace phonograph cylinders as the chosen technology of the time.",
			img : {
				path: 'media/img/objects/obj9_img2.png',
			}
		},
		{
			year : '1925',
			text : "Some phonographs made in 1925 use electric motors to turn records and amplifiers to increase volume. The speed of the records is 78 revolutions per minute, or 78 rpm. The conventional acoustic/hand- cranked player, however, still sees a lot of use in the years to come.",
			img : {
				path: 'media/img/objects/obj9_img3.png',
			}
		},
		{
			year : '1948',
			text : "The first LP (long-playing) records, developed at the Columbia Broadcasting System (CBS) Laboratories in 1948, are sold to the public. Instead of spinning at 78 revolutions per minute (rpm), these 'long-playing' records spin at 33 1/3 rpm. The records, made of vinyl, are also more durable than 78s made of clay or shellac.",
			img : {
				path: 'media/img/objects/obj9_img4.png',
			}
		},
		{
			year : '1958',
			text : "Stereophonic phonographs and records reproduce sound using two or more independent audio channels and speakers, creating the impression of sound produced from different directions. This technology appears in homes in 1958, adding a new dimension to high-fidelity sound.",
			img : {
				path: 'media/img/objects/obj9_img5.png',
			}
		},
		{
			year : '1983',
			text : "Developed in the 1970s, compact discs, or CDs, appear on the shelves of music stores. These optical disks store music as digital information. The information is encoded as a series of tiny pits along a spiral track on the surface of the disk. CD players use lasers to read the encoded information and then reassemble it into the music it represents.",
			img : {
				path: 'media/img/objects/obj9_img6.png',
			}
		}
	],
	[
		{
			year : '1947',
			text : "Tape recorders, like the Brush model, appear in homes in 1947. These recorders use magnetic plastic tape, which was developed in Germany in 1930.",
			img : {
				path: 'media/img/objects/obj10_img1.png',
			}
		},
		{
			year : '1955',
			text : "Stereo tape recorders are sold to the home market in 1955.",
			img : {
				path: 'media/img/objects/obj10_img2.png',
			}
		},
		{
			year : '1963',
			text : "Tape recorders using compact cassettes are introduced. Compact cassettes offer high-fidelity sound in a small, easy-to-use format.",
			img : {
				path: 'media/img/objects/obj10_img3.png',
			}
		},
		{
			year : '1980',
			text : "The Sony Walkman appears in homes and on hips across the country.",
			img : {
				path: 'media/img/objects/obj10_img4.png',
			}
		},
		{
			year : '2001',
			text : "Although other digital audio players came before it, Apple's first-generation iPod revolutionizes the way people experience music. Now more than ever, people take music wherever they go. The MP3 audio encoding format that iPods and other players use also makes sharing music simpler than ever.",
			img : {
				path: 'media/img/objects/obj10_img5.png',
			}
		}
	],
	[
		{
			year : '2020',
			text : "Digital audio/visual technology continues to change the way people find information and enjoy entertainment. Increasingly, our concepts of media broadcasting and Internet access are merging and expanding the ways in which we share and use media. We now watch television programs on our smartphones, listen to distant radio stations on our computers, and use social networking sites on our televisions. What's next?",
		}
	]

]


$(document).ready(function(){
	$('.sliderValue').text(minY);
	for(var i = 0;i <= numOfTicks;i++){
		var ticks = document.createElement("div");
		ticks.setAttribute("class","trickElement")
		
		ticks.innerHTML = '<span></span>';
		if(!(i%2)){
			ticks.innerHTML = '<label>'+(minY+(i*5))+'</label><span></span>';
		}
		
		document.getElementById('rangeSlider').appendChild(ticks);
	}
	
	$(".aria").focusin(function(){
		$(this).children('.obj_img').css({"filter" : "drop-shadow(0px 0px 5px #FF9800)", "box-shadow": "0px 0px 1px 3px #FFEB3B"});
		$(this).children('.obj_text').css({"display":"block"});
		$(this).addClass('active');
	 });
	$(".aria").on('focusout',function(){
		$(this).children('.obj_img').css({"filter" : "none", "box-shadow": "none"});
		$(this).children('.obj_text').css({"display":"none"});
		$(this).removeClass('active');
	 });
	 
	 $(".aria .obj_img").on('mouseover', function(){
		$(this).parent().addClass("objectover");
		$(this).next().show();
	 })
	  $(".aria .obj_img").on('mouseout', function(){
		 $(this).parent().removeClass("objectover");
		$(this).next().hide(); 
	 })
	  
	  
	  
	function initial(){
		$('.obj_fridge .obj_img img').attr("src" , yearStep[0][0].img.path);
		$('.obj_fridge .obj_text').html('<p><span>'+ yearStep[0][0].year +'</span><br>' +yearStep[0][0].text+'</p>');
		$('.phone .obj_img img').attr({"src" : yearStep[7][0].img.path, "width":"100%"});
		$('.phone .obj_text').html('<p><span>'+ yearStep[7][0].year +'</span><br>' +yearStep[7][0].text+'</p>');
		$('.phone').css({bottom: '630px', left: '490px'});
		$('.phone .obj_text').css({top: '120px', left: '70px'})
		$('.phonographs .obj_img img').attr({"src" : yearStep[8][0].img.path, "width":"90%"});
		$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][0].year +'</span><br>' +yearStep[8][0].text+'</p>');
		$('.phonographs .obj_text').css({top: '190px'});
	}
	initial();
	$('.slider').on('change, input', function(){
		
		
			
		var val = $(this).val();
			
		console.log("val : ",val)
		
		var pos = (( (val-minY)/(maxY-minY))*100);
		
		$('.sliderValue').css("left", ((pos-2.5)+'%'));
		
			if(val >= maxY){
				$('.Final_Popup').show();
				$('.Final_Popup .box').html('<p><span>'+ yearStep[10][0].year +'+</span><br>' +yearStep[10][0].text+'</p>');
				$('.sliderValue').text(val+'+');
				$('.aria').removeAttr('tabindex');
			}else{
				$('.Final_Popup').hide();
				$('.sliderValue').text(val);
				$('.aria').attr('tabindex',0);
			}
		
			if(val <= 1912){
				initial();
			}
			else if(val <= 1930){
				$('.obj_fridge .obj_img img').attr("src" , yearStep[0][1].img.path);
				$('.obj_fridge .obj_text').html('<p><span>'+ yearStep[0][1].year +'</span><br>' +yearStep[0][1].text+'</p>');
			}
			else if(val <= 1930){
				$('.obj_fridge .obj_img img').attr("src" , yearStep[0][1].img.path);
				$('.obj_fridge .obj_text').html('<p><span>'+ yearStep[0][1].year +'</span><br>' +yearStep[0][1].text+'</p>');
			}
			else if(val <= 1964){
				$('.fridge_update').hide();
				$('.obj_fridge .obj_img img').attr("src" , yearStep[0][2].img.path);
				$('.obj_fridge .obj_text').html('<p><span>'+ yearStep[0][2].year +'</span><br>' +yearStep[0][2].text+'</p>');
				$('.obj_fridge').show();
			}
			else if(val < 1995){
				$('.fridge_update').show();
				$('.obj_fridge').hide();
			}
			else{
				$('.fridge_update').hide();
				$('.obj_fridge').show();
				$('.obj_fridge .obj_img img').attr("src" , yearStep[0][3].img.path);
				$('.obj_fridge .obj_text').html('<p><span>'+ yearStep[0][3].year +'</span><br>' +yearStep[0][3].text+'</p>');
			}
			
			
			
			if( val < 1910){
				$('.obj_radio').hide();
				$('.flat-table').hide();
			}
			else if(val < 1919){
				$('.flat-table').show();
				$('.obj_radio').show();
				$('.obj_radio .obj_img img').attr({"src" : yearStep[1][0].img.path, "width":"80%"});
				$('.obj_radio .obj_text').html('<p><span>'+ yearStep[1][0].year +'</span><br>' +yearStep[1][0].text+'</p>');
				$('.obj_radio .obj_text').css({right:'355px', bottom: '734px'});
			}
			else if(val < 1950){
				$('.obj_radio .obj_img img').attr({"src" : yearStep[1][1].img.path, "width":"100%"});
				$('.obj_radio .obj_text').html('<p><span>'+ yearStep[1][1].year +'</span><br>' +yearStep[1][1].text+'</p>');
				$('.obj_radio').css({right: '10px'});
				$('.obj_radio .obj_text').css({right:'355px', bottom: '734px'});
			}
			else if(val < 1955){
				$('.obj_radio').removeClass("customPos");
				$('.obj_radio').css({right: '-60px'});
				$('.obj_radio .obj_img img').attr({"src" : yearStep[1][2].img.path, "width":"50%"});
				$('.obj_radio .obj_text').html('<p><span>'+ yearStep[1][2].year +'</span><br>' +yearStep[1][2].text+'</p>');
				$('.obj_radio .obj_text').css({right:'280px', bottom: '675px'});
				
			}
			else if(val < 1980){
				$('.obj_radio .obj_img img').attr({"src" : yearStep[1][3].img.path, "width":"50%"});
				$('.obj_radio .obj_text').html('<p><span>'+ yearStep[1][3].year +'</span><br>' +yearStep[1][3].text+'</p>');
				$('.obj_radio .obj_text').css({right:'280px', bottom: '700px'});
				$('.book').hide();
			}
			else if(val < 2001){
				$('.obj_radio .obj_img img').attr({"src" : yearStep[1][4].img.path, "width":"50%"});
				$('.obj_radio .obj_text').html('<p><span>'+ yearStep[1][4].year +'</span><br>' +yearStep[1][4].text+'</p>');
				$('.obj_radio').show();
				$('.book').show();
			}
			else if(val < 2010){
				$('.placeholder_img').hide();
				$('.chair_bg').show();
				$('.computer').show();
				$('.microwave').show();
				$('.flat-table-small').show();
				$('.tape_box').show();
				$('.obj_radio').show();
				$('.flat-table').show();
				$('.phonographs').show();
				$('.tupperware').show();
				$('.phone').show();
				$('.wireless').show();
				$('.cell_phone').show();
				$('.pot').show();
			}
			else{
				$('.obj_radio').hide();
				$('.placeholder_img').show();
				$('.chair_bg').hide();
				$('.computer').hide();
				$('.microwave').hide();
				$('.flat-table-small').hide();
				$('.tape_box').hide();
				$('.obj_radio').hide();
				$('.flat-table').hide();
				$('.phonographs').hide();
				$('.tupperware').hide();
				$('.phone').hide();
				$('.wireless').hide();
				$('.cell_phone').hide();
				$('.pot').hide();
			}
			
			
			
			if( val < 1965){
				$('.microwave').hide();
				$('.flat-table-small').hide();
			}
			else if(val < 1980){
				$('.microwave').show();
				$('.flat-table-small').show();
				$('.microwave .obj_img img').attr({"src" : yearStep[2][0].img.path, "width":"70%"});
				$('.microwave .obj_text').html('<p><span>'+ yearStep[2][0].year +'</span><br>' +yearStep[2][0].text+'</p>');
			}else{
				$('.microwave .obj_img img').attr({"src" : yearStep[2][1].img.path, "width":"100%"});
				$('.microwave .obj_text').html('<p><span>'+ yearStep[2][1].year +'</span><br>' +yearStep[2][1].text+'</p>');
			}
			
			if( val < 1945){
				$('.tupperware').hide();
				
			}
			else if(val < 2008){
				$('.tupperware').show();
				$('.tupperware').css('bottom','820px');
				$('.tupperware .obj_img img').attr({"src" : yearStep[3][0].img.path, "width":"70%"});
				$('.tupperware .obj_text').html('<p><span>'+ yearStep[3][0].year +'</span><br>' +yearStep[3][0].text+'</p>');
			}else{
				$('.tupperware').css('bottom','812px');
				$('.tupperware .obj_img img').attr({"src" : yearStep[3][1].img.path, "width":"100%"});
				$('.tupperware .obj_text').html('<p><span>'+ yearStep[3][1].year +'</span><br>' +yearStep[3][1].text+'</p>');
			}
			
			
			if( val < 1975){
				$('.computer').hide();
			}
			else if(val < 1977){
				$('.computer').show();
				$('.computer .obj_img img').attr({"src" : yearStep[4][0].img.path, "width":"100%"});
				$('.computer .obj_text').html('<p><span>'+ yearStep[4][0].year +'</span><br>' +yearStep[4][0].text+'</p>');
				$('.computer .obj_text').css({top: "194px"})
			}
			else if(val < 1989){
				$('.computer .obj_img img').attr({"src" : yearStep[4][1].img.path, "width":"100%"});
				$('.computer .obj_text').html('<p><span>'+ yearStep[4][1].year +'</span><br>' +yearStep[4][1].text+'</p>');
				$('.computer .obj_text').css({top: "110px"})
			}
			
			else if(val < 1994){
				$('.computer .obj_img img').attr({"src" : yearStep[4][2].img.path, "width":"100%"});
				$('.computer .obj_text').html('<p><span>'+ yearStep[4][2].year +'</span><br>' +yearStep[4][2].text+'</p>');
				$('.computer .obj_text').css({top: "220px"})
				
				
			}
			else if(val == 1994){
				$('.computer .obj_img img').attr({"src" : yearStep[4][3].img.path, "width":"100%"});
				$('.computer .obj_text').html('<p><span>'+ yearStep[4][3].year +'</span><br>' +yearStep[4][3].text+'</p>');
				$('.computer .obj_text').css({top: "92px"})
				$('.flat-table-wireless').hide();
				$('.wireless').hide();
			}
			else if(val <= 1995){
				$('.computer .obj_text').css({top: "92px"})
				$('.wireless').show();
				$('.flat-table-wireless').show();
				$('.wireless .obj_img img').attr({"src" : yearStep[4][4].img.path, "width":"100%"});
				$('.wireless .obj_text').html('<p><span>'+ yearStep[4][4].year +'</span><br>' +yearStep[4][4].text+'</p>');
			}
			
			
			if( val < 1946){
				$('.television').hide();
			}
			else if(val < 1953){
				$('.television').show();
				$('.television .obj_img img').attr({"src" : yearStep[5][0].img.path, "width":"100%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][0].year +'</span><br>' +yearStep[5][0].text+'</p>');
				$('.television').css({right: '-12px', width: '290px'});
			}
			else if(val < 1975){
				$('.television .obj_img img').attr({"src" : yearStep[5][1].img.path, "width":"80%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][1].year +'</span><br>' +yearStep[5][1].text+'</p>');
				$('.television').css({right: '-12px', width: '290px'});
			}
			else if(val < 1996){
				$('.television .obj_img img').attr({"src" : yearStep[5][2].img.path, "width":"80%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][2].year +'</span><br>' +yearStep[5][2].text+'</p>');
				$('.television .obj_text').css({width: '340px',bottom:'580px'});
				$('.television').css({right: '-12px', width: '290px'});
				$('.television .obj_text').removeClass('after');
			}
			else if(val < 1997){
				$('.television .obj_img img').attr({"src" : yearStep[5][3].img.path, "width":"80%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][3].year +'</span><br>' +yearStep[5][3].text+'</p>');
				$('.television').css({right: '-12px', width: '290px'});
				$('.television .obj_text').css({width: '550px',bottom:'570px'});
				$('.television .obj_text').addClass('after');
				
			}
			else if(val < 1999){
				$('.television .obj_img img').attr({"src" : yearStep[5][4].img.path, "width":"80%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][4].year +'</span><br>' +yearStep[5][4].text+'</p>');
				$('.television').css({right: '10px', width: '305px'});
				$('.television .obj_text').css({width: '340px',bottom:'580px'});
				$('.television .obj_text').removeClass('after');
			}
			
			else if(val < 2009){
				$('.television .obj_img img').attr({"src" : yearStep[5][5].img.path, "width":"80%"});
				$('.television .obj_text').html('<p><span>'+ yearStep[5][5].year +'</span><br>' +yearStep[5][5].text+'</p>');
				$('.television').show();
				$('.pot').hide();
				$('.television .obj_text').css({width: '370px',bottom:'650px'});
				$('.television_latest, pot').hide();
				$('.television').css({right: '-32px', width: '366px'});
			}
			else{
				$('.television').hide();
				$('.pot').show();
				$('.television_latest, .pot').show();
				$('.television .obj_text').css({width: '340px',bottom:'580px'});
				$('.pot img').attr({"src" : "media/img/objects/pot.png", "width":"100%"});
				$('.television_latest .obj_img img').attr({"src" : yearStep[5][6].img.path, "width":"80%"});
				$('.television_latest .obj_text').html('<p><span>'+ yearStep[5][6].year +'</span><br>' +yearStep[5][6].text+'</p>');
			}
			
			if( val < 1980){
				$('.cell_phone').hide();
			}
			else if(val < 2001){
				$('.cell_phone').show();
				$('.cell_phone .obj_img img').attr({"src" : yearStep[6][0].img.path, "width":"100%"});
				$('.cell_phone .obj_text').html('<p><span>'+ yearStep[6][0].year +'</span><br>' +yearStep[6][0].text+'</p>');
			}
			else{
				
				$('.cell_phone .obj_img img').attr({"src" : yearStep[6][1].img.path, "width":"50%"});
				$('.cell_phone .obj_text').html('<p><span>'+ yearStep[6][1].year +'</span><br>' +yearStep[6][1].text+'</p>');
			}
			
			if( val < 1905){
				$('.phone .obj_img img').attr({"src" : yearStep[7][0].img.path, "width":"100%"});
				$('.phone .obj_text').html('<p><span>'+ yearStep[7][0].year +'</span><br>' +yearStep[7][0].text+'</p>');
				$('.phone').css({bottom: '630px', left: '490px'})
				$('.phone .obj_text').css({top: '120px', left: '70px'})
			}
			else if(val < 1937){
				$('.phone .obj_img img').attr({"src" : yearStep[7][1].img.path, "width":"100%"});
				$('.phone .obj_text').html('<p><span>'+ yearStep[7][1].year +'</span><br>' +yearStep[7][1].text+'</p>');
				$('.phone').css({left: '556px',bottom:'438px'})
				$('.phone .obj_text').css({top: '260px', left: '170px'})
				
			}
			else if(val < 1963){
				$('.phone .obj_img img').attr({"src" : yearStep[7][2].img.path, "width":"100%"});
				$('.phone .obj_text').html('<p><span>'+ yearStep[7][2].year +'</span><br>' +yearStep[7][2].text+'</p>');
				$('.phone .obj_text').css({top: '400px', left: '170px'})
				
			}else{
				$('.phone .obj_img img').attr({"src" : yearStep[7][3].img.path, "width":"100%"});
				$('.phone .obj_text').html('<p><span>'+ yearStep[7][3].year +'</span><br>' +yearStep[7][3].text+'</p>');
				$('.phone .obj_text').css({top: '350px', left: '200px'})
			}
			
			
			if( val < 1901){
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][0].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][0].year +'</span><br>' +yearStep[8][0].text+'</p>');
				$('.phonographs .obj_text').css({top: '190px'});
			}
			else if(val < 1925){
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][1].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][1].year +'</span><br>' +yearStep[8][1].text+'</p>');
				$('.round_table').show();
				$('.phonographs .obj_text').css({top: '165px'});
				$('.phonographs').css({bottom: '270px', right:'301px', width:'300px'});
				
			}
			else if(val < 1948){
				$('.round_table').hide();
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][2].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][2].year +'</span><br>' +yearStep[8][2].text+'</p>');
				$('.phonographs .obj_text').css({top: '60px'});
				$('.phonographs').css({bottom: '210px', right:'270px', width:'360px'});
			}
			else if(val < 1958){
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][3].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][3].year +'</span><br>' +yearStep[8][3].text+'</p>');
				$('.phonographs .obj_text').css({top: '100px',width: '395px'});
				$('.phonographs').css({bottom: '210px', right:'270px', width:'360px'});
			}
			else if(val < 1983){
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][4].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][4].year +'</span><br>' +yearStep[8][4].text+'</p>');
				$('.phonographs .obj_text').css({top: '60px',width: '395px'});
				$('.phonographs').css({bottom: '210px', right:'270px', width:'360px'});
			}else{
				$('.phonographs .obj_img img').attr({"src" : yearStep[8][5].img.path, "width":"100%"});
				$('.phonographs .obj_text').html('<p><span>'+ yearStep[8][5].year +'</span><br>' +yearStep[8][5].text+'</p>');
				$('.phonographs .obj_text').css({top: '80px', width: ''});
				$('.phonographs').css({bottom: '190px', right:'308px', width:'340px'});
			}
			
			
			if( val < 1947){
				$('.tape_box').hide();
			}
			else if(val < 1955){
				$('.tape_box').show();
				$('.tape_box .obj_img img').attr({"src" : yearStep[9][0].img.path, "width":"100%"});
				$('.tape_box .obj_text').html('<p><span>'+ yearStep[9][0].year +'</span><br>' +yearStep[9][0].text+'</p>');
				$('.tape_box').css({top: '170px'})
			}
			else if(val < 1963){
				$('.tape_box .obj_img img').attr({"src" : yearStep[9][1].img.path, "width":"80%"});
				$('.tape_box .obj_text').html('<p><span>'+ yearStep[9][1].year +'</span><br>' +yearStep[9][1].text+'</p>');
				$('.tape_box').css({top: '170px'})
			}
			else if(val < 1980){
				$('.tape_box .obj_img img').attr({"src" : yearStep[9][2].img.path, "width":"50%"});
				$('.tape_box .obj_text').html('<p><span>'+ yearStep[9][2].year +'</span><br>' +yearStep[9][2].text+'</p>');
				$('.tape_box').css({top: '230px'})
			}
			else if(val < 2001){
				$('.tape_box .obj_img img').attr({"src" : yearStep[9][3].img.path, "width":"50%"});
				$('.tape_box .obj_text').html('<p><span>'+ yearStep[9][3].year +'</span><br>' +yearStep[9][3].text+'</p>');
				$('.tape_box').css({top: '230px'})
			}else{
				$('.obj_radio').hide();
				$('.tape_box .obj_img img').attr({"src" : yearStep[9][4].img.path, "width":"40%"});
				$('.tape_box .obj_text').html('<p><span>'+ yearStep[9][4].year +'</span><br>' +yearStep[9][4].text+'</p>');
				$('.tape_box').css({top: '260px'})
			}
			
			
			for(var i=0;i<yearStep.length;i++){
				
				for(var j=0;j<yearStep[i].length;j++){
					if(val == (yearStep[i][j].year)){
						$('.sliderValue').show();
						return false;
					}else{
						$('.sliderValue').hide();
					}
				}
				
			}
	
			
			
			
	})
	
	
})

$( window ).on( "load", function() {
	$('.slider').focus();
});