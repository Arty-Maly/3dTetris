



function Game_Piece() {

			this.piece = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
			this.piece.position.x = 0;
    		this.piece.position.y = 10;
    		this.piece.position.z = 8;
    		this.piece.__dirtyRotation=true;
    		this.piece.__dirtyPosition=true;
}

	Game_Piece.prototype={
		constructor:Game_Piece,

		create_new_piece: function(world) {

		//create_T_piece(world);
    		
    		
    		// Game_World.prototype.add.call(this.piece);
		}


		,
//different pieces starting below:
		TPiece: function(world, rot){

				var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}
	topleftbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    topleftbox.position.x = basepositionx-1;
    topleftbox.position.y = basepositiony+1;
    topleftbox.position.z = basepositionz;

	topmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	topmiddlebox.position.x = basepositionx;
    topmiddlebox.position.y = basepositiony+1;
    topmiddlebox.position.z = basepositionz;

    toprightbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    toprightbox.position.x = basepositionx+1;
    toprightbox.position.y = basepositiony+1;
    toprightbox.position.z = basepositionz;

    middlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	middlebox.position.x = basepositionx;
    middlebox.position.y = basepositiony;
    middlebox.position.z = basepositionz;

    lowbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	lowbox.position.x = basepositionx;
    lowbox.position.y = basepositiony-1;
    lowbox.position.z = basepositionz;

    world.add(topleftbox);
    world.add(topmiddlebox);
    world.add(toprightbox);
    world.add(middlebox);
    world.add(lowbox);

    var tltmhigh = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var tltmlow = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx - 0.5, basepositiony +0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( tltmhigh );
	world.addConstraint( tltmlow );


    var trtmhigh = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var trtmlow = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.5, basepositionx+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( trtmhigh );
	world.addConstraint( trtmlow );

	var mtmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mtmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mtmright );
	world.addConstraint( mtmleft );

    var mlmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mlmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mlmright );
	world.addConstraint( mlmleft );

	this.piece = [topmiddlebox, topleftbox, toprightbox, middlebox, lowbox];

		},

	IPiece: function (world, rot){

			var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}

	topbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    topbox.position.x = basepositionx;
    topbox.position.y = basepositiony+1;
    topbox.position.z = basepositionz;

	topmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	topmiddlebox.position.x = basepositionx;
    topmiddlebox.position.y = basepositiony;
    topmiddlebox.position.z = basepositionz;

    botmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	botmiddlebox.position.x = basepositionx;
    botmiddlebox.position.y = basepositiony-1;
    botmiddlebox.position.z = basepositionz;

    botbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    botbox.position.x = basepositionx;
    botbox.position.y = basepositiony-2;
    botbox.position.z = basepositionz;



    world.add(topbox);
    world.add(topmiddlebox);
    world.add(botbox);
    world.add(botmiddlebox);


   var ttmright = new Physijs.PointConstraint(
    topbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var ttmleft = new Physijs.PointConstraint(
    topbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( ttmright );
	world.addConstraint( ttmleft );

	var tmbmright = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var tmbmleft = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( tmbmright );
	world.addConstraint( tmbmleft );

	var bbmright = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    botbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony-1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var bbmleft = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    botbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony-1.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( bbmright );
	world.addConstraint( bbmleft );
    
	this.piece=[topbox, topmiddlebox, botbox, botmiddlebox];

}

		,
ZPiece: function (world, rot){

		var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}

	topleftbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    topleftbox.position.x = basepositionx-1;
    topleftbox.position.y = basepositiony+1;
    topleftbox.position.z = basepositionz;

	topmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	topmiddlebox.position.x = basepositionx;
    topmiddlebox.position.y = basepositiony+1;
    topmiddlebox.position.z = basepositionz;

    botrightbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    botrightbox.position.x = basepositionx+1;
    botrightbox.position.y = basepositiony;
    botrightbox.position.z = basepositionz;

    botmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	botmiddlebox.position.x = basepositionx;
    botmiddlebox.position.y = basepositiony;
    botmiddlebox.position.z = basepositionz;



    world.add(topleftbox);
    world.add(topmiddlebox);
    world.add(botrightbox);
    world.add(botmiddlebox);


    var tltmhigh = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var tltmlow = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( tltmhigh );
	world.addConstraint( tltmlow );


    var brbmhigh = new Physijs.PointConstraint(
    botrightbox, // First object to be constrained
    botmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.5, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var brbmlow = new Physijs.PointConstraint(
    botrightbox, // First object to be constrained
    botmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.5, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( brbmhigh );
	world.addConstraint( brbmlow );

	var mtmbright = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mtmbleft = new Physijs.PointConstraint(
    botmiddlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mtmbright );
	world.addConstraint( mtmbleft );

   this.piece=[topleftbox, topmiddlebox, botrightbox, botmiddlebox];

}

,

CubePiece: function (world, rot){

		var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}

	topleftbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    topleftbox.position.x = basepositionx-1;
    topleftbox.position.y = basepositiony+1;
    topleftbox.position.z = basepositionz;

	botleftbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	botleftbox.position.x = basepositionx-1;
    botleftbox.position.y = basepositiony;
    botleftbox.position.z = basepositionz;

    toprightbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    toprightbox.position.x = basepositionx;
    toprightbox.position.y = basepositiony+1;
    toprightbox.position.z = basepositionz;

    botrightbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	botrightbox.position.x = basepositionx;
    botrightbox.position.y = basepositiony;
    botrightbox.position.z = basepositionz;


    world.add(topleftbox);
    world.add(botrightbox);
    world.add(toprightbox);
    world.add(botleftbox);

    this.piece=[topleftbox, botrightbox, toprightbox, botleftbox];

    var trtlhigh = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    toprightbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var trtllow = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    toprightbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( trtlhigh );
	world.addConstraint( trtllow );


    var trbrleft = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    botrightbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var trbrright = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    botrightbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.2, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( trbrleft );
	world.addConstraint( trbrright );

	var tlblright = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    botleftbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.9, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var tlblleft = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    botleftbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-1.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( tlblright );
	world.addConstraint( tlblleft );


}

,
LTPiece: function (world, rot){

		var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}

	topleftbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    topleftbox.position.x = basepositionx-1;
    topleftbox.position.y = basepositiony+1;
    topleftbox.position.z = basepositionz;

	topmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	topmiddlebox.position.x = basepositionx;
    topmiddlebox.position.y = basepositiony+1;
    topmiddlebox.position.z = basepositionz;


    middlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	middlebox.position.x = basepositionx;
    middlebox.position.y = basepositiony;
    middlebox.position.z = basepositionz;

    lowbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	lowbox.position.x = basepositionx;
    lowbox.position.y = basepositiony-1;
    lowbox.position.z = basepositionz;

    world.add(topleftbox);
    world.add(topmiddlebox);
    world.add(middlebox);
    world.add(lowbox);

    this.piece=[topleftbox, topmiddlebox, middlebox, lowbox];

    var tltmhigh = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var tltmlow = new Physijs.PointConstraint(
    topleftbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.5, basepositionx+0.5, basepositionz) // point in the scene to apply the constraint
	);

	world.addConstraint( tltmhigh );
	world.addConstraint( tltmlow );


	var mtmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mtmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositionx+0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mtmright );
	world.addConstraint( mtmleft );

    var mlmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mlmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx-0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mlmright );
	world.addConstraint( mlmleft );



}
,
RTPiece: function (world, rot){

	var basepositionx, basepositiony, basepositionz;

	switch(rot) {
				case 0: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = 8;
    					
    			break;

    			case 1: basepositionx = -8;
    					basepositiony = 10;
    					basepositionz = 0;
    					
    			break;

    			case 2: basepositionx = 0;
    					basepositiony = 10;
    					basepositionz = -8;
    					
    			break;

    			case 3: basepositionx = 8;
    					basepositiony = 10;
    					basepositionz = 0;
    			
    			break;
			
    		}


	topmiddlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	topmiddlebox.position.x = basepositionx;
    topmiddlebox.position.y = basepositiony+1;
    topmiddlebox.position.z = basepositionz;

    toprightbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
    toprightbox.position.x = basepositionx+1;
    toprightbox.position.y = basepositiony +1;
    toprightbox.position.z = basepositionz;

    middlebox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	middlebox.position.x = basepositionx;
    middlebox.position.y = basepositiony;
    middlebox.position.z = basepositionz;

    lowbox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}, 1.0, 0), 500);
	lowbox.position.x = basepositionx;
    lowbox.position.y = basepositiony-1;
    lowbox.position.z = basepositionz;

    world.add(topmiddlebox);
    world.add(toprightbox);
    world.add(middlebox);
    world.add(lowbox);

    this.piece = [topmiddlebox, toprightbox, middlebox, lowbox];

    var trtmhigh = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.5, basepositiony+1.5, basepositionz ) // point in the scene to apply the constraint
	);

	var trtmlow = new Physijs.PointConstraint(
    toprightbox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx +0.5, basepositiony +0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( trtmhigh );
	world.addConstraint( trtmlow );

	var mtmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx+0.1, basepositiony +0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mtmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    topmiddlebox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx -0.1, basepositiony +0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mtmright );
	world.addConstraint( mtmleft );

    var mlmright = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx + 0.1, basepositiony -0.5, basepositionz ) // point in the scene to apply the constraint
	);

	var mlmleft = new Physijs.PointConstraint(
    middlebox, // First object to be constrained
    lowbox, // OPTIONAL second object - if omitted then physijs_mesh_1 will be constrained to the scene
    new THREE.Vector3( basepositionx -0.1, basepositiony-0.5, basepositionz ) // point in the scene to apply the constraint
	);

	world.addConstraint( mlmright );
	world.addConstraint( mlmleft );


}
,
		setMass: function(mass) {
			for(var i =0; i<this.piece.length; i++){
				this.piece[i].mass = mass || 0;
			}
			
		},

		setLinearVelocity: function(velocity) {
			for(var i =0; i<this.piece.length; i++){
			this.piece[i].setLinearVelocity(velocity || {x: 0, y: -5, z: 0} );
			}
		},

		get: function(world, rot) {
			var self=this;
			var num = Math.floor((Math.random() * 6));
			switch (num){
				case 0: self.LTPiece(world, rot);
						break;
				case 1: self.RTPiece(world, rot);
						break;
				case 2: self.TPiece(world, rot);
						break;
				case 3: self.IPiece(world, rot);
						break;
				case 4: self.ZPiece(world, rot);
						break;
				case 5: self.CubePiece(world, rot);
						break;
			}
			
			//return this.piece;
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

			var movement=1.1;
			if(direction=="left"){
				movement=-1.1;
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
						game_piece.piece[i].position.z+=movement;
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
            //this.scene.getObjectByName(currentpiece).position.x+=.01;
            //this.scene.getObjectByName(currentpiece).__dirtyPosition=true;

            //obj.__dirtyPosition=true;
            //this.game_piece.piece.__dirtyPosition=true;
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
	var rot = 0;
	game_piece = new Game_Piece();

	isPaused = false;
    world = new Game_World();
    world.setYGravity();
    world.setRenderer();
    world.attachRenderer();
    game_piece.get(world, rot);
   	//game_piece.LTPiece(world);
  	//world.add(game_piece.get());
  	game_piece.setLinearVelocity();


	//TPiece(world);


	world.render();

	var game_loop = true;
	var new_piece = true;
	

	// for(var i=0; i<game_piece.piece.length; i++){
	// 	game_piece.piece[i].addEventListener('collision', collisions); 
	// }
	
	
	
	function collisions(other_object, linear_velocity, angular_velocity) {
		rot+=1;
		if (rot == 4) 
			rot =0;
		
		game_piece.setMass();
		game_piece.setLinearVelocity({x: 0, y: 0, z: 0});
		for(var i=0; i<game_piece.piece.length; i++){
		game_piece.piece[i].removeEventListener('collision', collisions);
		}
		//console.log(game_piece.get().removeEventListener('collision', collisions));

		currentpiece+=1;
		//game_piece.create_new_piece(world);
		//game_piece.rotate(rot);
		game_piece.get(world, rot);
		//world.add(game_piece.get());

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
						//world.pause();
						
						game_piece.applyImpulse("right",rot);
						// world.scene.getObjectByName(currentpiece).__dirtyPosition=true;
						// game_piece.piece.position.setZ(z+2);

						keydown = 1;
					}		 		
		 		
		 		  	break;

		 case 65: 
		 		if (keydown == 0) {
		 		game_piece.applyImpulse("left",rot);
		 		//setTimeout(function() { game_piece.setLinearVelocity({x: 0, y: -5, z: 0});}, 30);
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


 
    
