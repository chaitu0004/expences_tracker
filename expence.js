let addbutton=document.getElementById("add-button");
addbutton.addEventListener("click",printValues);
let table=document.getElementById("table");
console.log(table);



function printValues()
{
    let date=document.getElementsByClassName("dateinput")[0].value;
    let amount=document.getElementsByClassName("amount-input")[0].value;
    let Transaction=document.getElementsByClassName("Transactioninput")[0].value;
    let row=document.createElement("tr")

    let amountcell=document.createElement("td")
    amountcell.innerText=amount;

    let transactioncell=document.createElement("td")
    transactioncell.innerText=Transaction;

    let datecell=document.createElement("td")
    datecell.innerText=date;



let binCell = document.createElement("td");


let deleteButton = document.createElement("button");

deleteButton.classList.add("btn", "btn-md","delete-btn"); 
deleteButton.textContent = "-"; 


deleteButton.addEventListener("click", function() {

    row.remove();
});

binCell.appendChild(deleteButton);



    row.appendChild(amountcell)
    row.appendChild(transactioncell)
    row.appendChild(datecell)
    row.append(binCell)
    table.appendChild(row)

let totalincome=document.getElementById("totalincome").innerText;
let balance=document.getElementById("balance").innerText;
if(Transaction=="income")
{
    if(totalincome==0){
        document.getElementById("totalincome").innerText=amount;
    }
    else{
        document.getElementById("totalincome").innerText=parseInt(amount)+parseInt(totalincome);
    }
    if(balance==0){
        document.getElementById("balance").innerText=amount;
    }
    else{
        document.getElementById("balance").innerText=parseInt(amount)+parseInt(balance)
    }
}
let totalexpence=document.getElementById("totalExpence").innerText;
if(Transaction=="expence")
{
    if(totalexpence==0){
        document.getElementById("totalExpence").innerText=amount;
    }
    else{
        document.getElementById("totalExpence").innerText=parseInt(amount)+parseInt(totalexpence);
    }
    if(balance==0){
        document.getElementById("balance").innerText=expence
    }
    else{
        document.getElementById("balance").innerText=parseInt(balance) - parseInt(amount);
    }
}




}
