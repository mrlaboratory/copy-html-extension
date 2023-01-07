// copy url 
document.getElementById('copy-url').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'window.location.href'
    }, function (results) {
        copyUrl(results[0]);
    });
    document.getElementById('copy-url').innerHTML = 'Copied'
});



// copy post code
document.getElementById('copy-post').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'document.querySelector(".postarea").innerHTML'
    }, function (results) {
        copy(results[0]);
    });
    document.getElementById('copy-post').innerHTML = 'Copied'
});


// copy post 
document.getElementById('copy-des').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'document.querySelector(".pDesc").textContent'
    }, function (results) {
        copy(results[0]);
    });
    document.getElementById('copy-des').innerHTML = 'Copied'
});




// copy title 
document.getElementById('copy-title').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'document.title'
    }, function (results) {
        copy(results[0]);
    });
    document.getElementById('copy-title').innerHTML = 'Copied'
});





function copy(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}



function copyUrl(url) {
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    var productName = lastPart.split(".")[0];
    copy(productName);
}





// document.getElementById('copy-title').addEventListener('click', copyTitle);
// function copyTitle() {
//     var title = document.title;
//     copy(title);
//   }


//   function copyHTML() {
//     chrome.tabs.executeScript({
//       code: 'document.querySelector(".postarea").outerHTML'
//     }, function(results) {
//         copy(results[0]);

//     });

//   }




// copy title 







//   var container = document.querySelector('.postarea');
// var elementsHTML = container.innerHTML;
// console.log(elementsHTML)
