// when the extension button is clicked...
chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { text: "extension_button_clicked" });
});
