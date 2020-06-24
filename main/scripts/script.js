document.addEventListener("DOMContentLoaded", function() {
    console.log(document.querySelector('#jsFormDate'));
    document.querySelector('#jsFormDate').addEventListener('submit', function(e) {
        let formData = this;
        console.log(formData);
    
        chrome.storage.sync.set({})
    });
});


