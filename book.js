
var chapters = [];

var chapter_1 = {
		'images':[
			{
				'name': 'cloud',
				'uri': 'img/cloud.png',
				'width': '250px',
				'height': '100px',
				'from' : 'left',
				'at' : 0,
				'to': 100,
				'speed': '10000',
				'mode': 'ease'
				
			},	{
				'name': 'cloud1',
				'uri': 'img/cloud.png',
				'width': '100px',
				'height': '50px',
				'from' : 'left',
				'at' : 3,
				'to': 110,
				'speed': '10000',
				'mode': 'ease'
				
			},	{
				'name': 'cloud2',
				'uri': 'img/cloud.png',
				'from' : 'left',
				'width': '200px',
				'height': '150px',
				'at' : -10,
				'to': 50,
				'speed': '10000',
				'mode': 'ease'
				
			},	{
				'name': 'person',
				'width': '200px',
				'height': '150px',
				'uri': 'img/person.png',
				'from' : 'left',
				'at' : 20,
				'to': 50,
				'bottom': 0,
				'speed': '10000',
				'mode': 'ease',
				'transform' : [{
					'key': 'height',
					'value' : 0.8
					},{
					'key': 'bottom',
					'value': 100
				}]
				
			}
		],
		'text': 
			'In a dark troubled night I decided to move forward',
			
		'duration': 10000,
		'background': 'img/chapter1bg.jpg'
		
	};
var chapter_2 = {
		'images':[
				{
				'name': 'person2',
				'width': '200px',
				'height': '150px',
				'uri': 'img/person.png',
				'from' : 'left',
				'at' : -10,
				'to': 20,
				'bottom': 0,
				'speed': '3000',
				'mode': 'ease'
				
				
			}
		],
		'text': 
			'I allways thought that there was a path I should follow... I must decide',
			
		'duration': 15000,
		'background': 'img/chapter2bg.jpg'
		
	};

chapters.push(chapter_1);
chapters.push(chapter_2);

processChapters(chapters);
loader.load(resources);
loader.onReady(function(){playChapters(chapters);});