let addbutton = document.getElementById("add-button");
let table = document.getElementById("table");

addbutton.addEventListener("click", printValues);

function printValues() {
    let date = document.getElementsByClassName("dateinput")[0].value;
    let amount = document.getElementsByClassName("amount-input")[0].value;
    let Transaction = document.getElementsByClassName("Transactioninput")[0].value;

    if (date === "" || amount === "" || Transaction === "Transaction") {
        alert("Please enter all fields correctly!");
        return;
    }

    let row = document.createElement("tr");

    let amountcell = document.createElement("td");
    amountcell.innerText = amount;

    let transactioncell = document.createElement("td");
    transactioncell.innerText = Transaction;

    let datecell = document.createElement("td");
    datecell.innerText = date;

    let binCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-md", "delete-btn");
    deleteButton.textContent = "-";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    binCell.appendChild(deleteButton);

    row.appendChild(amountcell);
    row.appendChild(transactioncell);
    row.appendChild(datecell);
    row.appendChild(binCell);
    table.appendChild(row);

    let totalIncome = Number(document.getElementById("totalincome").innerText);
    let totalExpence = Number(document.getElementById("totalExpence").innerText);
    let balance = Number(document.getElementById("balance").innerText);
    amount = Number(amount);

    if (Transaction === "income") {
        document.getElementById("totalincome").innerText = totalIncome + amount;
        document.getElementById("balance").innerText = balance + amount;
    } else if (Transaction === "expence") {
        document.getElementById("totalExpence").innerText = totalExpence + amount;
        document.getElementById("balance").innerText = balance - amount;
    }

    document.getElementsByClassName("dateinput")[0].value = "";
    document.getElementsByClassName("amount-input")[0].value = "";
    document.getElementsByClassName("Transactioninput")[0].value = "Transaction";
}
