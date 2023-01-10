// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "get_text") {
      // Get the text from the input box with the specified class name
      var input = document.querySelector("input." + request.className);
      var text = input.value;
      sendResponse({text: text});
    } else if (request.message === "paste_text") {
      // Paste the text into the input box with the specified class name
      var input = document.querySelector("input." + request.className);
      input.value = request.text;
    }
  });
  