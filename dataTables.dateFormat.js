function calculate_date(date) {
	var date = date.replace(" ", "");
	
	if (date.indexOf('.') > 0) {
		/*date a, format dd.mn.(yyyy) ; (year is optional)*/
		var eu_date = date.split('.');
	} else {
		/*date a, format dd/mn/(yyyy) ; (year is optional)*/
		var eu_date = date.split('/');
	}
	
	/*year (optional)*/
	if (eu_date[2]) {
		var year = eu_date[2];
	} else {
		var year = 0;
	}
	
	/*month*/
	var month = eu_date[1];
	if (month.length == 1) {
		month = 0+month;
	}
	
	/*day*/
	var day = eu_date[0];
	if (day.length == 1) {
		day = 0+day;
	}
	
	return (year + month + day) * 1;
}

jQuery.fn.dataTableExt.oSort['eu_date-asc'] = function(a, b) {
	x = calculate_date(a);
	y = calculate_date(b);
	
	return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};

jQuery.fn.dataTableExt.oSort['eu_date-desc'] = function(a, b) {
	x = calculate_date(a);
	y = calculate_date(b);
	
	return ((x < y) ? 1 : ((x > y) ?  -1 : 0));
};