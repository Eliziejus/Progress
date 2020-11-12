const subject=document.getElementById("subject");
const priority=document.getElementById("priority");
const ddate=document.getElementById("duedate");
const status=document.getElementById("status");
const percentage=document.getElementById("pcompleted");
const submit=document.getElementById("submit");
const table=document.getElementById("table");
const remove=document.getElementsByClassName("remove");

submit.addEventListener("click", submitt);

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}

function removed() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function submitt(){
  if ((subject.value) &&(ddate.value)&& (percentage.value)){
  const row = document.createElement("tr");
  table.appendChild(row);

  const subtype = document.createElement("td");
  subtype.innerText="X";
  row.appendChild(subtype).className = "item";


  const subsub = document.createElement("td");
  subsub.innerText=subject.value;
  row.appendChild(subsub).className = "item";


  const addPriority = document.createElement("td");
  let Colors=priority.value;
  //subprio.innerText=priority.value;
  
  if(Colors==="High"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-danger>"+Colors+"</td>"
  }
  else if (Colors==="Medium"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-success>"+Colors+"</td>"
    
  }
  else if (Colors==="Low"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-primary>"+Colors+"</td>"
  }
  row.appendChild(addPriority).className = "item";

    
  const subddate = document.createElement("td");
  subddate.innerText=ddate.value;
  row.appendChild(subddate).className = "item";


  const substatus = document.createElement("td");
  substatus.innerText=status.value;
  row.appendChild(substatus).className = "item";


  const subpercent = document.createElement("td");
  subpercent.className="item";
  const progber = document.createElement("div");
  progber.className="progress";
  //console.log(percentage);
  progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";
    /*if(isNaN(percentage) && percentage!==""){
        if(percentage==="100%"){
            progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";        }
        else if(percentage==="75%"){
            progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";        }
        else if (percentage==="50%"){
            progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";        }
        else if(percentage=="25%"){
            progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";        }
        else if (percentage==="0%"){
            progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentage.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentage.value + "%</div>";        }
    }
    */
   row.appendChild(subpercent);
   subpercent.appendChild(progber);



  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '-' + dd + '-' + yyyy;
  const subctime = document.createElement("td");
  subctime.innerText=today;
  row.appendChild(subctime).className = "item";


  const subremove = document.createElement("td");
  subremove.innerText="Delete";

  row.appendChild(subremove).className = "item remove removeblock btn btn-danger";


  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}
}
}