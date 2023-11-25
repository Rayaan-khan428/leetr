// Function to extract the problem title from the URL
function extractProblemTitle() {
    const urlSegments = window.location.pathname.split('/');
    return urlSegments.length > 2 ? urlSegments[2].replace(/-/g, ' ') : 'Unknown Problem';
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getProblemTitle') {
        const title = extractProblemTitle();
        sendResponse({ title: title });
    }
});

// Send the problem title to the popup when requested
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'getProblemTitle') {
        sendResponse({ title: extractProblemTitle() });
    }
});
