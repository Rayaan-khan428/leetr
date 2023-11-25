let isSolved = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.submission === 'success') {
        isSolved = true;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setPopup({popup: 'popup.html'});
});

chrome.action.onClicked.addListener((tab) => {
    if (isSolved) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: setPopupContent
        });
    }
});

function setPopupContent() {
    document.body.innerText = 'Successfully solved';
}
