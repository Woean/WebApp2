
// creates and returns complete overview page with HTML and CSS reference
function getList(notes) {

    return `<!DOCTYPE html>
    <html>
        <head>
            <title>Notes Overview</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="/styles/style.css" />
          
        </head>
        <body>
            <h1>Course Management System: Teachers</h1>
            
            <div id="searchField">
            
            <script>
            
            function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("input");

    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");


    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        // Hide the row initially.
        tr[i].style.display = "none";

        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            cell = tr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}


            
</script>
            
            
          
</t>        <label for="input"> Suche: <input type="text" id="input" onkeyup="searchFunction()" placeholder="Search for names.."></label>
            </div>

            
            <table id="table1">
                <tr>
                <th>id</th><th>Vorname</th><th>Nachname</th><th>Büro</th><th>Arbeitszeit</th><th colspan="2">actions</th>
                </tr>
                
                ${notes.map(createRow).join('')}      
                
            </table>
            <a href="/new"><img class="icon" src="/images/new.png" alt="new note" title="new note" /></a>
        </body>
    </html>`;
}

// how array map works https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// create each row with TR and TD Elements
function createRow(note) {

    return `<tr>
        <td>${note.id}</td>
        <td>${note.firstname}</td>
        <td>${note.lastname}</td>
        <td>${note.office}</td>
        <td>${note.worktime}</td>
        <td><a href="/delete/${note.id}"><img class="icon" src="/images/delete.png" alt="delete note" title="delete note" /></a></td>
        <td><a href="/edit/${note.id}"><img class="icon" src="/images/edit.png" alt="edit note" title="edit note" /></a></td>
    </tr>`;
}







module.exports = getList;







