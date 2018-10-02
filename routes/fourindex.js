module.exports = function(app,Location)
{
	
	app.post('/api/location',function(req,res){
		console.log('api/locations post');
		console.log(req.body.length);
		for (var i=0; i<req.body.length; i++){
			addLocation(req.body[i].place, req.body[i].latitude, req.body[i].longitude);
		}
		console.log("post /api/location");
		res.json({result:1});
		res.end();
	});
	app.get('/api/location',function(req,res){
		Location.find({},function(err,locations){
			if(err) return res.status(500).send({error: 'database fa			ilure'});
			res.json(locations);
			res.end();
		});
	});
	app.delete('/api/location', function(req,res){
		console.log('/api/locations delete');
		Location.remove({place: req.body[0].place, latitude:req.body[0].latitude,longitude:req.body[0].longitude},function(err,locations){
		if(err){
				console.log(error);
				return res.status(500).end('Database error');
			}
			res.end();
		});
	});
	function addLocation(place, latitude, longitude){
		Location.findOne({place:place, latitude:latitude, longitude:longitude},function(err,loc){
			if(!loc){
				var location  = new Location({place:place, latitude:latitude, longitude:longitude});
				location.save(function(err){
					if(err){
						console.error(err);
					}
				});
			}
		});
	}
}

