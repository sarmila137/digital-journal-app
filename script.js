function addJournal() {

    let input = document.getElementById("journalInput");
    let journalText = input.value;

    if(journalText === "") {
        alert("Please write something");
        return;
    }

    let journalList = document.getElementById("journalList");

    let journalDiv = document.createElement("div");
    journalDiv.className = "journal";

    let date = new Date();

    journalDiv.innerHTML = `
        <p>${journalText}</p>
        <small>${date.toLocaleString()}</small>
        <br><br>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    journalList.appendChild(journalDiv);

    input.value = "";
}