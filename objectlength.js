var countInternals = function(obj) {
    var count = 0;
    for (var key in obj) {
    	count++;
	}
	return count;
}
