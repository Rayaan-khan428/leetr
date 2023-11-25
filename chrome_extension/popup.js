document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        // Check if the active tab's URL is a LeetCode problem page
        if (tabs[0].url.includes('leetcode.com/problems/')) {
            
            // Attempt to send a message to the content script
            chrome.tabs.sendMessage(tabs[0].id, { message: 'getProblemTitle' }, function(response) {
                
                if (response && response.title) {
                    // Update popup with the problem title
                    document.querySelector('h2').textContent = response.title;
                } else if (chrome.runtime.lastError) {
                    // Content script isn't available
                    document.querySelector('h2').textContent = 'Problem title not available.';
                }
            });
            
        } else {
            
            // User is not on a LeetCode problem page
            document.querySelector('h2').textContent = 'There is no LeetCode problem here.';
            document.getElementById('submission-info').style.display = 'none';
            
        }
    });

    // Handle form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = {
            date: document.querySelector('input[type="date"]').value,
            timeComplexity: document.querySelector('input[id="time-complexity"]').value,
            spaceComplexity: document.querySelector('input[id="space-complexity"]').value,
            notes: document.querySelector('textarea[id="notes"]').value
        };
    });
});
