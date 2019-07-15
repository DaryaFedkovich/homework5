document.write('задание 1<br/>');
function AboutUs(){
	var name = prompt('what is your name');
	var lastname = prompt('what is your lastname');
	var surname = prompt('what is your surname');
	var group = prompt('NUmber of group?');

	var str1 = '* ' + 'Домашняя работаЖ "Функции"', //26
		str2 = '* ' + 'Выполнил: студент гр. ' + group, //21
		str3 = '* ' +surname + ' ' + name + ' ' + lastname; //6

	var lengthStr = 29,
		lengthStr1 = str1.length,
		lengthStr2 = 21 +group.length,
		lengthStr3 = str3.length;

	if(lengthStr2 >= lengthStr3 && lengthStr2 > 28){
		lengthStr = lengthStr2;
	}
	else if(lengthStr3 > 28){
		length = lengthStr3;
	}

	for(i=0;i<lengthStr;i++){
		document.write('*');
	}
	document.write('<br/>' + str1 + '<br/>');
	document.write(str2 + '<br/>');
	document.write(str3 + '<br/>');
	for(i=0;i<lengthStr;i++){
		document.write('*');
	}
}
AboutUs();