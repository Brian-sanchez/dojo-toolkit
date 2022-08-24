let grid, grid2, store, dataStore, danik;
let generatedClients = false;
let generatedProducts = false;
let seBorro = false;
let click = false;
let click2 = false;



function mostrarData() {
    require(
        ["dojo/dom-style",
            "dojo/dom",
            "dojo/dom-construct",
            "dijit/MenuBar",
            "dijit/PopupMenuBarItem",
            "dijit/Menu",
            "dijit/MenuBarItem",
            "dijit/MenuItem",
            "dijit/DropDownMenu",
            "dojo/ready"],


        function (ready, dom,domConstruct, MenuBar, PopupMenuBarItem, Menu, MenuBarItem, MenuItem, DropDownMenu) {
            let arr = JSON.parse(localStorage.getItem("products"));
            let arr2 = JSON.parse(localStorage.getItem("customers"));

            // localStorage.setItem("deleted", JSON.stringify({"click": false, "click2": false}));

            let clicked = JSON.parse(localStorage.getItem("deleted"));

            if (arr.length < 32 && clicked.click === true) {
                console.log("es menor a 31")
                dom.byId("gridProducts").style.display = 'inline';
                showGridProducts();
            } else if (arr2.length < 12 && clicked.click2 === true) {
                showGridClients();
                dom.byId("gridClients").style.display="inline";
            }

            console.log(clicked)
        })
}

function menu() {
    require(
        ["dojo/dom-style",
            "dojo/dom",
            "dojo/dom-construct",
            "dijit/MenuBar",
            "dijit/PopupMenuBarItem",
            "dijit/Menu",
            "dijit/MenuBarItem",
            "dijit/MenuItem",
            "dijit/DropDownMenu",
            "dojo/ready"],


        function (ready, dom,domConstruct, MenuBar, PopupMenuBarItem, Menu, MenuBarItem, MenuItem, DropDownMenu) {

            //var cs = domStyle.getComputedStyle(dom.byId("menu"));
            //var w = cs.width, h = cs.height;
            //dom.byId("menu").innerHTML = "menu.backgroundColor: " + backgroundColor;
            //var backgroundColor = style.set("menu", "backgroundColor", "red");


            var pMenuBar = new MenuBar({},"menu");
            pMenuBar.addChild(new MenuBarItem({
                id: "user",
                label: "Users",
                onClick: function () {
                    // dom.byId("users").innerHTML = "Users";
                    dom.byId("users").style.display = 'inline';
                    dom.byId("products").style.display = 'none';

                    if(!generatedClients){
                        // domConstruct.destroy("grid");
                        showGridClients();
                        console.log("Se genero la gridClients");
                    }else dom.byId("gridClients").style.display="inline";
                    dom.byId("gridProducts").style.display = 'none';
                }
            }));
            pMenuBar.addChild(new MenuBarItem({
                id: "prod",
                label: "Productos",
                onClick: function () {
                    //dom.byId("products").innerHTML = "Productos";
                    dom.byId("products").style.display = 'inline';
                    dom.byId("users").style.display = 'none';

                    if(!generatedProducts){
                        // domConstruct.destroy("grid");
                        showGridProducts();
                        console.log("Se genero la gridProducts");
                    }else dom.byId("gridProducts").style.display="inline";
                    dom.byId("gridClients").style.display = 'none';
                }
            }));


            // pMenuBar.placeAt("menu");
            pMenuBar.startup();
        });
}


function deleteCustomer(item) {
    let arr = JSON.parse(localStorage.getItem("customers"));

    console.log("viejo: ", arr);
    let newArr = arr.filter(contact => contact.id != item)
    console.log("nuevo: ", newArr);

    let newArrJson = JSON.stringify(newArr);

    localStorage.setItem("customers", newArrJson);
    
    let click = {click: false, click2: true}
    localStorage.setItem("deleted", JSON.stringify(click));

    window.location.reload();
}

function deleteProducts(item) {
    let arr = JSON.parse(localStorage.getItem("products"));
    console.log(grid2)
    console.log("viejo: ", arr);
    let newArr = arr.filter(product => product.id != item)
    console.log("nuevo: ", newArr);

    let newArrJson = JSON.stringify(newArr);

    localStorage.setItem("products", newArrJson);
    /*
    arr.forEach(function (datos) {
        if (item == datos.id) {
            store.remove(item)
            store.save()
        }
    });
    */

    let click = {click: true, click2: false}
    localStorage.setItem("deleted", JSON.stringify(click));

    click2 = true;
    click = false;
    window.location.reload();
}

function getDataClients() {
    require(["dojo/request"], function (request) {
        request.get("../clientes.json").then(function (data) {
            localStorage.setItem("customers", data)
        });
    });
}

function getDataProducts() {
    require(["dojo/request"], function (request) {
      request.get("../products.json").then(function (data) {
        localStorage.setItem("products", data);
      });
    });
}

function showGridClients() {
    
    require([
        "dojo/dom",
        "dojo/dom-construct",
        "dojo/Stateful",

        "dojo/on",
        "dojo/_base/array",

        "dojox/grid/DataGrid",
        "dojo/store/Memory",
        "dojo/data/ObjectStore",
        "dojox/grid/EnhancedGrid",
        "dojo/request",
        "dojo/domReady!",
    ], function (
        dom,
        domConstruct,
        Stateful,
        on,
        arrayUtil,
        DataGrid,
        Memory,
        ObjectStore
    ) {
        // domConstruct.create("div",{id: "grid"},"users");
        dom.byId("gridClients").style.display="inline";

        let data = JSON.parse(localStorage.getItem("customers"));

        store = new Memory({ data: data });
        dataStore = new ObjectStore({ objectStore: store });
        danik = new Stateful(data);

        function createGrid(dataStore) {
            grid = new dojox.grid.EnhancedGrid(
                {
                    store: dataStore,
                    query: { id: "*" },

                    structure: [
                        {
                            noscroll: true,
                            defaultCell: { width: "100px", editable: true },
                            cells: [
                                { name: "Id", field: "id" },
                                { name: "First Name", field: "first" },
                                { name: "Last Name", field: "last" },
                                { name: "Phone", field: "phone" },
                                { name: "Email", field: "email", width: "160px" },
                                {
                                    name: "Action",
                                    field: "id",
                                    formatter: getDelete,
                                    width: "80px",
                                },
                            ],
                        },
                    ],
                },
                "gridClients"
            );
            generatedClients = true;
            return grid;
        }

        function getDelete(item) {
            return `<button onclick=deleteCustomer(${item}) id='myButton' class='btn'>Delete</button>`;
        }

        dojo.ready(function () {
            grid = createGrid(dataStore);
            grid.startup();
        });
    });
}

function showGridProducts() {
    
    require([
        "dojo/dom",
        "dojo/dom-construct",
        "dojo/Stateful",

        "dojo/on",
        "dojo/_base/array",

        "dojox/grid/DataGrid",
        "dojo/store/Memory",
        "dojo/data/ObjectStore",

        "dojo/request",
        "dojo/domReady!",
    ], function (
        dom,
        domConstruct,
        Stateful,
        on,
        arrayUtil,
        DataGrid,
        Memory,
        ObjectStore
    ) {
        let getLocalStorage = JSON.parse(localStorage.getItem("products"));
        dom.byId("gridProducts").style.display="inline";

        data = {
            items: getLocalStorage,
        };

        store = new Memory({ data: data });
        dataStore = new ObjectStore({ objectStore: store });
        danik = new Stateful(data);

        function createGrid(dataStore) {
            grid2 = new DataGrid(
                {
                    store: dataStore,
                    query: { id: "*" },
                    onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
                        let olaJson = JSON.stringify(getLocalStorage);
                
                        localStorage.setItem("products", olaJson);
                    },

                    structure: [
                        {
                            noscroll: true,
                            defaultCell: { width: "100px", editable: true },
                            cells: [
                                { name: "Id", field: "id" },
                                { name: "Name", field: "name" },
                                { name: "Description", field: "description" },
                                { name: "Category", field: "category"},
                                { name: "Price", field: "price"},
                                {
                                    name: "Action",
                                    field: "id",
                                    formatter: getDeleteProduct,
                                    width: "80px",
                                },
                            ],
                        },
                    ],
                },
                "gridProducts"
            );
            generatedProducts = true;
            return grid2;
        }

        function getDeleteProduct(item) {
            return `<button onclick=deleteProducts(${item}) id='myButton' class='btn'>Delete</button>`;
        }

        dojo.ready(function () {
            grid2 = createGrid(dataStore);
            grid2.startup();
        });
    });
}