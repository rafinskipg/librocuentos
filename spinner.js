var Spinner = function(){
	this.container = document.getElementById('container');
	this.start = function(){
		this.container.className = 'spinner';
	}
	this.stop = function(){
		this.container.className = '';
	
	}

}