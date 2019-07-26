const items=[
{Title:'Avatar',Box_Office:'$2,787,965,087',Active:'Yes',Date_Of_Launch:'15/03/2017',Genre:'Science Fiction',Has_Teaser:'Yes'},
{Title:'The Avengers',Box_Office:'$1,518,812,988',Active:'Yes',Date_Of_Launch:'23/12/2017',Genre:'Superhero',Has_Teaser:'No'},
{Title:'Titanic',Box_Office:'$2,187,463,944',Active:'Yes',Date_Of_Launch:'21/08/2017',Genre:'Romance',Has_Teaser:'No'},
{Title:'Jurrasic World',Box_Office:'$1,671,713,208',Active:'No',Date_Of_Launch:'02/07/2017',Genre:'Science Fiction',Has_Teaser:'Yes'},
{Title:'Avengers:End Game',Box_Office:'$2,750,760,348',Active:'Yes',Date_Of_Launch:'02/11/2022',Genre:'Superhero',Has_Teaser:'Yes'}

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

tdEl3.textContent=item.Active;

trEl1.appendChild(tdEl3);
let tdEl4=document.createElement("td");

tdEl4.textContent=item.Date_Of_Launch;

trEl1.appendChild(tdEl4);
let tdEl5=document.createElement("td");

tdEl5.textContent=item.Genre;

trEl1.appendChild(tdEl5);
let tdEl6=document.createElement("td");

tdEl6.textContent=item.Has_Teaser;

trEl1.appendChild(tdEl6);

tabEl.appendChild(trEl1);

let tdEl7=document.createElement("td");

                                let editLink=document.createElement('a');

                                editLink.setAttribute('id','link1');

                                editLink.href="edit-movie.html";

                                editLink.textContent="Edit"

                                tdEl7.appendChild(editLink);

                                trEl1.appendChild(tdEl7);




})
document.querySelector('#link1').addEventListener('click',function(){

console.log(item);

})


}

renderProducts(items);

function validate()
{
                var s=document.forms["menu"]["name"].value;
                var letters=/^[A-Za-z]+$/
                if(s == "")
                {
                alert("Title is required");
                return false;
                }
                else if(s.length<2 || s.length>65)
                {
                  alert("Title should have 2 to 65 characters");
                    return false;
                }
                var price=document.forms["menu"]["price"].value;
                if(price=="")
                {
                                alert("Box Office is required");
                                return false;
                }
                else if(price.match(letters))
                {
                                alert("Box Office has to be a number.");
                                return false;
                }
                var date=document.forms["menu"]["date"].value;
                if(date=="")
                {
                                alert("date of launch is required");
                                return false;
                }
                var genre=document.forms["menu"]["genre"].value;
                if(genre=="")
                {
                                alert("Select one genre");
                                return false;
                }

}
