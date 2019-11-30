function getForm(notes, id) {

    console.log("form")
    console.log(notes)
    console.log(id)

    // prepare empty note
    let note = {
        id: '',
        firstname: '',
        lastname: '',
        office: '',
        worktime: ''

    };

    // define different header(s)
    let noteHeader = "Add new note";

    // check if note alredy exists and fill note object
    if (id) {
        note = notes.find(nte => nte.id == parseInt(id));

        console.log("find note")
        console.log(note)

        noteHeader = "Edit note";
    }

    // build form within javascript
    const form = `<!DOCTYPE html>
<html>
    <head>
        <title>${noteHeader}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles/style.css" />
    </head>
    <body>
        <h1>${noteHeader}</h1>
        <form action="/save" method="POST">
            <input type="hidden" id="id" name="id" value="${note.id}" />
            <div>
                <label for="note">firstname</label>
                <textarea type="text" id="firstname" name="firstname">${note.firstname}</textarea>
            </div>
            <div>
                <label for="lastname">lastname</label>
                <textarea type="text" id="lastname" name="lastname">${note.lastname}</textarea>
            </div>
            
             <div>
                <label for="office">office</label>
                <textarea type="text" id="office" name="office">${note.office}</textarea>
            </div>
            
             <div>
                <label for="worktime">worktime</label>
                <textarea type="text" id="worktime" name="worktime">${note.worktime}</textarea>
            </div>
            
            
            
            
            <button type="submit">save</button>
            
        </form>
    </body>
</html>`;
  return form;
}

module.exports = getForm;
