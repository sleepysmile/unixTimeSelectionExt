const contextMenuItem = {
    id: 'ConverterUnixTime',
    title: 'Convert unix time',
    contexts: ['page', 'selection'],
}

// add item to ciontext menu cherome user
chrome.contextMenus.create(contextMenuItem);

// add event clicked item to context menu item
chrome.contextMenus.onClicked.addListener(() => {
    sendMessage();
})

function sendMessage() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"event": "clickedMenuElement"});
    });
}