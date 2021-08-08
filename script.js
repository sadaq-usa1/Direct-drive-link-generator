function generateDirectDl(){
    // Selecting Input Field and Getting value
    var inputLink = document.getElementById('input').value;


    // Spliting link into wordblock and joining by "/"
    var modifiedLink = inputLink.split("/").join("/").split("=").join("/").split("&").join("/").split('?').join("/");

    // spliting modified link into an array
    var splitedLinks = modifiedLink.split("/");

    // Cheching If Folder word is in link and so block that 
    if(splitedLinks.indexOf(/folder/i) != -1 || splitedLinks.indexOf(/folders/i) != -1 || splitedLinks.indexOf(/folderview/i) != -1 ){

        document.getElementById('result').innerText = `Folder Detected`;
        
        
    }
    if(inputLink == ""){
        document.getElementById('result').innerText = `Enter Link First`;

        
    }
    if(inputLink != "" && splitedLinks.indexOf(/folder/i) == -1 && splitedLinks.indexOf(/folders/i) == -1 && splitedLinks.indexOf(/folderview/i) == -1 ){
        //Counting Splited link's arrays length 
        let countSplitedLinks = splitedLinks.map(count => count.length);

        // Counting Drive ID's Index from array which has maximum words
        var driveIdIndex = countSplitedLinks.indexOf(Math.max(...countSplitedLinks));

        // Getting the drive Id using Index 
        var driveId = splitedLinks[driveIdIndex];

        document.getElementById("copy-btn").style.display = "block";

        // Showing Result
        // var result = document.getElementById('result').innerText = `https://drive.google.com/uc?export=download&id=${driveId}`;

        var result = document.getElementById('result').innerHTML = `<form><input id="result-box" type="text" value="https://drive.google.com/uc?export=download&id=${driveId}"></form>`;
    }


}


function copy() {
    /* Get the text field */
    var copyText = document.getElementById('result-box');
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    var tooltip = document.getElementById("myHoverText");
  tooltip.innerHTML = "Copied";

}

function outFunc() {
    var tooltip = document.getElementById("myHoverText");
    tooltip.innerHTML = "Copy to clipboard";
  }



