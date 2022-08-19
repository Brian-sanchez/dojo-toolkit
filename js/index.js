var grid, store, dataStore, danik, calendar;

require([
  'dojo/dom',
  'dojo/dom-construct',
  'dojo/Stateful',
  
  'dojox/grid/DataGrid',
  'dojo/store/Memory',    
  'dojo/data/ObjectStore',
  'dijit/form/DateTextBox',
  "dojo/request"
], 
function (dom, domConstruct, Stateful, DataGrid, Memory, ObjectStore, DateTextBox,request) {    
  var greetingNode = dom.byId('greeting');
  domConstruct.place('<i> Dojo!</i>', greetingNode);

  var node = domConstruct.create( "button" ,  {  innerHTML :  "Eliminar"  }); 
node.innerText = "Eliminar"
  console.log(node);

//   request.get("../clientes.json").then(data =>{   
//     var info= JSON.parse(data)
//    console.log(info);
//     data = info;
//   })
  
  data = {
    "items":[
        {"first":"Augusto","last":"Ponce","phone":"11-2345-6789","email":"augusto_123@gmail.com"},
        {"first":"Bruno","last":"Hernandez","phone":"11-2525-6543","email":"bruno.567@gmail.com"},
        {"first":"Luciano","last":"Lopez","phone":"11-8584-7369","email":"lucian34_65@gmail.com"},
        {"first":"Pablo","last":"Morel","phone":"11-3452-0943","email":"pablo543@gmail.com"},
        {"first":"Sebastian","last":"Martinez","phone":"11-3375-5510","email":"seba9484@gmail.com"},
        {"first":"Juan","last":"Gomez","phone":"11-9273-0287","email":"juan_93483@gmail.com"},
        {"first":"Brian","last":"Gallardo","phone":"11-2742-7362","email":"brian1234@gmail.com"},
        {"first":"Cesar","last":"Riquelme","phone":"11-4382-8813","email":"cesar456@gmail.com"},
        {"first":"Maximiliano","last":"Alvarez","phone":"11-9283-0023","email":"maxi_5675@gmail.com"},
        {"first":"Oscar","last":"Ronaldo","phone":"11-9102-2832","email":"oscar97@gmail.com"},
        {"first":"Federico","last":"Messi","phone":"11-2813-3822","email":"fede_3453@gmail.com"}
    ]
  }
  
  store = new Memory({ data: data });
	dataStore = new ObjectStore({ objectStore: store });
  danik = new Stateful(data);
	  
  grid = new DataGrid({
						store: dataStore,
						query: { id: "*" },
   
						structure: [
							{                
								noscroll: true,
								defaultCell: { width: "84px", editable:true },
								cells: [	
									{ name: "First Name", field: "first" },
									{ name: "Last Name", field: "last" },
									{ name: "Phone", field: "phone" },
									{ name: "Email", field: "email" },

								]
							}
						]
					}, "grid");
  
  grid.startup();
  
  calendar = new DateTextBox({
    label: 'label'
  },"calendar");
  calendar.startup();
  
});

