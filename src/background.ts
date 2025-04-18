/// <reference types="chrome"/>

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'colorSelected') {
    chrome.storage.local.set({selectedColor: request.color});
  }
});

