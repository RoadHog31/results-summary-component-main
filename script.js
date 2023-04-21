//import data from '/data.json' assert { type: 'json' };

document.addEventListener("DOMContentLoaded", () => {
    //console.log("Hello"); 
  
  function createMenuStructure(menuStructure) {
    let html = '<ul>';
    for (let i = 0; i < menuStructure.length; i++) {
      let item = menuStructure[i];
      html += '<li>' + '<object data="' + item.icon + '" width="15" height="15"> </object>' + " " + item.category + "   " + item.score + " " + '/100';
      
      html += '</li>';
    }
    html += '</ul>';
    return html;
  }
  
 /*Fetch API mthod used to get JSON file data.  */
 //let menuStructure = data;
 
/*fetch("data.json")
 .then(resp => resp.json())
 .then(data => menuStructure = data);*/ 

  
  const menuStructure = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];
  
  const html = createMenuStructure(menuStructure);
  /*console.log(html);
  document.getElementById("result").innerText = html;*/ 

let frag = document.createRange().createContextualFragment(html);
console.log(frag);
document.getElementById("result").appendChild(frag);

});