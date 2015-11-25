


function Game_Piece() {

			this.piece = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
			this.piece.position.x = 0;
            this.piece.position.y = 10;
            this.piece.position.z = 8;
    		this.piece.__dirtyRotation=true;
    		this.piece.__dirtyPosition=true;
            this.piece.active = true;
            this.boxgeom = new THREE.BoxGeometry(1, 1, 1);
            this.mesh = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false}, 1.0, 0);
            this.weight = 500;
            this.invisiblemesh = new THREE.MeshBasicMaterial({transparent: true, opacity: 0}, 1.0, 0);



    
}

	Game_Piece.prototype={
		constructor:Game_Piece,

		create_new_piece: function(rot) {
            var self=this;
		
    		var num = Math.floor((Math.random() * 6));
            switch (num){
                case 0: self.LTPiece(rot);
                        break;
                case 1: self.RTPiece(rot);
                        break;
                case 2: self.TPiece(rot);
                        break;
                case 3: self.IPiece(rot);
                        break;
                case 4: self.ZPiece(rot);
                        break;
                case 5: self.CubePiece(rot);
                        break;
            }
    		// self.IPiece(rot);
    		// Game_World.prototype.add.call(this.piece);
		}


		,
//different pieces starting below:
		TPiece: function(rot){

				var basepositionx, basepositiony, basepositionz, xoffset, zoffset;

    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }

    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

	topleftbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topleftbox.position.x = (-1*xoffset)+zoffset;
    topleftbox.position.y = 1;
    topleftbox.position.z = (-1*zoffset)+xoffset;

    topmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topmiddlebox.position.x = zoffset;
    topmiddlebox.position.y = 1;
    topmiddlebox.position.z = xoffset;

    toprightbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    toprightbox.position.x = (1*xoffset)+zoffset;
    toprightbox.position.y = 1;
    toprightbox.position.z = (1*zoffset)+xoffset;

    middlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    middlebox.position.x = zoffset;
    middlebox.position.y = 0;
    middlebox.position.z = xoffset;

    lowbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    lowbox.position.x = zoffset;
    lowbox.position.y = -1;
    lowbox.position.z = xoffset;

    parentbox.add(middlebox);
    parentbox.add(topmiddlebox);
    parentbox.add(toprightbox);
    parentbox.add(topleftbox);
    parentbox.add(lowbox);

    topmiddlebox.active = true;
    topleftbox.active = true;
    toprightbox.active = true; 
    middlebox.active = true;
    lowbox.active = true;

    // this.boundBox1 = new THREE.Box3().setFromObject(topmiddlebox);
    // this.boundBox2 = new THREE.Box3().setFromObject(topleftbox); 
    // this.boundBox3 = new THREE.Box3().setFromObject(toprightbox); 
    // this.boundBox4 = new THREE.Box3().setFromObject(middlebox);
    // this.boundBox5 = new THREE.Box3().setFromObject(lowbox);
    // this.boundBoxes = [this.boundBox1, this.boundBox2, this.boundBox3, this.boundBox4, this.boundBox5]
    //this.constraints = [tltmhigh, tltmlow, trtmhigh, trtmlow, mtmright, mtmleft, mlmright, mlmleft]
	//this.piece = [topmiddlebox, topleftbox, toprightbox, middlebox, lowbox];
    this.piece = [parentbox];
     for (var i=0; i<this.piece.length; i++) {
        
     }
		},

    getBoundBoxes: function() {
        return this.boundBoxes;
    },
    setInactive: function() {
        var array = this.getActivePieces();
        for (var i=0; i<array.length; i++) {
            array[i].active=false;
        }
    },
	IPiece: function (rot){

                var basepositionx, basepositiony, basepositionz, xoffset, zoffset;

    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }


    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

    topbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topbox.position.x = zoffset;
    topbox.position.y = 1;
    topbox.position.z = xoffset;

    topmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topmiddlebox.position.x = zoffset;
    //topmiddlebox.position.y = basepositiony;
    topmiddlebox.position.z = xoffset;

    botmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botmiddlebox.position.x = zoffset;
    botmiddlebox.position.y = -1;
    botmiddlebox.position.z = xoffset;

    botbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botbox.position.x = zoffset;
    botbox.position.y = -2;
    botbox.position.z = xoffset;

    parentbox.add(topbox);
    parentbox.add(topmiddlebox);
    parentbox.add(botmiddlebox);
    parentbox.add(botbox);

    topbox.active=true;
    topmiddlebox.active=true;
    botmiddlebox.active=true;
    botbox.active=true;

    this.piece = [parentbox];

}

        ,
ZPiece: function (rot){

                var basepositionx, basepositiony, basepositionz, xoffset, zoffset;

    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }

    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

    topleftbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topleftbox.position.x = zoffset-(1*xoffset);
    topleftbox.position.y = 1;
    topleftbox.position.z = xoffset-(1*zoffset);

    topmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topmiddlebox.position.x = zoffset;
    topmiddlebox.position.y = 1;
    topmiddlebox.position.z = xoffset;

    botrightbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botrightbox.position.x = zoffset+(1*xoffset);
    botrightbox.position.y = 0;
    botrightbox.position.z = xoffset+(1*zoffset);

    botmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botmiddlebox.position.x = zoffset;
    botmiddlebox.position.y = 0;
    botmiddlebox.position.z = xoffset;

    parentbox.add(topleftbox);
    parentbox.add(topmiddlebox);
    parentbox.add(botrightbox);
    parentbox.add(botmiddlebox);

    topleftbox.active = true;
    topmiddlebox.active = true; 
    botrightbox.active = true;
    botmiddlebox.active = true;

    this.piece = [parentbox];

}

,

CubePiece: function (rot){

                var basepositionx, basepositiony, basepositionz, xoffset, zoffset;
    
    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }


    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

    topleftbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topleftbox.position.x = zoffset-(1*xoffset);
    topleftbox.position.y = 1;
    topleftbox.position.z = xoffset-(1*zoffset);

    botleftbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botleftbox.position.x = zoffset-(1*xoffset);
    botleftbox.position.y = 0;
    botleftbox.position.z = xoffset-(1*zoffset);

    toprightbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    toprightbox.position.x = zoffset;
    toprightbox.position.y = 1;
    toprightbox.position.z = xoffset;

    botrightbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    botrightbox.position.x = zoffset;
    botrightbox.position.y = 0;
    botrightbox.position.z = xoffset;

    parentbox.add(topleftbox);
    parentbox.add(botleftbox);
    parentbox.add(toprightbox);
    parentbox.add(botrightbox);
    
    topleftbox.active = true;
    botleftbox.active = true; 
    toprightbox.active = true;
    botrightbox.active = true;




    this.piece = [parentbox];


}

,
LTPiece: function (rot){

                var basepositionx, basepositiony, basepositionz, xoffset, zoffset;

    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }


    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

    topleftbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topleftbox.position.x = zoffset-(1*xoffset);
    topleftbox.position.y = 1;
    topleftbox.position.z = xoffset-(1*zoffset);

    topmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topmiddlebox.position.x = zoffset;
    topmiddlebox.position.y = 1;
    topmiddlebox.position.z = xoffset;


    middlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    middlebox.position.x = zoffset;
    middlebox.position.y = 0;
    middlebox.position.z = xoffset;

    lowbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    lowbox.position.x = zoffset;
    lowbox.position.y = -1;
    lowbox.position.z = xoffset;

    parentbox.add(topleftbox);
    parentbox.add(topmiddlebox);
    parentbox.add(middlebox);
    parentbox.add(lowbox);

    this.piece = [parentbox];

    topleftbox.active = true;
    topmiddlebox.active = true; 
    middlebox.active = true;
    lowbox.active = true;




}
,
RTPiece: function (rot){

                var basepositionx, basepositiony, basepositionz, xoffset, zoffset;

    switch(rot) {
                case 0: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = 7;
                        xoffset = 1;
                        zoffset = 0;
                        
                break;

                case 1: basepositionx = -6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = -1;
                        xoffset = 0;
                        
                break;

                case 2: basepositionx = 0;
                        basepositiony = 10;
                        basepositionz = -5;
                        xoffset = -1;
                        zoffset = 0;
                        
                break;

                case 3: basepositionx = 6;
                        basepositiony = 10;
                        basepositionz = 0;
                        zoffset = 1;
                        xoffset = 0;
                
                break;
            
            }


    parentbox = new Physijs.BoxMesh(this.boxgeom, this.invisiblemesh, this.weight);
    parentbox.position.x = basepositionx;
    parentbox.position.y = basepositiony;
    parentbox.position.z = basepositionz;

    topmiddlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    topmiddlebox.position.x = zoffset;
    topmiddlebox.position.y = 1;
    topmiddlebox.position.z = xoffset;

    toprightbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    toprightbox.position.x = zoffset+(1*xoffset);
    toprightbox.position.y = 1;
    toprightbox.position.z = xoffset+(1*zoffset);

    middlebox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    middlebox.position.x = zoffset;
    middlebox.position.y = 0;
    middlebox.position.z = xoffset;

    lowbox = new Physijs.BoxMesh(this.boxgeom, this.mesh, this.weight);
    lowbox.position.x = zoffset;
    lowbox.position.y = -1;
    lowbox.position.z = xoffset;

    parentbox.add(topmiddlebox);
    parentbox.add(toprightbox);
    parentbox.add(middlebox);
    parentbox.add(lowbox);
  
    this.piece = [parentbox];

    topmiddlebox.active = true;
    toprightbox.active = true; 
    middlebox.active = true;
    lowbox.active = true;

}
,
		setMass: function(mass) {
			for(var i =0; i<this.piece.length; i++){
				this.piece[i].mass = mass || 0;
			}
			
		},

		setLinearVelocity: function(velocity) {
			for(var i =0; i<this.piece.length; i++){
			this.piece[i].setLinearVelocity(velocity || {x: 0, y: 0, z: 0} );
			}
		},

        getActivePieces: function() {
            return this.piece;
        },

        getConstraints: function() {
            return this.constraints;
        },

		rotate: function(rot) {

			switch(rot) {
				case 0: game_piece.piece[0].rotation.z+=1.57;
                        game_piece.piece[0].__dirtyRotation=true;
    					
    			break;

    			case 1: game_piece.piece[0].rotation.x+=1.57;
                        game_piece.piece[0].__dirtyRotation=true;
    					
    			break;

    			case 2: game_piece.piece[0].rotation.z-=1.57;
                        game_piece.piece[0].__dirtyRotation=true;
    					
    			break;

    			case 3: game_piece.piece[0].rotation.x-=1.57;
                        game_piece.piece[0].__dirtyRotation=true;
    			
    			break;
			
    		}
		},		

		applyImpulse: function(direction, rot) {

			var movement=1.02;
			if(direction=="left"){
				movement=-1.02;
			};

			switch(rot) {
				case 0: 
						for (var i=0; i<game_piece.piece.length; i++)
						{
						game_piece.piece[i].position.x+=movement;
						game_piece.piece[i].__dirtyPosition=true;
						}
  					
    			break;

    			case 1: for (var i=0; i<game_piece.piece.length; i++)
						{
						game_piece.piece[i].position.z+=movement;
						game_piece.piece[i].__dirtyPosition=true;
						}
    					
    			break;

    			case 2: for (var i=0; i<game_piece.piece.length; i++)
						{
						game_piece.piece[i].position.x-=movement;
						game_piece.piece[i].__dirtyPosition=true;
						}
    					
    			break;

    			case 3: for (var i=0; i<game_piece.piece.length; i++)
						{
						game_piece.piece[i].position.z-=movement;
						game_piece.piece[i].__dirtyPosition=true;
						}
    			
    			break;

    		}

		}
}

function Game_World() {
		Physijs.scripts.worker = '/js/physijs_worker.js';
    	Physijs.scripts.ammo = '/js/ammo.js';
		this.scene = new Physijs.Scene();
		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    	this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 40;
        this.camera.lookAt(this.scene.position);

        this.floor = new Physijs.BoxMesh(new THREE.BoxGeometry(20,1,20), new THREE.MeshBasicMaterial({color: 0x000000}), 0);
		this.floor.position.x = 0;
        this.floor.position.y = -8;
        this.floor.position.z = 0;
        this.floor.isfloor = "yes";
        this.counter = 0;
        grid = [];       
        //look here
        for (var rotation=0; rotation<4; rotation++) {
            sphere_array=[];
            // sphere_array=[];
            switch (rotation) {
                case 0: var x = -5;
                        var y = -7;
                        var z=8;
                break;
                case 1:  var x= -7;
                         var y= -7;
                         var z=-4;
                break;
                case 2: var x= -5;
                        var y= -7;
                        var z=-6;
                break;
                case 3: var x= 7;
                        var y= -7;
                        var z=-4;
            }
            var sphereGeometry = new THREE.SphereGeometry(0.08, 32, 32);
            var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: false});
            for (var i=0; i<18; i++) {

                for (var j=0; j<11; j++) {

                    
                    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                    sphere.position.x = x;
                    sphere.position.y = y;
                    sphere.position.z = z;

                    var helper = new THREE.BoundingBoxHelper(sphere, 0x7777ff);
                    helper.update();
                    sphere_array.push(helper);
                    // this.scene.add(helper);
                    if (rotation == 0) {
                    x++;
                     }  
                    if (rotation == 1) {
                      z++;
                    }
                     if (rotation == 2) {
                     x++;
                    }
                    if (rotation == 3) {
                     z++;
                    }
                }
                y++;
                if (rotation == 0) {
                    x=-5
                }

                if (rotation == 1) {
                     // x= -6;
                     z=-4;
                }
                if (rotation == 2) {
                    x=-5;
                    
                }
                if (rotation == 3) {
                    z=-4;
                    
                }
              
            }
            grid[rotation]=sphere_array;


        }
        
        this.scene.add(this.floor);
        this.isPaused = false;



	}

	Game_World.prototype={
		constructor:Game_World,

		setYGravity: function(y_gravity){
			this.y_gravity = y_gravity || 0;
			this.scene.setGravity(new THREE.Vector3( 0, y_gravity, 0 ));
		},

		setRenderer: function(){
			this.renderer = new THREE.WebGLRenderer({ antialiasing: true });
			this.renderer.setClearColor(new THREE.Color(0xEEEEEE));
    		this.renderer.setSize(window.innerWidth, window.innerHeight);
		},

		attachRenderer: function(domElement){
			this.domElement = domElement || "WebGL-output";
			document.getElementById(this.domElement).appendChild(this.renderer.domElement);
		},
		render: function(){

			if (!this.isPaused){
  			
  			this.scene.simulate();
           
                this.piece.position.y-=0.07;
                this.piece.__dirtyPosition=true;
          
  		}   
  
            requestAnimationFrame(this.render.bind(this));
            this.renderer.render(this.scene, this.camera);
            this.floor.__dirtyRotation = true;
           
            TWEEN.update();
            
        },

        addPiece: function(array){
        	for (var i =0; i<array.length; i++) {
                
                this.scene.add(array[i]);
                this.piece = array[i];
            }
        },

        addConstraint: function (array) {
        	for (var i =0; i<array.length; i++) {
                this.scene.addConstraint(array[i]);
            }
        },

        pause: function(){
        	this.isPaused = !(this.isPaused);
        	this.scene.onSimulationResume();
        }
	}




window.onload = function init() {
	var rot = 0;
	game_piece = new Game_Piece();

	isPaused = false;
    world = new Game_World();
    world.setYGravity();
    world.setRenderer();
    world.attachRenderer();
    game_piece.create_new_piece(rot);
   	//game_piece.LTPiece(world);
  	//world.add(game_piece.get());

    world.addPiece(game_piece.getActivePieces());
    //world.addConstraint(game_piece.getConstraints());
  	game_piece.setLinearVelocity();


	//TPiece(world);

    
    plane0=[];
    plane1=[];
    plane2=[];
    plane3=[];
    for (var i=0; i<18; i++) {
        plane0.push([0]);
        plane1.push([0]);
        plane2.push([0]);
        plane3.push([0]);
    }

	world.render();

	var game_loop = true;
	var new_piece = true;
	
    var array = game_piece.getActivePieces();

	for(var i=0; i<array.length; i++){
       
	 	array[i].addEventListener('collision', collisions);
        // game_piece.getActivePieces(); 
	}
	score = 0;
	
	
	function collisions(other_object, linear_velocity, angular_velocity) {
  
        
		if (other_object.active == true) 
            return
        
		
		// world.pause();
		game_piece.setMass();
		game_piece.setLinearVelocity({x: 0, y: 0, z: 0});
		for(var i=0; i<game_piece.getActivePieces().length; i++){
		game_piece.piece[i].removeEventListener('collision', collisions);
		}


         var children = [];

        for(var i=0; i < game_piece.piece[0].children.length; i++){
            children[i]=makebox(game_piece.piece[0].children[i].getWorldPosition().x, game_piece.piece[0].children[i].getWorldPosition().y, game_piece.piece[0].children[i].getWorldPosition().z, rot);

        }
        
        calc_collisions(which_grid(rot), children, which_plane(rot))
        rot+=1;
        if (rot == 4) 
            rot =0;
        world.scene.remove(game_piece.piece[0])
        world.addPiece(children);
        game_piece.setInactive();

		var rad90 = Math.PI * .5;

        game_piece.create_new_piece(rot);
        var array = game_piece.getActivePieces();
        for(var i=0; i<array.length; i++){
        array[i].addEventListener('collision', collisions);
        // game_piece.getActivePieces(); 
        }
        world.addPiece(game_piece.getActivePieces());
        game_piece.setLinearVelocity();
        world.pause();

		
		new TWEEN.Tween( world.scene.rotation ).to( {  y:  world.scene.rotation.y + rad90}, 1000 ).start();
		setTimeout(function(){world.pause()},1005);	
	}

    function which_grid (rot) {
        switch (rot) {
            case 0: return grid[0];break;
            case 1: return grid[1];break;
            case 2: return grid[2];break;
            case 3: return grid[3];break;
        }
    }
    function which_plane (rot) {
        switch (rot) {
            case 0: return plane0;break;
            case 1: return plane1;break;
            case 2: return plane2;break;
            case 3: return plane3;break;
        }
    }
    function calc_collisions(obstacles, pieces, plane) {
        
        var bb = [];
        
        for (var j=0; j<pieces.length; j++) {

            helper = new THREE.BoundingBoxHelper(pieces[j], 0x7777ff);
            
            
            bb.push(helper);
            // world.scene.add(helper);
            helper.update();
        }
       
    
        for (var i=0; i<obstacles.length; i++) {
            for (var j=0; j<bb.length; j++) {
               console.log(bb[j].box.containsBox(obstacles[i].box))
                if(bb[j].box.containsBox(obstacles[i].box)) {
                    
                    z = pieces[j];
                    console.log(z);
                    var y =obstacles[i].position.y+7;
                    var x =obstacles[i].position.x+6;

                    plane[y][x] = z;
                    plane[y][0] +=1;

                    if (plane[y][0] == 11) {
                        for (var k=1; k<plane[y].length; k++) {
                            console.log(plane[y][k])
                            world.scene.remove(plane[y][k])

                        }
                        score+=100;
                        document.getElementById("score").innerHTML = score;
                        plane[y]=[];
                        plane[y][0]=0;
                    }
                    
                    // console.log("yes");
                }
                    
            }
        }
        
        
    }



	keydown=0;

	domElement = document.getElementById("WebGL-output");
	domElement.addEventListener("keydown",keyDownListener,false);
	domElement.addEventListener("keyup",keyUpListener,false);

 	domElement.setAttribute("tabindex", 0);

 	function keyDownListener( event ) {
		 
		 // console.log(event);
		 switch( event.keyCode ) {

		 case 16: /* shift */  break;
		 case 87:  break;
		 case 83:  break;

		  case 68:
                    if (keydown == 0) {
                        if( !checkoutofboundsright(rot, game_piece)){
                            game_piece.applyImpulse("right",rot);}
                                                      
                            keydown = 1;
                    }

            break;

                 case 65:
                        if (keydown == 0) {
                            if( !checkoutofboundsleft(rot, game_piece)){
                                game_piece.applyImpulse("left",rot);
                            }
                            keydown =1;
                        }
                break;

		 case 82: /*R*/  
            game_piece.rotate(rot);

         break;
		 case 70: /*F*/  break;

		 case 38: /*up*/  break;
		 case 40: /*down*/  break;

		 case 37: /*left*/  break;
		 case 39: /*right*/  break;

		 case 81: /*Q*/  break;
		 case 69: /*E*/  break;
		 }
 }

 function keyUpListener( event ) {
 	switch( event.keyCode ) {
 		case 68: 
 				keydown =0;
 				break;
 		case 32: /*Space*/ world.pause();  break;
 		case 65:
 				keydown=0;
 				break;
 	}
}

}

     function makebox(positionx, positiony, positionz, rot){
        switch (rot) {
            case 0:
                var newbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 0);
                newbox.position.x = positionx;
                newbox.position.y = positiony;
                newbox.position.z = positionz;
                return newbox;
                break;
            case 1:
                var newbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 0);
                newbox.position.x = -positionz;
                newbox.position.y = positiony;
                newbox.position.z = positionx;
                return newbox;
                break;
            case 2:
                var newbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 0);
                newbox.position.x = -positionx;
                newbox.position.y = positiony;
                newbox.position.z = -positionz;
                return newbox;
                break;
           case 3: 
                var newbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 0);
                newbox.position.x = positionz;
                newbox.position.y = positiony;
                newbox.position.z = -positionx;
                return newbox;
                break;
            
        }
}

 function checkoutofboundsleft(rot, game_piece){
        var outofbounds = false;
      // var a = game_piece.piece[0];
       var b = game_piece.piece[0].children;

       switch (rot) {
            case 0:
                for(var i =0; i<b.length; i++){
                if(b[i].getWorldPosition().x<-5){
                    return true;
                    }
                 }
                 break;
            case 1:
                for(var i =0; i<b.length; i++){
                if(b[i].getWorldPosition().x<-4){
                    return true;
                    }
                 }
                 break;
            case 2:
                for(var i =0; i<b.length; i++){
                if(b[i].getWorldPosition().x<-5){
                    return true;
                    }
                 }
                 break;
            case 3:
                for(var i =0; i<b.length; i++){
                if(b[i].getWorldPosition().x<-6){
                    return true;
                    }
                 }
                 break;
       return outofbounds;

    }
}

        function checkoutofboundsright(rot, game_piece){
        var outofbounds = false;
        console.log("Rot: " + rot);
      // var a = game_piece.piece[0];
       var b = game_piece.piece[0].children;


       switch (rot) {
            case 0:
 for(var i =0; i<b.length; i++){
        if(b[i].getWorldPosition().x > 5){
           // outofbounds=true;
            return true;
        }}
                 break;
            case 1:
 for(var i =0; i<b.length; i++){
        if(b[i].getWorldPosition().x > 6){
            return true;
        }}
                 break;
            case 2:
 for(var i =0; i<b.length; i++){
        if(b[i].getWorldPosition().x > 5){
            return true;
        }}
                 break;
            case 3:
 for(var i =0; i<b.length; i++){
        if(b[i].getWorldPosition().x > 4){
            return true;
        }}
                 break;
       return outofbounds;

    }}
 
    
