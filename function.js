function parsing(string) {
	string+="";
	let arr = string.split('.');
	let size=arr.length;
   
   for (let i = 0; i<size ; i++)
	{
		if(arr[i]==""||arr[i]==" "||arr[i]*1>255||arr[i]*1<0) // если чило больше 255 или меньше
			{	alert("error number 0...255");   // то выдать ошибку
			process.exit(0);} // и выйти
	}

	for (let i = 0; i<size ; i++)
	{
		if(size>4 || size<4)  // если в ip больше 4 числа
		{
			alert("error number 0...255");  // выдать ошибку
			process.exit(0);
		}
		else
		  {
			transfer(arr[i]);   // иначе передать строку в функцию перевода 
			if(i<size-1)
				document.form_transfer.output_ip.value+="."; // после переведенного числа поставить .
	   	}
	}
}



function transfer(value) {
	value*=1;     //  перевод строки в число   неявный
	let arr = [];

	let i=0;

	while (value>0)
	{
		if (value%2==1||value%2==0)    //  циклическое деление на два
		{
			arr[i]=0;
			value/=2;
		}
		else{
			arr[i]=1;
			value-=0.5;
			value/=2;
		}
		i++;
	}

	let size=arr.length;
	for (let a=size-1; a>0 ;a--)
	{
		document.form_transfer.output_ip.value+=arr[a];  // запись числа в форму
	}
}
