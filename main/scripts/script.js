document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.eventButton').addEventListener('click', function() {

        chrome.windows.getCurrent(function (currentWindow) {
            chrome.tabs.query({active: true, windowId: currentWindow.id }, function (activeTabs) {
                activeTabs.map(function (tab) {
                    chrome.tabs.executeScript(tab.id, {file: 'documentScript.js', allFrames: true});
                    chrome.tabs.insertCSS(tab.id, {file: 'documentCss.css', allFrames: true});
                });
            });
        });
    })
});