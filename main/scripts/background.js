const contextMenuItem = {
    id: 'ConverterUnixTime',
    title: 'Convert unix time',
    contexts: ['page', 'selection'],
}

const configuration = {
    popup: generatePopup(),
}

// add item to ciontext menu cherome user
chrome.contextMenus.create(contextMenuItem);

// add event clicked item to context menu item
chrome.contextMenus.onClicked.addListener(() => {
    initConverter();
})

function initConverter() {
    
}

function generatePopup() {

}