


document.getElementById('add-img-title').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: '(' + addImgTitle + ')();'
      });
      this.innerHTML = 'Added and Copied'
 
});
function addImgTitle() {
   
    if (window.location.href === "https://www.blogger.com/blog/post/edit/8607048692374604065/5975976895684574881") {
        const mytitle = document.querySelector('input.whsOnd.zHQkBf').value;
        const iframe = document.querySelector(".ZW3ZFc.editable");
        const images = iframe.contentDocument.querySelectorAll("img");
        const attributesToRemove = [ "border", "height", "width"];
        let i = 0 ;
        for (const image of images) {
            i++
            
            // image.setAttribute("src",JSON.parse(image.parentElement.getAttribute('data-original-attrs'))['data-original-href']);
            image.setAttribute("alt", mytitle+" - Image no "+ i);
            image.setAttribute("title", mytitle+" - Image no "+ i);
            image.setAttribute("loading","lazy");
            for (let attribute of attributesToRemove) {
                image.removeAttribute(attribute);
            }
        }
        const editable = iframe.contentDocument.querySelector(".editable");
    
        const textarea = document.createElement("textarea");
        
    textarea.value = editable.innerHTML;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log("Content copied to clipboard.");
    
} else {
    this.innerHTML = 'Not Worked'
    console.log('Code not worked for url')
    alert('Code not worked for url')
}

document.querySelector('input.whsOnd.zHQkBf').value="Deshboard";


}



// let mtitle = "test title "
// const iframe = document.querySelector(".ZW3ZFc.editable");
// const images = iframe.contentDocument.querySelectorAll("img");
// for (const image of images) {
//       image.setAttribute("alt", mtitle);
//     image.setAttribute("title", mtitle);
// image.removeAttribute('data-original-width');
// image.removeAttribute('data-original-height');
// image.removeAttribute('border');
// image.removeAttribute('height');
// image.removeAttribute('width');
// }


// copy url 
document.getElementById('copy-url').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'window.location.href'
    }, function (results) {
        copy(copyUrl(results[0]));
    });
    this.innerHTML = 'Copied'
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
    
    this.innerHTML = 'Copied'
});


// copy post 
document.getElementById('copy-des').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'document.querySelector(".pDesc").textContent'
    }, function (results) {
        copy(results[0]);
    });
    this.innerHTML = 'Copied'
});




// copy title 
document.getElementById('copy-title').addEventListener('click', function () {
    chrome.tabs.executeScript({
        code: 'document.title'
    }, function (results) {
        copy(results[0]);
    });
    this.innerHTML = 'Copied'
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
  



// Add an event listener to the button




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