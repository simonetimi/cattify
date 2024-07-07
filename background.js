chrome.tabs.onActivated.addListener(async (activeInfo) => {
  try {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab && tab.url && !tab.url.startsWith('chrome://')) {
      await chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ['scripts/emojifi.js'],
      });
    }
  } catch (error) {
    console.error('Failed to get tab details:', error);
  }
});
