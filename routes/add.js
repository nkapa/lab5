// Get all of our friend data
var data = require('../data.json');

exports.addFriend = function(request, response){
	console.log(data);
	var nam = request.query.name;
	var desc = request.query.description;
	var newFriend = 		
	{
		"name": nam,
		"description": desc,
		"imageURL": "http://lorempixel.com/500/500/people/",		
	};
	console.log("my new friend is: ", newFriend);
	data.friends.push(newFriend);
	response.render('index', data);
};