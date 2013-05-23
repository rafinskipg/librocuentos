var resources = [];
var container = document.getElementById('container');
var textContainer = document.getElementById('text-container');
var processChapters = function(chapters){
	for (var i = 0; i<chapters.length; i++){
		var chapter = chapters[i];
		
		if(typeof(chapter.images) != 'undefined'){
			processImages(chapter.images, i);
		}
		var sheet = document.createElement('style')
		sheet.innerHTML = "#container.chapter"+i+"{ background-image:url('"+chapter.background+"')}";
		document.body.appendChild(sheet);
	}

}

var processImages = function(images, chapter){
    var index = resources.length ;
	resources.push([]);
	
	for (var i = 0; i<images.length; i++){	
		var image = images[i];
		resources[index].push({'name': image.name,'url' : image.uri}); 
		
		var stylesStart = "";
		var stylesEnd = "";
		var stylesAll = "";
		
		stylesStart += 'width: ' + image.width+'; ';
		stylesStart += 'height: ' + image.height+'; ';
				
		stylesStart += image.from + ":" + image.at +"%; ";
		stylesEnd += image.from + ":" + image.to +"%; ";
		
		if(typeof(image.bottom) != 'undefined'){
			stylesAll += "bottom: "+ image.bottom+ ";";
		}
		
		stylesAll += "webkit-transition: all " +image.speed+"ms ease, height 2s "+image.mode+";";
		stylesAll += "-moz-transition: all " +image.speed+"ms ease, height 2s "+image.mode+";";
		stylesAll += "-o-transition: all " +image.speed+"ms ease, height 2s "+image.mode+";";
		stylesAll += "-ms-transition: all " +image.speed+"ms ease, height 2s "+image.mode+";";
		stylesAll += "transition: all " +image.speed+"ms ease, height 2s "+image.mode+";";
	
		
		
		var sheet = document.createElement('style')
		sheet.innerHTML = "#img"+chapter+i +"{"+stylesAll+"} #img"+chapter+i+".start{"+stylesStart+"} #img"+chapter+i +".end{"+stylesEnd+"}";
		document.body.appendChild(sheet);
	}

}



var playChapters  = function(){
	
		playChapter(0);
		
	
}
function playChapter (i) {  
		var chapter = chapters[i];
		//For the background
		container.className="chapter"+i;
		
		if(typeof(chapter.images) != 'undefined'){
			//Append images
			addImages(chapter.images, i);
		}
		
		var a = i;
		window.setTimeout(function(){
			//Animate the images
			if(typeof(chapter.images) != 'undefined' && chapter.images.length > 0){
				playImages(chapter.images, a);
			}
			setText(chapter.text);
		},1000);        
   		
   		//Call this function again after the duration of the chapter
   		window.setTimeout(function () {    
   			closeChapters(i);
      		i++;       //  your code here                
      		if (i<chapters.length)  playChapter(i);      //  decrement i and call myLoop again if i > 0
  		 }, chapters[i].duration)
	}
	
var addImages= function(images, chapter){

	
	for (var i = 0; i<images.length; i++){	
	   var image = images[i];
	   var img = loader.get(image.name);
	  
	   img.setAttribute('src', image.uri);
	   img.setAttribute('id', 'img'+chapter+i);
	   img.className = "start";
	   container.appendChild(img);
	   
	  
	  
	}

}


var playImages = function(images,chapter){
	for(var i = 0; i < images.length; i++){
		var image = images[i];
		 var img = document.getElementById( 'img'+chapter+i );
		 console.log('img'+chapter+image.name);
		 img.className = "start end";
	   
	   if(typeof(image.transform )!= 'undefined'){
	   		for(var a = 0; a< image.transform.length; a++){
	   			var transform = image.transform[a];
	   			var value = parseInt(getStyle('img'+chapter+i , transform.key));
	   			var newValue;	
	   			if(value == 0){
	   				newValue = transform.value;
	   			}else{
	   				var newValue = value* transform.value;
	   			}
	   			
	   			img.style[transform.key] = newValue+'px';	   			
	   		}
	   		
		}
		
	}
	
}

var setText = function(text){
	textContainer.innerHTML = text;
	textContainer.className = 'show';
	
}

var closeChapters = function(actualchapter){
	for(var index = 0; index< actualchapter; index++){
		if(typeof( chapters[index].images ) != 'undefined' &&  chapters[index].images.length > 0){
			for(var i = 0; i < chapters[index].images.length; i++){
				var image = chapters[index].images[i];
				if(typeof(image.preserve) == 'undefined' || image.preserve == 0){
					var img = document.getElementById('img'+index+i);
					img.remove();
				}else if(typeof(image.preserve) != 'undefined'){
					--image.preserve;
				}
								
		}
	}
	}
	
	textContainer.className = "";
	container.className = "";
}