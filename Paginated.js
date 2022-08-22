dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dijit.form.Button");

var storeData = { identifier: 'name',
  items: [
    { name: 'Adobo', aisle: 'Mexican', price: 3.01 },
    { name: 'Balsamic vinegar', aisle: 'Condiments', price: 4.01 },
    { name: 'Basil', aisle: 'Spices', price: 3.59  },
    { name: 'Bay leaf', aisle: 'Spices',  price: 2.01 },
    { name: 'Beef Bouillon Granules', aisle: 'Soup',  price: 5.01 },
    { name: 'Vinegar', aisle: 'Condiments',  price: 1.99  },
    { name: 'White cooking wine', aisle: 'Condiments',  price: 2.01 },
    { name: 'Worcestershire Sauce', aisle: 'Condiments',  price: 3.99 },
    { name: 'pepper', aisle: 'Spices',  price: 1.01  }
  ]};

function init(){

    // These are some lage controls used to know when to disable forward/previous buttons.
    var totalItems = 0;   // How many total items should we expect.
    var request = null;   // Our request object we're using to hold the positions and the callbacks.
    var currentStart = 0; // Current index into the pages.
    currentCount = 2;     // Current size of the page.

    // Callback to perform an action when the data items are starting to be returned:
    function clearOldList(size, request){
      var list = dojo.byId("list");
      if(list){
        while(list.firstChild){
          list.removeChild(list.firstChild);
        }
      }
      // Save off the total size. We need it to determine when to ignore the buttons.
      totalItems = size;
    }

    // Callback for processing a returned list of items.
    function gotItems(items, request){
      // Save off the current page info being displayed.
      currentStart = request.start;
      currentCount = request.count;
      var list = dojo.byId("list");
      if(list){
        var i;
        for(i = 0; i < items.length; i++){
          var item = items[i];
          list.appendChild(document.createTextNode(foodStore.getValue(item, "name")));
          list.appendChild(document.createElement("br"));
        }
      }
    }

    // Callback for if the lookup fails.
    function fetchFailed(error, request){
      alert("lookup failed.");
    }

    // Button event to page forward.
    function nextPage(){
      // If we haven't hit the end of the pages yet, allow for requesting another.
      if((currentStart + currentCount) < totalItems ){
        request.start += currentCount;
        request = foodStore.fetch(request);
      }
    }

    // Button event to page back;
    function previousPage(){
      // If we haven't hit the beginning of the pages yet, allow for another shift backwards.
      if(currentStart > 0){
        request.start -= currentCount;
        request = foodStore.fetch(request);
      }
    }

    // Fetch the data.
    request = foodStore.fetch({onBegin: clearOldList, onComplete: gotItems, onError: fetchFailed, start: currentStart, count: currentCount });

    // Link the click event of the button to driving the fetch.
    dojo.connect(forward, "onClick", nextPage);
    dojo.connect(back, "onClick", previousPage);
 }
 // Set the init function to run when dojo loading and page parsing has completed.
 dojo.ready(init);