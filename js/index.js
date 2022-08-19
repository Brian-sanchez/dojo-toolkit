/*
require(["dojo/_base/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(baseFx, on, dom) {
    var startButton = dom.byId("startButton"),
        reverseButton = dom.byId("reverseButton"),
        anim8target = dom.byId("anim8target");

        // Set up a couple of click handlers to run our animations
        on(startButton, "click", function(evt){
            baseFx.animateProperty({
                node: anim8target,
                properties: { borderWidth: 100 }
            }).play();
        });
        on(reverseButton, "click", function(evt){
            baseFx.animateProperty({
                node: anim8target,
                properties: { borderWidth: 1 }
            }).play();
        });
});*/

require(['dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dojo/dom', 'dojo/domReady!'],
function(lang, DataGrid, ItemFileWriteStore, dom){

/*set up data store*/
var data = {
  identifier: "id",
  items: []
};
var data_list = [
    {
        col2: "Monitor Led Aopen",
        col3: "Monitor Led Curvo 27\" Aopen 27hc5r P",
        col4: "56000",
    },
    {
        col2: "Monitor Led Aopen",
        col3: "Monitor Led Curvo 27\" Aopen 27hc5r P",
        col4: "56000",
    },
    {
        col2: "Monitor Led Aopen",
        col3: "Monitor Led Curvo 27\" Aopen 27hc5r P",
        col4: "56000",
    },
    {
        col2: "Monitor Led Aopen",
        col3: "Monitor Led Curvo 27\" Aopen 27hc5r P",
        col4: "56000"
    },
    {
        col2: "Monitor Led Aopen",
        col3: "Monitor Led Curvo 27\" Aopen 27hc5r P",
        col4: "56000"
    }
];

for(var i = 0, l = data_list.length; i < data_list.length; i++){
    data.items.push(lang.mixin({ id: i+1 }, data_list[i%l]));
}
var store = new ItemFileWriteStore({data: data});

/*set up layout*/
var layout = [[
  {'name': 'Column 1', field: 'id'},
  {'name': 'Column 2', field: 'col2'},
  {'name': 'Column 3', field: 'col3'},
  {'name': 'Column 4', field: 'col4'}
]];

/*create a new grid*/
var grid = new DataGrid({
    id: 'grid',
    store: store,
    structure: layout,
    rowSelector: '20px'});

    /*append the new grid to the div*/
    grid.placeAt("gridDiv");

    /*Call startup() to render the grid*/
    grid.startup();
});
		