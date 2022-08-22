let grid, store, dataStore, danik;

function getData() {
  require(["dojo/request"], function (request) {
    request.get("../../clientes.json").then(function (data) {

      localStorage.setItem("customers" , data )
    });
  });
}



function deleteCustomer(item) {
  let arr = JSON.parse(localStorage.getItem("customers"));

  let newArr = arr.filter(contact => contact.id != item)

  let newArrJson = JSON.stringify(newArr);

  localStorage.setItem("customers", newArrJson);

  arr.forEach( function (datos) {
      if (item == datos.id) {
          store.remove(item);
          grid.render();
      }
  });
  
  grid.update();
  grid.render();
}

function editContact(item){
  console.log("edit contact: ",item);
}


require([
  "dojo/Stateful",
  "dojox/grid/DataGrid",
  "dojo/store/Memory",
  "dojo/data/ObjectStore",
  "dojo/request",
  "dojo/domReady!",
], function (
  Stateful,
   DataGrid,
  Memory,
  ObjectStore
) {


let data = JSON.parse(localStorage.getItem("customers")) ;

  store = new Memory({ data: data });
  dataStore = new ObjectStore({ objectStore: store });
  danik = new Stateful(data);

  function createGrid(dataStore) {
    grid = new DataGrid(
      {
        store: dataStore,
        query: { id: "*" },
       onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
          // console.log(inValue); // valor de la celda editada
          // console.log(inFieldIndex); // nombre del field
          // console.log(inRowIndex); // index del array del datagrid
          let newArr = JSON.stringify(data);
          //console.log(newArr);
          localStorage.setItem("customers", newArr);
        },
    
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
              }
            ],
          },
        ],
      },
      "grid"
    );

    return grid;
  }

  function getDelete(item) {
    return `<button onclick=deleteCustomer(${item}) id='myButton' class='btn'>Delete</button>`;
  }

  function getEditContact(item) {
    return `<button onclick=editContact(${item}) id='myButton' class='btn'>Edit</button>`;
  }
  
  dojo.ready(function () {
    grid = createGrid(dataStore);
    grid.startup();
  });
});
