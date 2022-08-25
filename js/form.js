function formulario() {
    require([
        "dojo/dom",
        "dojo/parser",
        "dijit/form/Form",
        "dijit/form/Button",
        "dijit/form/ValidationTextBox",
        "dijit/form/DateTextBox",
        "dojox/validate",
        "dojox/validate/web",
        "dojo/domReady!"
    ], function (dom, parser, Form, Button, ValidationTextBox, DateTextBox, validate, web) {

        var consola = new Button({
            label: "Valores del formulario",
            type: "button",
            onClick: function () {
                console.log(dijit.byId("myForm").getValues());
            }
        }, "consola").startup();

        var submit = new Button({
            label: "Submit",
            type: "submit",
            onClick: function (event) {
                event.preventDefault();
                let clients = [];
                let client = { id: "", first: "", last: "", phone: "", email: "" };
                client.id = clients.length + 1;

                if (validate) {
                    client.first = dijit.byId("myForm").getValues().first;
                    client.last = dijit.byId("myForm").getValues().last;
                    client.phone = dijit.byId("myForm").getValues().phone;
                    client.email = dijit.byId("myForm").getValues().email;
                    clients = [...clients, client];
                    console.log(clients);
                    return confirm('Valid form, press OK to send');
                } else {
                    alert('The form contains invalid data or missing information!');
                    return false;
                }
                return true;
            }
        }, "submit").startup();

        var reset = new Button({
            label: "Reset",
            type: "reset",
            onClick: function () {
                return confirm('Press OK to reset widget values');
            }
        }, "reset").startup();
    });
}
























/*
var Form = new Button({
    label: "Add Client!",
    style: "margin-top: 60%",
    onClick: function () {
        window.location.href = "http://127.0.0.1:5500/html/form.html";
        console.log("Al Formulario")
        
    }
}, "progButtonNode").startup();*/