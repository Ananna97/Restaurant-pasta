// Script to open and close sidebar
function menu_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function menu_close() {
  document.getElementById("mySidebar").style.display = "none";
}

//team list
const list = document.getElementById('team');

//color changing button
var colors = ["blue","green", "purple" , "cyan" ,"magenta"]
var currentColor = 0
var lis = document.querySelectorAll("#team p")


function getTeam() {

      fetch('http://localhost:3000/team').then(function (response) {
            
            response.json().then(function (team) {
                appendToDOM(team);
            });
        });
        
};


function appendToDOM(team) {
    
  
    
    for (let i = 0; i < team.length; i++) {
       
       
        //create elements
        let name = document.createElement('h3');
        name.innerText = team[i].name;
        let id = document.createElement('p');
        id.style.color = "black";
        let img = document.createElement('img');
        img.src = team[i].img;
        img.className = "circle";
        img.alt = "Boss";
        img.style.height = '150px';
        img.style.width = '110px';
        let div = document.createElement('div');
        div.className = "quarter"; 
        div.setAttribute("id", "quarter");
        let container = document.createElement('div');
        container.className = "quarter";
        container.setAttribute("id", "quarter");
        

        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(id);
        

      

        
        list.appendChild(container);
        idx=(team[team.length-1].id);
    }
}

function sparkle() {
 

  //get by class name
  const elements = document.getElementsByClassName("team");

  //remove item
  while (elements.length > 0) elements[0].remove();

  //get by tag
  document.getElementsByTagName("P")[7].innerHTML = "This is us!!!";

  //set interval
  myVar = setInterval(alertFunc, 300);

  console.log("spark");
}

function stop() {
  //clear timeout
  clearInterval(myVar);
  //set timeout
  setTimeout(function(){ 
      for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = "black"
    } 
  }, 1000);
}

//color change function
function alertFunc() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

getTeam();