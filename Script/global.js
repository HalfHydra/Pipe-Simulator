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
        disableShopBGM: false,
        showOfficialPipes: true,
        showPreviousPipes: false,
        showCustomPipes: false,
        disableSingleResults: false,
        skipStarAnimation: false
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

let disableShopBGM = false;
let disableSingleResults = false;
let skipStarAnimation = false;

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
    if(settingsavedata.Settings.disableShopBGM){
        document.getElementById('changeDisableShopBGM').checked = true;
        disableShopBGM = true;
        //Shop.pause();
    }
    if(settingsavedata.Settings.disableSingleResults){
        document.getElementById('changeSingleResults').checked = true;
        disableSingleResults = true;
    }
    if(settingsavedata.Settings.skipStarAnimation){
        document.getElementById('changeSkipStar').checked = true;
        skipStarAnimation = true;
    }
    if(!settingsavedata.Settings.showOfficialPipes){
        document.getElementById('changeOfficialPipes').checked = true;
    }
    if(settingsavedata.Settings.showPreviousPipes){
        document.getElementById('changePreviousPipes').checked = true;
    }
    if(settingsavedata.Settings.showCustomPipes){
        document.getElementById('changeCustomPipes').checked = true;
    }
}