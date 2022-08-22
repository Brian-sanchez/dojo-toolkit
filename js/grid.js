function localStorageGrid() {
    let products = [
        {
            id: 1,
            name: "Iphone",
            description: "Iphone Se 64gb Blanco",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202463",
            category: "Phones",
            price: 170000,
            created: "false"
        },
        {
            id: 2,
            name: "Motorola Edge 20 Pro",
            description: "Smartphone Motorola Edge 20 Pro 256/12gb Blanco",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/201576",
            category: "Phones",
            price: 119000,
            created: "false"
        },
        {
            id: 3,
            name: "Samsung Galaxy S21 Fe",
            description: "Samsung Galaxy S21 Fe 5g 128/6gb Verde",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209666",
            category: "Phones",
            price: 138000,
            created: "false"
        },
        {
            id: 4,
            name: "Samsung Galaxy S22",
            description: "Samsung Galaxy S22 Blanco 128/8gb",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202078",
            category: "Phones",
            price: 164000,
            created: "false"
        },
        {
            id: 5,
            name: "Moto G60",
            description: "Celular Libre Moto G60 Azul 128gb 6 5000 Mah",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/211429",
            category: "Phones",
            price: 52000,
            created: "false"
        },
        {
            id: 6,
            name: "Motorola Edge 20",
            description: "Smartphone Motorola Edge 20 Lite 128/6gb Verde",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/200845",
            category: "Phones",
            price: 69000,
            created: "false"
        },
        {
            id: 7,
            name: "Notebook Hp R7",
            description: "Notebook Hp R7 8gb/512gb 15fhd",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/205427",
            category: "Notebooks",
            price: 179000,
            created: "false"
        },
        {
            id: 8,
            name: "Notebook Hp Celeron N4020",
            description: "Notebook Hp Celeron N4020 4gb/500gb 14 Hd W10",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/215019",
            category: "Notebooks",
            price: 77000,
            created: "false"
        },
        {
            id: 9,
            name: "Notebook Hp Gaming R5",
            description: "Notebook Hp Gaming R5 8/256gb 15fhd",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/205426",
            category: "Notebooks",
            price: 159000,
            created: "false"
        },
        {
            id: 10,
            name: "Xbox Series S",
            description: "Consola Xbox Series S Microsoft 512 Gb Blanca",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/195012",
            category: "Video game console",
            price: 99000,
            created: "false"
        },
        {
            id: 11,
            name: "Nintendo Switch",
            description: "Nintendo Switch Neon 32gb",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/215009",
            category: "Video game console",
            price: 99000,
            created: "false"
        },
        {
            id: 12,
            name: "Playstation 5",
            description: "Consola Ps5 Sony Playstation Standart Cfi-1115a",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/203419",
            category: "Video game console",
            price: 179000,
            created: "false"
        },
        {
            id: 13,
            name: "Nes Retro",
            description: "Consola Nes Av Level Up Emuladora Retro 8 Bits",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/237322",
            category: "Video game console",
            price: 4400,
            created: "false"
        },
        {
            id: 14,
            name: "Tablet Lenovo J606f",
            description: "Tablet Lenovo J606f 2k P11 Plus 10 4/128",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/210118",
            category: "Tablets",
            price: 84000,
            created: "false"
        },
        {
            id: 15,
            name: "Tablet Samsung A7 Lite",
            description: "Tablet Samsung A7 G Lite 3/32gb Silver",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/204983",
            category: "Tablets",
            price: 35000,
            created: "false"
        },
        {
            id: 16,
            name: "Tablet X-View 10",
            description: "Tablet X-View 10 2/32gb Tungsten Azul",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/213216",
            category: "Tablets",
            price: 25000,
            created: "false"
        },
        {
            id: 17,
            name: "Tablet Tcl Tab10",
            description: "Tablet Tcl Tab10 Neo negro con Teclado Y Flip Cover",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/235887",
            category: "Tablets",
            price: 27000,
            created: "false"
        },
        {
            id: 18,
            name: "Smart Tv Noblex",
            description: "Smart Tv Noblex Led 32\" Hd Dk32x5000",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/217315",
            category: "TV",
            price: 38000,
            created: "false"
        },
        {
            id: 19,
            name: "Smart Tv Noblex",
            description: "Smart Tv Noblex Led 50\" 4k Bk Dk50x9500",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/245443",
            category: "TV",
            price: 89000,
            created: "false"
        },
        {
            id: 20,
            name: "Smart Tv Philips",
            description: "Smart Tv Philips 43pfd6825/77 Fhd 43\"",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/229022",
            category: "TV",
            price: 54000,
            created: "false"
        },
        {
            id: 21,
            name: "Apple Watch Nike",
            description: "Apple Watch Nike Se Gps 44mm Space Gre",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202472",
            category: "Smartwatches",
            price: 79000,
            created: "false"
        },
        {
            id: 22,
            name: "Smartwatch Samsung Galaxy",
            description: "Smartwatch Samsung Galaxy Watch 4 40mm Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209674",
            category: "Smartwatches",
            price: 40000,
            created: "false"
        },
        {
            id: 23,
            name: "Smartwatch Grow Home",
            description: "Smartwatch Grow Home Gr26 Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209639",
            category: "Smartwatches",
            price: 8000,
            created: "false"
        },
        {
            id: 24,
            name: "Smartwatch X-View Cronos",
            description: "Smartwatch X-View Cronos V8 Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/213215",
            category: "Smartwatches",
            price: 7500,
            created: "false"
        },
        {
            id: 25,
            name: "Apple Watch Nike Se",
            description: "Apple Watch Nike Se Gps 44mm Silver",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202471",
            category: "Smartwatches",
            price: 80700,
            created: "false"
        },
        {
            id: 26,
            name: "Pendrive Kingston 32gb",
            description: "Pendrive Kingston 32gb Usb Type C 3",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/207226",
            category: "USB",
            price: 1000,
            created: "false"
        },
        {
            id: 27,
            name: "Pendrive Kingston 64gb",
            description: "Pendrive Kingston Usb 64gb 3.2",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/201079",
            category: "USB",
            price: 1500,
            created: "false"
        },
        {
            id: 28,
            name: "Pendrive Kingston 128gb",
            description: "Pendrive Usb Kingston 128gb 3.2",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/221513",
            category: "USB",
            price: 3000,
            created: "false"
        },
        {
            id: 29,
            name: "Monitor Led Samsung",
            description: "Monitor Led 24\" Samsung Lf24t350fh",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/219716",
            category: "Monitors",
            price: 40000,
            created: "false"
        },
        {
            id: 30,
            name: "Monitor Led Aopen",
            description: "Monitor Led Curvo 27\" Aopen 27hc5r P",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214942",
            category: "Monitors",
            price: 56000,
            created: "false"
        },
        {
            id: 31,
            name: "Monitor Led Asus",
            description: "Monitor Led Gaming 27\" Asus Vg278qr",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214954",
            category: "Monitors",
            price: 76000,
            created: "false"
        },
        {
            id: 32,
            name: "Monitor Led Acer",
            description: "Monitor Led 23.6\" Acer Gaming Kg241q S",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214943",
            category: "Monitors",
            price: 60000,
            created: "false"
        }
    ];

    localStorage.setItem("products", JSON.stringify(products))
}

function deleteCustomer(item) {
    let arr = JSON.parse(localStorage.getItem("products"));

    let ola = arr.filter(e => {
        return e.id !== item
    })

    let olaJson = JSON.stringify(ola);

    localStorage.setItem("products", olaJson);

    arr.forEach( function (datos) {
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
  'dojo/on',
  "dojo/mouse",
  "dojo/domReady!",
  "dojo/store/JsonRest",
  'dojo/data/ItemFileWriteStore',
  'dojo/_base/lang',
  "dojox/grid/_Events"
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

    grid = new DataGrid(
      {
        store: dataStore,
        query: { id: "*" },
        onApplyCellEdit: function(inValue, inRowIndex, inFieldIndex){
            console.log(inValue); // valor de la celda editada
            console.log(inFieldIndex); // nombre del field
            console.log(inRowIndex) // index del array del datagrid
            
            console.log(data.items[inRowIndex])
           let olaJson = JSON.stringify(getLocalStorage);

           localStorage.setItem("products", olaJson);
        },

        /*
        -- Eventos del datagrid al momento de editarlo --

        onStartEdit: function(inCell, inRowIndex){
            // summary:
            //      Event fired when editing is started for a given grid cell
            // inCell: Object
            //      Cell object containing properties of the grid column.
            // inRowIndex: Integer
            //      Index of the grid row
        },

        onApplyCellEdit: function(inValue, inRowIndex, inFieldIndex){
            // summary:
            //      Event fired when editing is applied for a given grid cell
            // inValue: String
            //      Value from cell editor
            // inRowIndex: Integer
            //      Index of the grid row
            // inFieldIndex: Integer
            //      Index in the grid's data store
        },

        onCancelEdit: function(inRowIndex){
            // summary:
            //      Event fired when editing is cancelled for a given grid cell
            // inRowIndex: Integer
            //      Index of the grid row
        },

        onApplyEdit: function(inRowIndex){
            // summary:
            //      Event fired when editing is applied for a given grid row
            // inRowIndex: Integer
            //      Index of the grid row
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
      },
      "grid"
    );

    var button2 = dom.byId("add");
    var button1 = dom.byId("delete");
    var button3 = dom.byId("add2");

    // Add action
    on(button2, "click", function (e) {
      let dataJson = JSON.parse(localStorage.getItem("products"));

      let ids = dataJson.map(e => {
        return e.id;
      });

      let myNewItem = { id: Math.max(...ids) + 1, name: "Mediate", price: 20 };

      dataJson.push(myNewItem);
      let olaJson = JSON.stringify(dataJson);
      localStorage.setItem("products", olaJson);

      grid.update();
      grid.render();

      window.location.reload()
    });

    function getDelete(item) {
      return `<button onclick=deleteCustomer(${item}) id='myButton'>Delete</button>`;
    }

    console.log(grid);
    grid.startup();
});


/* //! Marcas de guerra

require([
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/Stateful",
  "dojox/grid/DataGrid",
  "dojo/store/Memory",
  "dojo/data/ObjectStore",
  "dijit/form/DateTextBox",
  'dojo/on',
  "dojo/mouse",
  "dojo/domReady!",
  "dojo/store/JsonRest",
  'dojo/data/ItemFileWriteStore',
  'dojo/_base/lang'
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
  ItemFileWriteStore
) {
    
  data = {
    identifier: "products",
    items: [
        {
            id: 1,
            name: "Iphone",
            description: "Iphone Se 64gb Blanco",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202463",
            category: "Phones",
            price: 170000,
            created: "false"
        },
        {
            id: 2,
            name: "Motorola Edge 20 Pro",
            description: "Smartphone Motorola Edge 20 Pro 256/12gb Blanco",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/201576",
            category: "Phones",
            price: 119000,
            created: "false"
        },
        {
            id: 3,
            name: "Samsung Galaxy S21 Fe",
            description: "Samsung Galaxy S21 Fe 5g 128/6gb Verde",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209666",
            category: "Phones",
            price: 138000,
            created: "false"
        },
        {
            id: 4,
            name: "Samsung Galaxy S22",
            description: "Samsung Galaxy S22 Blanco 128/8gb",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202078",
            category: "Phones",
            price: 164000,
            created: "false"
        },
        {
            id: 5,
            name: "Moto G60",
            description: "Celular Libre Moto G60 Azul 128gb 6 5000 Mah",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/211429",
            category: "Phones",
            price: 52000,
            created: "false"
        },
        {
            id: 6,
            name: "Motorola Edge 20",
            description: "Smartphone Motorola Edge 20 Lite 128/6gb Verde",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/200845",
            category: "Phones",
            price: 69000,
            created: "false"
        },
        {
            id: 7,
            name: "Notebook Hp R7",
            description: "Notebook Hp R7 8gb/512gb 15fhd",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/205427",
            category: "Notebooks",
            price: 179000,
            created: "false"
        },
        {
            id: 8,
            name: "Notebook Hp Celeron N4020",
            description: "Notebook Hp Celeron N4020 4gb/500gb 14 Hd W10",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/215019",
            category: "Notebooks",
            price: 77000,
            created: "false"
        },
        {
            id: 9,
            name: "Notebook Hp Gaming R5",
            description: "Notebook Hp Gaming R5 8/256gb 15fhd",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/205426",
            category: "Notebooks",
            price: 159000,
            created: "false"
        },
        {
            id: 10,
            name: "Xbox Series S",
            description: "Consola Xbox Series S Microsoft 512 Gb Blanca",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/195012",
            category: "Video game console",
            price: 99000,
            created: "false"
        },
        {
            id: 11,
            name: "Nintendo Switch",
            description: "Nintendo Switch Neon 32gb",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/215009",
            category: "Video game console",
            price: 99000,
            created: "false"
        },
        {
            id: 12,
            name: "Playstation 5",
            description: "Consola Ps5 Sony Playstation Standart Cfi-1115a",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/203419",
            category: "Video game console",
            price: 179000,
            created: "false"
        },
        {
            id: 13,
            name: "Nes Retro",
            description: "Consola Nes Av Level Up Emuladora Retro 8 Bits",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/237322",
            category: "Video game console",
            price: 4400,
            created: "false"
        },
        {
            id: 14,
            name: "Tablet Lenovo J606f",
            description: "Tablet Lenovo J606f 2k P11 Plus 10 4/128",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/210118",
            category: "Tablets",
            price: 84000,
            created: "false"
        },
        {
            id: 15,
            name: "Tablet Samsung A7 Lite",
            description: "Tablet Samsung A7 G Lite 3/32gb Silver",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/204983",
            category: "Tablets",
            price: 35000,
            created: "false"
        },
        {
            id: 16,
            name: "Tablet X-View 10",
            description: "Tablet X-View 10 2/32gb Tungsten Azul",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/213216",
            category: "Tablets",
            price: 25000,
            created: "false"
        },
        {
            id: 17,
            name: "Tablet Tcl Tab10",
            description: "Tablet Tcl Tab10 Neo negro con Teclado Y Flip Cover",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/235887",
            category: "Tablets",
            price: 27000,
            created: "false"
        },
        {
            id: 18,
            name: "Smart Tv Noblex",
            description: "Smart Tv Noblex Led 32\" Hd Dk32x5000",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/217315",
            category: "TV",
            price: 38000,
            created: "false"
        },
        {
            id: 19,
            name: "Smart Tv Noblex",
            description: "Smart Tv Noblex Led 50\" 4k Bk Dk50x9500",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/245443",
            category: "TV",
            price: 89000,
            created: "false"
        },
        {
            id: 20,
            name: "Smart Tv Philips",
            description: "Smart Tv Philips 43pfd6825/77 Fhd 43\"",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/229022",
            category: "TV",
            price: 54000,
            created: "false"
        },
        {
            id: 21,
            name: "Apple Watch Nike",
            description: "Apple Watch Nike Se Gps 44mm Space Gre",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202472",
            category: "Smartwatches",
            price: 79000,
            created: "false"
        },
        {
            id: 22,
            name: "Smartwatch Samsung Galaxy",
            description: "Smartwatch Samsung Galaxy Watch 4 40mm Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209674",
            category: "Smartwatches",
            price: 40000,
            created: "false"
        },
        {
            id: 23,
            name: "Smartwatch Grow Home",
            description: "Smartwatch Grow Home Gr26 Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/209639",
            category: "Smartwatches",
            price: 8000,
            created: "false"
        },
        {
            id: 24,
            name: "Smartwatch X-View Cronos",
            description: "Smartwatch X-View Cronos V8 Negro",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/213215",
            category: "Smartwatches",
            price: 7500,
            created: "false"
        },
        {
            id: 25,
            name: "Apple Watch Nike Se",
            description: "Apple Watch Nike Se Gps 44mm Silver",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/202471",
            category: "Smartwatches",
            price: 80700,
            created: "false"
        },
        {
            id: 26,
            name: "Pendrive Kingston 32gb",
            description: "Pendrive Kingston 32gb Usb Type C 3",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/207226",
            category: "USB",
            price: 1000,
            created: "false"
        },
        {
            id: 27,
            name: "Pendrive Kingston 64gb",
            description: "Pendrive Kingston Usb 64gb 3.2",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/201079",
            category: "USB",
            price: 1500,
            created: "false"
        },
        {
            id: 28,
            name: "Pendrive Kingston 128gb",
            description: "Pendrive Usb Kingston 128gb 3.2",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/221513",
            category: "USB",
            price: 3000,
            created: "false"
        },
        {
            id: 29,
            name: "Monitor Led Samsung",
            description: "Monitor Led 24\" Samsung Lf24t350fh",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/219716",
            category: "Monitors",
            price: 40000,
            created: "false"
        },
        {
            id: 30,
            name: "Monitor Led Aopen",
            description: "Monitor Led Curvo 27\" Aopen 27hc5r P",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214942",
            category: "Monitors",
            price: 56000,
            created: "false"
        },
        {
            id: 31,
            name: "Monitor Led Asus",
            description: "Monitor Led Gaming 27\" Asus Vg278qr",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214954",
            category: "Monitors",
            price: 76000,
            created: "false"
        },
        {
            id: 32,
            name: "Monitor Led Acer",
            description: "Monitor Led 23.6\" Acer Gaming Kg241q S",
            image: "https://masonlineprod.vtexassets.com/arquivos/ids/214943",
            category: "Monitors",
            price: 60000,
            created: "false"
        }
    ],
  };

  store = new Memory({ data: data.items });
  dataStore = new ObjectStore({ objectStore: store });
  danik = new Stateful(data.items);

  grid = new DataGrid(
    {
      store: dataStore,
      query: { id: "*" },

      structure: [
        {
          noscroll: false,
          defaultCell: { width: "190px", editable: true },
          cells: [
            { name: "ID", field: "id" },
            { name: "Nombre", field: "name" },
            { name: "Precio", field: "price" },
            { name: "Action", field: "id", formatter: getDelete }
          ],
        },
      ],
    },
    "grid"
  );



    var button2 = dom.byId("add");
    var button1 = dom.byId("delete");
    var button3 = dom.byId("add2");

    // Add prueba
    on(button3, "click", function(e) {
        try {
            store.newItem({id: itemsLenght + 1, name: "Mediate", price: 20});
        } catch (e) { 
                  //An item with the same identity already exists
                  console.log("oal")
               }

               grid.render();
    })


     // Add action
     on(button2,'click', function(e) {
         set the properties for the new item: 
        //var myNewItem = {id: 33, name: "Mediate", price: 20};
        //var myNewItem = {id: (++i), col1: "Mediate", col2: true, col3: 'Newly added values', col4: 8888};
        Insert the new item into the store:
        //data.items.push(myNewItem);

        // grid.destroy() // con esto puedes eliminar todo el datagrid
        // grid.update()
        let itemsLenght = data.items.length;

        let myNewItem = {id: itemsLenght + 1, name: "Mediate", price: 20}
        data.items.push(myNewItem);

        store.newItem(myNewItem);
        store.save();
        grid.setStore(store);
        grid.update();
        grid._refresh();
        console.log(data.items)
        grid.update();
        grid.render();
     }
     );


     // Delete action
     on(button1, 'click', function(e) {
      // var newStore = new dojo.data.ItemFileReadStore({data: { items: [{id: 5, name: "ola", price: 32}]}});
      let id = parseInt(prompt("Ingrese el ID a borrar"));

      let idItems = data.items.filter(e => id === e.id);

      try {
        store.remove(idItems[0].id);
        grid.render();
      } catch {
        alert("ese id no existe")
      }
     }
     );

  function onChange () {
    var newStore = new dojo.data.ItemFileReadStore({data: {  identifier: "",  items: []}});
    var grid = dijit.byId("grid");
    grid.set('structure',newLayout); 
  }


  var newStore = new dojo.data.ItemFileReadStore({data: {  identifier: "",  items: []}});
  var grid = dijit.byId("grid");
  grid.setStore(newStore);


  function getDelete(item) {
    return `<button onclick=deleteCustomer(${item}) id='myButton'>Delete</button>`;
  }
  
  console.log(grid)
  grid.startup();
});
*/