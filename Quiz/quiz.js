var q1,q2,q3,q4,q5;
function submit()
{	var count=0;
	q1=document.getElementsByName("place");
	q2=document.getElementsByName("animal");
	q3=document.getElementsByName("year");
	q4=document.getElementsByName("state");
	q5=document.getElementsByName("iit");
	if(q1[1].checked)
		count++;
	if(q2[0].checked)
		count++;
	if(q3[1].checked)
		count++;
	if(q4[2].checked)
		count++;
	if(q5[3].checked)
		count++;
	document.getElementById("demo").innerHTML = "Your score is : "+count;
	
}	
