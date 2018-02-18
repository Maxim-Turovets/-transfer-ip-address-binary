function parsing(string) {
	string+="";
	let arr = string.split('.');
	let size=arr.length;

	for (let i = 0; i<size ; i++)
	{
		if(arr[i]==""||arr[i]==" "||arr[i]*1>255||arr[i]*1<0) // если чило больше 255 или меньше
		{	
			alert("error number 0...255");   // то выдать ошибку
			break;
		} 
	}

	for (let i = 0; i<size ; i++)
	{
		if (arr[i]=="0")
			document.form_transfer.output_ip.value+="0";
		if(size>4 || size<4 || arr[i]=="" || arr[i]==" " || arr[i]*1>255 || arr[i]*1<0)  // если в ip больше 4 числа
		{
			alert("error number 0...255");  // выдать ошибку
			break;
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

function parsing_bin(string) {

	let minus=string.split('');
	let siz_min=minus.length;
	let min=true;
	for (let i = 0; i<siz_min ; i++)
	{
		if(minus[i]=="-")
		{
			alert("error: mum < 0")
			min=false;
		}
	}


	if(min==true)
	{
		string+="";
		let arr = string.split('.');
		let size=arr.length;


		for (let i = 0; i<size ; i++)
  if(size>4 || size<4 || arr[i]==""||arr[i]==" ")  // если в ip больше 4 числа
  {
			alert("error size");  // выдать ошибку
			break;
		}

		for (let i = 0; i<size ; i++)
		{
			transfer_bin(arr[i]);   // иначе передать строку в функцию перевода 
			if(i<size-1)
				document.form_transfer.output_ip_bin.value+="."; // после переведенного числа поставить .
		}
	}
}

function transfer_bin (val) {

		//let names = val;
		let arr = val.split('');
		let size=arr.length;
		let min=true;
		for (let i = 0; i<size ; i++)
		{
			if(arr[i]!="0"&&arr[i]!="."&&arr[i]!=".")
				min=false;
		}

		if (min==true)
		{
			for (let i = 0; i<size ; i++)
			{
       if(arr[i]>1 || arr[i]<0)  // если в ip больше 4 числа
       {
			    alert("error number: 0 or 1");  // выдать ошибку
			    break;
			  }
			}

			let sum=0, count=1 ;



			for (var i = size-1; i >=0 ; i--) {

				let temp=arr[i]*1;
				arr[i]*=1;

				arr[i]=arr[i]*count;

				sum=sum+arr[i];

				count=count*2;

			}

			document.form_transfer.output_ip_bin.value+=sum;
		}
	}
