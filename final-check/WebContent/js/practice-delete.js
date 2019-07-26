const items=[
{Title:'Avatar',Box_Office:'$2,787,965,087',Genre:'Science Fiction'},
{Title:'The Avengers',Box_Office:'$1,518,812,988',Genre:'Superhero'},
{Title:'Titanic',Box_Office:'$2,187,463,944',Genre:'Romance'},
{Title:'Jurassic World',Box_Office:'$1,671,713,208',Genre:'Science Fiction'},
{Title:'Avengers:End Game',Box_Office:'$2,750,760,348',Genre:'Superhero'}
];
const renderProducts=function(items)
{
let tabEl=document.querySelector("#prod-tab");

items.forEach(function(item){

let trEl1=document.createElement("tr");

let tdEl1=document.createElement("td");

tdEl1.textContent=item.Title;

trEl1.appendChild(tdEl1);

let tdEl2=document.createElement("td");

tdEl2.textContent=item.Box_Office;

trEl1.appendChild(tdEl2);

let tdEl3=document.createElement("td");

tdEl3.textContent=item.Genre;

trEl1.appendChild(tdEl3);


tabEl.appendChild(trEl1);

let tdEl4=document.createElement("td");

                                let editLink=document.createElement('a');

                                editLink.setAttribute('id','link1');

                                editLink.href="favorites-notification.html";

                                editLink.textContent="Delete"

                                tdEl4.appendChild(editLink);

                                trEl1.appendChild(tdEl4);




})
document.querySelector('#link1').addEventListener('click',function(){

console.log(item);

})


}

renderProducts(items);
