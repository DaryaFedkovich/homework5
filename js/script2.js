document.write('<br/>задание 2<br/>');
var h = prompt("введите высоту треугольика");
function Triangle(){
	for(i = 0; i < h; i++){
		for(j = h; j > i; j--){
			document.write('&nbsp'); 
		}
		for(x = 0; x < i + 1; x++){
			document.write('*');
		}
		document.write('<br/>')	
	} 
}
function TriangleObr(){
	for(i = 0; i < h; i++){		
		for(x = 0; x < i + 1; x++){
			document.write('&nbsp');
		}
		for(j = h; j > i; j--){
			document.write('*'); 
		}
		document.write('<br/>')	
	} 
}
Triangle();
TriangleObr();