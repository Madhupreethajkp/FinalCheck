const items=[
{Title:'Avatar',Box_Office:'$2,787,965,087',Genre:'Science Fiction',Has_Teaser:'Yes'},
{Title:'The Avengers',Box_Office:'$1,518,812,988',Genre:'Superhero',Has_Teaser:'No'},
{Title:'Titanic',Box_Office:'$2,187,463,944',Genre:'Romance',Has_Teaser:'No'},
{Title:'Jurassic World',Box_Office:'$1,671,713,208',Genre:'Science Fiction',Has_Teaser:'Yes'},
{Title:'Avengers:End Game',Box_Office:'$2,750,760,348',Genre:'Superhero',Has_Teaser:'Yes'}
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
let tdEl4=document.createElement("td");

tdEl4.textContent=item.Has_Teaser;

trEl1.appendChild(tdEl4);

tabEl.appendChild(trEl1);

let tdEl5=document.createElement("td");

                                let editLink=document.createElement('a');

                                editLink.setAttribute('id','link1');

                                editLink.href="movie-list-customer-notification.html";

                                editLink.textContent="Add to Favorite"

                                tdEl5.appendChild(editLink);

                                trEl1.appendChild(tdEl5);




})
document.querySelector('#link1').addEventListener('click',function(){

console.log(item);

})


}

renderProducts(items);
