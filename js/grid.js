function getData() {
    require(["dojo/request"], function (request) {
      request.get("../products.json").then(function (data) {
        localStorage.setItem("products", data);
      });
    });
  }
  
  function deleteProduct(item) {
    let arr = JSON.parse(localStorage.getItem("products"));
  
    let arrFilter = arr.filter((e) => {
      return e.id !== item;
    });
  
    let arrJson = JSON.stringify(arrFilter);
  
    localStorage.setItem("products", arrJson);
  
    arr.forEach(function (datos) {
      if (item == datos.id) {
        store.remove(item);
        grid.render();
      }
    });
  
    grid.update();
    grid.render();
  }
  
  var grid, store, dataStore, danik;
  
  require([
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/Stateful",
    "dojox/grid/DataGrid",
    "dojo/store/Memory",
    "dojo/data/ObjectStore",
    "dijit/form/DateTextBox",
    "dojo/on",
    "dojo/mouse",
    "dojo/domReady!",
    "dojo/store/JsonRest",
    "dojo/data/ItemFileWriteStore",
    "dojo/_base/lang",
    "dojox/grid/_Events",
    "dojox/grid/enhanced/plugins/Pagination",
    "dojox/grid/EnhancedGrid",
  ], function (
    dom,
    domConstruct,
    Stateful,
    DataGrid,
    Memory,
    ObjectStore,
    DateTextBox,
    on,
    event,
    Button,
    mouse,
    JsonRest,
    ItemFileWriteStore,
    _Events
  ) {
    getData()
    let getLocalStorage = JSON.parse(localStorage.getItem("products"));
    //localStorageGrid();
    data = {
      identifier: "products",
      items: getLocalStorage,
    };
  
    //store = new JsonRest({ target: "products" });
    store = new Memory({ data: data.items });
    dataStore = new ObjectStore({ objectStore: store });
    danik = new Stateful(data.items);

  
    grid = new dojox.grid.EnhancedGrid(
      {
        store: dataStore,
        brianlovepepe: ["1","2","3"],
        query: {id: new RegExp("1?")},
        onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
          console.log(inValue); // valor de la celda editada
          console.log(inFieldIndex); // nombre del field
          console.log(inRowIndex); // index del array del datagrid
  
          console.log(data.items[inRowIndex]);
          let olaJson = JSON.stringify(getLocalStorage);
  
          localStorage.setItem("products", olaJson);
        },
  
        /*
          -- Eventos del datagrid al momento de editarlo --
  
          onStartEdit: function(inCell, inRowIndex){
              Event fired when editing is started for a given grid cell
          },
  
          onApplyCellEdit: function(inValue, inRowIndex, inFieldIndex){
              Event fired when editing is applied for a given grid cell
          },
  
          onCancelEdit: function(inRowIndex){
              Event fired when editing is cancelled for a given grid cell
          },
  
          onApplyEdit: function(inRowIndex){
              Event fired when editing is applied for a given grid row
          }
          */
  
        structure: [
          {
            noscroll: false,
            defaultCell: { width: "120px", editable: true },
            cells: [
              { name: "ID", field: "id" },
              { name: "Nombre", field: "name" },
              { name: "Precio", field: "price" },
              { name: "Action", field: "id", formatter: getDelete },
            ],
          },
        ],
        plugins: {
            pagination: {
              pageSizes: [10, 25, 30, 50, 100, Infinity],
              description: true,	
              sizeSwitch: true,	
              pageStepper: true,	
              gotoButton: true,	
              maxPageStep: 10,	
              position: "bottom",	
              defaultPage: 2, 	
              defaultPageSize: 25
            }
          },
      },
      "grid"
    );
  
    var button2 = dom.byId("add");
  
    // Add action
    on(button2, "click", function (e) {
      let dataJson = JSON.parse(localStorage.getItem("products"));
  
      let ids = dataJson.map((e) => {
        return e.id;
      });
  
      let myNewItem = { id: Math.max(...ids) + 1, name: "Mediate", price: 20 };
  
      dataJson.push(myNewItem);
      let olaJson = JSON.stringify(dataJson);
      localStorage.setItem("products", olaJson);
  
      grid.update();
      grid.render();
  
      window.location.reload();
    });
  
    function getDelete(item) {
      return `<button onclick=deleteProduct(${item}) id='myButton'>Delete</button>`;
    }
  
    grid.startup();
  });