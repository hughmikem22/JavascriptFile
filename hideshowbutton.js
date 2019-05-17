function clickInfo(){
    var insertInto = document.getElementById('placeHere');
    var insertInto2 = document.getElementById('facehere');
    var value1 = document.createElement('h1');
    var value2 = document.createElement('h2');
    value1.innerHTML = 'Hugh Big Deal McNeil';
    insertInto.appendChild(value1);
    insertInto.style.marginLeft = '3.3rem';
    insertInto.style.fontFamily = 'Sans Serif'
    insertInto.style.backgroundColor = 'green';
    insertInto.style.textAlign = 'center';
    value2.innerHTML = 'Ok Now we Got it Poppin in JS';
    insertInto2.appendChild(value2);
    insertInto2.style.backgroundColor = 'yellow';
    insertInto2.style.textAlign = 'center';
    insertInto2.style.marginTop = '3.5rem';
    insertInto2.style.fontFamily = 'Impact';
    var Hugh = document.createElement('img');
    Hugh.src = 'bigtippa.jpg';
    insertInto.appendChild(Hugh);
    
    
    document.getElementById('buttonclick') .style.visibility ='hidden';
   }
   

   



