var grid, store, dataStore, danik;

function deleteCustomer(item){
  //console.log(event);
  //console.log("Id a borrar: " + item)
  let arr = store.data;

    arr.forEach( function (datos) {
      if (item == datos.id) {
        store.remove(item);
        grid.render();
        // console.log(lolo);
        return;
      }
    });
}

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
  "dojo/ready",
], function (
  dom,
  domConstruct,
  Stateful,
  on,
  arrayUtil,
  DataGrid,
  Memory,
  ObjectStore,
  request
) {
  var greetingNode = dom.byId("greeting");
  domConstruct.place("<i> Dojo!</i>", greetingNode);

  /*let button = dom.byId("button");
  on(button, "click", function () {
    let id = parseInt(prompt("Ingrese el Id a borrar"));

    let arr = store.data;

    arrayUtil.forEach(arr, function (datos) {
      if (id == datos.id) {
        store.remove(id);
        grid.render();
        // console.log(lolo);
        return;
      }
    });
  });*/

  data = {
    items: [
      {
        id: 1,
        first: "Augusto",
        last: "Ponce",
        phone: "11-2345-6789",
        email: "augusto_123@gmail.com",
      },
      {
        id: 2,
        first: "Bruno",
        last: "Hernandez",
        phone: "11-2525-6543",
        email: "bruno.567@gmail.com",
      },
      {
        id: 3,
        first: "Luciano",
        last: "Lopez",
        phone: "11-8584-7369",
        email: "lucian34_65@gmail.com",
      },
      {
        id: 4,
        first: "Pablo",
        last: "Morel",
        phone: "11-3452-0943",
        email: "pablo543@gmail.com",
      },
      {
        id: 5,
        first: "Sebastian",
        last: "Martinez",
        phone: "11-3375-5510",
        email: "seba9484@gmail.com",
      },
      {
        id: 6,
        first: "Juan",
        last: "Gomez",
        phone: "11-9273-0287",
        email: "juan_93483@gmail.com",
      },
      {
        id: 7,
        first: "Brian",
        last: "Gallardo",
        phone: "11-2742-7362",
        email: "brian1234@gmail.com",
      },
      {
        id: 8,
        first: "Cesar",
        last: "Riquelme",
        phone: "11-4382-8813",
        email: "cesar456@gmail.com",
      },
      {
        id: 9,
        first: "Maximiliano",
        last: "Alvarez",
        phone: "11-9283-0023",
        email: "maxi_5675@gmail.com",
      },
      {
        id: 10,
        first: "Oscar",
        last: "Ronaldo",
        phone: "11-9102-2832",
        email: "oscar97@gmail.com",
      },
      {
        id: 11,
        first: "Federico",
        last: "Messi",
        phone: "11-2813-3822",
        email: "fede_3453@gmail.com",
      },
    ],
  };
  

  store = new Memory({ data: data });
  dataStore = new ObjectStore({ objectStore: store });
  danik = new Stateful(data);

  function createGrid(dataStore) {
    grid = new DataGrid(
      {
        store: dataStore,
        query: { id: "*" },

        structure: [
          {
            noscroll: true,
            defaultCell: { width: "84px", editable: true },
            cells: [
              { name: "Id", field: "id", width: "30px" },
              { name: "First Name", field: "first" },
              { name: "Last Name", field: "last" },
              { name: "Phone", field: "phone" },
              { name: "Email", field: "email", width: "170px" },
              { name: "Action", field: "id", formatter: getDelete },
            ],
          },
        ],
      },
      "grid"
    );

    return grid;
  }

  function getDelete(item) {
    return `<button onclick=deleteCustomer(${item}) id='myButton'>Delete</button>`;
  }

  dojo.ready(function () {
    grid = createGrid(dataStore);
    grid.startup();
  });
});
