document.addEventListener('DOMContentLoaded', () => {
    let problemTitle = ''; // Variable to store the problem title
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        
        // Check if the active tab's URL is a LeetCode problem page
        if (tabs[0].url.includes('leetcode.com/problems/')) {
            
            // Attempt to send a message to the content script
            chrome.tabs.sendMessage(tabs[0].id, { message: 'getProblemTitle' }, function(response) {
                
                if (response && response.title) {
                    // Update popup with the problem title
                    document.querySelector('h2').textContent = response.title;
                    problemTitle = response.title; // Store the problem title
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

        // UI elements for feedback
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');

        // Hide messages initially
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Get the URL of the current tab
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let url = tabs[0].url; // URL of the current tab

            // Create the formData object
            const formData = {
                problemName: problemTitle, // Include the problem name
                url: url, 
                date: document.querySelector('input[type="date"]').value,
                timeComplexity: document.querySelector('#time-complexity').value,
                spaceComplexity: document.querySelector('#space-complexity').value,
                notes: document.querySelector('#notes').value
            };

            console.log(formData)

            // Send data to your server
            fetch('http://localhost:3000/api/problems/submitSolution', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text || 'Network response was not ok') });
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Display success message
                successMessage.style.display = 'block';
                successMessage.textContent = 'Submission successful!';
            })
            .catch((error) => {
                console.error('Error:', error);
                errorMessage.textContent = `Error: ${error.message || 'Submission failed.'}`;
                errorMessage.style.display = 'block';
            });
        });
    });
});
