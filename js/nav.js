require([
    "dojo/dom",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuBarItem",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dojo/domReady!"
], function (dom,MenuBar, PopupMenuBarItem, Menu,MenuBarItem, MenuItem, DropDownMenu) {
    var pMenuBar = new MenuBar({},"menu");

    pMenuBar.addChild(new MenuBarItem({
        id: "cli",
        label: "Clientes",
        onClick: function(){
            dom.byId("clientes").innerHTML = "Clientes";
            dom.byId("clientes").style.display='inline';
            dom.byId("productos").style.display='none';
        }
    }));
    pMenuBar.addChild(new MenuBarItem({
        id: "prod",
        label: "Productos",
        onClick: function(){
            dom.byId("productos").innerHTML = "<div id='grid'></div>";
            dom.byId("productos").style.display='inline';
            dom.byId("clientes").style.display='none';
        }
    }));

    // pMenuBar.placeAt("menu");
    pMenuBar.startup();

});