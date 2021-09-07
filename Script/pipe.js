//actualPipeSimulator

var pipeData = {};

var newsData = {};

var pipeGroups = {};

let finalToggle = false;

let scriptVersion = "2.0.0";

//let currentPipeId;

function generateNav(location){
    var sticky = document.createElement('div');
    sticky.id = `menudiv`
    sticky.className = 'menudiv';
    document.getElementById(location).appendChild(sticky);

    var menubuttondiv = document.createElement('ul');
    menubuttondiv.id = `menubuttondiv`
    menubuttondiv.className = 'menubuttondiv';
    sticky.appendChild(menubuttondiv);

    var menubuttonpipe1li = document.createElement('li');
    menubuttondiv.appendChild(menubuttonpipe1li);

    var menubuttonpipe1 = document.createElement('img');
    menubuttonpipe1.id = `menubuttonpipe1_${location}`
    menubuttonpipe1.className = 'menubuttonpipe';
    menubuttonpipe1.src = "./Images/UI/Icon/MenuNews00.png";
    menubuttonpipe1.addEventListener('click', function () {
        toggleMenu(0);
        generateNews();
    });
    menubuttonpipe1li.appendChild(menubuttonpipe1);

    var menubuttonpipe2li = document.createElement('li');
    menubuttondiv.appendChild(menubuttonpipe2li);

    var menubuttonpipe2 = document.createElement('img');
    menubuttonpipe2.id = `menubuttonpipe2_${location}`
    menubuttonpipe2.className = 'menubuttonpipe';
    menubuttonpipe2.src = "./Images/UI/Icon/Manual.png";
    menubuttonpipe2.addEventListener('click', function () {
        toggleMenu(1);
        generateSelect();
    });
    menubuttonpipe2li.appendChild(menubuttonpipe2);

    var menubuttonpipe3li = document.createElement('li');
    menubuttondiv.appendChild(menubuttonpipe3li);

    var menubuttonpipe3 = document.createElement('img');
    menubuttonpipe3.id = `menubuttonpipe3_${location}`
    menubuttonpipe3.className = 'menubuttonpipe';
    menubuttonpipe3.src = "./Images/UI/Icon/Pipe.png";
    menubuttonpipe3.addEventListener('click', function () {
        toggleMenu(2);
        generatePipes();
    });
    menubuttonpipe3li.appendChild(menubuttonpipe3);

    var menubuttonpipe4li = document.createElement('li');
    menubuttondiv.appendChild(menubuttonpipe4li);

    var menubuttonpipe4 = document.createElement('img');
    menubuttonpipe4.id = `menubuttonpipe4_${location}`
    menubuttonpipe4.className = 'menubuttonpipe';
    menubuttonpipe4.src = "./Images/UI/Icon/Inventory.png";
    menubuttonpipe4.addEventListener('click', function () {
        toggleMenu(3);
        generateInventory();
    });
    menubuttonpipe4li.appendChild(menubuttonpipe4);

    var menubuttonpipe5li = document.createElement('li');
    menubuttondiv.appendChild(menubuttonpipe5li);

    var menubuttonpipe5 = document.createElement('img');
    menubuttonpipe5.id = `menubuttonpipe5_${location}`
    menubuttonpipe5.className = 'menubuttonpipe';
    menubuttonpipe5.src = "./Images/UI/Icon/Setting.png";
    menubuttonpipe5.addEventListener('click', function () {
        toggleSettings(1);
    });
    menubuttonpipe5li.appendChild(menubuttonpipe5);

    let rubiesCount = document.createElement('div');
    rubiesCount.id = "rubiesCountDiv";
    rubiesCount.className = 'rubiesCountDiv';
    sticky.appendChild(rubiesCount);

    let rubiesCountImg = document.createElement('img');
    rubiesCountImg.id = "rubiesCountImg";
    rubiesCountImg.src = "./Images/Pipe/Banner/Spent.png";
    rubiesCountImg.className = 'rubiesCountImg';
    rubiesCount.appendChild(rubiesCountImg);

    let rubiesCountTxt = document.createElement('p');
    rubiesCountTxt.id = "rubiesCountTxt";
    rubiesCountTxt.className = 'rubiesCountTxt';
    rubiesCountTxt.innerHTML = `9999`;
    rubiesCount.appendChild(rubiesCountTxt);
    updateRubiesCount();

    let tourBadgeImg = document.createElement('img');
    tourBadgeImg.id = "tourBadgeImg";
    tourBadgeImg.src = `${newsData.CurrentBadge}`;
    tourBadgeImg.className = 'tourBadgeImg';
    sticky.appendChild(tourBadgeImg);
}

function generatePipes() {
    document.getElementById('pickingStage').innerHTML = "";

    generateNav('pickingStage');
    activebutone(3, `pickingStage`);

    let officialbannerdiv = document.createElement('div');
    officialbannerdiv.id = `officialBannerDiv`;

    var titletxt = document.createElement('p');
    titletxt.id = `titletxtop`;
    titletxt.className = 'titleText';
    titletxt.innerHTML = `Official Pipes`;
    officialbannerdiv.appendChild(titletxt);

    if (!document.getElementById('changeOfficialPipes').checked) {
        officialbannerdiv.style.display = `none`;
    }
    //officialbannerdiv.className = `pipebanner-content`;
    document.getElementById('pickingStage').appendChild(officialbannerdiv);

    let previousbannerdiv = document.createElement('div');
    previousbannerdiv.id = `previousBannerDiv`;
    /*if (!document.getElementById('changePreviousPipes').checked) {
        previousbannerdiv.style.display = `none`;
    }*/

    titletxt = document.createElement('p');
    titletxt.id = `titletxt`
    titletxt.className = 'titleText';
    titletxt.innerHTML = `Previous Pipes`;
    //previousbannerdiv.appendChild(titletxt);

    document.getElementById('pickingStage').appendChild(previousbannerdiv);

    let custombannerdiv = document.createElement('div');
    custombannerdiv.id = `customBannerDiv`;
    if (!document.getElementById('changeCustomPipes').checked) {
        custombannerdiv.style.display = `none`;
    }

    titletxt = document.createElement('p');
    titletxt.id = `titletxtcp`
    titletxt.className = 'titleText';
    titletxt.innerHTML = `Custom Pipes`;
    custombannerdiv.appendChild(titletxt);
    document.getElementById('pickingStage').appendChild(custombannerdiv);

    let isPipesRendered = false;
    Object.keys(pipeData.Pipes).forEach((t, i) => {
        if(selectToggleOption == 1 && selectedGroups.includes(t.substring(0, t.indexOf("_"))) == false && t.indexOf("_") != -1){
            return;
        }
        if(t.indexOf("_") != -1){
            isPipesRendered = true;
        }
        if(t.substring(t.indexOf("_")) == "_1"){
            titletxt = document.createElement('p');
            titletxt.id = `titletxt`;
            titletxt.className = 'subTitleText';
            titletxt.innerHTML = `${pipeGroups.Groups[t.substring(0, t.indexOf("_"))].Name}`;
            document.getElementById('officialBannerDiv').appendChild(titletxt);
        }

        let bannerdiv = document.createElement('div');
        bannerdiv.id = `banner_${t}`;
        bannerdiv.className = `pipebanner-content`;

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanelpipe';
        bannerdiv.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = pipeData.Pipes[t].Name;
        toptext.className = 'toptextpipe';
        bannerdiv.appendChild(toptext);

        var banner = document.createElement('img');
        banner.src = `https://halfhydra.github.io/MarioKartTourValues${pipeData.Pipes[t].Icon.substring(1, pipeData.Pipes[t].Icon.length)}`;
        banner.className = 'bannerpipe';
        banner.addEventListener("click", updateCounter, false);
        var count = 0;
        function updateCounter() {
            count++;
            if (count % 5 == 0) {
                if (confirm(`Do you want to pull the entire ${pipeData.Pipes[t].Name}?`)) {
                    if (savedata.Pipes[t] != null) {
                        validatePull(t, savedata.Pipes[t].itemCount);
                    } else {
                        validatePull(t, pipeData.Pipes[t].InitialAmount);
                    }
                } else {
                    
                }
            }
        }
        bannerdiv.appendChild(banner);

        var fire1 = document.createElement('img');
        fire1.src = "./Images/Pipe/Banner/Fire1.png";
        fire1.className = 'fire1pipe';
        fire1.addEventListener('click', function () {
            validatePull(t, 1);
        });
        bannerdiv.appendChild(fire1);

        var fire10 = document.createElement('img');
        fire10.src = "./Images/Pipe/Banner/Fire10.png";
        fire10.className = 'fire1pipe';
        fire10.addEventListener('click', function () {
            validatePull(t, 10);
        });
        bannerdiv.appendChild(fire10);

        var pipetxt = document.createElement('p');
        pipetxt.id = `remaining_${t}`
        pipetxt.className = 'pipetxt';
        if (savedata.Pipes[t] != null) {
            pipetxt.innerHTML = `Remaining: ${savedata.Pipes[t].itemCount} / ${pipeData.Pipes[t].InitialAmount}`;
        } else {
            pipetxt.innerHTML = `Remaining: ${pipeData.Pipes[t].InitialAmount} / ${pipeData.Pipes[t].InitialAmount}`;
        }
        bannerdiv.appendChild(pipetxt);

        switch (pipeData.Pipes[t].Type) {
            case "Official":
                document.getElementById('officialBannerDiv').appendChild(bannerdiv);
                break;
            case "Previous":
                document.getElementById('previousBannerDiv').appendChild(bannerdiv);
                break;
            case "Custom":
                document.getElementById('customBannerDiv').appendChild(bannerdiv);
                break;
        }

        var separatetxt = document.createElement('p');
        separatetxt.id = `separater_${t}`
        separatetxt.className = 'pipeseptxt';
        separatetxt.innerHTML = `.........................................`;
        bannerdiv.appendChild(separatetxt);

        var detailstxt = document.createElement('p');
        detailstxt.id = `detailstxt_${t}`
        detailstxt.className = 'pipedettxt';
        detailstxt.innerHTML = `Details`;
        detailstxt.style.textDecoration = `underline`;
        detailstxt.addEventListener('click', function () {
            generateDetails(t);
        });
        bannerdiv.appendChild(detailstxt);

        var resettxt = document.createElement('p');
        resettxt.id = `detailstxt_${t}`
        resettxt.className = 'piperesettxt';
        resettxt.innerHTML = `Reset`;
        resettxt.style.textDecoration = `underline`;
        resettxt.addEventListener('click', function () {
            resetPipe(t);
        });
        bannerdiv.appendChild(resettxt);


    }
    );

    if(isPipesRendered == false){
            var emptytxt = document.createElement('p');
            emptytxt.id = `emptytxt`;
            emptytxt.className = 'subTitleText';
            emptytxt.innerHTML = `You don't have any pipes selected to display! Check the tour selector tab or settings.`;
            document.getElementById('officialBannerDiv').appendChild(emptytxt);
    }

    let settingBtn = document.createElement('img');
    settingBtn.id = "settingBtnPipe";
    settingBtn.src = "./Images/UI/Icon/MenuMenu00.png";
    settingBtn.className = 'settingBtnPipe';
    settingBtn.addEventListener('click', function () {
        toggleSettings(1);
    });
    document.getElementById('pickingStage').appendChild(settingBtn);

    //document.getElementById('pickingStage').appendChild(rubiesCount);
    updateRubiesCount();
    if (!disableShopBGM) {
        Shop.play();
    }

}

function generateNews(){
    document.getElementById("newsStage").innerHTML = "";
    readTextFile("https://halfhydra.github.io/MarioKartTourValues/Pipe/newsData.json", 6);
    generateNav("newsStage");
    activebutone(1,`newsStage`);

    Object.keys(newsData.News).forEach((t, i) => {
        let newsdiv = document.createElement('div');
        newsdiv.id = `newsdiv_${t}`
        newsdiv.className = `newsdiv`;
        document.getElementById('newsStage').appendChild(newsdiv);

        let newsheader = document.createElement('img');
        newsheader.id = `newsheader_${t}`
        newsheader.className = `newsheader`;
        switch(`${newsData.News[t].Type}`){
            case "Welcome":
                newsheader.src = `./Images/Pipe/News/Welcome.png`;
                break;
            case "Important":
                newsheader.src = `./Images/Pipe/News/Important.png`;
                break;
            case "Event":
                newsheader.src = `./Images/Pipe/News/Event.png`;
                break;
            case "Tour":
                newsheader.src = `./Images/Pipe/News/Tour.png`;
                break;
            case "New":
                newsheader.src = `./Images/Pipe/News/New.png`;
                break;
            case "Campaign":
                newsheader.src = `./Images/Pipe/News/Campaign.png`;
                break;
        }
        newsdiv.appendChild(newsheader);

        let newsdate = document.createElement('p');
        newsdate.id = `newsdate_${t}`
        newsdate.className = `newsdate`;
        if(!savedata.seenNews.includes(t)){
            newsdate.innerHTML = `NEW! ${newsData.News[t].Date}`;
            newsdate.style.color = "red";
        } else {
            newsdate.innerHTML = `${newsData.News[t].Date}`;
        }
        newsdiv.appendChild(newsdate);

        let newsbanner = document.createElement('img');
        newsbanner.id = `newsbanner_${t}`
        newsbanner.className = `newsbanner`;
        newsbanner.src = `${newsData.News[t].Icon}`;
        newsbanner.addEventListener('click', function () {
            generateNewsDetails(t);
        });
        newsdiv.appendChild(newsbanner);

        let newsname = document.createElement('p');
        newsname.id = `newsname_${t}`
        newsname.className = `newsname`;
        newsname.innerHTML = `${newsData.News[t].Name}`;
        newsdiv.appendChild(newsname);

        //https://halfhydra.github.io/MarioKartTourValues/Pipe/pipeData.json
    });
}

function generateNewsDetails(newsId){
    Swipe.play();
    document.getElementById("newsStage").style.display = "none";
    document.getElementById("newsDetailsStage").style.display = "block";
    document.getElementById("newsDetailsStage").innerHTML = "";

    if(!seenNews.includes(newsId) && firstLaunch == false){
        pushSeenNews(newsId);
        updateLocalSaveData();
        document.getElementById(`newsdate_${newsId}`).style.color = "gray";
        document.getElementById(`newsdate_${newsId}`).innerHTML = `${newsData.News[newsId].Date}`;
    }

    var titletxt = document.createElement('p');
    titletxt.id = `titletxt`
    titletxt.className = 'titleText';
    titletxt.innerHTML = `${newsData.News[newsId].Name}`;
    document.getElementById('newsDetailsStage').appendChild(titletxt);

    var xbtndetails = document.createElement('img');
    xbtndetails.className = 'settingBtnPipe';
    xbtndetails.src = `./Images/UI/xbtn.png`;
    xbtndetails.addEventListener('click', function () {
        returnToNews(newsId);
    });
    document.getElementById('newsDetailsStage').appendChild(xbtndetails);

    let bannerimg = document.createElement('img');
    bannerimg.src = `${newsData.News[newsId].Icon}`;
    bannerimg.className = `bannerimg`;
    document.getElementById('newsDetailsStage').appendChild(bannerimg);

    document.getElementById('newsDetailsStage').appendChild(generateSectionBar(`Notes`));
    let spotlightnotetxt = document.createElement('p');
        spotlightnotetxt.innerHTML = newsData.News[newsId].Message;
        spotlightnotetxt.className = `spotlightnotetxt`;
        document.getElementById('newsDetailsStage').appendChild(spotlightnotetxt);

}

function generateSelect(){
    document.getElementById("selectStage").innerHTML = "";
    readTextFile("https://halfhydra.github.io/MarioKartTourValues/Pipe/pipeGroups.json", 7);
    generateNav("selectStage");
    activebutone(2,`selectStage`);

    let selectoptiondiv = document.createElement('div');
    selectoptiondiv.id = `selectoptiondiv`
    selectoptiondiv.className = `selectoptiondiv`;
    document.getElementById('selectStage').appendChild(selectoptiondiv);

        let selectoption1 = document.createElement('div');
        selectoption1.id = `selecticondiv_1`
        selectoption1.className = `selecticondivoption`;
        (selectToggleOption == 0) ? selectoption1.style.backgroundColor = 'green' : selectoption1.style.backgroundColor = 'transparent';
        selectoption1.addEventListener('click', function () {
            changeSelectOption(1);
        });
        selectoptiondiv.appendChild(selectoption1);

        let selecticonoption1 = document.createElement('img');
        selecticonoption1.id = `selecticon_1`
        selecticonoption1.className = `selecticonoption`;
        selecticonoption1.src = `./Images/UI/Icon/Tour.png`;
        selectoption1.appendChild(selecticonoption1);

        let selectnameoption1 = document.createElement('p');
        selectnameoption1.id = `selectname_1`
        selectnameoption1.className = `selectnameoption`;
        selectnameoption1.innerHTML = `All Tours Pipes`;
        selectoption1.appendChild(selectnameoption1);

        let selectoption2 = document.createElement('div');
        selectoption2.id = `selecticondiv_2`
        selectoption2.className = `selecticondivoption`;
        (selectToggleOption == 1) ? selectoption2.style.backgroundColor = 'green' : selectoption2.style.backgroundColor = 'transparent';
        selectoption2.addEventListener('click', function () {
            changeSelectOption(2);
        });
        selectoptiondiv.appendChild(selectoption2);

        let selecticonoption2 = document.createElement('img');
        selecticonoption2.id = `selecticon_2`
        selecticonoption2.className = `selecticonoption`;
        selecticonoption2.src = `./Images/UI/Icon/InfoLap01.png`;
        selectoption2.appendChild(selecticonoption2);

        let selectnameoption2 = document.createElement('p');
        selectnameoption2.id = `selectname_2`
        selectnameoption2.className = `selectnameoption`;
        selectnameoption2.innerHTML = `Selected Tours Pipes`;
        selectoption2.appendChild(selectnameoption2);

    let selectdiv = document.createElement('div');
    selectdiv.id = `selectdiv`
    selectdiv.className = `selectdiv`;
    document.getElementById('selectStage').appendChild(selectdiv);

    Object.keys(pipeGroups.Groups).forEach((t, i) => {
        let selecticondiv = document.createElement('div');
        selecticondiv.id = `selecticondiv_${t}`
        selecticondiv.className = `selecticondiv`;
        (selectedGroups.includes(t)) ? selecticondiv.style.backgroundColor = 'green' : selecticondiv.style.backgroundColor = 'transparent';
        //selecticondiv.style.backgroundColor = 'transparent';
        selecticondiv.addEventListener('click', function () {
            toggleSelect(t);
        });
        selectdiv.appendChild(selecticondiv);

        let selecticon = document.createElement('img');
        selecticon.id = `selecticon_${t}`
        selecticon.className = `selecticon`;
        selecticon.src = `${pipeGroups.Groups[t].Icon}`;
        selecticondiv.appendChild(selecticon);

        let selectname = document.createElement('p');
        selectname.id = `selectname_${t}`
        selectname.className = `selectname`;
        selectname.innerHTML = `${pipeGroups.Groups[t].Name}`;
        selecticondiv.appendChild(selectname);
    });
}

function addItem(itemId, type, rarity){

    //if it doesn't exist

    if(savedata.Items.Drivers[itemId] == null && savedata.Items.Karts[itemId] == null && savedata.Items.Gliders[itemId] == null){
        switch(type){
            case 0:
                savedata.Items.Drivers[`${itemId}`] = {};
                savedata.Items.Drivers[`${itemId}`].isNew = true;
                savedata.Items.Drivers[`${itemId}`].total = 1;
                savedata.Items.Drivers[`${itemId}`].level = 1;
                savedata.Items.Drivers[`${itemId}`].remainder = 0;
                savedata.Items.Drivers[`${itemId}`].extra = 0;
                savedata.Items.Drivers[`${itemId}`].coins = 0;
                break;
            case 1:
                savedata.Items.Karts[`${itemId}`] = {};
                savedata.Items.Karts[`${itemId}`].isNew = true;
                savedata.Items.Karts[`${itemId}`].total = 1;
                savedata.Items.Karts[`${itemId}`].level = 1;
                savedata.Items.Karts[`${itemId}`].remainder = 0;
                savedata.Items.Karts[`${itemId}`].extra = 0;
                savedata.Items.Karts[`${itemId}`].coins = 0;
                break;
            case 2:
                savedata.Items.Gliders[`${itemId}`] = {};
                savedata.Items.Gliders[`${itemId}`].isNew = true;
                savedata.Items.Gliders[`${itemId}`].total = 1;
                savedata.Items.Gliders[`${itemId}`].level = 1;
                savedata.Items.Gliders[`${itemId}`].remainder = 0;
                savedata.Items.Gliders[`${itemId}`].extra = 0;
                savedata.Items.Gliders[`${itemId}`].coins = 0;
                break;
        }
    } else {
    //if it does exist
    let itemRemainder;
    switch(type){
        case 0:
            savedata.Items.Drivers[`${itemId}`].total += 1;
            itemRemainder = convertToLevel(savedata.Items.Drivers[`${itemId}`].total, rarity);
            savedata.Items.Drivers[`${itemId}`].level = itemRemainder[0];
            savedata.Items.Drivers[`${itemId}`].remainder = itemRemainder[1];
            switch(rarity){
                case 0:
                    if(savedata.Items.Drivers[`${itemId}`].total > 61){
                        savedata.Items.Drivers[`${itemId}`].extra = savedata.Items.Drivers[`${itemId}`].total - 61;
                    }
                    break;
                case 1:
                    if(savedata.Items.Drivers[`${itemId}`].total > 24){
                        savedata.Items.Drivers[`${itemId}`].extra = savedata.Items.Drivers[`${itemId}`].total - 24;
                    }
                    break;
                case 2:
                    if(savedata.Items.Drivers[`${itemId}`].total > 15){
                        savedata.Items.Drivers[`${itemId}`].extra = savedata.Items.Drivers[`${itemId}`].total - 15;
                    }
                    break;
            }
            if(savedata.Items.Drivers[`${itemId}`].level == 7){
                savedata.Items.Drivers[`${itemId}`].coins = convertToCoins(savedata.Items.Drivers[`${itemId}`].extra, type, rarity);
            }
            break;
        case 1:
            savedata.Items.Karts[`${itemId}`].total += 1;
            itemRemainder = convertToLevel(savedata.Items.Karts[`${itemId}`].total, rarity);
            savedata.Items.Karts[`${itemId}`].level = itemRemainder[0];
            savedata.Items.Karts[`${itemId}`].remainder = itemRemainder[1];
            switch(rarity){
                case 0:
                    if(savedata.Items.Karts[`${itemId}`].total > 61){
                        savedata.Items.Karts[`${itemId}`].extra = savedata.Items.Karts[`${itemId}`].total - 61;
                    }
                    break;
                case 1:
                    if(savedata.Items.Karts[`${itemId}`].total > 24){
                        savedata.Items.Karts[`${itemId}`].extra = savedata.Items.Karts[`${itemId}`].total - 24;
                    }
                    break;
                case 2:
                    if(savedata.Items.Karts[`${itemId}`].total > 15){
                        savedata.Items.Karts[`${itemId}`].extra = savedata.Items.Karts[`${itemId}`].total - 15;
                    }
                    break;
            }
            if(savedata.Items.Karts[`${itemId}`].level == 7){
                savedata.Items.Karts[`${itemId}`].coins = convertToCoins(savedata.Items.Karts[`${itemId}`].extra, type, rarity);
            }
            break;
        case 2:
            savedata.Items.Gliders[`${itemId}`].total += 1;
            itemRemainder = convertToLevel(savedata.Items.Gliders[`${itemId}`].total, rarity);
            savedata.Items.Gliders[`${itemId}`].level = itemRemainder[0];
            savedata.Items.Gliders[`${itemId}`].remainder = itemRemainder[1];
            switch(rarity){
                case 0:
                    if(savedata.Items.Gliders[`${itemId}`].total > 61){
                        savedata.Items.Gliders[`${itemId}`].extra = savedata.Items.Gliders[`${itemId}`].total - 61;
                    }
                    break;
                case 1:
                    if(savedata.Items.Gliders[`${itemId}`].total > 24){
                        savedata.Items.Gliders[`${itemId}`].extra = savedata.Items.Gliders[`${itemId}`].total - 24;
                    }
                    break;
                case 2:
                    if(savedata.Items.Gliders[`${itemId}`].total > 15){
                        savedata.Items.Gliders[`${itemId}`].extra = savedata.Items.Gliders[`${itemId}`].total - 15;
                    }
                    break;
            }
            if(savedata.Items.Gliders[`${itemId}`].level == 7){
                savedata.Items.Gliders[`${itemId}`].coins = convertToCoins(savedata.Items.Gliders[`${itemId}`].extra, type, rarity);
            }
            break;
    }
    }
    updateLocalSaveData();
}

function convertToLevel(input, rarity){
    let level = 0;
    let remainder = input;
    let levels = {"2":[1,1,1,2,2,3,5],"1":[1,1,2,3,4,5,8],"0":[1,2,5,8,11,14,20]};
    let required = 0;
    while(remainder - levels[rarity][level] >= 0){
      remainder -= levels[rarity][level];
      level++;
    }
    required = levels[rarity][level];
    return [level, remainder, required];
}

function convertToCoins(extra, type, rarity){
    let coinrate = 0;
    let rates = {"D":[400,1500,6000],"KG":[250,1000,5000]}
    switch(type){
        case 0:
            coinrate = rates.D[rarity];
            break;
        case 1:
            coinrate = rates.KG[rarity];
            break;
        case 2:
            coinrate = rates.KG[rarity];
            break;
    }
    return coinrate * extra;
}

function convertToCoinImage(amount){
    let imageLocation;
    switch(true){
        case amount == 0:
            imageLocation = "./Images/Pipe/Select/cointier0.png";
            break;
        case amount > 0 && amount <= 250:
            imageLocation = "./Images/Pipe/Select/cointier1.png";
            break;
        case amount > 250 && amount <= 5000:
            imageLocation = "./Images/Pipe/Select/cointier2.png";
            break;
        case amount > 5000 && amount <= 20000:
            imageLocation = "./Images/Pipe/Select/cointier3.png";
                break;
        case amount > 20000 && amount <= 50000:
            imageLocation = "./Images/Pipe/Select/cointier4.png";
                break;
        case amount > 50000:
            imageLocation = "./Images/Pipe/Select/cointier5.png";
            break;
    }
    return imageLocation;
}

function generateInventory(){
    document.getElementById("inventoryStage").innerHTML = "";
    generateNav("inventoryStage");
    activebutone(4,`inventoryStage`);

    let inventorybuttons = document.createElement('div');
    inventorybuttons.id = `inventorybuttons`
    inventorybuttons.className = `inventorybuttons`;
    document.getElementById('inventoryStage').appendChild(inventorybuttons);

    var menubuttonpipe1li = document.createElement('div');
    //inventorybuttons.appendChild(menubuttonpipe1li);

    var menubuttonpipe1 = document.createElement('img');
    menubuttonpipe1.id = `menubuttonpipe_grid`
    menubuttonpipe1.className = 'menubuttoninventory';
    menubuttonpipe1.src = "./Images/UI/Icon/MenuPin00.png";
    menubuttonpipe1.style.backgroundColor = "#04AA6D";
    menubuttonpipe1.addEventListener('click', function () {
        toggleInventoryView(`grid`);

    });
    inventorybuttons.appendChild(menubuttonpipe1);

    var menubuttonpipe2li = document.createElement('div');
    //inventorybuttons.appendChild(menubuttonpipe2li);

    var menubuttonpipe2 = document.createElement('img');
    menubuttonpipe2.id = `menubuttonpipe_list`
    menubuttonpipe2.className = 'menubuttoninventory';
    menubuttonpipe2.src = "./Images/UI/Icon/List.png";
    menubuttonpipe2.addEventListener('click', function () {
        toggleInventoryView(`list`);
    });
    inventorybuttons.appendChild(menubuttonpipe2);



    var menubuttonpipe3li = document.createElement('div');
    //inventorybuttons.appendChild(menubuttonpipe3li);

    var menubuttonpipe3 = document.createElement('img');
    menubuttonpipe3.id = `menubuttonpipe_d`
    menubuttonpipe3.className = 'menubuttoninventoryright';
    menubuttonpipe3.src = "./Images/UI/Icon/Driver.png";
    menubuttonpipe3.style.backgroundColor = "#04AA6D"
    menubuttonpipe3.addEventListener('click', function () {
        toggleInventoryDKG(`d`);
    });

    var menubuttonpipe4li = document.createElement('div');
    //inventorybuttons.appendChild(menubuttonpipe4li);

    var menubuttonpipe4 = document.createElement('img');
    menubuttonpipe4.id = `menubuttonpipe_k`
    menubuttonpipe4.className = 'menubuttoninventoryright';
    menubuttonpipe4.src = "./Images/UI/Icon/Kart.png";
    menubuttonpipe4.addEventListener('click', function () {
        toggleInventoryDKG(`k`);
    });

    var menubuttonpipe5li = document.createElement('div');
    //inventorybuttons.appendChild(menubuttonpipe5li);

    var menubuttonpipe5 = document.createElement('img');
    menubuttonpipe5.id = `menubuttonpipe_g`
    menubuttonpipe5.className = 'menubuttoninventoryright';
    menubuttonpipe5.src = "./Images/UI/Icon/Glider.png";
    menubuttonpipe5.addEventListener('click', function () {
        toggleInventoryDKG(`g`);
    });
    inventorybuttons.appendChild(menubuttonpipe5);
    inventorybuttons.appendChild(menubuttonpipe4);
    inventorybuttons.appendChild(menubuttonpipe3);

    //game-like inventory view

    let inventorygrid = document.createElement('div');
    inventorygrid.id = `inventorygrid`
    inventorygrid.className = `inventorygrid`;
    document.getElementById('inventoryStage').appendChild(inventorygrid);

    let inventorychar = document.createElement('div');
    inventorychar.id = `inventorychar`
    inventorychar.className = `inventorychar`;
    inventorygrid.appendChild(inventorychar);

    let inventorykart = document.createElement('div');
    inventorykart.id = `inventorykart`
    inventorykart.className = `inventorykart`;
    inventorykart.style.display = "none";
    inventorygrid.appendChild(inventorykart);

    let inventoryglider = document.createElement('div');
    inventoryglider.id = `inventoryglider`
    inventoryglider.className = `inventoryglider`;
    inventoryglider.style.display = "none";
    inventorygrid.appendChild(inventoryglider);

    //inventory stats view

    let inventorylist = document.createElement('div');
    inventorylist.id = `inventorylist`
    inventorylist.className = `inventorylist`;
    inventorylist.style.display = "none";
    document.getElementById('inventoryStage').appendChild(inventorylist);

    let inventorylistchar = document.createElement('div');
    inventorylistchar.id = `inventorylistchar`
    inventorylistchar.className = `inventorylistchar`;
    inventorylist.appendChild(inventorylistchar);

    let inventorylistkart = document.createElement('div');
    inventorylistkart.id = `inventorylistkart`
    inventorylistkart.className = `inventorylistkart`;
    inventorylistkart.style.display = "none";
    inventorylist.appendChild(inventorylistkart);

    let inventorylistglider = document.createElement('div');
    inventorylistglider.id = `inventorylistglider`
    inventorylistglider.className = `inventorylistglider`;
    inventorylistglider.style.display = "none";
    inventorylist.appendChild(inventorylistglider);

    createCKGPanel();
}

function createCKGPanel(){
    let makeCharacters = ()=>{
        document.getElementById('inventorychar').innerHTML = "";
        let output = document.getElementById('inventorychar');
        characterid.forEach((t,i)=>{
            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventory';
            panel.id = `invcharpanel${t}`;
            panel.addEventListener('click', function() {
                invCharacter(characterid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (charrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormal.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrare.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighend.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newCharacter';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Character Icon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (charrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormalchar.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerarechar.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighendchar.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + charitem[i] + `.png`;
            charaitem.className = 'itemboxitem';

            if (savedata.Items.Drivers[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Drivers[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorygray";

            }
            let savedrivers = [];
            savedrivers = Object.keys(savedata.Items.Drivers);
            /*if(savedrivers.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);*/
            output.appendChild(panel);
           }
            //output.appendChild(panel);
        );
    }
    let makeKarts = ()=>{
        document.getElementById('inventorykart').innerHTML = "";
        //document.getElementById('inventoryshelves').innerHTML = "";
        let output = document.getElementById('inventorykart');
        kartid.forEach((t,i)=>{
            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventory';
            panel.id = `invkartpanel${t}`;
            panel.addEventListener('click', function() {
                invKart(kartid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (kartrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormalkg.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrarekg.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighendkg.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newKart';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (kartrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormal.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerare.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighend.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
            charaitem.className = 'bonuspointtype';
            //panel.appendChild(charaitem);
    
            if (savedata.Items.Karts[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Karts[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorygray";

            }
    
            let savekarts = [];
            savekarts = Object.keys(savedata.Items.Karts);
            /*if(savekarts.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);
           }*/
            output.appendChild(panel);
            //output.appendChild(panel);
        }
        );
    }
    let makeGliders = ()=>{
        document.getElementById('inventoryglider').innerHTML = "";
        //document.getElementById('inventoryshelves').innerHTML = "";
        let output = document.getElementById('inventoryglider');
        gliderid.forEach((t,i)=>{
            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventory';
            panel.id = `invgliderpanel${t}`;
            panel.addEventListener('click', function() {
                invGlider(gliderid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (gliderrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormalkg.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrarekg.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighendkg.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newGlider';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (gliderrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormal.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerare.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighend.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
            charaitem.className = 'bonuspointtype';
            //panel.appendChild(charaitem);
    
            if (savedata.Items.Gliders[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Gliders[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorygray";

            }
    
            let savegliders = [];
            savegliders = Object.keys(savedata.Items.Gliders);
            /*if(savegliders.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);
           }*/
           output.appendChild(panel);
            //output.appendChild(panel);
        }
        );
    }
    let makeListCharacters = ()=>{
        document.getElementById('inventorylistchar').innerHTML = "";
        let output = document.getElementById('inventorylistchar');
        if(Object.keys(savedata.Items.Drivers).length === 0){
            var titletxt = document.createElement('p');
            titletxt.id = `titletxtop`;
            titletxt.className = 'subTitleText';
            titletxt.innerHTML = `You don't have any Drivers!`;
            output.appendChild(titletxt);
        }
        characterid.forEach((t,i)=>{
            if(savedata.Items.Drivers[`${t}`] != null){
            let listpanel = document.createElement('div');
            listpanel.id = `listpanel`
            listpanel.className = `listpanel`;
            output.appendChild(listpanel);

            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventorylist';
            panel.id = `invcharpanel${t}`;
            panel.addEventListener('click', function() {
                invCharacter(characterid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (charrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormal.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrare.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighend.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newCharacter';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Character Icon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (charrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormalchar.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerarechar.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighendchar.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + charitem[i] + `.png`;
            charaitem.className = 'itemboxitem';

            if (savedata.Items.Drivers[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Drivers[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorylistgray";

            }
            let savedrivers = [];
            savedrivers = Object.keys(savedata.Items.Drivers);
            /*if(savedrivers.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);*/
            listpanel.appendChild(panel);

            let listlevelpanel = document.createElement('div');
            listlevelpanel.id = `listlevelpanel`
            listlevelpanel.className = `listlevelpanel`;
            listpanel.appendChild(listlevelpanel);

            var listlevelbgimg = document.createElement('img');
            listlevelbgimg.id = `listlevelbgimg`
            listlevelbgimg.className = 'listlevelbgimg';
            listlevelbgimg.src = "./Images/Pipe/Select/LevelIcon.png";
            listlevelpanel.appendChild(listlevelbgimg);

            let listtotalpanel = document.createElement('div');
            listtotalpanel.id = `listtotalpanel`
            listtotalpanel.className = `listtotalpanel`;
            listlevelpanel.appendChild(listtotalpanel);

            var listtotalicon = document.createElement('img');
            listtotalicon.id = `listtotalicon`
            listtotalicon.className = 'listtotalicon';
            listtotalicon.src = "./Images/UI/specificitem1.png";
            listtotalpanel.appendChild(listtotalicon);

            let listtotaltext = document.createElement('p');
            listtotaltext.id = `listtotaltext`
            listtotaltext.className = `listtotaltext`;
            listtotaltext.innerHTML = `x${savedata.Items.Drivers[`${t}`].total}`;
            listtotalpanel.appendChild(listtotaltext);

            var listcoinicon = document.createElement('img');
            listcoinicon.id = `listcoinicon`
            listcoinicon.className = 'listcoinicon';
            listcoinicon.src = convertToCoinImage(savedata.Items.Drivers[`${t}`].coins);
            listpanel.appendChild(listcoinicon);

            if(savedata.Items.Drivers[`${t}`].level < 7){

            if (savedata.Items.Drivers[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/LeftNum/${savedata.Items.Drivers[`${t}`].level}.png`;
                levelicon.className = 'leveliconlist';
                listlevelpanel.appendChild(levelicon);
            } 

            let converted = convertToLevel(savedata.Items.Drivers[`${t}`].total, values[`${t}`].rarityId);

            var listlevelprogress = document.createElement('progress');
            listlevelprogress.id = `listlevelprogress`
            listlevelprogress.className = 'listlevelprogress';
            listlevelprogress.src = "./Images/UI/specificitem1.png";
            listlevelprogress.value = converted[1];
            listlevelprogress.max = converted[2];
            listlevelpanel.appendChild(listlevelprogress);
            
            let listlevelprogresstext = document.createElement('p');
            listlevelprogresstext.id = `listlevelprogresstext`
            listlevelprogresstext.className = `listlevelprogresstext`;
            listlevelprogresstext.innerHTML = `${converted[1]} / ${converted[2]}`;
            listlevelpanel.appendChild(listlevelprogresstext);

            } else {
                listlevelbgimg.src = "./Images/Pipe/Select/LevelIconMax.png";
                
                let listcointext = document.createElement('p');
                listcointext.id = `listcointext`
                listcointext.className = `listcointext`;
                listcointext.innerHTML = `${savedata.Items.Drivers[`${t}`].coins}`;
                listpanel.appendChild(listcointext);
            }

                }
            }
            //output.appendChild(panel);
        );
    }
    let makeListKarts = ()=>{
        document.getElementById('inventorylistkart').innerHTML = "";
        //document.getElementById('inventoryshelves').innerHTML = "";
        let output = document.getElementById('inventorylistkart');
        if(Object.keys(savedata.Items.Karts).length === 0){
            var titletxt = document.createElement('p');
            titletxt.id = `titletxtop`;
            titletxt.className = 'subTitleText';
            titletxt.innerHTML = `You don't have any Karts!`;
            output.appendChild(titletxt);
        }
        kartid.forEach((t,i)=>{
            if(savedata.Items.Karts[`${t}`] != null){
                let listpanel = document.createElement('div');
                listpanel.id = `listpanel`
                listpanel.className = `listpanel`;
                output.appendChild(listpanel);

            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventorylist';
            panel.id = `invkartpanel${t}`;
            panel.addEventListener('click', function() {
                invKart(kartid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (kartrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormalkg.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrarekg.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighendkg.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newKart';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (kartrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormal.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerare.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighend.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
            charaitem.className = 'bonuspointtype';
            //panel.appendChild(charaitem);
    
            if (savedata.Items.Karts[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Karts[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorygray";

            }
    
            let savekarts = [];
            savekarts = Object.keys(savedata.Items.Karts);
            /*if(savekarts.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);
           }*/
           listpanel.appendChild(panel);

           let listlevelpanel = document.createElement('div');
           listlevelpanel.id = `listlevelpanel`
           listlevelpanel.className = `listlevelpanel`;
           listpanel.appendChild(listlevelpanel);

           var listlevelbgimg = document.createElement('img');
           listlevelbgimg.id = `listlevelbgimg`
           listlevelbgimg.className = 'listlevelbgimg';
           listlevelbgimg.src = "./Images/Pipe/Select/LevelIcon.png";
           listlevelpanel.appendChild(listlevelbgimg);

           let listtotalpanel = document.createElement('div');
           listtotalpanel.id = `listtotalpanel`
           listtotalpanel.className = `listtotalpanel`;
           listlevelpanel.appendChild(listtotalpanel);

           var listtotalicon = document.createElement('img');
           listtotalicon.id = `listtotalicon`
           listtotalicon.className = 'listtotalicon';
           listtotalicon.src = "./Images/UI/specificitem1.png";
           listtotalpanel.appendChild(listtotalicon);

           let listtotaltext = document.createElement('p');
           listtotaltext.id = `listtotaltext`
           listtotaltext.className = `listtotaltext`;
           listtotaltext.innerHTML = `x${savedata.Items.Karts[`${t}`].total}`;
           listtotalpanel.appendChild(listtotaltext);

           var listcoinicon = document.createElement('img');
           listcoinicon.id = `listcoinicon`
           listcoinicon.className = 'listcoinicon';
           listcoinicon.src = convertToCoinImage(savedata.Items.Karts[`${t}`].coins);
           listpanel.appendChild(listcoinicon);

           if(savedata.Items.Karts[`${t}`].level < 7){

           if (savedata.Items.Karts[`${t}`] != undefined) {
               let levelicon = document.createElement('img');
               levelicon.src = `./Images/UI/LeftNum/${savedata.Items.Karts[`${t}`].level}.png`;
               levelicon.className = 'leveliconlist';
               listlevelpanel.appendChild(levelicon);
           } 

           let converted = convertToLevel(savedata.Items.Karts[`${t}`].total, values[`${t}`].rarityId);

           var listlevelprogress = document.createElement('progress');
           listlevelprogress.id = `listlevelprogress`
           listlevelprogress.className = 'listlevelprogress';
           listlevelprogress.src = "./Images/UI/specificitem1.png";
           listlevelprogress.value = converted[1];
           listlevelprogress.max = converted[2];
           listlevelpanel.appendChild(listlevelprogress);
           
           let listlevelprogresstext = document.createElement('p');
           listlevelprogresstext.id = `listlevelprogresstext`
           listlevelprogresstext.className = `listlevelprogresstext`;
           listlevelprogresstext.innerHTML = `${converted[1]} / ${converted[2]}`;
           listlevelpanel.appendChild(listlevelprogresstext);

           } else {
               listlevelbgimg.src = "./Images/Pipe/Select/LevelIconMax.png";
               
               let listcointext = document.createElement('p');
               listcointext.id = `listcointext`
               listcointext.className = `listcointext`;
               listcointext.innerHTML = `${savedata.Items.Karts[`${t}`].coins}`;
               listpanel.appendChild(listcointext);
           }
            //output.appendChild(panel);
            //output.appendChild(panel);
        }
        }
        );
    }
    let makeListGliders = ()=>{
        document.getElementById('inventorylistglider').innerHTML = "";
        //document.getElementById('inventoryshelves').innerHTML = "";
        let output = document.getElementById('inventorylistglider');
        if(Object.keys(savedata.Items.Gliders).length === 0){
            var titletxt = document.createElement('p');
            titletxt.id = `titletxtop`;
            titletxt.className = 'subTitleText';
            titletxt.innerHTML = `You don't have any Gliders!`;
            output.appendChild(titletxt);
        }
        gliderid.forEach((t,i)=>{
            if(savedata.Items.Gliders[`${t}`] != null){
                let listpanel = document.createElement('div');
                listpanel.id = `listpanel`
                listpanel.className = `listpanel`;
                output.appendChild(listpanel);
            
            var panel = document.createElement('div');
            panel.className = 'ckgpanelinventorylist';
            panel.id = `invgliderpanel${t}`;
            panel.addEventListener('click', function() {
                invGlider(gliderid[i], i);
            });
    
            let bottomimg = document.createElement('img');
            switch (gliderrarity[i]) {
            case "1":
                bottomimg.src = `./Images/UI/bgnormalkg.png`;
                break;
            case "2":
                bottomimg.src = `./Images/UI/bgrarekg.png`;
                break;
            case "3":
                bottomimg.src = `./Images/UI/bghighendkg.png`;
                break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);
    
            let newCharacter = document.createElement('img');
            newCharacter.className = 'newGlider';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);
    
            let topimg = document.createElement('img');
            switch (gliderrarity[i]) {
            case "1":
                topimg.src = `./Images/UI/outlinenormal.png`;
                break;
            case "2":
                topimg.src = `./Images/UI/outlinerare.png`;
                break;
            case "3":
                topimg.src = `./Images/UI/outlinehighend.png`;
                break;
            }
            topimg.className = 'topimg';
            topimg.id = `invtopimgselected${t}`;
            panel.appendChild(topimg);
    
            let charaitem = document.createElement('img');
            charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
            charaitem.className = 'bonuspointtype';
            //panel.appendChild(charaitem);
    
            if (savedata.Items.Gliders[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/${savedata.Items.Gliders[`${t}`].level}.png`;
                levelicon.className = 'levelicon';
                levelicon.id = `inv_levelnumber${t}`;
                panel.appendChild(levelicon);
    
                let lvicon = document.createElement('img');
                lvicon.src = './Images/UI/lv.png';
                lvicon.className = 'lvicon';
                panel.appendChild(lvicon);

                panel.appendChild(charaitem);
            } else {
                panel.className = "ckgpanelinventorygray";

            }
    
            let savegliders = [];
            savegliders = Object.keys(savedata.Items.Gliders);
            /*if(savegliders.includes(t) && isDataEntered){
            output.appendChild(panel);
           } else if(onlyOwnedItemsInv == false){
            output.appendChild(panel);
           }*/
           listpanel.appendChild(panel);

            let listlevelpanel = document.createElement('div');
            listlevelpanel.id = `listlevelpanel`
            listlevelpanel.className = `listlevelpanel`;
            listpanel.appendChild(listlevelpanel);

            var listlevelbgimg = document.createElement('img');
            listlevelbgimg.id = `listlevelbgimg`
            listlevelbgimg.className = 'listlevelbgimg';
            listlevelbgimg.src = "./Images/Pipe/Select/LevelIcon.png";
            listlevelpanel.appendChild(listlevelbgimg);

            let listtotalpanel = document.createElement('div');
            listtotalpanel.id = `listtotalpanel`
            listtotalpanel.className = `listtotalpanel`;
            listlevelpanel.appendChild(listtotalpanel);

            var listtotalicon = document.createElement('img');
            listtotalicon.id = `listtotalicon`
            listtotalicon.className = 'listtotalicon';
            listtotalicon.src = "./Images/UI/specificitem1.png";
            listtotalpanel.appendChild(listtotalicon);

            let listtotaltext = document.createElement('p');
            listtotaltext.id = `listtotaltext`
            listtotaltext.className = `listtotaltext`;
            listtotaltext.innerHTML = `x${savedata.Items.Gliders[`${t}`].total}`;
            listtotalpanel.appendChild(listtotaltext);

            var listcoinicon = document.createElement('img');
            listcoinicon.id = `listcoinicon`
            listcoinicon.className = 'listcoinicon';
            listcoinicon.src = convertToCoinImage(savedata.Items.Gliders[`${t}`].coins);
            listpanel.appendChild(listcoinicon);

            if(savedata.Items.Gliders[`${t}`].level < 7){

            if (savedata.Items.Gliders[`${t}`] != undefined) {
                let levelicon = document.createElement('img');
                levelicon.src = `./Images/UI/LeftNum/${savedata.Items.Gliders[`${t}`].level}.png`;
                levelicon.className = 'leveliconlist';
                listlevelpanel.appendChild(levelicon);
            } 

            let converted = convertToLevel(savedata.Items.Gliders[`${t}`].total, values[`${t}`].rarityId);

            var listlevelprogress = document.createElement('progress');
            listlevelprogress.id = `listlevelprogress`
            listlevelprogress.className = 'listlevelprogress';
            listlevelprogress.src = "./Images/UI/specificitem1.png";
            listlevelprogress.value = converted[1];
            listlevelprogress.max = converted[2];
            listlevelpanel.appendChild(listlevelprogress);
            
            let listlevelprogresstext = document.createElement('p');
            listlevelprogresstext.id = `listlevelprogresstext`
            listlevelprogresstext.className = `listlevelprogresstext`;
            listlevelprogresstext.innerHTML = `${converted[1]} / ${converted[2]}`;
            listlevelpanel.appendChild(listlevelprogresstext);

            } else {
                listlevelbgimg.src = "./Images/Pipe/Select/LevelIconMax.png";
                
                let listcointext = document.createElement('p');
                listcointext.id = `listcointext`
                listcointext.className = `listcointext`;
                listcointext.innerHTML = `${savedata.Items.Gliders[`${t}`].coins}`;
                listpanel.appendChild(listcointext);
            }

           //output.appendChild(panel);
            //output.appendChild(panel);
        }
        }
        );
    }
    makeCharacters();
    makeKarts();
    makeGliders();
    makeListCharacters();
    makeListKarts();
    makeListGliders();
}

function toggleInventoryView(which){
    document.getElementById('menubuttonpipe_grid').style.backgroundColor = null;
    document.getElementById('menubuttonpipe_list').style.backgroundColor = null;
    document.getElementById(`menubuttonpipe_${which}`).style.backgroundColor = "#04AA6D";
    document.getElementById('inventorygrid').style.display = "none";
    document.getElementById('inventorylist').style.display = "none";
    document.getElementById(`inventory${which}`).style.display = "block";
}

function toggleInventoryDKG(which){
    document.getElementById('menubuttonpipe_d').style.backgroundColor = null;
    document.getElementById('menubuttonpipe_k').style.backgroundColor = null;
    document.getElementById('menubuttonpipe_g').style.backgroundColor = null;
    document.getElementById(`menubuttonpipe_${which}`).style.backgroundColor = "#04AA6D";
    document.getElementById('inventorychar').style.display = "none";
    document.getElementById('inventorykart').style.display = "none";
    document.getElementById('inventoryglider').style.display = "none";
    document.getElementById('inventorylistchar').style.display = "none";
    document.getElementById('inventorylistkart').style.display = "none";
    document.getElementById('inventorylistglider').style.display = "none";
    switch(which){
        case "d":
            document.getElementById('inventorychar').style.display = "block";
            document.getElementById('inventorylistchar').style.display = "block";
            break;
        case "k":
            document.getElementById('inventorykart').style.display = "block";
            document.getElementById('inventorylistkart').style.display = "block";
            break;
        case "g":
            document.getElementById('inventoryglider').style.display = "block";
            document.getElementById('inventorylistglider').style.display = "block";
            break;
    }
}

function toggleSelect(select){
    let element = document.getElementById(`selecticondiv_${select}`);
    if(element.style.backgroundColor == "transparent"){
        element.style.backgroundColor = "green";
        selectedGroups.push(select);
    } else {
        element.style.backgroundColor = "transparent";
        selectedGroups.splice(selectedGroups.indexOf(select), 1);
    }
}

function changeSelectOption(select){
    document.getElementById(`selecticondiv_1`).style.backgroundColor = "transparent";
    document.getElementById(`selecticondiv_2`).style.backgroundColor = "transparent";
    document.getElementById(`selecticondiv_${select}`).style.backgroundColor = "green";
    selectToggleOption = (select - 1);
}

function generateDetails(pipeId) {
    Swipe.play();
    document.getElementById("pickingStage").style.display = "none";
    document.getElementById("detailsStage").style.display = "block";
    document.getElementById("detailsStage").innerHTML = "";

    readTextFile("https://halfhydra.github.io/MarioKartTourValues/Pipe/pipeData.json", 4);

    var titletxt = document.createElement('p');
    titletxt.id = `titletxt`
    titletxt.className = 'titleText';
    titletxt.innerHTML = `${pipeData.Pipes[pipeId].Name}`;
    document.getElementById('detailsStage').appendChild(titletxt);

    var xbtndetails = document.createElement('img');
    xbtndetails.className = 'settingBtnPipe';
    xbtndetails.src = `./Images/UI/xbtn.png`;
    xbtndetails.addEventListener('click', function () {
        returnToMain();
    });
    document.getElementById('detailsStage').appendChild(xbtndetails);


    if(pipeData.Pipes[pipeId].Term != null){
        document.getElementById('detailsStage').appendChild(generateSectionBar(`Term`));
        let termtoptxt = document.createElement('p');
        termtoptxt.innerHTML = pipeData.Pipes[pipeId].Term;
        termtoptxt.className = `termtoptxt`;
        document.getElementById('detailsStage').appendChild(termtoptxt);
    }

    document.getElementById('detailsStage').appendChild(generateSectionBar(`Notes`));

    if (savedata.Pipes[pipeId] == null) {
        savedata.Pipes[pipeId] = {};
        savedata.Pipes[pipeId].itemCount = pipeData.Pipes[pipeId].InitialAmount;
        savedata.Pipes[pipeId].Spotlights = pipeData.Pipes[pipeId].Spotlights;
        savedata.Pipes[pipeId].Items = pipeData.Pipes[pipeId].Items;
    }

    let tableClone = document.getElementById('QuantityTable').cloneNode(true);
    tableClone.id = `QuantityTable_${pipeId}`;

    console.log(pipeData);

    const savePipe = savedata.Pipes[pipeId];
    const saveItemAmounts = savedata.Pipes[pipeId].Items;
    const fullPipe = pipeData.Pipes[pipeId];
    const fullItemAmounts = pipeData.Pipes[pipeId].Items;

    let includedTypes = [];

    fullItemAmounts.forEach((t, i) => {
        if (t != 0) {
            includedTypes.push(i);
        }
    });

    let removedRows = [];

    if (fullItemAmounts[0] != 0 || fullItemAmounts[1] != 0 || fullItemAmounts[2] != 0) {
        console.log("has HE spotlights");
        //let sheRow = 
    } else {
        removedRows.push("High-End Spotlight");
    }

    if (fullItemAmounts[3] != 0 || fullItemAmounts[4] != 0 || fullItemAmounts[5] != 0) {
        //has HE
    } else {
        removedRows.push("High-End");
    }

    console.log(fullPipe);

    if (fullItemAmounts[6] != 0 || fullItemAmounts[7] != 0 || fullItemAmounts[8] != 0) {
        //has S S
    } else {
        removedRows.push("Super Spotlight");
    }

    if (fullItemAmounts[9] != 0 || fullItemAmounts[10] != 0 || fullItemAmounts[11] != 0) {
        //has S
    } else {
        removedRows.push("Super");
    }

    if (fullItemAmounts[12] != 0 || fullItemAmounts[13] != 0 || fullItemAmounts[14] != 0) {
        //has S N
    } else {
        removedRows.push("Normal Spotlight");
    }

    if (fullItemAmounts[15] != 0 || fullItemAmounts[16] != 0 || fullItemAmounts[17] != 0) {
        //has S
    } else {
        removedRows.push("Normal");
    }

    if (fullItemAmounts[18] == 0) {
        removedRows.push("Custom");
    }

    console.log(removedRows);

    for (let row of tableClone.rows) {
        row.cells[0].style.width = `150px`;
        removedRows.forEach((t, i) => {
            if (row.cells[0].innerText === t) {
                tableClone.deleteRow(row.rowIndex);
            }
        });
    }

    let spotlightDriver = [];
    let spotlightKart = [];
    let spotlightGlider = [];

    fullPipe.Spotlights.forEach((randomSpotlight, i) => {
        if (randomSpotlight.toString().length < 5) {
            spotlightDriver.push(randomSpotlight);
        }
        if (randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70) {
            spotlightKart.push(randomSpotlight);
        }
        if (randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30) {
            spotlightGlider.push(randomSpotlight);
        }
    });

    let fullSpotlightDriver = [];
    let fullSpotlightKart = [];
    let fullSpotlightGlider = [];

    savePipe.Spotlights.forEach((randomSpotlight, i) => {
        if (randomSpotlight.toString().length < 5) {
            fullSpotlightDriver.push(randomSpotlight);
        }
        if (randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70) {
            fullSpotlightKart.push(randomSpotlight);
        }
        if (randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30) {
            fullSpotlightGlider.push(randomSpotlight);
        }
    });

    for (let row of tableClone.rows) {
        console.log(row.cells[0].innerText);
        switch (row.cells[0].innerText) {
            case `High-End Spotlight`:
                row.cells[1].innerText = `${saveItemAmounts[0]}/${fullItemAmounts[0]}`;
                row.cells[2].innerText = `${saveItemAmounts[1]}/${fullItemAmounts[1]}`;
                row.cells[3].innerText = `${saveItemAmounts[2]}/${fullItemAmounts[2]}`;
                break;
            case `High-End`:
                row.cells[1].innerText = `${saveItemAmounts[3]}/${fullItemAmounts[3]}`;
                row.cells[2].innerText = `${saveItemAmounts[4]}/${fullItemAmounts[4]}`;
                row.cells[3].innerText = `${saveItemAmounts[5]}/${fullItemAmounts[5]}`;
                break;
            case `Super Spotlight`:
                row.cells[1].innerText = `${saveItemAmounts[6]}/${fullItemAmounts[6]}`;
                row.cells[2].innerText = `${saveItemAmounts[7]}/${fullItemAmounts[7]}`;
                row.cells[3].innerText = `${saveItemAmounts[8]}/${fullItemAmounts[8]}`;
                break;
            case `Super`:
                row.cells[1].innerText = `${saveItemAmounts[9]}/${fullItemAmounts[9]}`;
                row.cells[2].innerText = `${saveItemAmounts[10]}/${fullItemAmounts[10]}`;
                row.cells[3].innerText = `${saveItemAmounts[11]}/${fullItemAmounts[11]}`;
                break;
            case `Normal Spotlight`:
                row.cells[1].innerText = `${saveItemAmounts[12]}/${fullItemAmounts[12]}`;
                row.cells[2].innerText = `${saveItemAmounts[13]}/${fullItemAmounts[13]}`;
                row.cells[3].innerText = `${saveItemAmounts[14]}/${fullItemAmounts[14]}`;
                break;
            case `Normal`:
                row.cells[1].innerText = `${saveItemAmounts[15]}/${fullItemAmounts[15]}`;
                row.cells[2].innerText = `${saveItemAmounts[16]}/${fullItemAmounts[16]}`;
                row.cells[3].innerText = `${saveItemAmounts[17]}/${fullItemAmounts[17]}`;
                break;
            case `Custom`:
                row.cells[1].innerText = `${fullSpotlightDriver.length}/${spotlightDriver.length}`;
                row.cells[2].innerText = `${fullSpotlightKart.length}/${spotlightKart.length}`;
                row.cells[3].innerText = `${fullSpotlightGlider.length}/${spotlightGlider.length}`;
                break;
        }
    }

    if (fullPipe.Notes != null) {
        let spotlightnotetxt = document.createElement('p');
        spotlightnotetxt.innerHTML = fullPipe.Notes;
        spotlightnotetxt.className = `spotlightnotetxt`;
        document.getElementById('detailsStage').appendChild(spotlightnotetxt);
    }

    let spotlighttoptxt = document.createElement('p');
    spotlighttoptxt.innerHTML = (fullPipe.Spotlights.length == 0 ? `This pipe does not feature spotlights.` : `They're in the spotlight!`);
    spotlighttoptxt.className = `spotlighttoptxt`;
    document.getElementById('detailsStage').appendChild(spotlighttoptxt);

    let spotlightimg = document.createElement('img');
    spotlightimg.src = `./Images/Pipe/Banner/spotlight.png`;
    spotlightimg.className = `spotlightimg`;
    document.getElementById('detailsStage').appendChild(spotlightimg);

    let spotlightPanel = document.createElement('div');
    spotlightPanel.id = `spotlightPanel`;
    spotlightPanel.className = `spotlightPanel`;
    document.getElementById('detailsStage').appendChild(spotlightPanel);

    if (!removedRows.includes("Custom")) {
        tableClone.deleteRow(1);
        tableClone.deleteRow(1);
        tableClone.deleteRow(1);
    }

    let includedSpotlights = [];

    fullPipe.Spotlights.forEach((t, i) => {
        if (t == null) {
            return;
        }
        let itemType = t.toString();
        let itemRarity = (parseInt(values[t].rarityId) + 1).toString();
        if (itemType.length < 5) {
            itemType = 0;
            //t = 
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 30) {
            itemType = 2;
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 70) {
            itemType = 1;
        }

        //console.log("[" + t + "] [" + itemType + "] [" + i + "]");

        let output = document.getElementById('spotlightPanel');

        if (itemType == 0) {
            var panel = document.createElement('div');
            panel.className = (savePipe.Spotlights.includes(t) ? 'ckgpanelspotlight' : `ckgpanelspotlightdis`);
            panel.id = `invpipepanel${t}`;

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormal.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrare.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighend.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newCharacter';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Character Icon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormalchar.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerarechar.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighendchar.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);



        } else if (itemType == 1) {
            var panel = document.createElement('div');
            panel.className = (savePipe.Spotlights.includes(t) ? 'ckgpanelspotlight' : `ckgpanelspotlightdis`);
            panel.id = `invpipepanel${t}`;

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newKart';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormal.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerare.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighend.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);


        } else if (itemType == 2) {
            var panel = document.createElement('div');
            panel.className = (savePipe.Spotlights.includes(t) ? 'ckgpanelspotlight' : `ckgpanelspotlightdis`);
            panel.id = `invpipepanel${t}`;

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newGlider';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormal.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerare.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighend.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);
        }
        if(!includedSpotlights.includes(t)){
            output.appendChild(panel);
        }
        includedSpotlights.push(t);
    });

    document.getElementById('detailsStage').appendChild(generateSectionBar(`Quantity by Rarity`));

    document.getElementById("detailsStage").appendChild(tableClone);

    console.log(spotlightDriver);
    console.log(spotlightKart);
    console.log(spotlightGlider);

    document.getElementById('detailsStage').appendChild(generateSectionBar(`Appearance Rates`));

    if (!removedRows.includes(`High-End Spotlight`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`High-End Spotlight`));

        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_012`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = 1 / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (spotlightDriver.length);

        let highEndKartChance = 1 / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (spotlightKart.length);

        let highEndGliderChance = 1 / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (spotlightGlider.length);

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_012`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_012`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        let currentRowIndex = 0;



        spotlightDriver.forEach((t, i) => {
            if (values[t].rarityId == 2) {
                if (currentRowIndex == 0) {
                    let spotlightCount = 0;
                    spotlightDriver.forEach((t, i) => {
                        if (values[t].rarityId == 2) {
                            spotlightCount++;
                        }
                    });
                    driverImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(driverImageCell);

                }
                currentRowIndex++;
                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                if (spotlightDriver.length == 1) {
                    nameCell.style.height = "50px";
                }
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (highEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightKart.forEach((t, i) => {
            if (values[t].rarityId == 2) {
                if (currentRowIndex == 0) {
                    let spotlightCount = 0;
                    spotlightKart.forEach((t, i) => {
                        if (values[t].rarityId == 2) {
                            spotlightCount++;
                        }
                    });
                    kartImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(kartImageCell);

                }
                currentRowIndex++;
                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                if (spotlightKart.length == 1) {
                    nameCell.style.height = "50px";
                }
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (highEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightGlider.forEach((t, i) => {
            if (values[t].rarityId == 2) {
                if (currentRowIndex == 0) {
                    let spotlightCount = 0;
                    spotlightGlider.forEach((t, i) => {
                        if (values[t].rarityId == 2) {
                            spotlightCount++;
                        }
                    });
                    gliderImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(gliderImageCell);
                }
                currentRowIndex++;
                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                if (spotlightGlider.length == 1) {
                    nameCell.style.height = "50px";
                }
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (highEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow    

    }

    if (!removedRows.includes(`High-End`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`High-End`));
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_345`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = saveItemAmounts[3] / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (fullPipe.Normals.HighEnd.Drivers.length + fullPipe.ExtraHE.Drivers.length);

        let highEndKartChance = saveItemAmounts[4] / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (fullPipe.Normals.HighEnd.Karts.length + fullPipe.ExtraHE.Karts.length);

        let highEndGliderChance = saveItemAmounts[5] / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (fullPipe.Normals.HighEnd.Gliders.length + fullPipe.ExtraHE.Gliders.length);

        let highEndDriverPool = fullPipe.Normals.HighEnd.Drivers.concat(fullPipe.ExtraHE.Drivers);
        let highEndKartPool = fullPipe.Normals.HighEnd.Karts.concat(fullPipe.ExtraHE.Karts);
        let highEndGliderPool = fullPipe.Normals.HighEnd.Gliders.concat(fullPipe.ExtraHE.Gliders);
        //highEndDriverPool.concat(fullPipe.ExtraHE.Drivers);
        highEndDriverPool.sort(function (a, b) { return a - b });
        highEndKartPool.sort(function (a, b) { return a - b });
        highEndGliderPool.sort(function (a, b) { return a - b });

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_345`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_345`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        highEndDriverPool.forEach((t, i) => {
            if (i == 0) {
                driverImageCell.rowSpan = (highEndDriverPool.length + 1);
                newestTableBody.appendChild(driverImageCell);

            }
            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            if (highEndDriverPool.length == 1) {
                nameCell.style.height = "50px";
            }
            chanceCell.innerHTML = (!isNaN(actualHighEndDriverChance) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndKartPool.forEach((t, i) => {
            if (i == 0) {
                kartImageCell.rowSpan = (highEndKartPool.length + 1);
                newestTableBody.appendChild(kartImageCell);

            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            if (highEndDriverPool.length == 1) {
                nameCell.style.height = "50px";
            }
            chanceCell.innerHTML = (!isNaN(actualHighEndKartChance) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndGliderPool.forEach((t, i) => {
            if (i == 0) {
                gliderImageCell.rowSpan = (highEndGliderPool.length + 1);
                newestTableBody.appendChild(gliderImageCell);
            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            if (highEndDriverPool.length == 1) {
                nameCell.style.height = "50px";
            }
            chanceCell.innerHTML = (!isNaN(actualHighEndGliderChance) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow

    }

    if (!removedRows.includes(`Super Spotlight`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`Super Spotlight`));
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_678`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = saveItemAmounts[6] / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (spotlightDriver.length);

        let highEndKartChance = saveItemAmounts[7] / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (spotlightKart.length);

        let highEndGliderChance = saveItemAmounts[8] / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (spotlightGlider.length);

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_678`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_678`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        let currentRowIndex = 0;

        spotlightDriver.forEach((t, i) => {
            if (values[t].rarityId == 1) {
                if (currentRowIndex == 0) {
                    let spotlightCount = 0;
                    spotlightDriver.forEach((t, i) => {
                        if (values[t].rarityId == 1) {
                            spotlightCount++;
                        }
                    });
                    driverImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(driverImageCell);
                }
                currentRowIndex++;
                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightKart.forEach((t, i) => {
            if (values[t].rarityId == 1) {
                if (i == 0) {
                    let spotlightCount = 0;
                    spotlightKart.forEach((t, i) => {
                        if (values[t].rarityId == 1) {
                            spotlightCount++;
                        }
                    });
                    kartImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(kartImageCell);

                }

                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightGlider.forEach((t, i) => {
            if (values[t].rarityId == 1) {
                if (i == 0) {
                    let spotlightCount = 0;
                    spotlightGlider.forEach((t, i) => {
                        if (values[t].rarityId == 1) {
                            spotlightCount++;
                        }
                    });
                    gliderImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(gliderImageCell);
                }

                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow    

    }

    if (!removedRows.includes(`Super`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`Super`));
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_91011`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = saveItemAmounts[9] / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (fullPipe.Normals.Super.Drivers.length);

        let highEndKartChance = saveItemAmounts[10] / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (fullPipe.Normals.Super.Karts.length);

        let highEndGliderChance = saveItemAmounts[11] / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (fullPipe.Normals.Super.Gliders.length);

        let highEndDriverPool = fullPipe.Normals.Super.Drivers;
        let highEndKartPool = fullPipe.Normals.Super.Karts;
        let highEndGliderPool = fullPipe.Normals.Super.Gliders;
        //highEndDriverPool.concat(fullPipe.ExtraHE.Drivers);
        highEndDriverPool.sort(function (a, b) { return a - b });
        highEndKartPool.sort(function (a, b) { return a - b });
        highEndGliderPool.sort(function (a, b) { return a - b });

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_91011`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_91011`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        highEndDriverPool.forEach((t, i) => {
            if (i == 0) {
                driverImageCell.rowSpan = (highEndDriverPool.length + 1);
                newestTableBody.appendChild(driverImageCell);

            }
            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndDriverChance) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndKartPool.forEach((t, i) => {
            if (i == 0) {
                kartImageCell.rowSpan = (highEndKartPool.length + 1);
                newestTableBody.appendChild(kartImageCell);

            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndKartChance) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndGliderPool.forEach((t, i) => {
            if (i == 0) {
                gliderImageCell.rowSpan = (highEndGliderPool.length + 1);
                newestTableBody.appendChild(gliderImageCell);
            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndGliderChance) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow

    }

    if (!removedRows.includes(`Normal Spotlight`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`Normal Spotlight`));
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_121314`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = saveItemAmounts[12] / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (spotlightDriver.length);

        let highEndKartChance = saveItemAmounts[13] / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (spotlightKart.length);

        let highEndGliderChance = saveItemAmounts[14] / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (spotlightGlider.length);

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_121314`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_121314`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        let currentRowIndex = 0;

        spotlightDriver.forEach((t, i) => {
            if (values[t].rarityId == 0) {
                if (currentRowIndex == 0) {
                    let spotlightCount = 0;
                    spotlightDriver.forEach((t, i) => {
                        if (values[t].rarityId == 0) {
                            spotlightCount++;
                        }
                    });
                    driverImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(driverImageCell);
                }
                currentRowIndex++;
                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightKart.forEach((t, i) => {
            if (values[t].rarityId == 0) {
                if (i == 0) {
                    let spotlightCount = 0;
                    spotlightKart.forEach((t, i) => {
                        if (values[t].rarityId == 0) {
                            spotlightCount++;
                        }
                    });
                    kartImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(kartImageCell);

                }

                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        currentRowIndex = 0;

        spotlightGlider.forEach((t, i) => {
            if (values[t].rarityId == 0) {
                if (i == 0) {
                    let spotlightCount = 0;
                    spotlightGlider.forEach((t, i) => {
                        if (values[t].rarityId == 0) {
                            spotlightCount++;
                        }
                    });
                    gliderImageCell.rowSpan = (spotlightCount + 1);
                    newestTableBody.appendChild(gliderImageCell);
                }

                let newRow = newestTable.insertRow(-1);
                let nameCell = newRow.insertCell(-1);
                let chanceCell = newRow.insertCell(-1);
                nameCell.innerHTML = values[t].nameEng;
                chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
                chanceCell.style.width = `80px`;
            }
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow    

    }

    if (!removedRows.includes(`Normal`)) {
        document.getElementById('detailsStage').appendChild(generateWhiteBar(`Normal`));
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_151617`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = saveItemAmounts[15] / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (fullPipe.Normals.Normal.Drivers.length);

        let highEndKartChance = saveItemAmounts[16] / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (fullPipe.Normals.Normal.Karts.length);

        let highEndGliderChance = saveItemAmounts[17] / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (fullPipe.Normals.Normal.Gliders.length);

        let highEndDriverPool = fullPipe.Normals.Normal.Drivers;
        let highEndKartPool = fullPipe.Normals.Normal.Karts;
        let highEndGliderPool = fullPipe.Normals.Normal.Gliders;
        //highEndDriverPool.concat(fullPipe.ExtraHE.Drivers);
        highEndDriverPool.sort(function (a, b) { return a - b });
        highEndKartPool.sort(function (a, b) { return a - b });
        highEndGliderPool.sort(function (a, b) { return a - b });

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_151617`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_151617`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        highEndDriverPool.forEach((t, i) => {
            if (i == 0) {
                driverImageCell.rowSpan = (highEndDriverPool.length + 1);
                newestTableBody.appendChild(driverImageCell);

            }
            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndDriverChance) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndKartPool.forEach((t, i) => {
            if (i == 0) {
                kartImageCell.rowSpan = (highEndKartPool.length + 1);
                newestTableBody.appendChild(kartImageCell);

            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndKartChance) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        highEndGliderPool.forEach((t, i) => {
            if (i == 0) {
                gliderImageCell.rowSpan = (highEndGliderPool.length + 1);
                newestTableBody.appendChild(gliderImageCell);
            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (!isNaN(actualHighEndGliderChance) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow

    }


    if (!removedRows.includes(`Custom`)) {
        let tableHEClone = document.getElementById('HighEndTable').cloneNode(true);
        tableHEClone.id = `HighEndTable_${pipeId}_18`;
        document.getElementById("detailsStage").appendChild(tableHEClone);

        let highEndDriverChance = spotlightDriver.length / savePipe.itemCount;

        let actualHighEndDriverChance = highEndDriverChance / (spotlightDriver.length);

        let highEndKartChance = spotlightKart.length / savePipe.itemCount;

        let actualHighEndKartChance = highEndKartChance / (spotlightKart.length);

        let highEndGliderChance = spotlightGlider.length / savePipe.itemCount;

        let actualHighEndGliderChance = highEndGliderChance / (spotlightGlider.length);

        let newestTable = document.getElementById(`HighEndTable_${pipeId}_18`);
        let newestTableBody = document.getElementById(`HighEndTable_${pipeId}_18`).getElementsByTagName('tbody')[0];

        let driverImageCell = document.getElementById('rowSpawnHEDriver').cloneNode(true);
        let kartImageCell = document.getElementById('rowSpawnHEKart').cloneNode(true);
        let gliderImageCell = document.getElementById('rowSpawnHEGlider').cloneNode(true);

        console.log(spotlightKart);

        spotlightDriver.forEach((t, i) => {
            if (i == 0) {
                driverImageCell.rowSpan = (spotlightDriver.length + 1);
                newestTableBody.appendChild(driverImageCell);

            }
            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndDriverChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        spotlightKart.forEach((t, i) => {
            if (i == 0) {
                kartImageCell.rowSpan = (spotlightKart.length + 1);
                newestTableBody.appendChild(kartImageCell);

            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndKartChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        spotlightGlider.forEach((t, i) => {
            if (i == 0) {
                gliderImageCell.rowSpan = (spotlightGlider.length + 1);
                newestTableBody.appendChild(gliderImageCell);
            }

            let newRow = newestTable.insertRow(-1);
            let nameCell = newRow.insertCell(-1);
            let chanceCell = newRow.insertCell(-1);
            nameCell.innerHTML = values[t].nameEng;
            chanceCell.innerHTML = (savePipe.Spotlights.includes(t) ? (actualHighEndGliderChance * 100).toFixed(4) + "%" : `0.0000%`);
            chanceCell.style.width = `80px`;
        });

        for (let hah = 0; hah < 3; hah++) { newestTable.deleteRow(0); } //wow    

    }

}

function activebutone(which, location){
    document.getElementById(`menubuttonpipe1_${location}`).className = "menubuttonpipe";
    document.getElementById(`menubuttonpipe2_${location}`).className = "menubuttonpipe";
    document.getElementById(`menubuttonpipe3_${location}`).className = "menubuttonpipe";
    document.getElementById(`menubuttonpipe4_${location}`).className = "menubuttonpipe";
    document.getElementById(`menubuttonpipe5_${location}`).className = "menubuttonpipe";
    document.getElementById(`menubuttonpipe${which}_${location}`).className = "menubuttonpipe active";
}

function toggleMenu(which){
    document.getElementById('pickingStage').style.display = 'none';
    document.getElementById('newsStage').style.display = 'none';
    document.getElementById('inventoryStage').style.display = 'none';
    document.getElementById('selectStage').style.display = 'none';
    switch(which){
        case 0:
            document.getElementById('newsStage').style.display = 'block';
            break;
        case 1:
            document.getElementById('selectStage').style.display = 'block';
            break;
        case 2:
            document.getElementById('pickingStage').style.display = 'block';
            break;
        case 3:
            document.getElementById('inventoryStage').style.display = 'block';
            break;
    }
}

function toggleSettings(toggle) {
    Swipe.play();
    switch (toggle) {
        case 0:
            document.getElementById('pickingStage').style.display = 'block';
            document.getElementById('settingsStage').style.display = 'none';
            document.getElementById('newsStage').style.display = 'none';
            document.getElementById('inventoryStage').style.display = 'none';
            document.getElementById('selectStage').style.display = 'none';
            activebutone(3, `pickingStage`);
            break;
        case 1:
            document.getElementById('pickingStage').style.display = 'none';
            document.getElementById('settingsStage').style.display = 'block';
            document.getElementById('newsStage').style.display = 'none';
            document.getElementById('inventoryStage').style.display = 'none';
            document.getElementById('selectStage').style.display = 'none';
            break;
    }
}

function returnToMain() {
    Swipe.play();
    document.getElementById('pickingStage').style.display = 'block';
    document.getElementById('detailsStage').style.display = 'none';
}

function pushSeenNews(id){
    if(!savedata.seenNews.includes(id)){
        seenNews.push(id);
        savedata.seenNews.push(id);
    }
}

function returnToNews(type) {
    Swipe.play();
    if(savedata.firstLaunch == true){
        document.getElementById('pickingStage').style.display = 'block';
        document.getElementById('pickingStage').style.visibility = "visible";
        firstLaunch = false;
        savedata.firstLaunch = false;
        pushSeenNews("1");
        updateLocalSaveData();
    } else {
        document.getElementById('newsStage').style.display = 'block';
        pushSeenNews(type);
        updateLocalSaveData();
        generateNews();
    }
    document.getElementById('newsDetailsStage').style.display = 'none';
}

function changeDisableShopBGM() {
    if (document.getElementById('changeDisableShopBGM').checked) {
        disableShopBGM = true;
        settingsavedata.Settings.disableShopBGM = true;
        Shop.pause();
    } else {
        disableShopBGM = false;
        settingsavedata.Settings.disableShopBGM = false;
        Shop.play();
    }
    updateLocalSettingData();
}

function changeSingleResults() {
    if (document.getElementById('changeSingleResults').checked) {
        disableSingleResults = true;
        settingsavedata.Settings.disableSingleResults = true;
    } else {
        disableSingleResults = false;
        settingsavedata.Settings.disableSingleResults = false;
    }
    updateLocalSettingData();
}

function changeSkipStar() {
    if (document.getElementById('changeSkipStar').checked) {
        skipStarAnimation = true;
        settingsavedata.Settings.skipStarAnimation = true;
    } else {
        skipStarAnimation = false;
        settingsavedata.Settings.skipStarAnimation = false;
    }
    updateLocalSettingData();
}

function changeSkipStarPersist() {
    if (document.getElementById('changeSkipStarPersist').checked) {
        skipStarAnimationPersist = true;
        settingsavedata.Settings.skipStarAnimationPersist = true;
    } else {
        skipStarAnimationPersist = false;
        settingsavedata.Settings.skipStarAnimationPersist = false;
    }
    updateLocalSettingData();
}


function changeOfficialPipes() {
    if (document.getElementById('changeOfficialPipes').checked) {
        document.getElementById('officialBannerDiv').style.display = "block";
        settingsavedata.Settings.showOfficialPipes = true;
    } else {
        document.getElementById('officialBannerDiv').style.display = "none";
        settingsavedata.Settings.showOfficialPipes = false;
    }
    updateLocalSettingData();
}

function changePreviousPipes() {
    if (document.getElementById('changePreviousPipes').checked) {
        document.getElementById('previousBannerDiv').style.display = "block";
        settingsavedata.Settings.showPreviousPipes = true;
    } else {
        document.getElementById('previousBannerDiv').style.display = "none";
        settingsavedata.Settings.showPreviousPipes = false;
    }
    updateLocalSettingData();
}

function changeCustomPipes() {
    if (document.getElementById('changeCustomPipes').checked) {
        document.getElementById('customBannerDiv').style.display = "block";
        settingsavedata.Settings.showCustomPipes = true;
    } else {
        document.getElementById('customBannerDiv').style.display = "none";
        settingsavedata.Settings.showCustomPipes = false;
    }
    updateLocalSettingData();
}

function updateRubiesCount() {
    if (savedata.rubiesSpent != null) {
        var elements = document.getElementsByClassName("rubiesCountTxt");
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].innerHTML = savedata.rubiesSpent;
        }
        //document.getElementById('rubiesCountTxt').innerHTML = savedata.rubiesSpent;
    }
}

function resetRubiesCount() {
    if (savedata.rubiesSpent != null) {
        savedata.rubiesSpent = 0;
    }
    updateRubiesCount();
}

function validatePull(pipeId, times) {
    Select.play();
    if (savedata.Pipes[pipeId] != null && savedata.Pipes[pipeId].itemCount < times) {
        alert(`You don't have enough items in the pipe! Reset the pipe to fire ${times} ${(times > 1) ? "times" : "time"}.`);
        return;
    } else {
        let decrement = times;
        while(decrement >= 10){
            savedata.rubiesSpent += 45;
            decrement -= 10;
        }
        savedata.rubiesSpent += (decrement * 5);
        /*switch (times) {
            case 1:
                savedata.rubiesSpent += 5;
                break;
            case 10:
                savedata.rubiesSpent += 45;
                break; 
        }*/
        generatePull(pipeId, times);
        updateRubiesCount();
    }
}

function generatePull(pipeId, pullTimes) {
    readTextFile("https://halfhydra.github.io/MarioKartTourValues/Pipe/pipeData.json", 4);
    if (savedata.Pipes == null) {
        savedata.Pipes = {};
    }
    if (savedata.Pipes[pipeId] == null) {
        savedata.Pipes[pipeId] = {};
        savedata.Pipes[pipeId].itemCount = pipeData.Pipes[pipeId].InitialAmount;
        savedata.Pipes[pipeId].Spotlights = pipeData.Pipes[pipeId].Spotlights;
        savedata.Pipes[pipeId].Items = pipeData.Pipes[pipeId].Items;
    }

    resultsPipeIds = [];
    currentMultiPipeIds.splice(0, currentMultiPipeIds.length);

    currentPipeId = pipeId;

    //0 = S HE D
    //1 = S HE K
    //2 = S HE G
    //3 = HE D
    //4 = HE K
    //5 = HE G
    //6 = S S D
    //7 = S S K
    //8 = S S G
    //9 = S D
    //10 = S K
    //11 = S G
    //12 = S N D
    //13 = S N K
    //14 = S N G
    //15 = N D
    //16 = N K
    //17 = N G

    for (let i = 0; i < pullTimes; i++) {
        let currentPipe = [];
        let itemAmountsCurrent = savedata.Pipes[pipeId].Items;
        itemAmountsCurrent.forEach((t, i) => {
            for (let x = 0; x < t; x++) {
                currentPipe.push(i);
            }
        });

        let pulledItem = currentPipe[Math.floor(Math.random() * currentPipe.length)];
        console.log("[PulledItem] = " + pulledItem);
        let notValid;
        let pool;
        let randomItem;
        let spotlightItem;
        let currentSpotlightPool = [];

        savedata.Pipes[pipeId].itemCount -= 1;
        switch (pulledItem) {
            case 0: // S HE D
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length < 5) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 1:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 2:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 2 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 3:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                pool = pipeData.Pipes[pipeId].Normals.HighEnd.Drivers;
                pipeData.Pipes[pipeId].ExtraHE.Drivers.forEach((t, i) => {
                    pool.push(t);
                });
                randomItem = pool[Math.floor(Math.random() * pool.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 4:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                pool = pipeData.Pipes[pipeId].Normals.HighEnd.Karts;
                pipeData.Pipes[pipeId].ExtraHE.Karts.forEach((t, i) => {
                    pool.push(t);
                });
                randomItem = pool[Math.floor(Math.random() * pool.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 5:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                pool = pipeData.Pipes[pipeId].Normals.HighEnd.Gliders;
                pipeData.Pipes[pipeId].ExtraHE.Gliders.forEach((t, i) => {
                    pool.push(t);
                });
                randomItem = pool[Math.floor(Math.random() * pool.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 6:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 1 && randomSpotlight.toString().length < 5) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 7:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 1 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 8:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 1 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 9:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Super.Drivers[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Super.Drivers.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 10:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Super.Karts[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Super.Karts.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 11:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Super.Gliders[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Super.Gliders.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 12:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 0 && randomSpotlight.toString().length < 5) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 13:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 0 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 70) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 14:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    if (values[randomSpotlight].rarityId == 0 && randomSpotlight.toString().length == 5 && Math.round(randomSpotlight / 1000) == 30) {
                        currentSpotlightPool.push(randomSpotlight);
                    }
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
            case 15:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Normal.Drivers[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Normal.Drivers.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 16:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Normal.Karts[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Normal.Karts.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 17:
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                randomItem = pipeData.Pipes[pipeId].Normals.Normal.Gliders[Math.floor(Math.random() * pipeData.Pipes[pipeId].Normals.Normal.Gliders.length)];
                currentMultiPipeIds.push(randomItem);
                break;
            case 18: //only spotlights
                savedata.Pipes[pipeId].Items[pulledItem] -= 1;
                currentSpotlightPool = [];
                savedata.Pipes[pipeId].Spotlights.forEach((randomSpotlight, i) => {
                    currentSpotlightPool.push(randomSpotlight);
                });

                spotlightItem = currentSpotlightPool[Math.floor(Math.random() * currentSpotlightPool.length)];

                currentMultiPipeIds.push(spotlightItem);
                savedata.Pipes[pipeId].Spotlights.splice(savedata.Pipes[pipeId].Spotlights.indexOf(parseInt(spotlightItem)), 1);
                break;
        }
        addItem(currentMultiPipeIds[i], getItemType(currentMultiPipeIds[i]), values[`${currentMultiPipeIds[i]}`].rarityId);
        updatesavedata();
        updateLocalSaveData();

    }

    document.getElementById(`remaining_${pipeId}`).innerHTML = `Remaining: ${savedata.Pipes[pipeId].itemCount} / ${pipeData.Pipes[pipeId].InitialAmount}`
    createPullyPipe();

}

function getItemType(input){
    let itemType = input.toString();
    if (itemType.length < 5) {
        itemType = 0;
        //t = 
    }
    if (itemType.length == 5 && Math.round(itemType / 1000) == 30) {
        itemType = 2;
    }
    if (itemType.length == 5 && Math.round(itemType / 1000) == 70) {
        itemType = 1;
    }
    return itemType;
}

function resetPipe(id) {
    Swipe.play();
    var r = confirm("This will reset the contents of the pipe, returning it to full. Reset the pipe?");
    if (r) {
        delete savedata.Pipes[id];
        updatesavedata();
        updateLocalSaveData();
        readTextFile("https://halfhydra.github.io/MarioKartTourValues/Pipe/pipeData.json", 4);
        generatePipes();
        Select.play();
    }
}

function generateWhiteBar(text) {
    let whitebardiv = document.createElement('div');
    whitebardiv.className = "whitebardiv";

    let whitebarimg = document.createElement('img');
    whitebarimg.src = `./Images/UI/whitebar.png`;
    whitebarimg.className = `whitebarimg`;
    whitebardiv.appendChild(whitebarimg);

    let whitebartxt = document.createElement('p');
    whitebartxt.innerHTML = text;
    whitebartxt.className = `whitebartxt`;
    whitebardiv.appendChild(whitebartxt);

    return whitebardiv;
}

function generateSectionBar(text) {
    let sectionbardiv = document.createElement('div');
    sectionbardiv.className = "sectionbardiv";

    let sectionbartxt = document.createElement('p');
    sectionbartxt.innerHTML = text;
    sectionbartxt.className = `sectionbartxt`;
    sectionbardiv.appendChild(sectionbartxt);

    return sectionbardiv;
}

//Pretty stuff
document.addEventListener("mousemove", actualMouseMoveFunction);
var mousePosY = 0;
var pipeDrag = 205;
var pulling = false;
function actualMouseMoveFunction(e) {

    if (pulling) {
        if (document.getElementById('pullypipe') != null && document.getElementById('pipeSceneBottom') != null) {
            document.getElementById('pipeSceneBG').src = "./Images/Pipe/Background/PipeBG3.png";
            document.getElementById('toad_YellowBack').className = "toad_YellowBackFast";
            document.getElementById('toad_YellowBack').src = "./Images/Pipe/Toad/KinopioBackY01.png";
            document.getElementById('toad_RedBack').className = "toad_RedBackFast";
            document.getElementById('toad_RedBack').src = "./Images/Pipe/Toad/KinopioBackR01.png";
            document.getElementById('toad_GreenBack').className = "toad_GreenBackFast";
            document.getElementById('toad_GreenBack').src = "./Images/Pipe/Toad/KinopioBackG01.png";
            document.getElementById('toad_BlueBack').className = "toad_BlueBackFast";
            document.getElementById('toad_BlueBack').src = "./Images/Pipe/Toad/KinopioBackB01.png";
            document.getElementById('toad_YellowBackBottom').className = "toad_YellowBackFastBottom";
            document.getElementById('toad_YellowBackBottom').src = "./Images/Pipe/Toad/KinopioFrontY01.png";
            document.getElementById('toad_RedBackBottom').className = "toad_RedBackFastBottom";
            document.getElementById('toad_RedBackBottom').src = "./Images/Pipe/Toad/KinopioFrontR01.png";
            document.getElementById('toad_GreenBackBottom').className = "toad_GreenBackFastBottom";
            document.getElementById('toad_GreenBackBottom').src = "./Images/Pipe/Toad/KinopioFrontG01.png";
            document.getElementById('toad_BlueBackBottom').className = "toad_BlueBackFastBottom";
            document.getElementById('toad_BlueBackBottom').src = "./Images/Pipe/Toad/KinopioFrontB01.png";
            document.getElementById('pullypipeglow').style.display = "block";
            document.getElementById('pullypipeglowoverlay').style.display = "block";
            document.getElementById('pullypipeglowoverlayfinal').style.display = "block";
            if (pipeTypeIndex == 0) {
                document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/Pipe01.png";
                document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/Pipe01.png";
            } else if (pipeTypeIndex == 1) {
                document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/PipeUltra01.png";
                document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/PipeUltra01.png";
            }
        }
        if (mousePosY > e.clientY) {
            pipeDrag += 3
        }
        if (mousePosY < e.clientY) {
            pipeDrag -= 3;
        }
        if (pulling) {
            if (pipeDrag > 205) { pipeDrag = 205 }
            if (pipeDrag < 150) { pipeDrag = 150 }
            document.getElementById("pullypipe").style.height = `${pipeDrag}px`;
            document.getElementById("pullypipeglow").style.bottom = `${pipeDrag - 157}px`;
            document.getElementById("pullypipeglow").style.opacity = (pipeDrag != 205 ? ((300 - pipeDrag) / 150) : 0);
            document.getElementById("pullypipeglowoverlay").style.bottom = `${pipeDrag - 157}px`;
            document.getElementById("pullypipeglowoverlay").style.opacity = (pipeDrag != 205 ? ((300 - pipeDrag) / 150) : 0);
            document.getElementById("pullypipeglowoverlayfinal").style.bottom = `${pipeDrag - 157}px`;
            document.getElementById("pullypipeglowoverlayfinal").style.opacity = (pipeDrag != 205 ? ((300 - pipeDrag) / 150) : 0);
            if (document.getElementById("pullypipeglowoverlayfinal").style.opacity > 0.5) { document.getElementById("pullypipeglowoverlayfinal").style.opacity = 0 }
        }
        mousePosY = e.clientY;
    }

    if (!pulling) {
        if (document.getElementById('pullypipe') != null && document.getElementById('pipeSceneBottom') != null) {
            document.getElementById('pipeSceneBG').src = "./Images/Pipe/Background/animated.png";
            document.getElementById('toad_YellowBack').className = "toad_YellowBack";
            document.getElementById('toad_YellowBack').src = "./Images/Pipe/Toad/KinopioBackY00.png";
            document.getElementById('toad_RedBack').className = "toad_RedBack";
            document.getElementById('toad_RedBack').src = "./Images/Pipe/Toad/KinopioBackR00.png";
            document.getElementById('toad_GreenBack').className = "toad_GreenBack";
            document.getElementById('toad_GreenBack').src = "./Images/Pipe/Toad/KinopioBackG00.png";
            document.getElementById('toad_BlueBack').className = "toad_BlueBack";
            document.getElementById('toad_BlueBack').src = "./Images/Pipe/Toad/KinopioBackB00.png";
            document.getElementById('toad_YellowBackBottom').className = "toad_YellowBackBottom";
            document.getElementById('toad_YellowBackBottom').src = "./Images/Pipe/Toad/KinopioFrontY00.png";
            document.getElementById('toad_RedBackBottom').className = "toad_RedBackBottom";
            document.getElementById('toad_RedBackBottom').src = "./Images/Pipe/Toad/KinopioFrontR00.png";
            document.getElementById('toad_GreenBackBottom').className = "toad_GreenBackBottom";
            document.getElementById('toad_GreenBackBottom').src = "./Images/Pipe/Toad/KinopioFrontG00.png";
            document.getElementById('toad_BlueBackBottom').className = "toad_BlueBackBottom";
            document.getElementById('toad_BlueBackBottom').src = "./Images/Pipe/Toad/KinopioFrontB00.png";
            document.getElementById('pullypipeglow').style.display = "none";
            document.getElementById('pullypipeglowoverlay').style.display = "none";
            document.getElementById('pullypipeglowoverlayfinal').style.display = "none";
            if (pipeTypeIndex == 0) {
                document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/Pipe00.png";
                document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/Pipe00.png";
            } else if (pipeTypeIndex == 1) {
                document.getElementById('pullypipe').src = "./Images/Pipe/Pipe/PipeUltra00.png";
                document.getElementById('pipeSceneBottom').src = "./Images/Pipe/PipeBottom/PipeUltra00.png";
            }
        }
    }

}

var HoldPipe = document.getElementById("HoldPipe");
document.getElementById('HoldPipe').volume = 0.75;
var PipeAmbience = document.getElementById("PipeAmbience");
var GetHighEnd = document.getElementById("GetHighEnd");
GetHighEnd.volume = 0.75;
var GetSuper = document.getElementById("GetSuper");
GetSuper.volume = 0.75;
var GetNormal = document.getElementById("GetNormal");
GetNormal.volume = 0.75;
var PipeFire = document.getElementById("PipeFire");
var PipeFireStar = document.getElementById("PipeFireStar");
var pipeGo = document.getElementById("PipeGo");
var pipeGoGold = document.getElementById("PipeGoGold");

var PipeGoSingle = document.getElementById("PipeGoSingle");
var PipeGoSingleStar = document.getElementById("PipeGoSingleStar");
var PipeGoMulti = document.getElementById("PipeGoMulti");
var PipeGoMultiStar = document.getElementById("PipeGoMultiStar");

var Shop = document.getElementById("Shop");

var Select = document.getElementById("Select");
var Swipe = document.getElementById("Swipe");
//PIPE
function mouseMoveFunction(e) {
    //if(mouseDown){
    e.preventDefault();
    pipeDrag = 205;
    var pipe = document.getElementById("pullypipe");
    var y = e.clientY;
    pipe.style.height = `${pipeDrag}px`;
    pulling = true;
    //document.getElementById("pullypipe").style.height = '180px';
    console.log("mousedown on pullypipe and moving! current y = " + y);
    HoldPipe.play();
}
var defaultPipe = [2, 2, 1, 1, 1, 2, 9, 7, 4, 31, 25, 15];

var currentMultiPipeIds = [57, 93, 67, 2, 18, 34, 32, 15, 25, 6];

let resultsPipeIds = [];

var currentPipeId = 41;
var pullToggle = 1; //0 - Pulling Initial, 1 - 

function getPipeTypeIndex() {
    let type = 0;

    currentMultiPipeIds.forEach((t, i) => {
        console.log(`[T] = ${t}`);
        console.log(values[t]);
        if (values[t].rarityId == 2) {
            type = 1;
        }
    });

    if ((Math.random() * 100) < 10) {
        type = 0;
    }

    if (currentPipeId == `ACP`) { type = 1 }

    (type == 0 ? document.getElementById('pipe').style.background = `url('./Images/Pipe/Background/PipeFireBG.png')` : document.getElementById('pipe').style.background = `url('./Images/Pipe/Background/PipeUltraFireBG.png')`)

    return type;
}

let pipeTypeIndex;

function createPullyPipe() {
    let output = document.getElementById('pipe');
    output.innerHTML = "";

    finalToggle = false;

    /*let pipediv = document.createElement('div');
    pipediv.className = 'pipediv';*/

    pipeTypeIndex = getPipeTypeIndex();

    let animatedBG = document.createElement('img');
    animatedBG.id = "pipeSceneBG";
    animatedBG.src = "./Images/Pipe/Background/animated.png";
    animatedBG.className = "animatedBG";
    output.appendChild(animatedBG);

    let pipebottom = document.createElement('img');
    pipebottom.id = "pipeSceneBottom";
    pipebottom.className = "pipebottom";
    output.appendChild(pipebottom);

    let pullypipe = document.createElement('img');
    pullypipe.id = "pullypipe";
    pullypipe.className = "pullypipe";
    output.appendChild(pullypipe);

    switch (pipeTypeIndex) {
        case 0:
            pipebottom.src = "./Images/Pipe/PipeBottom/Pipe00.png";
            pullypipe.src = "./Images/Pipe/Pipe/Pipe00.png";
            break;
        case 1:
            pipebottom.src = "./Images/Pipe/PipeBottom/PipeUltra00.png";
            pullypipe.src = "./Images/Pipe/Pipe/PipeUltra00.png";
            break;
    }

    let yellowBack = document.createElement('img');
    yellowBack.id = "toad_YellowBack";
    yellowBack.className = "toad_YellowBack";
    yellowBack.src = "./Images/Pipe/Toad/KinopioBackY00.png";
    output.appendChild(yellowBack);

    let redBack = document.createElement('img');
    redBack.id = "toad_RedBack";
    redBack.className = "toad_RedBack";
    redBack.src = "./Images/Pipe/Toad/KinopioBackR00.png";
    output.appendChild(redBack);

    let greenBack = document.createElement('img');
    greenBack.id = "toad_GreenBack";
    greenBack.className = "toad_GreenBack";
    greenBack.src = "./Images/Pipe/Toad/KinopioBackG00.png";
    output.appendChild(greenBack);

    let blueBack = document.createElement('img');
    blueBack.id = "toad_BlueBack";
    blueBack.className = "toad_BlueBack";
    blueBack.src = "./Images/Pipe/Toad/KinopioBackB00.png";
    output.appendChild(blueBack);

    let yellowBackBottom = document.createElement('img');
    yellowBackBottom.id = "toad_YellowBackBottom";
    yellowBackBottom.className = "toad_YellowBackBottom";
    yellowBackBottom.src = "./Images/Pipe/Toad/KinopioFrontY00.png";
    output.appendChild(yellowBackBottom);

    let redBackBottom = document.createElement('img');
    redBackBottom.id = "toad_RedBackBottom";
    redBackBottom.className = "toad_RedBackBottom";
    redBackBottom.src = "./Images/Pipe/Toad/KinopioFrontR00.png";
    output.appendChild(redBackBottom);

    let greenBackBottom = document.createElement('img');
    greenBackBottom.id = "toad_GreenBackBottom";
    greenBackBottom.className = "toad_GreenBackBottom";
    greenBackBottom.src = "./Images/Pipe/Toad/KinopioFrontG00.png";
    output.appendChild(greenBackBottom);

    let blueBackBottom = document.createElement('img');
    blueBackBottom.id = "toad_BlueBackBottom";
    blueBackBottom.className = "toad_BlueBackBottom";
    blueBackBottom.src = "./Images/Pipe/Toad/KinopioFrontB00.png";
    output.appendChild(blueBackBottom);

    let pullypipeglowoverlay = document.createElement('img');
    pullypipeglowoverlay.id = "pullypipeglowoverlay";
    pullypipeglowoverlay.className = "pullypipeglowoverlay";
    pullypipeglowoverlay.src = "./Images/Pipe/Overlay.png";
    output.appendChild(pullypipeglowoverlay);

    let pullypipeglowoverlay2 = document.createElement('img');
    pullypipeglowoverlay2.id = "pullypipeglowoverlay2";
    pullypipeglowoverlay2.className = "pullypipeglowoverlay";
    pullypipeglowoverlay2.src = "./Images/Pipe/Overlay.png";
    //output.appendChild(pullypipeglowoverlay2);

    let pullypipeglow = document.createElement('img');
    pullypipeglow.id = "pullypipeglow";
    pullypipeglow.className = "pullypipeglow";
    pullypipeglow.src = "./Images/Pipe/Glow.png";
    output.appendChild(pullypipeglow);

    let pullypipeglowoverlayfinal = document.createElement('img');
    pullypipeglowoverlayfinal.id = "pullypipeglowoverlayfinal";
    pullypipeglowoverlayfinal.className = "pullypipeglowoverlayfinal";
    pullypipeglowoverlayfinal.src = "./Images/Pipe/Overlay.png";
    output.appendChild(pullypipeglowoverlayfinal);

    //output.appendChild(pipediv);

    output.style.display = "block";
    document.getElementById('pullypipe').addEventListener("mousedown", mouseMoveFunction);
    document.addEventListener("mouseup", mouseUpFunction);

    pullToggle = 1;

    document.getElementById('pickingStage').style.display = "none";
    document.getElementById('pullingStage').style.display = "block";
    document.getElementById('pullingStage').className = "fadeInPipe";
    Shop.pause();
    //Shop.currentTime = 0;
    PipeAmbience.play();
}

function mouseUpFunction(e) {
    let height = document.getElementById("pullypipe").style.height;
    if (height == '150px') {
        Pulling();
        pulling = false;
        return;
    }
    HoldPipe.pause();
    HoldPipe.currentTime = 0;
    document.getElementById("pullypipe").style.height = '205px';
    pulling = false;
}

function randomPull(maxTimes) {
    currentMultiPipeIds.splice(0, currentMultiPipeIds.length);
    for (let times = 0; times < maxTimes; times++) {
        let randType = Math.floor(Math.random() * 3);
        let pullItemId = 0;
        switch (randType) {
            case 0:
                pullItemId = characterid[Math.floor(Math.random() * characterid.length)];
                break;
            case 1:
                pullItemId = kartid[Math.floor(Math.random() * kartid.length)];
                break;
            case 2:
                pullItemId = gliderid[Math.floor(Math.random() * gliderid.length)];
                break;
        }
        currentMultiPipeIds.push(pullItemId);
    }
    createPullyPipe();
}

function ACP() {
    currentMultiPipeIds.splice(0, currentMultiPipeIds.length);
    currentMultiPipeIds.push(currentAllClearPipe[Math.floor(Math.random() * currentAllClearPipe.length)]);
}

var PullPipeImage = new Image();
PullPipeImage.src = "./Images/Pipe/Animation/GreenSingle.png";

var PullPipeGoldImage = new Image();
PullPipeGoldImage.src = "./Images/Pipe/Animation/GoldSingle.png";

var PullPipeMultiImage = new Image();
PullPipeMultiImage.src = "./Images/Pipe/Animation/PullPipeGreenMultiImage.png";

var PullPipeGoldMultiImage = new Image();
PullPipeGoldMultiImage.src = "./Images/Pipe/Animation/PullPipeGoldMultiImage.png";

var PullImage = new Image();
PullImage.src = "./Images/Pipe/Animation/Pull.gif";

var PullImageStar = new Image();
PullImageStar.src = "./Images/Pipe/Animation/PullStar.gif";

var PullVideo = document.createElement('video');
PullVideo.src = `./Images/Pipe/Video/Pull.mp4`;

var PullVideoStar = document.createElement('video');
PullVideoStar.src = `./Images/Pipe/Video/PullStar.mp4`;

var infBack = new Image();
infBack.src = "./Images/Pipe/GotIt/infBack.gif";

function Pulling() {

    document.removeEventListener("mouseup", mouseUpFunction);

    document.getElementById('pipe').addEventListener("click", Result);
    currentPipeId = currentMultiPipeIds.pop();
    resultsPipeIds.push(currentPipeId);

    PipeAmbience.pause();
    HoldPipe.pause();
    document.getElementById('pipe').innerHTML = "";

    let goldOffset = 0;

    let videoAnim = document.createElement('video');
    videoAnim.style.width = "608px";
    videoAnim.style.height = "1080px";
    videoAnim.style.zIndex = `100`;
    videoAnim.autoplay = true;
    videoAnim.preload = "auto";

    var animation = document.createElement('img');
    /*animation.src = PullPipeGoldImage.src;
    animation.className = "noSelect";*/
    let time = new Date().getTime();

    let rarity = values[currentPipeId].rarityId;
    let itemType = currentPipeId.toString();
    if (itemType.length < 5) {
        itemType = 0;
        //t = 
    }
    if (itemType.length == 5 && Math.round(itemType / 1000) == 30) {
        itemType = 2;
    }
    if (itemType.length == 5 && Math.round(itemType / 1000) == 70) {
        itemType = 1;
    }


    if (currentMultiPipeIds.length > 3) {
        if (rarity < 2 || rarity == 2 && itemType != 0) {
            switch (pipeTypeIndex) {
                case 0:
                    //animation.src = `./Images/Pipe/Animation/PullPipeGreenMultiImage.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GreenMulti.mp4?${time}`;
                    PipeGoMulti.play();
                    break;
                case 1:
                    //animation.src = `./Images/Pipe/Animation/PullPipeGoldMultiImage.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GoldMulti.mp4?${time}`;
                    PipeGoMulti.play();
                    break;
            }
        } else {
            switch (pipeTypeIndex) {
                case 0:
                    //animation.src = `./Images/Pipe/Animation/PullPipeGreenMultiImageStar.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GreenMultiStar.mp4?${time}`;
                    PipeGoMultiStar.play();
                    break;
                case 1:
                    //animation.src = `./Images/Pipe/Animation/PullPipeGoldMultiImageStar.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GoldMultiStar.mp4?${time}`;
                    PipeGoMultiStar.play();
                    break;
            }
        }

    } else {

        if (rarity < 2 || rarity == 2 && itemType != 0) {
            switch (pipeTypeIndex) {
                case 0:
                    //animation.src = `./Images/Pipe/Animation/GreenSingle.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GreenSingle.mp4?${time}`;
                    //animation.style.width = "608px";
                    //animation.style.height = "1080px";
                    PipeGoSingle.play();
                    break;
                case 1:
                    //animation.src = `./Images/Pipe/Animation/GoldSingle.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GoldSingle.mp4?${time}`;
                    //animation.src = `./Images/Pipe/Video/GoldSingle.mp4?${time}`;
                    //animation.style.width = "608px";
                    //animation.style.height = "1080px";
                    //animation.src = PullPipeGoldImage.src;
                    console.log('bruh')
                    PipeGoSingle.play();
                    break;
            }
        } else {
            switch (pipeTypeIndex) {
                case 0:
                    //animation.src = `./Images/Pipe/Animation/GreenSingleStar.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GreenSingleStar.mp4?${time}`;
                    //animation.style.width = "608px";
                    //animation.style.height = "1080px";
                    PipeGoSingleStar.play();
                    break;
                case 1:
                    //animation.src = `./Images/Pipe/Animation/GoldSingleStar.png?${time}`;
                    videoAnim.src = `./Images/Pipe/Video/GoldSingleStar.mp4?${time}`;
                    //animation.style.width = "608px";
                    //animation.style.height = "1080px";
                    PipeGoSingleStar.play();
                    break;
            }


        }
    }

    animation.offsetHeight;
    goldOffset = 1900;
    //let div1 = document.createElement('div');
    //let div2 = document.createElement('div');
    //document.getElementById('pipe').appendChild(div1);
    //div2.appendChild(animation);
    //document.getElementById('pipe').appendChild(animation);
    document.getElementById('pipe').appendChild(videoAnim);
    //Result
    Skippable = false;


    if (currentMultiPipeIds.length > 3) {
        //Multi
        if (rarity == 2 && itemType == 0) {
            //Star
            goldOffset = 9150; //GOOD
        } else {
            goldOffset = 5240; //GOOD
        }
    } else {
        //Single
        if (rarity == 2 && itemType == 0) {
            //Star
            goldOffset = 7900; //GOOD
        } else {
            goldOffset = 3825; //GOOD
        }
    }

    if (currentMultiPipeIds.length > 3) {
        setTimeout(function () {
            //document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
            let pipeWindow = document.getElementById('pipe');
            pipeWindow.style.backgroundImage = "url('./Images/Pipe/GotIt/infBack.gif')";
            pipeWindow.style.backgroundSize = "2000px";
        }, goldOffset);

        setTimeout(function () {
            Skippable = true;
            Result();
        }, goldOffset);
    } else {
        setTimeout(function () {
            //document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"
            let pipeWindow = document.getElementById('pipe');
            //document.getElementById('pipe').setAttribute('src', PullImage.src);
            pipeWindow.style.backgroundImage = "./Images/Pipe/GotIt/infBack.gif";
            pipeWindow.style.backgroundSize = "2000px";
        }, goldOffset);

        setTimeout(function () {
            Skippable = true;
            Result();
        }, goldOffset);
    }

}

let currentPullIndex = 0;

let currentTimeout;

let Skippable = true;

let voicetimeout;

let videoAnim = document.createElement('video');
videoAnim.id = `videoAnim`;
videoAnim.style.width = "608px";
videoAnim.style.height = "1080px";
videoAnim.autoplay = true;
videoAnim.zIndex = 100;
//videoAnim.style.position = `absolute`;
//videoAnim.style.display = `inline-block`;
videoAnim.preload = "auto";

function Result() {
    document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/Background/PullScreenshot.png)";
    document.getElementById('pipe').style.backgroundSize = "608px 1080px";

    if (!Skippable) {
        console.log("yay")
        return;
    }

    if (currentPipeId != null) {
        let rarity = values[currentPipeId].rarityId;
        let itemType = currentPipeId.toString();
        if (itemType.length < 5) {
            itemType = 0;
            //t = 
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 30) {
            itemType = 2;
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 70) {
            itemType = 1;
        }

        GetNormal.pause();
        GetSuper.pause();
        GetHighEnd.pause();

        PipeFire.pause();
        PipeFireStar.pause();

        if (pullToggle == 0) {
            clearTimeout(voicetimeout);
            /*var animation = document.createElement('img');
            animation.id = "animationPull";
            animation.className = "noSelect";
            document.getElementById('pipe').appendChild(animation);*/
            document.getElementById('pipe').innerHTML = "";

            let time = new Date().getTime();
            //animation.offsetHeight; //redraw hack
            if (rarity < 2 || rarity == 2 && itemType != 0) {
                //document.getElementById('animationPull').setAttribute('src', PullImage.src);
                //document.getElementById('videoAnim').setAttribute('src', PullVideo.src);
                //videoAnim.src = `./Images/Pipe/Video/Pull.mp4?${time}`;
                videoAnim.src = `./Images/Pipe/Video/Pull.mp4`;
                document.getElementById('pipe').appendChild(videoAnim);
                Skippable = true;
                switch(itemType){
                    case 0:
                        if(savedata.Items.Drivers[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                    case 1:
                        if(savedata.Items.Karts[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                    case 2:
                        if(savedata.Items.Gliders[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                }
                if(skipStarAnimationPersist) {
                    Skippable = true
                }
                PipeFire.currentTime = 0;
                PipeFire.play();
                currentTimeout = setTimeout(function () {
                    if (pullToggle == 1) {
                        Skippable = true;
                        Result();
                    }
                }, 2300);

            } else {
                //document.getElementById('animationPull').setAttribute('src', PullImageStar.src);
                //document.getElementById('videoAnim').setAttribute('src', PullVideoStar.src);
                //videoAnim.src = `./Images/Pipe/Video/PullStar.mp4?${time}`;
                videoAnim.src = `./Images/Pipe/Video/PullStar.mp4`;
                document.getElementById('pipe').appendChild(videoAnim);
                (skipStarAnimation == true ? Skippable = true : Skippable = false);
                switch(itemType){
                    case 0:
                        if(savedata.Items.Drivers[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                    case 1:
                        if(savedata.Items.Karts[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                    case 2:
                        if(savedata.Items.Gliders[`${currentPipeId}`].isNew && rarity == 2){
                            Skippable = false;
                        }
                        break;
                }
                if(skipStarAnimationPersist) {
                    Skippable = true
                }
                PipeFireStar.currentTime = 0;
                PipeFireStar.play();
                currentTimeout = setTimeout(function () {
                    if (pullToggle == 1) {
                        Skippable = true;
                        Result();
                    }
                }, 6300);

            }
            pullToggle = 1;
        } else if (pullToggle == 1) {
            document.getElementById('pipe').innerHTML = "";
            //document.getElementById('pipe').style.backgroundImage = "linear-gradient(rgb(0, 1, 4,0.9), rgb(16, 31, 244,0.9)), url(./Images/Pipe/GotIt/infBack.gif)"

            document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
            document.getElementById('pipe').style.backgroundSize = "2000px";
            var gradient = document.createElement('img');
            gradient.id = "gradientPipe";
            gradient.src = "./Images/Pipe/GotIt/Gradient.png"
            gradient.className = "PipeGradient";

            switch (rarity) {
                case 0:
                    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
                    gradient.src = "./Images/Pipe/GotIt/Normal.png";
                    break;
                case 1:
                    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)";
                    gradient.src = "./Images/Pipe/GotIt/Super.png";
                    break;
                case 2:
                    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)"
                    gradient.src = "./Images/Pipe/GotIt/HighEndGradient.gif";
                    break;
            }

            document.getElementById('pipe').appendChild(gradient);


            if (currentTimeout != null) {
                clearTimeout(currentTimeout);
            }

            //Maybe add some in between animation 

            switch (rarity) {
                case 0:

                    var highlight = document.createElement('img');
                    highlight.id = "highlightPipe";
                    highlight.className = "highlightpipeHIGHEND";
                    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
                    //layerone.style.opacity = 0.9;
                    document.getElementById('pipe').appendChild(highlight);

                    var layerone = document.createElement('img');
                    layerone.id = "layeronepipe_1";
                    layerone.className = "layeronepipe spinslow";
                    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layerone);

                    var layeronetwo = document.createElement('img');
                    layeronetwo.id = "layeronepipe_2";
                    layeronetwo.className = "layeronepipe spinslowback";
                    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layeronetwo);

                    var pipeItem = document.createElement('img');
                    pipeItem.id = "itemPipe";
                    pipeItem.className = "itemPipe";
                    switch (itemType) {
                        case 0:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 1:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 2:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                    }
                    document.getElementById('pipe').appendChild(pipeItem);

                    var informationBox = document.createElement('div');
                    informationBox.className = "messageBox";
                    informationBox.id = "messageBox";
                    var messageBox = document.createElement('img');
                    messageBox.id = "messageBoxBG";
                    messageBox.className = "messageBoxBG";
                    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
                    informationBox.appendChild(messageBox);

                    var messageBoxItem = document.createElement('img');
                    messageBoxItem.id = "messageBoxItem";
                    messageBoxItem.className = "messageBoxItem";
                    let itemIconNormal = values[currentPipeId].itemTypeId;
                    messageBoxItem.src = `./Images/Items/${itemIconNormal}.png`;
                    informationBox.appendChild(messageBoxItem);

                    var messageBoxNameLabel = document.createElement('p');
                    messageBoxNameLabel.id = "messageBoxNameLabel";
                    messageBoxNameLabel.className = "messageBoxNameLabel";
                    let itemNameNormal = values[currentPipeId].nameEng;
                    messageBoxNameLabel.innerHTML = `${itemNameNormal}`;
                    informationBox.appendChild(messageBoxNameLabel);

                    var messageBoxItemNameLabel = document.createElement('p');
                    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
                    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemNameNormal2 = itemData[values[currentPipeId].itemTypeId].Name;
                    messageBoxItemNameLabel.innerHTML = `${itemNameNormal2}`;
                    informationBox.appendChild(messageBoxItemNameLabel);

                    var messageBoxItemDescLabel = document.createElement('p');
                    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
                    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemDescNormal = itemData[values[currentPipeId].itemTypeId].Normal;
                    messageBoxItemDescLabel.innerHTML = `${itemDescNormal}`;
                    informationBox.appendChild(messageBoxItemDescLabel);

                    var messageBoxBar = document.createElement('img');
                    messageBoxBar.id = "messageBoxBar";
                    messageBoxBar.className = "messageBoxBar";
                    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
                    informationBox.appendChild(messageBoxBar);

                    document.getElementById('pipe').appendChild(informationBox);

                    var gotIt = document.createElement('img');
                    gotIt.id = "gotIt";
                    gotIt.className = "gotIt";
                    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
                    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
                    //layerone.style.opacity = 0.9;
                    document.getElementById('pipe').appendChild(gotIt);

                    var gotItEffect0 = document.createElement('img');
                    gotItEffect0.id = "gotItEffect0";
                    gotItEffect0.className = "gotItEffect0";
                    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
                    document.getElementById('pipe').appendChild(gotItEffect0);

                    switch(itemType){
                        case 0:
                            if(savedata.Items.Drivers[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Drivers[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 1:
                            if(savedata.Items.Karts[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Karts[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 2:
                            if(savedata.Items.Gliders[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Gliders[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                    }

                    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
                    GetNormal.currentTime = 0;
                    GetNormal.play();
                    break;
                case 1:

                    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)" 

                    var highlight = document.createElement('img');
                    highlight.id = "highlightPipe";
                    highlight.className = "highlightpipeHIGHEND";
                    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
                    //layerone.style.opacity = 0.9;
                    document.getElementById('pipe').appendChild(highlight);

                    var layerone = document.createElement('img');
                    layerone.id = "layeronepipe_1";
                    layerone.className = "layeronepipe spinslow";
                    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layerone);

                    var layeronetwo = document.createElement('img');
                    layeronetwo.id = "layeronepipe_2";
                    layeronetwo.className = "layeronepipe spinslowback";
                    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layeronetwo);

                    var pipeItem = document.createElement('img');
                    pipeItem.id = "itemPipe";
                    pipeItem.className = "itemPipe";
                    switch (itemType) {
                        case 0:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 1:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 2:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                    }
                    document.getElementById('pipe').appendChild(pipeItem);

                    var informationBox = document.createElement('div');
                    informationBox.className = "messageBox";
                    informationBox.id = "messageBox";
                    var messageBox = document.createElement('img');
                    messageBox.id = "messageBoxBG";
                    messageBox.className = "messageBoxBG";
                    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
                    informationBox.appendChild(messageBox);

                    var messageBoxItem = document.createElement('img');
                    messageBoxItem.id = "messageBoxItem";
                    messageBoxItem.className = "messageBoxItem";
                    let itemIconSuper = values[currentPipeId].itemTypeId;
                    messageBoxItem.src = `./Images/Items/${itemIconSuper}.png`;
                    informationBox.appendChild(messageBoxItem);

                    var messageBoxNameLabel = document.createElement('p');
                    messageBoxNameLabel.id = "messageBoxNameLabel";
                    messageBoxNameLabel.className = "messageBoxNameLabel";
                    let itemNameSuper = values[currentPipeId].nameEng;
                    messageBoxNameLabel.innerHTML = `${itemNameSuper}`;
                    informationBox.appendChild(messageBoxNameLabel);

                    var messageBoxItemNameLabel = document.createElement('p');
                    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
                    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemNameSuper2 = itemData[values[currentPipeId].itemTypeId].Name;
                    messageBoxItemNameLabel.innerHTML = `${itemNameSuper2}`;
                    informationBox.appendChild(messageBoxItemNameLabel);

                    var messageBoxItemDescLabel = document.createElement('p');
                    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
                    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemDescSuper = itemData[values[currentPipeId].itemTypeId].Super;
                    messageBoxItemDescLabel.innerHTML = `${itemDescSuper}`;
                    informationBox.appendChild(messageBoxItemDescLabel);

                    var messageBoxBar = document.createElement('img');
                    messageBoxBar.id = "messageBoxBar";
                    messageBoxBar.className = "messageBoxBar";
                    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
                    informationBox.appendChild(messageBoxBar);

                    document.getElementById('pipe').appendChild(informationBox);

                    var gotIt = document.createElement('img');
                    gotIt.id = "gotIt";
                    gotIt.className = "gotIt";
                    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
                    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
                    //layerone.style.opacity = 0.9;
                    document.getElementById('pipe').appendChild(gotIt);

                    var gotItEffect0 = document.createElement('img');
                    gotItEffect0.id = "gotItEffect0";
                    gotItEffect0.className = "gotItEffect0";
                    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
                    document.getElementById('pipe').appendChild(gotItEffect0);

                    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
                    GetSuper.currentTime = 0;
                    GetSuper.play();

                    switch(itemType){
                        case 0:
                            if(savedata.Items.Drivers[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Drivers[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 1:
                            if(savedata.Items.Karts[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Karts[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 2:
                            if(savedata.Items.Gliders[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Gliders[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                    }

                    var bannertop = document.createElement('div');
                    bannertop.id = "bannertop";
                    bannertop.className = "bannertop";
                    bannertop.style.background = `url(./Images/Pipe/GotIt/GetItemPattern00.png)`;
                    bannertop.style.backgroundSize = `30px auto`;

                    var superBannerImg = document.createElement('img');
                    superBannerImg.id = "superBannerImg";
                    superBannerImg.className = "superBannerImg";
                    superBannerImg.src = `./Images/Pipe/GotIt/RareUSen.png`;
                    setTimeout(function () {
                        document.getElementById('pipe').appendChild(bannertop);
                        document.getElementById('pipe').appendChild(superBannerImg);
                    }, 1)
                    break;
                case 2:

                    //document.getElementById('pipe').style.backgroundImage = "url(./Images/Pipe/GotIt/infBack.gif)" 

                    var highlight = document.createElement('img');
                    highlight.id = "highlightPipe";
                    highlight.className = "highlightpipeHIGHEND";
                    highlight.src = "./Images/Pipe/GotIt/Highlight.png"
                    document.getElementById('pipe').appendChild(highlight);

                    var layerone = document.createElement('img');
                    layerone.id = "layeronepipe_1";
                    layerone.className = "layeronepipe spinslow";
                    layerone.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layerone);

                    var layeronetwo = document.createElement('img');
                    layeronetwo.id = "layeronepipe_2";
                    layeronetwo.className = "layeronepipe spinslowback";
                    layeronetwo.src = "./Images/Pipe/GotIt/LayerOne.png"
                    document.getElementById('pipe').appendChild(layeronetwo);

                    var pipeItem = document.createElement('img');
                    pipeItem.id = "itemPipe";
                    pipeItem.className = "itemPipe";
                    switch (itemType) {
                        case 0:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 1:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                        case 2:
                            pipeItem.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${currentPipeId}.png`;
                            break;
                    }
                    document.getElementById('pipe').appendChild(pipeItem);

                    var informationBox = document.createElement('div');
                    informationBox.className = "messageBox";
                    informationBox.id = "messageBox";
                    var messageBox = document.createElement('img');
                    messageBox.id = "messageBoxBG";
                    messageBox.className = "messageBoxBG";
                    messageBox.src = `./Images/Pipe/GotIt/InformationBox.png`;
                    informationBox.appendChild(messageBox);

                    var messageBoxItem = document.createElement('img');
                    messageBoxItem.id = "messageBoxItem";
                    messageBoxItem.className = "messageBoxItem";
                    let itemIcon = values[currentPipeId].itemTypeId;
                    messageBoxItem.src = `./Images/Items/${itemIcon}.png`;
                    informationBox.appendChild(messageBoxItem);

                    var messageBoxNameLabel = document.createElement('p');
                    messageBoxNameLabel.id = "messageBoxNameLabel";
                    messageBoxNameLabel.className = "messageBoxNameLabel";
                    let itemName = values[currentPipeId].nameEng;
                    messageBoxNameLabel.innerHTML = `${itemName}`;
                    informationBox.appendChild(messageBoxNameLabel);

                    var messageBoxItemNameLabel = document.createElement('p');
                    messageBoxItemNameLabel.id = "messageBoxItemNameLabel";
                    messageBoxItemNameLabel.className = "messageBoxItemNameLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemName2 = itemData[values[currentPipeId].itemTypeId].Name;
                    messageBoxItemNameLabel.innerHTML = `${itemName2}`;
                    informationBox.appendChild(messageBoxItemNameLabel);

                    var messageBoxItemDescLabel = document.createElement('p');
                    messageBoxItemDescLabel.id = "messageBoxItemDescLabel";
                    messageBoxItemDescLabel.className = "messageBoxItemDescLabel";
                    //let itemName = values[currentPipeId].nameEng;
                    let itemDesc = itemData[values[currentPipeId].itemTypeId].HighEnd;
                    messageBoxItemDescLabel.innerHTML = `${itemDesc}`;
                    informationBox.appendChild(messageBoxItemDescLabel);

                    var messageBoxBar = document.createElement('img');
                    messageBoxBar.id = "messageBoxBar";
                    messageBoxBar.className = "messageBoxBar";
                    messageBoxBar.src = `./Images/Pipe/GotIt/WhiteBar.png`;
                    informationBox.appendChild(messageBoxBar);

                    document.getElementById('pipe').appendChild(informationBox);

                    var gotIt = document.createElement('img');
                    gotIt.id = "gotIt";
                    gotIt.className = "gotIt";
                    gotIt.src = `./Images/Pipe/GotIt/GotIt.png`;
                    gotIt.addEventListener("webkitAnimationEnd", changeToLoop);
                    //layerone.style.opacity = 0.9;
                    document.getElementById('pipe').appendChild(gotIt);

                    var gotItEffect0 = document.createElement('img');
                    gotItEffect0.id = "gotItEffect0";
                    gotItEffect0.className = "gotItEffect0";
                    gotItEffect0.src = `./Images/Pipe/GotIt/GetItemEffect00.png`;
                    document.getElementById('pipe').appendChild(gotItEffect0);

                    document.getElementById('highlightPipe').className = "highlightpipespinHIGHEND"
                    GetHighEnd.currentTime = 0;
                    GetHighEnd.play();

                    switch(itemType){
                        case 0:
                            if(savedata.Items.Drivers[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Drivers[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 1:
                            if(savedata.Items.Karts[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Karts[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                        case 2:
                            if(savedata.Items.Gliders[`${currentPipeId}`].isNew){
                                var newIcon = document.createElement('img');
                                newIcon.id = "newIcon";
                                newIcon.className = "newIcon";
                                newIcon.src = `./Images/UI/New.png`;
                                informationBox.appendChild(newIcon);
                                savedata.Items.Gliders[`${currentPipeId}`].isNew = false;
                                newItems.push(currentPipeId);
                            }
                            break;
                    }

                    var bannertop = document.createElement('div');
                    bannertop.id = "bannertop";
                    bannertop.className = "bannertop";
                    bannertop.style.background = `url(./Images/Pipe/GotIt/GetItemPattern00.png)`;
                    bannertop.style.backgroundSize = `30px auto`;

                    var highEndBannerImg = document.createElement('img');
                    highEndBannerImg.id = "highEndBannerImg";
                    highEndBannerImg.className = "highEndBannerImg";
                    highEndBannerImg.src = `./Images/Pipe/GotIt/UltraRareUSen.png`;
                    setTimeout(function () {
                        document.getElementById('pipe').appendChild(bannertop);
                        document.getElementById('pipe').appendChild(highEndBannerImg);
                    }, 1)
                    break;
            }

            if(itemType == 0){
                let voiceclip = new Audio(`https://halfhydra.github.io/MarioKartTourValues/Pipe/sounds/${currentPipeId}.wav`);
                switch(rarity){
                    case 0:
                        voicetimeout = setTimeout(function(){ let tester = currentPipeId;
                            if(currentPipeId == tester) voiceclip.play(); }, 700);
                        break;
                    case 1:
                        voicetimeout = setTimeout(function(){ let tester = currentPipeId;
                            if(currentPipeId == tester) voiceclip.play(); }, 1200); //possibly a little more 
                        break;
                    case 2:
                        voicetimeout = setTimeout(function(){ let tester = currentPipeId;
                            if(currentPipeId == tester) voiceclip.play(); }, 2800);
                        break;
                }
            }

            pullToggle = 0;
            currentPipeId = currentMultiPipeIds.pop();
            resultsPipeIds.push(currentPipeId);
        }//pulltoggle = 1
    }//if array is not empty
    else {
        document.getElementById('pipe').removeEventListener("click", Result);
        finalResults();
        clearTimeout(voicetimeout);
    }
}

function deleteOld() {
    document.getElementById('gradientPipe').remove();
    document.getElementById('highlightPipe').remove();
    document.getElementById('layeronepipe_1').remove();
    document.getElementById('layeronepipe_2').remove();
    document.getElementById('itemPipe').remove();
    document.getElementById('messageBox').remove();
    document.getElementById('gotIt').remove();
    document.getElementById('gotItEffect0').remove();
}

function finalResults() {
    console.log("Final");

    if (!disableShopBGM) {
        Shop.play();
    }

    finalToggle = true;

    //document.getElementById('pipe').style.backgroundImage = "";

    setTimeout(function () {
        deleteOld();
    }, 200);

    setTimeout(function () {
        if (disableSingleResults && resultsPipeIds.length == 2) {
            document.getElementById('pickingStage').style.display = "block";
            document.getElementById('pullingStage').style.display = "none";
            document.getElementById('pipe').innerHTML = "";
        }
    }, 800);

    var resultBG = document.createElement('img');
    resultBG.id = "resultBG";
    resultBG.src = "./Images/Pipe/GotIt/Result.png"
    resultBG.className = "resultBG";
    //resultBG.addEventListener("webkitAnimationEnd", deleteOld);
    document.getElementById('pipe').appendChild(resultBG);

    var itemList = document.createElement('img');
    itemList.id = "itemList";
    itemList.src = "./Images/Pipe/GotIt/ItemList.png"
    itemList.className = "itemList";
    document.getElementById('pipe').appendChild(itemList);

    var itemListPanel = document.createElement('div');
    itemListPanel.id = "itemListPanel";
    itemListPanel.className = "itemListPanel";
    document.getElementById('pipe').appendChild(itemListPanel);

    resultsPipeIds.forEach((t, i) => {
        if (t == null) {
            return;
        }
        let itemType = t.toString();
        let itemRarity = (parseInt(values[t].rarityId) + 1).toString();
        if (itemType.length < 5) {
            itemType = 0;
            //t = 
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 30) {
            itemType = 2;
        }
        if (itemType.length == 5 && Math.round(itemType / 1000) == 70) {
            itemType = 1;
        }

        //console.log("[" + t + "] [" + itemType + "] [" + i + "]");

        let output = document.getElementById('itemListPanel');

        if (itemType == 0) {
            var panel = document.createElement('div');
            panel.className = 'ckgpanelpipe';
            panel.id = `invpipepanel${t}`;
            panel.addEventListener('click', function () {
                invCharacter(characterid[i], i);
            });

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormal.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrare.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighend.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newCharacter';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/Character Icon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormalchar.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerarechar.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighendchar.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);

            /*if(savedata.Items.Drivers[t] == null){
            let panelNewIcon = document.createElement('img');
            panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
            panelNewIcon.className = 'panelNewIcon';
            panel.appendChild(panelNewIcon);
            }*/

            if(newItems.includes(t)){
                let panelNewIcon = document.createElement('img');
                panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                panelNewIcon.className = 'panelNewIcon';
                panel.appendChild(panelNewIcon);
                newItems.splice(newItems.indexOf(t),1);
            }

            /*switch(itemType){
                case 0:
                    if(savedata.Items.Drivers[`${t}`].isNewResults){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Drivers[`${t}`].isNewResults = false;
                    }
                    break;
                case 1:
                    if(savedata.Items.Karts[`${t}`].isNewResults){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Karts[`${t}`].isNewResults = false;
                    }
                    break;
                case 2:
                    if(savedata.Items.Gliders[`${t}`].isNewResults){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Gliders[`${t}`].isNewResults = false;
                    }
                    break;
            }*/

            let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);

            output.appendChild(panel);

        } else if (itemType == 1) {
            var panel = document.createElement('div');
            panel.className = 'ckgpanelpipe';
            panel.id = `invpipepanel${t}`;
            panel.addEventListener('click', function () {
                invKart(kartid[i], i);
            });

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newKart';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormal.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerare.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighend.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);

            if(newItems.includes(t)){
                let panelNewIcon = document.createElement('img');
                panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                panelNewIcon.className = 'panelNewIcon';
                panel.appendChild(panelNewIcon);
                newItems.splice(newItems.indexOf(t),1);
            }

            /*switch(itemType){
                case 0:
                    if(savedata.Items.Drivers[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Drivers[`${t}`].isNew = false;
                    }
                    break;
                case 1:
                    if(savedata.Items.Karts[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Karts[`${t}`].isNew = false;
                    }
                    break;
                case 2:
                    if(savedata.Items.Gliders[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Gliders[`${t}`].isNew = false;
                    }
                    break;
            }*/

            let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);

            output.appendChild(panel);
        } else if (itemType == 2) {
            var panel = document.createElement('div');
            panel.className = 'ckgpanelpipe';
            panel.id = `invpipepanel${t}`;
            panel.addEventListener('click', function () {
                invGlider(gliderid[i], i);
            });

            let bottomimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                    break;
                case "2":
                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                    break;
                case "3":
                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                    break;
            }
            bottomimg.className = 'bottomimg';
            panel.appendChild(bottomimg);

            let newCharacter = document.createElement('img');
            newCharacter.className = 'newGlider';
            newCharacter.src = `https://halfhydra.github.io/MarioKartTourValues/Images/ItemIcon/${t}.png`;
            panel.appendChild(newCharacter);

            let topimg = document.createElement('img');
            switch (itemRarity) {
                case "1":
                    topimg.src = `./Images/UI/outlinenormal.png`;
                    break;
                case "2":
                    topimg.src = `./Images/UI/outlinerare.png`;
                    break;
                case "3":
                    topimg.src = `./Images/UI/outlinehighend.png`;
                    break;
            }
            topimg.className = 'topimg';
            panel.appendChild(topimg);

            /*if(savedata.Items.Gliders[t] == null){
            let panelNewIcon = document.createElement('img');
            panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
            panelNewIcon.className = 'panelNewIcon';
            panel.appendChild(panelNewIcon);
            }*/

            if(newItems.includes(t)){
                let panelNewIcon = document.createElement('img');
                panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                panelNewIcon.className = 'panelNewIcon';
                panel.appendChild(panelNewIcon);
                newItems.splice(newItems.indexOf(t),1);
            }

            /*switch(itemType){
                case 0:
                    if(savedata.Items.Drivers[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Drivers[`${t}`].isNew = false;
                    }
                    break;
                case 1:
                    if(savedata.Items.Karts[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Karts[`${t}`].isNew = false;
                    }
                    break;
                case 2:
                    if(savedata.Items.Gliders[`${t}`].isNew){
                        let panelNewIcon = document.createElement('img');
                        panelNewIcon.src = `./Images/Pipe/GotIt/New.png`;
                        panelNewIcon.className = 'panelNewIcon';
                        panel.appendChild(panelNewIcon);
                        savedata.Items.Gliders[`${t}`].isNew = false;
                    }
                    break;
            }*/

            let panelAmount = document.createElement('img');
            panelAmount.src = `./Images/Pipe/GotIt/Amount.png`;
            panelAmount.className = 'panelAmount';
            panel.appendChild(panelAmount);

            output.appendChild(panel);
        }

    });

    setTimeout(function () {
        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtnpipe';
        xbtn.addEventListener('click', function () {
            document.getElementById('pickingStage').style.display = "block";
            document.getElementById('pullingStage').style.display = "none";
            document.getElementById('pipe').innerHTML = "";
        });
        document.getElementById('pipe').appendChild(xbtn);

    }, 1000);
}


function changeToLoop() {
    document.getElementById('gotIt').className = "gotItLoop";
}

function loopAudience() {
    if (document.getElementById('PipeAmbience').currentTime >= 9.0) {
        document.getElementById('PipeAmbience').currentTime = 2.3;
    }
}

function loopHold() {
    if (document.getElementById('HoldPipe').currentTime >= 3.5) {
        document.getElementById('HoldPipe').currentTime = 2;
    }
}

function loopShop() {
    if (document.getElementById('Shop').currentTime >= 14.6) {
        document.getElementById('Shop').currentTime = 0;
    }
}