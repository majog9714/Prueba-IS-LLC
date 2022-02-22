
function showSelectRooms() {
    document.getElementById('item-combo').style.visibility="visible";
}

function hideSelectRooms(){
    document.getElementById('item-combo').style.display = "none";
}
function showMore(id){
  document.getElementById('lista-enlaces'+id).classList.toggle('active');
}

const left = document.getElementById('btn-izq');
const right = document.getElementById('btn-der');
let i = 1;

right.onclick = () => {
  if (i >=5){
    document.getElementById('frase'+i).classList.toggle('active');
    document.getElementById('frase1').classList.toggle('active');
    i = 1;
    return;
  }

  document.getElementById('frase'+i).classList.toggle('active');
  document.getElementById('frase'+(i+1)).classList.toggle('active');
  i++;
}

left.onclick = () => {
  if (i==1)
    return;
  document.getElementById('frase'+i).classList.toggle('active');
  document.getElementById('frase'+(i-1)).classList.toggle('active');
  i--;
}

// onclick="showSelectRooms()" onfocusout="hideSelectRooms()"
