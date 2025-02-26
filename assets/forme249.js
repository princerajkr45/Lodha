var site_origin = window.location.origin, site_url = site_origin + "/";
var base_url = window.location.origin;
jQuery(document).ready(function ($) {
	setTimeout(function () {
		$('#countrylst').empty();
		$('.form-item-country').remove();
		var cntryOptions = '';
		var cntryCodes = '/themes/lodhanew/js/countrycodes.json';
		var selCntry = 'India';
		jQuery("input[name='hcountry']").val(selCntry);
		//$('.selectedcountry').html(activecountry);
		//console.log(cntryCodes);
		/*cntryOptions += '<li><label for="chk1" data-title="India" data-code="IN" data-dial="+91">India</label></li><li><label for="chk1" data-title="United Arab Emirates" data-code="AE" data-dial="+971">United Arab Emirates</label></li><li><label for="chk1" data-title="United States" data-code="US" data-dial="+1">United States</label></li><li><label for="chk1" data-title="United Kingdom" data-code="GB" data-dial="+44">United Kingdom</label></li><li><label for="chk1" data-title="Saudi Arabia" data-code="SA" data-dial="+966">Saudi Arabia</label></li><li><label for="chk1" data-title="Canada" data-code="CA" data-dial="+1">Canada</label></li><li><label for="chk1" data-title="Singapore" data-code="SG" data-dial="+65">Singapore</label></li><li><label for="chk1" data-title="Hong Kong" data-code="HK" data-dial="+852">Hong Kong</label></li><li><label for="chk1" data-title="Kenya" data-code="KE" data-dial="+254">Kenya</label></li><li><label for="chk1" data-title="Kuwait" data-code="KW" data-dial="+965">Kuwait</label></li><li class="disabled"><label data-title="-1" >--------------------</label></li>';*/
		
		cntryOptions += '<li class="active"><label for="chk1" data-title="India" data-code="IN" data-dial="+91">India</label></li><li><label for="chk1" data-title="United Arab Emirates" data-code="AE" data-dial="+971">United Arab Emirates</label></li><li><label for="chk1" data-title="United States" data-code="US" data-dial="+1">United States</label></li><li><label for="chk1" data-title="United Kingdom" data-code="GB" data-dial="+44">United Kingdom</label></li><li><label for="chk1" data-title="Saudi Arabia" data-code="SA" data-dial="+966">Saudi Arabia</label></li><li><label for="chk1" data-title="Canada" data-code="CA" data-dial="+1">Canada</label></li><li><label for="chk1" data-title="Singapore" data-code="SG" data-dial="+65">Singapore</label></li><li><label for="chk1" data-title="Kenya" data-code="KE" data-dial="+254">Kenya</label></li><li><label for="chk1" data-title="Kuwait" data-code="KW" data-dial="+965">Kuwait</label></li>';
		jQuery.getJSON(cntryCodes, function (data) {
			//console.log(data);
			jQuery.each(data, function (key, val) {
				cntryOptions += '<li><label for="chk1" data-title="' + val.name + '" data-code="' + val.code + '" data-dial="' + val.dial_code + '">' + val.name + '</label></li>';
			});
			//var sep = $('<option>', {text: '--------------------', disabled: true, value: -1});

			//$('#edit-country').append(sep);
			//console.log(cntryOptions);
			$('#countrylst').append(cntryOptions);
			
			$('.countrysearchinput').before('<input class="searchListInput" placeholder="Search ...">');
			$('.countrilist').after('<label>Select Country*</label>');
		});
	}, 500);

});


jQuery(document).ready(function ($) {
	jQuery(".cityname").css("display","none");
	jQuery(".otpval").css("display", "none");
	var cntryOptions, cntryCodes = '/themes/lodhanew/js/countrycodes.json';
	var cities = '/themes/lodhanew/js/city.json';

	cityOptions = '<option value="Loading...">Loading...</option>';
	jQuery('#edit-city').remove();
	//jQuery('#edit-city').children().remove().end().append(cityOptions);
	var cityOptions = '';
	var first = true;
	var selCntry = 'India';
	//console.log(selCntry);
	var projectcity = jQuery(".city").text();
	if(projectcity == '' || projectcity == 'Thane' || projectcity == 'Palava'){
		var projectcity = 'Mumbai';
		//$(".selcetdcity").html('Mumbai');
	}
	//console.log(projectcity);
	$(".selcetdcity").empty();
	$(".selcetdcity").html(projectcity);
	$(".formControls").addClass("active");
	setTimeout(function () {
		jQuery.getJSON(cities, function (data) {
			//alert();
			jQuery.each(data, function (key, val) {
				if (val.country == selCntry) {
					jQuery.each(val.cities, function (key, val) {
					var activeClass = (projectcity === val.name) ? 'active' : '';
						if (first) {
							jQuery("input[name='hcity']").val(projectcity);
							cityOptions += '<li class="' + activeClass + '"><label for="chk1" data-title="' + val + '">' + val + '</label></li>';

							first = false;
						} else {
							cityOptions += '<li class="' + activeClass + '"><label for="chk1" data-title="' + val + '">' + val + '</label></li>';
						}
					});
					//console.log(cityOptions);
					$('#citylst').empty();
					$('#citylst').append(cityOptions);
					//$('.searchListInput').remove();
					$('.citysearchinput').before('<input class="searchListInput" placeholder="Search ...">');
					$('.citylist').after('<label>Select City*</label>');
					
					return false;
				}
			});
			if (cityOptions == '') {
				$('#edit-city').empty();
				$('#citylst').empty();
				cityOptions = '<li><label for="chk1" data-title="Others">Others</label></li>';
				//jQuery('#edit-city').children().remove().end().append(cityOptions);
				$('#citylst').append(cityOptions);
				$("input[name='hcity']").val('Others');
			}
		});
	}, 500);
	if (jQuery(".confirmqip").length) {
		jQuery(".confirmqip").closest("li").next("li").hide();
	}
});


jQuery(document).on('click', '#countrylst li', function () {
	//alert("test");
	var cntryOptions = '';
	var cntryCodes = '/themes/lodhanew/js/countrycodes.json';
	var cities = '/themes/lodhanew/js/city.json';
	//jQuery('#edit-city').empty();
	cityOptions = '<option value="Loading...">Loading...</option>';
	//jQuery('#edit-city').children().remove().end().append(cityOptions);
	jQuery('#edit-city').remove();
	$(".selcetdcity").empty();
	var cityOptions = '';
	var first = true;
	var projecttitle = jQuery(".projecttitle").text();
	var projecid = jQuery(".projecid").text();
	var projectcity = jQuery(".city").text();
	//var selCntry = jQuery(this).val();
	//var selCntry = $("#countrylst li.active label").attr("data-title");
	var selCntry = $(this).find('label').attr('data-title');
	//alert(selCntry);
	//var selcountrycode = $("#countrylst li.active label").attr("data-dial");
	var selcountrycode = jQuery(this).find('label').attr("data-dial");
	$(".country-code").empty();
	$(".country-code").html(selcountrycode);
	jQuery("input[name='hcountry']").val(selCntry);
	//alert("Country Submit");
	//webengage.track("Country Submit" , {"Country" : selCntry,"Project Name" : projecttitle,"Project Id" : projecid});
	//console.log(selCntry);
	if (selCntry !== 'India' && selCntry !== 'United Arab Emirates' && selCntry !== 'United States' && selCntry !== 'United Kingdom' && selCntry !== 'Saudi Arabia' && selCntry !== 'Kuwait' && selCntry !== 'Canada' && selCntry !== 'Kenya' && selCntry !== 'Singapore') {
		jQuery(".cityname").css("display","block");
		jQuery(".cityselect").css("display","none");
		
	}
	else{
		jQuery(".cityname").css("display","none");
		jQuery(".cityselect").css("display","block");
	}
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Country Submit",
		'Country': selCntry,
		'Project Name': projecttitle,
		'Project Id': projecid
	});
	setTimeout(function () {
		jQuery.getJSON(cities, function (data) {
			//alert();
			jQuery.each(data, function (key, val) {
				if (val.country == selCntry) {
					jQuery.each(val.cities, function (key, val) {
						var activeClass = (val == 'Mumbai' || val == 'Dubai' || val == 'Albuquerque' || val == 'Birmingham' || val == 'Riyadh' || val == 'Kuwait City' || val == 'Calgary' || val == 'Eldoret' || val == 'Singapore') ? 'active' : '';
						if (first) {
							
							jQuery("input[name='hcity']").val(val);
							cityOptions += '<li class="' + activeClass + '"><label for="chk1" data-title="' + val + '">' + val + '</label></li>';

							first = false;
						} else {
							cityOptions += '<li><label for="chk1" data-title="' + val + '">' + val + '</label></li>';
						}
					});
					//console.log(cityOptions);
					$('#citylst').empty();
					$('#citylst').append(cityOptions);
					//$('.searchListInput').remove();
					if ($('.citysearchinput').prev('.searchListInput').length === 0) {
						$('.citysearchinput').before('<input class="searchListInput" placeholder="Search ...">');
					}
					if (selCntry == 'United Arab Emirates') {
						$(".selcetdcity").html('Dubai');
					}
					else if (selCntry == 'United States'){
						$(".selcetdcity").html('Albuquerque');
					}
					else if(selCntry == 'United Kingdom'){
						$(".selcetdcity").html('Birmingham');
					}
					else if(selCntry == 'Saudi Arabia'){
						$(".selcetdcity").html('Riyadh');
					}
					else if(selCntry == 'Kuwait'){
						$(".selcetdcity").html('Kuwait City');
					}
					else if(selCntry == 'Canada'){
						$(".selcetdcity").html('Calgary');
					}
					else if(selCntry == 'Kenya'){
						$(".selcetdcity").html('Eldoret');
					}
					else if(selCntry == 'Singapore'){
						$(".selcetdcity").html('Singapore');
					}
					else if(selCntry == 'India'){
						$(".selcetdcity").html('Mumbai');
					}
					else{
						
					}
					//$('.citylist').after('<label>Select City</label>');
					return false;
				}
			});
			if (cityOptions == '') {
				$('#edit-city').empty();
				$('#citylst').empty();
				cityOptions = '<li><label for="chk1" data-title="Others">Others</label></li>';
				//jQuery('#edit-city').children().remove().end().append(cityOptions);
				$('#citylst').append(cityOptions);
				$("input[name='hcity']").val('Others');
			}
		});
	}, 500);
});

jQuery(document).on('click', '#citylst li', function () {
	var projecttitle = jQuery(".projecttitle").text();
	var projecid = jQuery(".projecid").text();
	var selcity = $("#citylst li.active label").attr("data-title");
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "City Submit",
		'Country': selcity,
		'Project Name': projecttitle,
		'Project Id': projecid
	});
	jQuery("input[name='hcity']").val(selcity);
});