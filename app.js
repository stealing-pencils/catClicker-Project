// MODEL /////////////////////

// cat object
let model = {
  listOfCats: [
    {
      name: "Felix",
      image: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg"
    },{
      name: "Traxis",
      image: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg"
    },{
      name: "Nevil",
      image: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"
    }, {
      name: "Pickle",
      image: "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"
    }, {
      name: "Nelly",
      image: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
    }
  ]
};






// VIEW ////////////////////

// Pt 1 VIEW = MENU ////////////

// menu is rendered
let viewMenu = {
  // renders as many buttons as there are cats in listOfCats
  createButtons: function(listOfCats) {
    let numberOfButtons = 0;
    for(let i = 0; i < model.listOfCats.length; i ++) {

      let newButton = document.createElement("button");
      let addButtonToMenu = document.querySelector(".catMenu");
      let setButtonId = model.listOfCats[numberOfButtons];
      addButtonToMenu.appendChild(newButton);
      // sets text on button
      newButton.textContent = "I'm cat" + " " + setButtonId.name;
      // sets button id to cat name
      newButton.setAttribute("id", numberOfButtons);
      numberOfButtons = numberOfButtons + 1;


    }
  }
};

viewMenu.createButtons();



let catViewingArea = {
  // renders image area

  runCounter: function(currentCat) {
    console.log(currentCat);
    let totalCatClicks = model.listOfCats[currentCat].clickCounter;
    console.log(totalCatClicks);
    let addCounter = $("#numberOfClicks");
    addCounter.html(totalCatClicks);
  }

};

// catViewingArea.createCounter();
// Pt 2 VIEW = CAT VIEWING AREA

// cat viewing areas is rendered with cat name, image and number of clicks.

// OCTOPUS /////////////////
let octopus = {

// 1. When app loads initialize app


// 2. Current cat  gets set to the cat that has been clicked on in menuList


//  TO DO:  set button ids to numbers using for loop and link them to
//the click event here and so the images.

  bindCatToButton: function() {
    let currentCat;
    let addImage = document.querySelector(".catImage");

    let whichCat = 0;
    for(let i = 0; i < model.listOfCats.length; i ++) {
      let setImageSrc = model.listOfCats[whichCat].image;
      whichCat = whichCat + 1;
    }
    // sets cat image to the relevant button
    $("button").click(function() {
      currentCat = this.id;
      // resets counter
      let resetCounter = $("#numberOfClicks");
      resetCounter.html(0);
      addImage.setAttribute("src", model.listOfCats[currentCat].image);

      octopus.catClickCounter(currentCat);
    });
  },


// 3. Cat viewing area is told to render

// 4. Octopus runs method that increases counter based on number of times image is clicked
  catClickCounter: function(currentCat) {
    console.log(currentCat);
    let increaseClickTally = 0;
    // let increaseClickTally = model.listOfCats[currentCat].clickTally;
    $("img").click(function() {
      increaseClickTally = increaseClickTally + 1;
      model.listOfCats[currentCat].clickCounter = increaseClickTally;
      catViewingArea.runCounter(currentCat);
    })
  }

};

octopus.bindCatToButton();
// octopus.catClickCounter();
