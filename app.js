const viewer = document.getElementById("viewer");
const input = document.getElementById("urlInput");

const goBtn = document.getElementById("goBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");

let historyStack = [];
let index = -1;

function formatUrl(url) {
  const t = url.trim();
  if (!t) return "";

  // If user types a local path like test.html or /test.html, keep it local
  if (t.endsWith(".html") || t.startsWith("/") || t.startsWith("./")) return t;

  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  return "https://" + t;
}

function load(url, push = true) {
  if (!url) return;
  viewer.src = url;

  if (push) {
    historyStack = historyStack.slice(0, index + 1);
    historyStack.push(url);
    index = historyStack.length - 1;
  }
}

goBtn.onclick = () => {
  const url = formatUrl(input.value);
  load(url);
};

// press Enter in the input = Go
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") goBtn.click();
});

backBtn.onclick = () => {
  if (index > 0) {
    index--;
    viewer.src = historyStack[index];
  }
};

forwardBtn.onclick = () => {
  if (index < historyStack.length - 1) {
    index++;
    viewer.src = historyStack[index];
  }
};

reloadBtn.onclick = () => {
  if (index >= 0) {
    viewer.src = historyStack[index];
  }
};

// DEFAULT LOAD so you immediately see something
input.value = "example.com";
load(formatUrl(input.value));