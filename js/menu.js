var dojoConfig = {
    async: true,
    baseUrl: '.',
    packages: [
        '../dojo-release-1.17.3/dojo',
        '../dojo-release-1.17.3/dijit',
        '../dojo-release-1.17.3/dojox',
        '/js'
    ]
};


require(

    [
     '/js/menu.js',
     'js/users.js',
     'js/products.js'
     


] , function () {

  

});

let grid, grid2, store, dataStore, danik;
let generatedClients = false;
let generatedProducts = false;
let seBorro = false;
let click = false;
let click2 = false;

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


        function (ready, dom, domConstruct, MenuBar, PopupMenuBarItem, Menu, MenuBarItem, MenuItem, DropDownMenu) {

            //var cs = domStyle.getComputedStyle(dom.byId("menu"));
            //var w = cs.width, h = cs.height;
            //dom.byId("menu").innerHTML = "menu.backgroundColor: " + backgroundColor;
            //var backgroundColor = style.set("menu", "backgroundColor", "red");


            var pMenuBar = new MenuBar({}, "menu");
            pMenuBar.addChild(new MenuBarItem({
                id: "user",
                label: "Users",
                onClick: function () {
                    // dom.byId("users").innerHTML = "Users";
                    dom.byId("users").style.display = 'inline';
                    dom.byId("products").style.display = 'none';

                    if (!generatedClients) {
                        // domConstruct.destroy("grid");
                        showGridClients();
                        console.log("Se genero la gridClients");
                    } else dom.byId("gridClients").style.display = "inline";
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

                    if (!generatedProducts) {
                        // domConstruct.destroy("grid");
                        showGridProducts();
                        console.log("Se genero la gridProducts");
                    } else dom.byId("gridProducts").style.display = "inline";
                    dom.byId("gridClients").style.display = 'none';
                }
            }));


            // pMenuBar.placeAt("menu");
            pMenuBar.startup();
        });
}

