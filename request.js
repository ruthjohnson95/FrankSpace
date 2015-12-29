 (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "http://connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
 }(document));

 function getNotif()
{
	FB.api('me/?fields=notifications', function(response) 
	{
		for(var i = 0; i<10;i++) 
		{
					
				console.log(response.notifications.data[i]);
				traceNotif(response.notifications.data[i].id);
			
		}
    	});
}


function traceEvent(id,domain)
{
	FB.api('/'+id+'', function(response)
	{	var str = "";
		var indicatorMust = {value: false};
		var indicatorOpt = {value: false};
		for (var j=0; j<3; j++)
		{
			parse(indicatorMust, response.title, wordMusthave[j]);
		}
		parse(indicatorOpt, response.title, wordOpt.value);
		if(indicatorMust.value == true && indicatorOpt.value== true)
		{
	  	/////////////////////
	  //	console.log("printed");
	  //	getCover(id,img);
	  	str= "<div class='row'><div class='col-sm-6 col-md-10'><div class='thumbnail'>"
	  	+"<p id='vivian'></p><div class='caption'>"
	  	+"<h2><font color='black'>" +response.name+"</font></h2>"
	  	+"<p>"+response.description+"</p>"
	  	+"<p><a href='https://www.facebook.com/events/"+response.id+"/' class='btn btn-primary' role='button'>"
	  	+"Event Page</a> </p></div></div></div></div>";
		}
		
	//	console.log(response.name);
		if(domain=="forya")
		{document.getElementById("forya").innerHTML+=str;}
		else if(domain=="forworld")
		{console.log("PLEASE WORK!");
		document.getElementById("forworld").innerHTML+=str;}
		
		
	});
}
