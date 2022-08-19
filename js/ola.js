require(['dojo/_base/array', 'dojo/_base/lang', 'dojo/_base/event', 'dojo/on', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button', 'dojo/dom', 'dojo/parser', 'dojo/domReady!'],
  function(array, lang, event, on, DataGrid, ItemFileWriteStore, Button, dom, parser){
    parser.parse();
    /*set up data store*/
    var data = {
      identifier: 'id',
      items: []
    };
    var data_list = [
      { col1: 'normal', col2: false, col3: 'But are not followed by two hexadecimal', col4: 29.91},
      { col1: 'important', col2: false, col3: 'Because a % sign always indicates', col4: 9.33},
      { col1: 'important', col2: false, col3: 'Signs can be selectively', col4: 19.34}
    ];
    var rows = 20;
    for(var i = 0, l = data_list.length; i < rows; i++){
      data.items.push(lang.mixin({ id: i+1 }, data_list[i%l]));
    }
    var store = new ItemFileWriteStore({data: data});

    /*set up layout*/
    var layout = [[
      {'name': 'Column 1', 'field': 'id', 'width': '100px'},
      {'name': 'Column 2', 'field': 'col2', 'width': '100px'},
      {'name': 'Column 3', 'field': 'col3', 'width': '200px'},
              {'name': 'Column 4', 'field': 'col4', 'width': '150px'}
    ]];

    /*create a new grid*/
    grid = new DataGrid({
        id: 'grid',
        store: store,
        structure: layout,
        rowSelector: '20px'});

    /*append the new grid to the div*/
    grid.placeAt('gridDiv');

    /* attach an event handler */
    on(button1,'click',
    function(e){
        var items = grid.selection.getSelected();
        if(items.length) {
            /* Iterate through the list of selected items.
            The current item is available in the variable
            'selectedItem' within the following function: */
            array.forEach(items, function(selectedItem){
                if(selectedItem !== null){
                    /* Iterate through the list of attributes of each item.
                    The current attribute is available in the variable
                    'attribute' within the following function: */
                    array.forEach(grid.store.getAttributes(selectedItem), function(attribute){
                        /* Get the value of the current attribute:*/
                        var value = grid.store.getValues(selectedItem, attribute);
                        /* Now, you can do something with this attribute/value pair.
                        Our short example shows the attribute together
                        with the value in an alert box, but we are sure, that
                        you'll find a more ambitious usage in your own code:*/
                        alert('attribute: ' + attribute + ', value: ' + value);
                    }); /* end forEach */
                } /* end if */
            }); /* end forEach */
        } /* end if */
        event.stop(e);
    }
    );

    /*Call startup() to render the grid*/
    grid.startup();
});