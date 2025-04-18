/// <reference types="chrome"/>

document.addEventListener('mouseup', async () => {
  const selection = window.getSelection();

  if (selection && selection.toString().length > 0) {
    const selectedText: string = selection.toString();
    const range: Range = selection.getRangeAt(0);

    chrome.storage.local.get({selectedColor: selectedText}).then(value => {
      const span: HTMLSpanElement = document.createElement('span');
      span.style.color = value['selectedColor'] ?? 'red';
      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);
    });
  }
});

