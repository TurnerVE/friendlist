var $friends = $('#friends');
var $name = $('#name');
var $occupation = $('ocupation');
var $age = $('age');

var friendsTemplate = "" +
	"<li>" +
	"<p><strong> Name:</strong> {{name}}</p>" +
	"<p><strong> Age:</strong> {{age}}</p>" +
	"<p><strong> Occupation:</strong> {{occupation}}</p>" +
	"<li>";

//Adding a friend
function addFriend(friend){
	$friends.append(Mustache.render(friendsTemplate, friend));
}

$(document).ready(function(){
	//alert("jQuery is running.")


	//GET Data request
	$.ajax({

		type : 'GET',
		url	 : 'http://rest.learncode.academy/api/learncode/friends/',
		success: function(friends){
			$.each(friends, function(i, friend){
				addFriend(friend)
			});
		},

		error : function(){
			alert('Error loading friends');
		}

	});

		//type : 'GET'
		//url
		//Success
		//Error

		//POST to Add a friend
	$('#add-friend').on('click', function(){
			var friend = {
				name : $name.val(),
				occupation : $occupation.val(),
				age : $age.val()
			}
		//DELETE to DUMP 'EM
		$.ajax({
			type : 'POST',
			url : 'http://rest.learncode.academy/api/learncode/friends/',
			data : friend,
			success : function(newFriend){
					addFriend(friend)
			},

			error : function(){

			}
		});
	});
});