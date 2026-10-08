'use strict';
const copyButton = document.getElementById('copy-prompt');
copyButton.addEventListener('click', async () => {
  const prompt = document.getElementById('prompt');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(prompt.textContent.trim());
    status.textContent = 'Đã sao chép. Bạn có thể dán vào ChatGPT.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(prompt);
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Chưa thể sao chép tự động. Hãy sao chép đoạn đã chọn.';
  }
});
