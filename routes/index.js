
module.exports = function(app, Wlocation)
{
	app.post('/api/wlocation', function(req, res){

		console.log('api/wlocation');
				
		for(var i=0;i<req.body.length;i++){	
			addWlocation(req.body[i].place, req.body[i].latitude,req.body[i].longitude);
		}
		console.log('post /api/wlocation');
   		res.json({result: 1});
		res.end();
	});
	app.get('/api/wlocation', function(req, res){
		console.log('/api/wlocation');
		Wlocation.find({}, function(err, wlocation){
			if(err) return res.status(500).send({error: 'database failure'});
			res.json(wlocation);
			res.end();
		});
	});
	app.delete('/api/wlocation', function(req,res){
                console.log('/api/wlocation delete');
                Wlocation.remove({place: req.body[0].place, latitude: req.body[0].latitude, longitude: req.body[0].longitude},function(err,wlocation){
                        if(err){
                                console.log(error);
                                return res.status(500).end('Database error');
                        }
                               
                        res.end();
                });
        });
											   																				
	function addWlocaiton(place, latitude, longitude){
		Wlocation.findOne({place:place, latitude:latitude, longitude:longitude}, function(err, con){
			if(!con){
				var wlocation  = new Wlocation({place:place, latitude:latitude, longitude:longitude});
				wlocation.save(function(err){
					if(err){
						console.error(err);
					}
				});
			}
		});
	}
}	
