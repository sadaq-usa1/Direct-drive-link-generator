
function generateDirectDl(){
    var inputLink = document.getElementById('input').value;


    var trimedLink = inputLink.trim();

    function checkDriveId(splitedLinks){

        return splitedLinks.length > 25 && splitedLinks.length < 50;
    }

    if(trimedLink == ""){

        var result = document.getElementById('result').innerText = `Enter Link First`;

        return result;
    }

    if( trimedLink.search(/HTTP/gi) == -1 || trimedLink.search(/DRIVE/gi) == -1 || trimedLink.search(/GOOGLE/gi) == -1  ){

        var result = document.getElementById('result').innerText = `Enter A Valid Google Drive File Link`;

        return result;
    }
    
    if( trimedLink.search(/FOLDER/gi) != -1 ){

        var result = document.getElementById('result').innerText = `Folder Isn't Supported`;

        return result;
    }
    else{

        var modifiedLink = trimedLink.split("/").join("/").split("=").join("/").split("&").join("/").split('?').join("/");

        var splitedLinks = modifiedLink.split("/");

        var driveId = splitedLinks.filter(checkDriveId);

        document.getElementById("copy-btn").style.display = "block";

        var result = document.getElementById('result').innerHTML = `<form><input id="result-box" type="text" value="https://drive.google.com/uc?export=download&id=${driveId}"></form>`;
        
        return result;
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



