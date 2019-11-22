
let hourMoment = moment().get('hour');


calData.forEach(function (hour, i) {
    // console.log(calData[i].Time)
    $('#container').append(` 
    <div class="container" id="container">
         <div class="row hour-row">
            <div class="time-block" id="timeblock`+ i + `">
                `+ hour.Timestring + `
            </div>
             <div class="content-block">
                 <textarea id="content`+ i + `"></textarea>
             </div>
             <button class=saveBtn id="saveBtn`+ i + `">
                 <img src="./assets/images/floppy-disk.svg" height="25px" width="25px">
             </button>
         </div>
     </div>
 `);
    const saveBtnEl = document.getElementById(`saveBtn` + i);
    const contentEl = document.getElementById(`content` + i);
    const timeEl = document.getElementById(`timeblock` + i);
    let savedContent = JSON.parse(localStorage.getItem("contentEl" + i))


    if (savedContent) {
        contentEl.value = savedContent;
    }


    saveBtnEl.addEventListener("click", function () {
        let userInput = contentEl.value;
        calData[i].content = userInput; //iterative value has been passed to userInput, hence no i on one side of this
        localStorage.setItem("contentEl" + i, JSON.stringify(userInput));
        saveBtnEl.innerText = "Saved!"
        saveBtnEl.classList.add("saveBtnClicked")
    })




    function timeLoop() {
        momentHour = moment().get('hour').toString();
        setInterval(() => {
            timeLoop()
        }, 1000);
    }
    timeLoop()

    timeColorEl = hour.Time
    hourMoment = moment().get('hour');
    console.log (timeEl)
    console.log(timeColorEl)
    if (timeColorEl === hourMoment) {
        timeEl.classList.add("time-block-present");
    }
    if (timeColorEl > hourMoment) {
        timeEl.classList.add("time-block-future");
    }

})


//if time is less than moment value, past class
//if time is equal to moment value, present class
//if time is greater than moment value, future class





function timeLoop() {
    document.getElementById("timeanddate").innerText = moment().format('MMMM Do YYYY, h:mm:ss a').toString();
    setInterval(() => {
        timeLoop()
    }, 1000);
}

timeLoop()








//Create Time/Data Array
//Create Loop for Pulling Data / Generating HTML for each hour
    //could just right everything (and test) for just one hour slot, then when working propogate with whole array
    //this would include generating a block for time on the left, content in middle, and save button on right
    //this would include time-sensitive properties of each block - before, current, future (transparent colors maybe? hover colors only?)


    //would also ultimately include the functionality of each block, incluing the save to/pull from local storage
        //event listeners needed on save-buttons on right
        //when a save button has been clicked, it displays "saved!" and shows a diff color until refreshed?
        //when unsaved content is in box, it displays this by changing color or something
            //IF content has been entered AND save hasn't been pressed, change class to "unsaved" - perhaps an icon appears on one side
            //If save button has been pushed AND there was content in data, display "saved!" (class="saved")
        //color coding for time before, present, future
            //use moment.js

        //actually saving/pulling the data
            //entire middle is input field, user types innertext, and app generates in same location from stored data
            //when save button clicked: IF there is data, send data to local storage
            //when block is refreshed: If local storage item = null, nothing, if something, convert to string and innerHTML
            //when creating keys for each content box - make the key name somehting iterative like "[i]time data"
            //input field has attribute called "value"

    //classes to make
        //saved / unsaved (save box itself and/or content box (data))
        //hover over content box (increase height?)

//info on top/header
    //current time date

    //things to research
        //the user input text - how to make the field of display also be field of input
        //text beyond length of box - to keep boxes uniform, text limit or field that can scroll?
            //if you go the scroll field route, style the box to be transpent so it appears to just be the block
        //JSON - refresh on this, local storage get and set

    //bonus - when you click on a specific hour (or hover over), it gets bigger/pops up?
    //bonus - button on top that says "My Day" that when clicked brings up an overview summary of anything inputted on the calendar
    //bonus - switch between days?




