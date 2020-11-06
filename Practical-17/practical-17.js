//Selector
const time= document.getElementById("time");
const greeting= document.getElementById("greeting");
const name= document.getElementById("name");
const date= document.getElementById("date");        //shift+alt+down arrow to copy code

//Event Listener

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

//Function
function showtime()
{
    let today = new Date();
    let hour = today.getHours();                    //8
    let min = today.getMinutes();                   //32
    let sec = today.getSeconds();                   //23 sec
    let todaydate = today.toDateString();           //friday nov 6 2020

    //am pm format
    const ampm = hour>12 ?'PM':'AM';

    //12 hours format
    hour = hour%12 || 12;                           // hour=14%12=2 true->left false->right

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    date.innerHTML = `${todaydate}`;

    //hh:mm:ss(Required Time)
    setTimeout(showtime,1000);                      //1000ms=1s

    function addZero(n)                             //5
    {
        return ((parseInt(n,10)<10?'0':'')+n)       //05
    }
}

function setGreeting()
{
    let today = new Date();              //Date(2020,12,12,20,12,11)
    let hour = today.getHours();

    if(hour<12)
    {
        document.body.style.backgroundImage= 'url("img/morning1.jpg")';
        
        greeting.innerHTML ='Good Morning :)';
    }
    else if(hour<18)
    {
        document.body.style.backgroundImage= 'url("img/evening.jpg")';
        greeting.innerHTML ='Good Evening ;-)';
        document.body.style.color='white';
    }
    else{
        document.body.style.backgroundImage= 'url("img/night.jpg")';
        greeting.innerHTML ='Good Night :o Zz';
        document.body.style.color='white';
    }
}

function getName()
{
    if(localStorage.getItem('myName')===null)
    {
        name.innerHTML= "[Enter Name]";
    }
    else{
        name.innerHTML= localStorage.getItem('myName');
    }
}

//create a function to store data in local storage

function setName(e)
{
    if(e.type==="keypress")
    {
        if(e.keyCode==13)
        {
            localStorage.setItem('myName',e.target.innerHTML);
            name.blur();
        }
    }
    else
    {
        localStorage.setItem('myName',e.target.innerHTML);
    }
}

//Function Call
showtime();
setGreeting();
getName();