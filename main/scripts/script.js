const optionFormatting = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false
};

document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector('#formatDateTime');
    chrome.storage.sync.get(['format'], function (result) {
        let formatToStr = result.format.toString();

        if (formatToStr.trim !== '') {
            input.value = formatToStr;
        }
    });

    document.querySelector('#saveButton').addEventListener('click', function () {
        let intputFromat = document.querySelector('#formatDateTime');
        
        if (intputFromat.trim !== '') {
            chrome.storage.sync.set({format: intputFromat.value});
        }
    })

    document.querySelector('#inputDate').addEventListener('input', function (e) {
        let dateContainer = document.querySelector('#formatFastDate');
        let date = new Date();
        date.setTime(this.value);

        let forrmatingValue = date.toLocaleString('ru-RU', optionFormatting);

        dateContainer.innerText = forrmatingValue;
    })
});


