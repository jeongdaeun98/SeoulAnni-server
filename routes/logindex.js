
module.exports = function(app, Login)
{
	app.post('/api/login', function(req, res){

		console.log('api/login');
				
		for(var i=0;i<req.body.length;i++){	
			addLogin(req.body[i].identy, req.body[i].password);
		}
		console.log('post /api/login');
   		res.json({result: 1});
		res.end();
	});
	app.get('/api/login', function(req, res){
		console.log('/api/login');
		Login.find({}, function(err, login){
			if(err) return res.status(500).send({error: 'database failure'});
			res.json(login);
			res.end();
		});
	});
	app.delete('/api/login', function(req,res){
                console.log('/api/login delete');
                Login.remove({identy: req.body[0].identy, password: req.body[0].password},function(err,login){
                        if(err){
                                console.log(error);
                                return res.status(500).end('Database error');
                        }
                               
                        res.end();
                });
        });
											   																				
	function addLogin(identy, password){
		Login.findOne({identy:identy, password:password}, function(err, con){
			if(!con){
				var login  = new Login({identy:identy, password:password});
				login.save(function(err){
					if(err){
						console.error(err);
					}
				});
			}
		});
	}
}	
