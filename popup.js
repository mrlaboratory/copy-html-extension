// copy url 
document.getElementById('copy-url').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'window.location.href'
    }, function (results) {
        copy(copyUrl(results[0]));
    });
    document.getElementById('copy-url').innerHTML = 'Copied'
});



// copy post code
document.getElementById('copy-post').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: '(' + removeAds + ')();'
      });
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



const copyUrl = (url) => {
    var parts = url.split("/");
    var lastPart = parts[parts.length - 1];
    var productName = lastPart.split(".")[0];
    return productName
}



// const shorturl= (url)=> {
//     const API_KEY = "7e7abf0fbae1ed4c444ca7136d29b8d758b81";
//     return fetch(`https://cutt.ly/api/api.php?key=${API_KEY}&short=${url}`)
//       .then(response => response.json())
//       .then(data => {
//         return data.url.shortLink;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
//   async function getShortUrl() {
//     const mijan = await shorturl(murl);
//   }
//   const shUrl = await getShortUrl();
// for remove google ads 
// background.js

function removeAds() {
    const elements = document.querySelectorAll('.postarea .widget, .adsbygoogle, .google-auto-placed');
    elements.forEach(element => element.remove());
    const contain = document.querySelector('.postarea');
    const text = contain.innerHTML;
    const newText = text.replace(/<font style="vertical-align: inherit;">/g, '')
                       .replace(/<\/font>/g, '')
                       .replace(/www.neotericit.com/g, 'en.neotericit.com');
                       contain.innerHTML = newText;

    const murl = window.location.href
    var parts = murl.split("/");
    var lastPart = parts[parts.length - 1];
    var productName = lastPart.split(".")[0];
    const str = "<p>Thanks for read the post. You can also read the article in bangla - <a target='_blank' href='"+murl+"'>"+productName+"</a></p>"
const container = document.querySelector('.postarea');
container.innerHTML += str;




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





//   document.addEventListener('DOMContentLoaded', function() {
//     var button = document.getElementById('ctab');
//     button.addEventListener('click', function() {
//       // execute the code to modify the first tab
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var firstTabId = tabs[0].id;
//         var code = `
//           var container = document.querySelector('input.whsOnd.zHQkBf');
//           container.textContent = 'mijan';
//         `;
//         chrome.tabs.executeScript(firstTabId, {code: code});
//       });
    
//     });
//   });