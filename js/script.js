var button = document.querySelector('.icon');

function click(){
	let lista = document.querySelector('.lista-menu');
	if(lista.classList.contains("esse")){
		lista.classList.remove('esse');
		
	}else{
		lista.classList.add("esse");
	}
}


button.onclick = click;