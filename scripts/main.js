Events.on(ClientLoadEvent, ()=>{
	for (let block in Blocks) {
		if (Blocks[block] instanceof Turret) {
			Blocks[block].rotate = false;
		}
	}
});
