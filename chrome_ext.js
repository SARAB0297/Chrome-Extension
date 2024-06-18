 const inputBtn=document.getElementById("input-btn");
let myLeads=[];
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const saveBtn=document.getElementById("save-btn");
/*localStorage.setItem("myLeads","www.hello.com");
let store=localStorage.getItem("myLeads");
console.log(store)
//Limitation: Can only store string datatype in localstorage//  

//  to store element in Array  //   
let myLeas='["www.linkedin.com"]'
myLeas=JSON.parse(myLeas)
myLeas.push("www.hello.com")
myLeas=JSON.stringify(myLeas)
console.log(typeof myLeas)  */
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalstorage)

if(leadsfromlocalstorage) {
    myLeads=leadsfromlocalstorage
    render(myLeads)
}

saveBtn.addEventListener("click",function() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
      })
})


console.log(leadsfromlocalstorage)
inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value);
    inputEl.value="";
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
})
function render(leads) {
let listItems="";
for (let i=0;i<leads.length;i++) {
   listItems+="<li><a target='_blank' href='"+leads[i]+"'>"+leads[i]+"</a></li>" 
   /* listItems+=
    <li>
        < a target=`_blank' href='${myLeads[i]}`>${myLeads[i]}</a>
    </li>*/

}
ulEl.innerHTML=listItems;
}
deleteBtn.addEventListener("dblclick",function() {
        localStorage.clear();
        myLeads=[];
        render(myLeads);
})

  /*const testme=document.getElementById("test");
    testme.innerHTML="<button onclick='buy()'>BUY</button>"
    function buy() {
        testme.innerHTML+="<p>Thankyou for purchasing.</p>"
    }
     //eg:
     //const recipient="James";
     //const sender="Sarab";
     //const email='Hey ${recipient}! How is it going? Cheers ${sender}';
     //console.log(email);

var x=99;
function testIQ() {
    console.log(x);
    var x=999;
}
testIQ();


//OPTIMISING THE FUNCTION WITH ARGUMENTS//

const welcomeEl=document.getElementById("welcome-el")
function greetUser(greeting, name) {
    welcomeEl.textContent=`${greeting},${name}!`;       //button above tab is used//
}
greetUser("HEY","Sarab");
}
fun
*/

