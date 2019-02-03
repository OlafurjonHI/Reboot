

document.addEventListener('DOMContentLoaded', () => {
let maindata;
let counter = 0;
let qnr = 1;
fetch('./data.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } throw new Error('Villa kom upp');
      })
      .then((data) => {
      	console.log(data.data[0]["hungry"][0][qnr][0]['Q']);
      	 maindata = data.data;
      })
      .catch((error) => {
      console.log(error);
 });


  const page = document.querySelector('body');
  let answers = document.querySelectorAll('.answer')
  for (var i = 0; i < answers.length; i++) {
  	answers[i].addEventListener('click', (e)=> {
 		let type = extractType(e.target.parentNode)
 		counter++;
 		if(counter % 2 !== 0){
 			updateQnA(maindata[0][type][0][qnr][0]);
 		}
 		else{
 			
 			endgame(maindata[0]['endgame'][0][qnr][0],maindata,type,qnr);
 			qnr++;

 		}
  		
  	});
  }

});

function extractType(parent){
	let type;
	console.log(parent);
	if(parent.classList.length !== 0){
		let lastindex = parent.classList.length-1
		let lastClass = parent.classList[lastindex];
		type = lastClass.split('_')[lastindex];
		}
	else{
		type = "null"
	}
	return type
}

function addEventNewQnA(el){

}

function updateQnA(data){
	let question = document.querySelector('.main__question').firstElementChild;
	let answers = document.querySelectorAll('.answer')
	console.log(data);
	let Q = data['Q'];
	let A = data['1'];
	let B = data['2'];
	let C = data['3'];
	let D = data['4'];
	let qlist = [A,B,C,D];
	for (var i = 0; i < answers.length; i++) {
		while(answers[i].firstChild){
			answers[i].removeChild(answers[i].firstChild);
		}
		answers[i].appendChild(document.createTextNode(qlist[i]));
	}
	question.innerHTML = Q;
}

function endgame(data,maindata,type,qnr){
	let box  = document.querySelector(".answerbox");
	let welc = document.querySelector('.welcome');
	let h3 = welc.querySelector('h3');
	let question = document.querySelector('.main__question').firstElementChild;
	let endgame = document.createElement('div');
	endgame.classList.add('endgame');

	let divimg = document.createElement('div');
	divimg.classList.add('endgame__img__box');
	let img = document.createElement('img');
	img.setAttribute('src',data['img']);
	divimg.appendChild(img);

	while(box.firstChild){
		box.removeChild(box.firstChild);
	}
	let span = document.createElement('span');
	span.appendChild(document.createTextNode(data['desc']));
	span.classList.add('endgame__text');
	endgame.appendChild(divimg);
	endgame.appendChild(span);
	h3.innerHTML = "You should like";
	question.innerHTML = data['name'];
	
	let buttonbox = document.createElement('div');
	buttonbox.classList.add('endgame_bt_row');
	let  bt1  = document.createElement('div');
	let  bt2  = document.createElement('div');
	bt1.classList.add('endgame__button');
	bt2.classList.add('endgame__button');
	bt1.appendChild(document.createTextNode("Take me there!"));
	bt1.addEventListener('click',()=>{
		window.location.replace("https://ja.is/kort/?d=hashid%3AVl47R&x=357293&y=408236&z=8&ja360=1&jh=134.5&type=map");
	});
	qnr++;
	bt2.appendChild(document.createTextNode("Let's get something more specific"));
	bt2.addEventListener('click',()=>{

		//updateQnA(maindata[0][type][0][qnr][0]);
	});

	buttonbox.appendChild(bt1)
	buttonbox.appendChild(bt2);
	endgame.appendChild(buttonbox);
	box.appendChild(endgame);
	
	
}
