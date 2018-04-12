

  function addUser(Trip, Email){


		firebase.database().ref('trips/').once('value', (snapshot) => {
			var gotTrip= 0;

		            snapshot.forEach((tripSnapshot) => {
		            	if(tripSnapshot.key == Trip){

		            		checkUserExists(Trip, Email);

		            		
		            	}
		            	else{
		            		
		            	}
		                
		        })
		            if(gotTrip == 0){
		            	document.getElementById("error").innerHTML = "We were unable to find your trip :/ \n Please check the invite and make sure the url in browser is correct.";
		            }
		            else{

		            }
		            
		    })

    return "";

}

function checkUserExists(Trip, Email){


	firebase.database().ref('users/').once('value', (snapshot) => {
		var gotUser = 0;

		            snapshot.forEach((tripSnapshot) => {

		            	if(tripSnapshot.val().email == Email){
		            		gotUser = 1;
		            		checkUserAlreadyInTrip(Trip, Email);

		            				            		
		            	}
		            	else{
		            		
		            	}
		                
		        })
		            if(gotUser == 0){
		            	document.getElementById("error").innerHTML = "We were unable to find you in our system! :/ \n Please download the app and create a user in order to be added to the trip.";
		    
		            }
		            else{

		            }
		       })
}



function addToTrip(Trip, Email){

	var count = 0;
	document.getElementById("error").innerHTML = "You have succesfully been added as a member of this trip \n Have a wonderful day :)";
		    

	firebase.database().ref('trips/'+Trip+'/members').push(Email);
	firebase.database().ref('trips/'+Trip+'/chats/groupChat/users').push(Email);
}


function checkUserAlreadyInTrip(Trip, Email){
			firebase.database().ref('trips/'+Trip+'').once('value', (snapshot) => {
			
					var userDoesntExist = 0;
					
					for (var key in snapshot.val().members) {

						if(snapshot.val().members[key] == Email){
							userDoesntExist = 1;
							
						}
						else{
							
							
							
						}
					  
					}

					if(userDoesntExist == 1){
		            	document.getElementById("error").innerHTML = "You are already a member of this trip go out and have fun! :)";
		    			

		            }
		            else{
		            	addToTrip(Trip, Email);

		            }
		            

		            
		            
		    })
}



function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

