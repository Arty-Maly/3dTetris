function Game_Piece() {

			this.piece = new Physijs.BoxMesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
			this.piece.position.x = 0;
    		this.piece.position.y = 10;
    		this.piece.position.z = 8;
    		this.piece.name = "game";
}

	Game_Piece.prototype={
		constructor:Game_Piece,

		create_new_piece: function() {
			this.piece = new Physijs.BoxMesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
			this.piece.position.x = 0;
    		this.piece.position.y = 10;
    		this.piece.position.z = 8;
    		this.piece.name = "game";
    		
    		
    		// Game_World.prototype.add.call(this.piece);
		},

		setMass: function(mass) {
			this.piece.mass = mass || 0;
		},

		setLinearVelocity: function(velocity) {
			
			this.piece.setLinearVelocity(velocity || {x: 0, y: -5, z: 0} );
		},

		get: function() {
			return this.piece;
		},

		rotate: function(rot) {

			switch(rot) {
				case 0: this.piece.position.x = 0;
    					this.piece.position.y = 10;
    					this.piece.position.z = 8;
    					
    			break;

    			case 1: this.piece.position.x = -8;
    					this.piece.position.y = 10;
    					this.piece.position.z = 0;
    					
    			break;

    			case 2: this.piece.position.x = 0;
    					this.piece.position.y = 10;
    					this.piece.position.z = -8;
    					
    			break;

    			case 3: this.piece.position.x = 8;
    					this.piece.position.y = 10;
    					this.piece.position.z = 0;
    			
    			break;
			
    		}
		},		

		applyImpulse: function(direction, rot) {

			var rotationx;
			var rotationy;
			var rotationz;

			switch(rot) {
				case 0: rotationx = 60050;
						rotationy = 0;
						rotationz = 0;
    					
    			break;

    			case 1: rotationx = 0;
						rotationy = 0;
						rotationz = 60050;
    					
    			break;

    			case 2: rotationx = -60050;
						rotationy = 0;
						rotationz = 0;
    					
    			break;

    			case 3: rotationx = 0;
						rotationy = 0;
						rotationz = -60050;
    			
    			break;

    		}

			var rotation_matrix = new THREE.Matrix4().extractRotation(this.piece.matrix);
			var right_force_vector = new THREE.Vector3(rotationx,rotationy,rotationz).applyMatrix4(rotation_matrix);
			var left_force_vector = new THREE.Vector3(-1*rotationx,-1*rotationy,-1*rotationz).applyMatrix4(rotation_matrix);
			if (direction == "left") {
				this.piece.applyCentralImpulse(left_force_vector);
			} else {
				this.piece.applyCentralImpulse(right_force_vector)
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

  		}   
  
            requestAnimationFrame(this.render.bind(this));
            this.renderer.render(this.scene, this.camera);
            this.floor.__dirtyRotation = true;
            TWEEN.update();
        },

        add: function(object){
        	this.scene.add(object);
        },

        addConstraint(object) {
        	this.scene.addConstraint(object);
        },

        pause: function(){
        	this.isPaused = !(this.isPaused);
        	this.scene.onSimulationResume();
        }
	}




window.onload = function init() {

	game_piece = new Game_Piece();
	isPaused = false;
    world = new Game_World();
    world.setYGravity();
    world.setRenderer();
    world.attachRenderer();
   
  	world.add(game_piece.get());
  	game_piece.setLinearVelocity();
	world.render()

	var game_loop = true;
	var new_piece = true;
	var rot = 0;
	
	game_piece.get().addEventListener('collision', collisions); 
	
	function collisions(other_object, linear_velocity, angular_velocity) {
		rot+=1;
		if (rot == 4) 
			rot =0;
		
		game_piece.setMass();
		game_piece.setLinearVelocity({x: 0, y: 0, z: 0});
		game_piece.get().removeEventListener('collision', collisions);
		console.log(game_piece.get().removeEventListener('collision', collisions));

		game_piece.create_new_piece();
		game_piece.rotate(rot);
		
		world.add(game_piece.get());

		game_piece.setLinearVelocity();
		var rad90 = Math.PI * .5;
		game_piece.get().addEventListener('collision', collisions);
		world.pause();
		new TWEEN.Tween( world.scene.rotation ).to( {  y:  world.scene.rotation.y + rad90}, 1000 ).start();
		setTimeout(function(){world.pause()},1005);	
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
						game_piece.applyImpulse("right",rot);
						setTimeout(function() { game_piece.setLinearVelocity({x: 0, y: -5, z: 0});}, 30);
						keydown = 1;
					}		 		
		 		
		 		  	break;

		 case 65: 
		 		if (keydown == 0) {
		 		game_piece.applyImpulse("left",rot);
		 		setTimeout(function() { game_piece.setLinearVelocity({x: 0, y: -5, z: 0});}, 30);
		 		keydown =1;
		 		}  
		 		break;

		 case 82: /*R*/  break;
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


 
    
