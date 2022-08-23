let grid, store, dataStore, danik;

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
  "dojo/domReady!"
], function (
  dom,
  domConstruct,
  Stateful,
  DataGrid,
  Memory,
  ObjectStore,
  on
) {

  let getLocalStorage = JSON.parse(localStorage.getItem("products"));

  data = {
    items: getLocalStorage,
  };

  store = new Memory({ data: data.items });
  dataStore = new ObjectStore({ objectStore: store });
  danik = new Stateful(data.items);

  grid = new DataGrid(
    {
      store: dataStore,
      query: {id: "*"},
      onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
        let olaJson = JSON.stringify(getLocalStorage);

        localStorage.setItem("products", olaJson);
      },

      structure: [
        {
          noscroll: false,
          defaultCell: { width: "140px", editable: true },
          cells: [
            { name: "ID", field: "id" },
            { name: "Name", field: "name" },
            { name: "Price", field: "price" },
            { name: "Action", field: "id", formatter: getDelete },
          ],
        },
      ],
    },
    "grid"
  );

  var button2 = dom.byId("add");

  // Add action example
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