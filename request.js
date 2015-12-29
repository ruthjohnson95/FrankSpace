
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1669165146686447',
          xfbml      : true,
          version    : 'v2.1'
        });
      };

        (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
  


var id = 4983859492027 

function getEvents(){
	console.log("got to getEvents");
	FB.api('/'+id+'/events', function(response){
		for (var i=0; i<10; i++)
		{
			console.log(response.data[i].name);
			getMemberEvents(response.data[i].id);
		}
	});
}


