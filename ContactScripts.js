function ContactLoad() {
    alert("Onload event");
}

function ContactSave() {
    alert("Save event");
}

function EmailOnChange() {
    alert("Onchange of email");
}

function DisplayTeste(executionContext) {
    var formContext = executionContext.getFormContext();
    var firstName = formContext.getAttribute("firstname").getValue();

    alert("Getting first name field: " + firstName);
}