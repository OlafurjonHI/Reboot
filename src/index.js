

document.addEventListener('DOMContentLoaded', () => {
let maindata;
fetch('data.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } throw new Error('Villa kom upp');
      })
      .then((data) => {
      	console.log(data.data[0]["hungry"][0]['1'][0]['Q']);
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
  		updateQnA(maindata[0][type][0]['1'][0]);
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


function getData(url){
  fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Gat ekki Sótt Gögn');
    }
    return res.json();
  });
}