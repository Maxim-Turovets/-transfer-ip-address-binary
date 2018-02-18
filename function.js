function parsing(string) {
	string+="";
	let arr = string.split('.');
	let size=arr.length;

	for (let i = 0; i<size ; i++)
	{
		//console.log(arr[i]);
    if(size>4 || size<4)
    {
    	alert("error");
			process.exit(0);
    }
		else{
    transfer(arr[i]);
		if(i<size-1)
	  document.form_transfer.output_ip.value+=".";
		}
	}
}



function transfer(value) {
	value*=1;
	let arr = [];

	let i=0;

	while (value>0)
	{
		if (value%2==1||value%2==0)
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
			document.form_transfer.output_ip.value+=arr[a];
		}
}
