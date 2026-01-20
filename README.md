# GPT-Pruner ✂️

> **Instantly declutter your ChatGPT DOM to reclaim browser performance.**

---

### 🚀 Why use this?

When conversations grow long, ChatGPT keeps every single message in the browser's memory. This leads to high CPU usage, "stuttery" scrolling, and general lag. 

**GPT-Pruner** safely removes old message elements from the current view so your PC can breathe again.

---

### ✨ Key Features

* **⚡ Performance Boost:** Dramatically reduces DOM nodes for smoother scrolling.

* **🎯 Customizable Depth:** Keep the last 3, 5, or 10 messages—you decide.

* **🛡️ Non-Destructive:** Only hides elements from the current session. Refresh to restore.

* **🔒 Privacy First:** Runs 100% locally in your browser.

---

### 🛠️ Installation

1. **Download** this repository as a ZIP and extract it.

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** (toggle in the top-right corner).

4. Click **Load unpacked**.

5. Select your `gpt-pruner` folder.

---

### 📖 How to Use

1. Navigate to [chatgpt.com](https://chatgpt.com).

2. Click the **GPT-Pruner** icon in your toolbar.

3. Select your message limit and click **Prune Now**.

---

### 🏗️ Architecture

* **Interface:** Lightweight `popup.html`.
* **Execution:** `chrome.scripting` API.
* **Logic:** Targets `<article>` tags with `data-testid="conversation-turn-"`.

---
*Created for developers who chat too much.*
