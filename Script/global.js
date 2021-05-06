//tour specific
var currentTourName = "Peach vs. Daisy Tour";
var currentTourFileName = currentTourName.replace(/ /g, "");

//global
var currentCup = 0;
var isDataEntered = false;
var values;
var itemData;
var coursedata = {
    Courses: {}
}
var coursedataeng = {
    Courses: {}
}
var convertedData = {};
var coursenames;
var courseimages;
var disableCityValue = false;
var disableCharPanel = false; //unused
var resettingCourses = false;

var isMissingCalculated = false;
var startToggle = true;
var currentspecificitem = 25;
var currentitemtype = 0;
var currentitemrarity = 0;
var currentitemitem = 22;

var selectedcourses = [];

var removefrom2ndshelf = [];

let savedata = {
    rubiesSpent: 0,
    Pipes: {
    }
}
let settingsavedata = {
    Settings: {
        currentCup: 0,
        currentmode: 0,
        missingmode: 0,
        coursesmode: 0,
        topshelfmode: 0,
        currentspecificitem: 0,
        currentitemtype: 0,
        currentitemrarity: 0,
        currentitemitem: 0,
        isDataEntered: false,
        disableCityValue: false,
        isMultipleShelves: false,
        onlyOwnedItems: false,
        onlyOwnedItemsInv: false,
        missingIncludesCityCourses: true,
        selectedcourses: []
    }
}
var characterid = [];
var charrarity = [];
var charitem = [];
var kartid = [];
var kartrarity = [];
var kartitem = [];
var gliderid = [];
var gliderrarity = [];
var glideritem = [];

var inventorymodal = document.getElementById('inventorymodal');

let driverTable = [];
let machineTable = [];
let wingTable = [];

function generateArrays(){

    Object.keys(values).forEach(itemId => {
    if(itemId != 29 && itemId != 70057){
      if(itemId.toString().length < 5){
        driverTable.push(itemId);
      }
      if(itemId.toString().length == 5 && Math.round(itemId / 1000) == 30){
        wingTable.push(itemId);
      }
      if(itemId.toString().length == 5 && Math.round(itemId / 1000) == 70){
        machineTable.push(itemId);
      }
    }

    }); 

    let sortIdArray = [];

    driverTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        characterid.push(it.partId);
        charrarity.push(it.rarity.toString());
        charitem.push(it.item);
    });

    sortIdArray = [];
    machineTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        kartid.push(it.partId);
        kartrarity.push(it.rarity.toString());
        kartitem.push(it.item);
    });

    sortIdArray = [];
    wingTable.forEach((id, i) => {
        let anObject = {};
        anObject.sort = values[id].sortId;
        anObject.partId = id;
        anObject.rarity = values[id].rarityId + 1;
        anObject.item = values[id].itemTypeId;
        sortIdArray.push(anObject);
        //console.log(id);
    });
    sortIdArray.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
    sortIdArray.forEach(it => {
        gliderid.push(it.partId);
        gliderrarity.push(it.rarity.toString());
        glideritem.push(it.item);
    });

}

window.onclick = function(event) {
  if (event.target == inventorymodal) {
    inventorymodal.style.display = "none";
    document.getElementById('singleinv').innerHTML = "";
  }
}

function updatesavedata() {
    //generateCourseList();
    document.getElementById('json').innerHTML = JSON.stringify(savedata, null, 2);
}

function changedebugsave() {
    if (document.getElementById('changedebugsave').checked) {
        document.getElementById('debugsave').style.display = "block";
    } else {
        document.getElementById('debugsave').style.display = "none";
    }
}

function updateLocalSaveData(){
    localStorage.setItem("MKTPSaveData",JSON.stringify(savedata, null, 2));
}

function updateLocalSettingData(){
    localStorage.setItem("MKTPSettingData",JSON.stringify(settingsavedata, null, 2));
}

function deleteLocalSaveData(){
    localStorage.removeItem("MKTPSaveData");
    localStorage.removeItem("MKTPSettingData");
    alert('Deleted Save File. You must restart the program for this to take effect.')
}

function applyLocalSettings(){
    changecoursemode(settingsavedata.Settings.coursesmode);
    changecourseckg(settingsavedata.Settings.topshelfmode);
    if(settingsavedata.Settings.currentspecificitem != 0){
    specificchoicemade(settingsavedata.Settings.currentspecificitem,settingsavedata.Settings.currentitemtype,settingsavedata.Settings.currentitemrarity,settingsavedata.Settings.currentitemitem);
    }
    changemode(settingsavedata.Settings.currentCup);
    changeckg(settingsavedata.Settings.currentmode);
    changemissingckg(settingsavedata.Settings.missingmode);
    //disableData
    /*if (settingsavedata.Settings.isDataEntered) {
        isDataEntered = true;
    } else {
        isDataEntered = false;
        if(localStorage.getItem("MKTVSaveData") != null){
            document.getElementById('changeusedata').checked = true;
        }
    }*/
    //disableCityValue
    if (settingsavedata.Settings.disableCityValue) {
        disableCityValue = true;
        document.getElementById('changecityvalue').checked = true;
    } else {
        disableCityValue = false;
    }
    //isMultipleShelves
    if (settingsavedata.Settings.isMultipleShelves) {
        isMultipleShelves = true;
        document.getElementById('changemultiplepanelvalue').checked = true;
    } else {
        isMultipleShelves = false;
    }
    //onlyOwnedItems
    if (settingsavedata.Settings.onlyOwnedItems) {
        onlyOwnedItems = true;
        document.getElementById('changeowneditems').checked = true;
    } else {
        onlyOwnedItems = false;
    }
    //onlyOwnedItemsInv
    if (settingsavedata.Settings.onlyOwnedItemsInv) {
        onlyOwnedItemsInv = true;
        document.getElementById('changeowneditemsinv').checked = true;
    } else {
        onlyOwnedItemsInv = false;
    }
    //missingIncludesCityCourses
    if (settingsavedata.Settings.missingIncludesCityCourses) {
        missingIncludesCityCourses = true;
    } else {
        missingIncludesCityCourses = false;
        document.getElementById('changecitymissing').checked = true;
    }
    //useInvCol
    if (settingsavedata.Settings.useInvCol) {
        useInvCol = true;
        document.getElementById('changeuseinvcol').checked = true;
    } else {
        useInvCol = false;
    }
    changeinventorycol();
    //final
    selectedcourses = settingsavedata.Settings.selectedcourses;
    selectedCourses();
    missingCourses();
}

function downloadcoursejson(mode){
    generateCourseList();
    courseListMade = true;
    var data = "";
    switch(mode){
    case 0:
    data = JSON.stringify(coursedata, null, 2);
    break;
    case 1:
    data = JSON.stringify(coursedataeng, null, 2);
    break;
    case 2:
    data = JSON.stringify(values, null, 2);
    break;
    }
    var filename = "";
    switch(mode){
        case 0:
        filename = "MKTCoursesIDs" + currentTourFileName + ".json";
        break;
        case 1:
        filename = "MKTCoursesNames" + currentTourFileName + ".json";
        break;
        case 2:
        filename = "MKTValuesList" + currentTourFileName + ".json";
        break;
    }
    var type = "text";
    var a = document.createElement("a")
      , file = new Blob([data],{
        type: type
    });
    if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
