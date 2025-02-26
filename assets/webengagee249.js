function ourstoryclick() {
	// Your JavaScript function logic goes here
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Our story",
		'page_url': window.location.href
	});
}

function ourimpactclick() {
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Our Impact",
		'page_url': window.location.href
	});
}

function ourprojectclick() {
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Our Project",
		'page_url': window.location.href
	});
	
	//var category = jQuery(this).attr('data-cat');
	var category = 'Residential';
	console.log(category);
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "View all - our projects",
		'Category': category,
		'page_url': window.location.href
	});
}

function commercialviewallclick() {
	//var category = jQuery(this).attr('data-cat');
	var category = 'Commercial';
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "View all - our projects",
		'Category': category,
		'page_url': window.location.href
	});
}


function boardofdirectorclick() {
	var base_url = window.location.origin;
	var final_url = base_url + "/investor/board-of-directors";
	//alert(final_url);
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Board of directors viewed",
		'page_url': final_url
	});
}

function leadershipclick() {
	var base_url = window.location.origin;
	var final_url = base_url + "/leadership";
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Leadership team viewed",
		'page_url': final_url
	});
}

function featuredprojectsclick() {
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "View more - Featured Projects",
		'page_url': window.location.href
	});
}


function ongoingprojectsclick() {
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "View more - Under Construction Projects",
		'page_url': window.location.href
	});
}


function soldoutprojectsclick() {
	// Your JavaScript function logic goes here
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "View more - Ready Projects",
		'page_url': window.location.href
	});
}

function aboutclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var viewmore = 1;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "About clicked",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Project Type': projectype,
		'view more': viewmore
	});
}

function amenitiesclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var viewmore = 1;
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Amenities Clicked",
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Location': city
	});
}

function featuresclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Features Click",
		'Page URL': pageURL,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Project Type': projectype
	});
}

function retailclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Retail click",
		'Page URL': pageURL,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Project Type': projectype
	});
}


function priceclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var viewmore = 1;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Price clicked",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Project Type': projectype,
		'view more': viewmore
	});
}

function locationclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
    var viewmap = 1;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Location Clicked",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'Location': city,
		'View map': viewmap
	});
}

function galleryclick() {
	// Your JavaScript function logic goes here
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
    var viewmap = 1;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Gallery Clicked",		
		'Project Name': projecttitle,
		'Project Id': projecid
	});
}

/*jQuery(document).on("click","#projectclick",function() { 
		var title = jQuery(this).attr('data-title');
		var projectid = jQuery(this).attr('data-projectid');
		var typology = jQuery(this).attr('data-typology');
		var typology = typology + ' BHK';
		var city = jQuery(this).attr('data-city');
		var img = jQuery(this).attr('data-img');
		var possesion = jQuery(this).attr('data-possesion');
		var state = "";
		var budget = jQuery(this).attr('data-budget');
		var myObj = {"Project Name": title,"Project Id": projectid,"Typology": typology,"City": city,"Img": img,"Possession": possesion,"State": state,"Budget": budget};
		var inputString = $.map(myObj, function(value, key) {return key + ': ' + value;}).join(', ');
		var keyValuePairs = inputString.split(', ').map(function(pair) {
		  var parts = pair.split(': ');
		  return { [parts[0]]: parts[1] };
		});
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Project viewed',
			"Project Name": title,
			"Project Id": projectid,
			"Typology": typology,
			"City": city,
			"Img": img,
			"Possession": possesion,
			"Budget": budget,
			"Project details": keyValuePairs
		});
		
		
	});*/
	
jQuery(document).on("click","#integratedreport",function() { 
		console.log('View our integrated report - our impact');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "View our integrated report - our impact",
			'page_url': window.location.href
		});
	});		
	
jQuery(document).on("click","#projectclick",function() { 
		var title = jQuery(this).attr('data-title');
		var projectid = jQuery(this).attr('data-projectid');
		var categoty = jQuery(this).attr('data-category');
		//var typology = jQuery(this).attr('data-typology');
		//var typology = typology + ' BHK';
		//var city = jQuery(this).attr('data-city');
		//var img = jQuery(this).attr('data-img');
		var subcat = jQuery(this).attr('data-possesion');
		var pageURL = jQuery(location).attr("href");
		var viewmore = 1;
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Project viewed',
			"Project Name": title,
			"Project Id": projectid,
			"Project category": categoty,
			"Project sub category": subcat
		});		
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "About clicked",
			'page_url': window.location.href,
			'Project Name': title,
			'Project Id': projectid,
			'Project Type': categoty,
			'view more': viewmore
		});
});	
	
jQuery(document).on("click","#comprojectclick",function() { 
		var title = jQuery(this).attr('data-title');
		var projectid = jQuery(this).attr('data-projectid');
		var categoty = jQuery(this).attr('data-category');
		//var typology = jQuery(this).attr('data-typology');
		//var typology = typology + ' BHK';
		//var city = jQuery(this).attr('data-city');
		//var img = jQuery(this).attr('data-img');
		var subcat = jQuery(this).attr('data-subcat');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Project viewed',
			"Project Name": title,
			"Project Id": projectid,
			"Project category": categoty,
			"Project sub category": subcat
		});
	});		

jQuery(document).on("click",".plantrack ul li a",function() { 
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var type = jQuery(this).attr('data-type');
		var amount = jQuery(this).attr('data-amount');
		var img = jQuery(this).attr('href');
		console.log(type);
		console.log(amount);
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Floor Plan Clicked',
			"Project Name": projecttitle,
			"Project Id": projecid,
			"Plan type": type,
			"Plan image": img
		});
		//alert("Typology Clicked");
		//webengage.track("Typology Clicked" , {"Type": type,"Amount": amount,"Project Name": projecttitle,"Project Id": projecid});	
	});
	
jQuery(document).on("click",".floorplantrack",function() { 
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var title = jQuery(this).attr('data-caption');
		var type = jQuery(this).attr('data-ptype');
		var img = jQuery(this).attr('href');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Floor Plan Clicked',
			"Project Name": projecttitle,
			"Project Id": projecid,
			"Plan type": type,
			"Plan title": title,
			"Plan image": img
		});
		//alert("Typology Clicked");
		//webengage.track("Typology Clicked" , {"Type": type,"Amount": amount,"Project Name": projecttitle,"Project Id": projecid});	
	});

jQuery(document).on("click",".imggalleryclick",function() { 
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var img = jQuery(this).attr('data-popup-img');		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Image_view',
			"Project Name": projecttitle,
			"Project Id": projecid,
			"Image": img
		});
	});	

jQuery(document).on("click",".videogalleryclick",function() { 
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var iframe = jQuery(this).attr('data-popup-iframe');		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event' : 'Video_view',
			"Project Name": projecttitle,
			"Project Id": projecid,
			"Video": iframe
		});
	});


jQuery(document).on("click","#lodhapalavaclick",function() { 
		var pageURL = jQuery(location).attr("href");
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "Palava City click",
			'page_url': window.location.href
		});
	});		
	

function enquireclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Enquire",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
}

function callclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Request a Call",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
}

function chatclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Chat",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
}

function dchatclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Chat",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
}

function mchatclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Chat",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
}

function lodhaclick(){
	var pageURL = jQuery(location).attr("href");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Lodha Icon click",
		'page_url': window.location.href
	});
}

function lodhaluxuryclick(){
	var pageURL = jQuery(location).attr("href");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Lodha Luxury click",
		'page_url': window.location.href
	});
}




jQuery(document).on("blur","#edit-name",function () {
		if (jQuery(this).val() != "") {
			//alert("Typing");
			var name = jQuery("#edit-name").val();
			var projecttitle = jQuery(".projecttitle").text();
			var projecid = jQuery(".projecid").text();
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Name Submit",
				'Name': name,
				'Project Name': projecttitle,
				'Project Id': projecid
			});
			webengage.user.setAttribute('we_first_name', name);
		}
	});


jQuery(document).on("blur","#edit-email-id",function () {
		if (jQuery(this).val() != "") {
			//alert("Email Typing");
			var email = jQuery("#edit-email-id").val();
			var projecttitle = jQuery(".projecttitle").text();
			var projecid = jQuery(".projecid").text();
			var selCntry = $("#countrylst li.active label").attr("data-title");
			var selcity = $("#citylst li.active label").attr("data-title");
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Email Submit",
				'Email': email,
				'Project Name': projecttitle,
				'Project Id': projecid
			});
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Country Submit",
				'Country': selCntry,
				'Project Name': projecttitle,
				'Project Id': projecid
			});
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "City Submit",
				'City': selcity,
				'Project Name': projecttitle,
				'Project Id': projecid
			}); 
			webengage.user.setAttribute('we_email', email);
		}
	});
	
jQuery(document).on("blur","#edit-mobile-number",function () {
		if (jQuery(this).val() != "") {
			//alert("Email Typing");
			var mobile = jQuery("#edit-mobile-number").val();
			var projecttitle = jQuery(".projecttitle").text();
			var projecid = jQuery(".projecid").text();
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Mobile Submit",
				'Mobile': mobile,
				'Project Name': projecttitle,
				'Project Id': projecid
			});
			webengage.user.setAttribute('we_phone', mobile);
		}
	});	
	
jQuery(document).on("click",".footerclick",function () {
			var category = jQuery(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer clicked",
				'Category': category,				
				'page_url': window.location.href
			});
			
	});	
	
/*jQuery(document).on("click",".aboutfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",
				'Category': category,
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".sustainabilityfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".careersfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click",".investorfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click",".blogfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".newsroomfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click",".contactusfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".allprojectsfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click",".lodhapayfooterclick",function () {
			var category = $(this).attr("data-title");	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Footer Clicked - About Us",							
				'page_url': window.location.href
			});
			
	});*/

jQuery(document).on("click",".recslider",function () {			
			//alert("Our Impact - Recognition Slider");
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Our Impact - Recognition Slider",							
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click",".esgclick",function () {
			var title = jQuery(this).attr("data-title");	
			var category = jQuery(this).attr("data-cat");	
			//alert(title);
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "View more - our impact",
				'Category': category,
				'Title': title,		
				'page_url': window.location.href
			});
			
	});		
	
jQuery(document).on("click",".socialclick",function () {
			var altValue = jQuery(this).attr("alt");			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Social media clicked",
				'Channel': altValue,				
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click","#careerwhy,#careerlifeat,#careerexplore,#careercampus",function () {	
			var title = jQuery(this).text();
			//alert(title);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Careers - Page Viewed",
				'Page Header': title,
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".integratedreport",function () {	
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "View our integrated report - Investor Relations",
				'page_url': window.location.href
			});
			
	});	

jQuery(document).on("click","#investorrel,#investorfinan,#investorboarddir,#investorcorpgov,#investorshareholder,#investordisclosure",function () {
			var title = jQuery(this).text();
			//alert(title);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Investor Relations - Page Viewed",
				'Page Header': title,
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click","#newsclick,#newsclickpage",function () {
			var title = jQuery(this).attr("data-title");	
			//alert(title);			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Press Release/News Clicked",
				'Title': title,
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click","#pressclick,#pressclickpage",function () {
			var title = jQuery(this).attr("data-title");	
			//alert(title);			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Press Release/News Clicked",
				'Title': title,
				'page_url': window.location.href
			});
			
	});
	
jQuery(document).on("click", ".financeclick", function (e) {
    //e.preventDefault();
    
    // Retrieve data attributes
    var reportname = jQuery(this).attr("data-title");
    var year = jQuery(this).attr("data-year");
    var quarter = jQuery(this).attr("data-quarter");
	var name = jQuery(this).attr("data-test");
    
    // Log values to console for debugging
    console.log("Report Name: ", reportname);
    console.log("Year: ", year);
    console.log("Quarter: ", quarter);
	//console.log("Report Name Test: ", name);
    
    // Verify and log data attributes
    if (!reportname) {
        console.error("Report Name attribute is missing or undefined.");
        return;
    }
    if (!year) {
        console.error("Year attribute is missing or undefined.");
        return;
    }
    if (!quarter) {
        console.error("Quarter attribute is missing or undefined.");
        return;
    }
    
    // Push data to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': "Financials - Download Report",
        'page_url': window.location.href,
        'Quarter': quarter,
        'Financial Year': year,
        'Report Name': name
    });
});


jQuery(document).on("click",".irpolicydownload",function () {
			var title = jQuery(this).text();
			var category = jQuery(this).attr("date-cat");
			//alert(title);			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Investor Relations - Corporate Governance",
				'page_url': window.location.href,
				'Category': category,
				'Report Downloaded ': title 
			});
			
	});

jQuery(document).on("click", ".ircorgovdownload", function (event) {
    //event.preventDefault(); 
			var title = jQuery(this).attr("data-title");	
			var category = 'corporate governance';
			console.log(title);			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Investor Relations  - Corporate Governance",
				'page_url': window.location.href,
				'Category': category,
				'Report Downloaded ': title 
			});
			
	});		

	

/*jQuery('input[name="resived_update_on_whatsapp"]').click(function() {
		//var value = $(this).val();
		if ($(this).is(':checked')) {
            var statval = 1;
			//console.log(statval);
        } else {
            var statval = 0;
			//console.log(statval);
        }
        //alert(value);
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var city = jQuery(".city").text();
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "WhatsApp Opt in",
			'Project Name': projecttitle,
			'Project Id': projecid,
			'City': city,
			'Status': statval
		});
		webengage.user.setAttribute('we_whatsapp_opt_in', true);
    });	*/
	
jQuery(document).on("click",".impactdownload",function () {
			var category = jQuery(this).attr("data-cat");
			var subcat = jQuery(this).text();	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Downloads - our impact",
				'Category': category,
				'Sub Category': subcat,	
				'page_url': window.location.href
			});
			
	});	
	
jQuery(document).on("click",".quickclick",function () {			
			var category = jQuery(this).text();	
			//alert(category);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Quick Links",
				'Category': category,				
				'page_url': window.location.href
			});
			
	});

jQuery(document).on("click",".faqclick",function () {			
			var Query = jQuery(this).text().trim(); 
			var projecttitle = jQuery(".projecttitle").text();
			var projecid = jQuery(".projecid").text();
			//alert(Query);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Most Common Queries",
				'page_url': window.location.href,
				'Project Name': projecttitle,
				'Project Id': projecid,
				'Query': Query		
			});
			
	});	

jQuery(document).on("click",".blogview",function () {
			var title = jQuery(this).attr("data-title");
			var category = jQuery(this).attr("data-category");
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Blogs View",
				'page_url':window.location.href,
				'Blog Category':category,
				'Blog Title':title
			});
			
	});		
	
jQuery(document).on("click",".reraclick",function () {
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "RERA Click",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Type': projectype
	});
});

jQuery(document).on("click",".disclaimerclick",function () {
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Disclaimer View",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Type': projectype
	});
});

jQuery(document).on("click",".footercollapse",function () {
	var title = jQuery(this).attr('data-title');
	var category = jQuery(this).attr('data-cat');
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Footer Collapse Click",
		'page_url': window.location.href,
		'Category': category,
		'Title': title
	});
});	

jQuery(document).on("click",".manualsearch",function () {
	//var title = jQuery('#searchInput').val();	
	var title = jQuery(this).attr('data-title');
	//alert(title);
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Project - Manual Search ",
		'Keyword': title,
		'Result Count': 1
	});
});	



jQuery(document).on("click","#termsclick",function () {	
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Terms & Conditions click",
				'page_url': window.location.href
			});
	});	
	
jQuery(document).on("click","#contactclick",function () {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Contact us",			
				'page_url': window.location.href
			});
	});	

	
	
		
	