var counter = 1000;
var decrease = 0;
function count(){
	counter+=1;
	document.getElementById('paragraph').innerHTML= counter;
}


function raise(){
	counter -= 100;
	decrease += 100;
	document.getElementById('paragraph').innerHTML = counter;
	document.getElementById('sell').innerHTML= decrease;
}