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


function getDataProducts() {
    require(["dojo/request"], function (request) {
      request.get("../products.json").then(function (data) {
        localStorage.setItem("products", data);
      });
    });
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


function getDataDeleted() {
    localStorage.setItem("deleted", JSON.stringify({"click": false, "click2": false}));
}

if (localStorage.getItem("customers") == null && localStorage.getItem("products") == null && localStorage.getItem("deleted") == null){
   console.log("cargue los datos xq no habia nada");
   getDataClients(); 
   getDataProducts();
   getDataDeleted();
   console.log(localStorage.getItem("customers"))
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