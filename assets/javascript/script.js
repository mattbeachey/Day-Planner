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

        //actually saving/pulling the data
            //entire middle is input field, user types innertext, and app generates in same location from stored data
            //when save button clicked: IF there is data, send data to local storage
            //when block is refreshed: If local storage item = null, nothing, if something, convert to string and innerHTML

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

