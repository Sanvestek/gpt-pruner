document.getElementById('pruneBtn').addEventListener('click', async () => {
  const count = document.getElementById('count').value;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: pruneMessages,
    args: [parseInt(count)]
  });
});

function pruneMessages(limit) {
  const messages = document.querySelectorAll('article[data-testid^="conversation-turn-"]');
  if (messages.length <= limit) return;

  const toRemove = messages.length - limit;
  for (let i = 0; i < toRemove; i++) {
    messages[i].remove();
  }
  console.log(`Pruned ${toRemove} messages.`);
}