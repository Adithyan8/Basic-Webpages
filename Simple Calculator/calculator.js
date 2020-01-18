function cal(ch)
{
	n1=parseFloat(document.getElementById('num1').value);
	n2=parseFloat(document.getElementById('num2').value);
	var res,c=parseFloat(ch);
	switch(c)
	{
		case 1:res=n1+n2;break;
		case 2:res=n1-n2;break;
		case 3:res=n1*n2;break;
		case 4:res=n1/n2;break;
		case 5:res=n1%n2;break;
		case 6:res=n1**n2;break;
	}
	document.getElementById('result').value=res;
}	
	