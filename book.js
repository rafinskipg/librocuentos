
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
				'to': 40,
				'speed': '10000',
				'mode': 'ease',
				'preserve': 7,
				
			},	{
				'name': 'cloud1',
				'uri': 'img/cloud.png',
				'width': '100px',
				'height': '50px',
				'from' : 'right',
				'at' : 3,
				'to': 50,
				'speed': '10000',
				'mode': 'ease',
				'preserve': 7,
				
			},	{
				'name': 'cloud2',
				'uri': 'img/cloud.png',
				'from' : 'left',
				'width': '200px',
				'height': '150px',
				'at' : -10,
				'to': 60,
				'speed': '10000',
				'mode': 'ease',
				'preserve': 7,
				
			},	{
				'name': 'person',
				'width': '150px',
				'height': '150px',
				'uri': 'img/estrellas/lobito.gif',
				'from' : 'left',
				'at' : 20,
				'to': 50,
				'bottom': 0,
				'speed': '10000',
				'mode': 'ease',
				'preserve': 7,
				
				
			}
		],
		'text': 
			'Había una vez un lobito muy curioso que vivía en el bosque.',
			
		'duration': 10000,
		'background': 'img/estrellas/noche.jpg'
		
	};
var chapter_2 = {
		
		'text': 
			'El lobito siempre se preguntaba que eran las luces que brillaban en lo alto del cielo.<br/> "¿Serán luciérnagas que brillan en la oscuridad? \n¿Por qué nunca se apagan?"',
			
		'duration': 15000,
		'background': 'img/estrellas/noche.jpg'
		
	};
	
var chapter_3 = {
		'images':[
				{
				'name': 'loba',
				'width': '150px',
				'height': '250px',
				'uri': 'img/estrellas/lobamama.png',
				'from' : 'left',
				'at' : -20,
				'to': 30,
				'bottom': 0,
				'speed': '5000',
				'mode': 'ease',
				'preserve': 4,
				
				
			}
		],
		'text': 
			'"No son luciernagas, hijo" - le contó su madre.',
			
		'duration': 6000,
		'background': 'img/estrellas/noche.jpg'
		
	};
var chapter_4 = {
		'text': 
			'"¿Entonces que son?" - dijo el lobito',
		'duration': 6000,
		'background': 'img/estrellas/noche.jpg'
	};
var chapter_5 = {
		'text': 
			'"Son estrellas, como nuestro sol"',
		'duration': 6000,
		'background': 'img/estrellas/noche.jpg'
	};
var chapter_6 = {
		'text': 
			'"¡No puede ser! Dijo el lobito. <br/> "El sol es muuuucho más grande que las estrellas"',
		'duration': 8000,
		'background': 'img/estrellas/noche.jpg'
	};
var chapter_7 = {
		'text': 
			'"No todo es lo que parece a simple vista, hijo mío.<br/> Las estrellas son soles que están tan lejos, tan lejos, que parecen hormigas "',
		'duration': 8000,
		'background': 'img/estrellas/noche.jpg'
	};

chapters.push(chapter_1);
chapters.push(chapter_2);
chapters.push(chapter_3);
chapters.push(chapter_4);
chapters.push(chapter_5);
chapters.push(chapter_6);
chapters.push(chapter_7);

processChapters(chapters);
loader.load(resources);
loader.onReady(function(){playChapters(chapters);});