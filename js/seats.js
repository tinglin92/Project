/*
* @Author: Chenyu
* @Date:   2015-09-26 10:38:26
* @Last Modified by:   Chenyu
* @Last Modified time: 2015-10-03 23:56:42
*/
'use strict';
var seat_selected = [];
var index = 0;


function selected(clicked_id) {
	if (document.getElementById(clicked_id).classList.contains('available')) {
			document.getElementById(clicked_id).classList.remove("available"),
			document.getElementById(clicked_id).classList.add('booked');
			seat_selected.push(clicked_id);
			return;
		}
	if (document.getElementById(clicked_id).classList.contains('booked')) {
			document.getElementById(clicked_id).classList.remove("booked");
			document.getElementById(clicked_id).classList.add("available");
			var i = seat_selected.indexOf(clicked_id);
			seat_selected.splice(i, 1);
			return;
	}
	if (document.getElementById(clicked_id).classList.contains('unavailable')) {
			alert("This seat has already been reserved!");
			return;
	}
}
