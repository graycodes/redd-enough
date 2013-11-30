var regex = /reddit\.com/;

if (regex.test(document.location)) {

  chrome.extension.sendRequest({}, function(response) {});

  document.querySelector('.nav-buttons').innerHTML = '';

}
