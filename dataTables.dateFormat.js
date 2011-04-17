function trim(str) {
	str = str.replace(/^\s+/, '');
	
	for (var i = str.length - 1; i >= 0; i--) {
		if (/\S/.test(str.charAt(i))) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return str;
}

function calculate_date(date) {
	if (date.search('.') != "-1") {
		/*date a, format dd.mn.(yyyy) ; (year is optional)*/
		var eu_date = date.split('.');
	} else if (date.search('/') != "-1") {
		/*date a, format dd/mn/(yyyy) ; (year is optional)*/
		var eu_date = date.split('/');
	}
	
	/*year (optional)*/
	if (eu_date[2]) {
		var year = trim(eu_date[2]);
	} else {
		var year = 0;
	}
	
	/*month*/
	var month = trim(eu_date[1]);
	if (month.length == 1) {
		month = 0+month;
	}
	
	/*day*/
	var day = trim(eu_date[0]);
	if (day.length == 1) {
		day = 0+day;
	}
	
	var x = (year + month + day) * 1;
	
	return x;
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
