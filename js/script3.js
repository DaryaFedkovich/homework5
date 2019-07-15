console.log('задание 3');
var email = prompt('введите адрес электронной почты');
function Email(email){
	for(i=0;i<email.length;i++){
		if((email >= 'a' && email <= 'z') || (email >= 0 && email <= 9)){
			if(email[i] == '.'){
				var b = i;
				email = email.split(email[b]);
				if(email[2].length >= 2 && email[2].length <= 11){
					console.log('почта верна');
				}
			}
			if(email[i] == '@'){
				email = email.split(email[i]);
				if(email[1].length >= 2){
					console.log('почта верна');
				}
			}
		}		
		if(email[0] == '-' || email[0] == '_' || email[0] == '.' || (email[0] >= 0 && email[0] <= 9)){
			console.log('почта не верна');
		}		
	}
}
Email(email);