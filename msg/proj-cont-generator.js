const username = "jayxdcode";
const DATA_URL = `/global/${username}_data.json`;

function formatUTCDateString(utcDateString) {
  const date = new Date(utcDateString);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return date.toLocaleDateString('en-US', options).replace(',', '');
}

// PINNED + LATEST REPOS
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    const pinnedData = data.pinnedRepos;
    const pinned = document.querySelector("div#pinnedRepos");
    pinned.querySelectorAll(".sectionItem").forEach(item => item.remove());
    
    pinnedData.forEach((repo, i) => {
      const { name = "No name", url = "#", description = "No description provided.", stars = 0, forks = 0, updatedAt } = repo;
      const updated = formatUTCDateString(updatedAt) || "Date Unknown";
      
      const lineBreak = document.createElement("div");
      lineBreak.className = "lineBreak";
      lineBreak.style.width = "calc(100% - 4em)";
      lineBreak.style.margin = "2em";
      pinned.appendChild(lineBreak);
      
      const repoDiv = document.createElement("div");
      repoDiv.className = "sectionItem";
      repoDiv.id = `a${i}`;
      repoDiv.innerHTML = `
				<a class="repoItem" href="${url}" target="_blank">
					<div class="repoTitle">${name}</div>
					<div class="repoDesc">${description}</div>
					<div class="repoStats">
						<span class="stars">★ ${stars}</span>
						<span class="forks">⑂ ${forks}</span>
					</div>
					<div class="upd"><span class="updated">Updated: ${updated}</span></div>
				</a>`;
      pinned.appendChild(repoDiv);
    });
    
    const latestMods = data.latestModifiedRepos;
    const latest = document.querySelector("div#latestMods");
    latest.querySelectorAll(".sectionItem").forEach(item => item.remove());
    
    latestMods.forEach((repo, i) => {
      const { name = "No name", url = "#", description = "No description provided.", updatedAt } = repo;
      const updated = formatUTCDateString(updatedAt) || "Date Unknown";
      
      const lineBreak = document.createElement("div");
      lineBreak.className = "lineBreak";
      lineBreak.style.width = "calc(100% - 4em)";
      lineBreak.style.margin = "2em";
      latest.appendChild(lineBreak);
      
      const repoDiv = document.createElement("div");
      repoDiv.className = "sectionItem";
      repoDiv.id = `a${i}`;
      repoDiv.innerHTML = `
				<a class="repoItem" href="${url}" target="_blank">
					<div class="repoTitle">${name}</div>
					<div class="repoDesc">${description}</div>
					<div class="upd"><span class="updated">Updated: ${updated}</span></div>
				</a>`;
      latest.appendChild(repoDiv);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

// UNAVAILABLE FEATURES OVERLAY
document.querySelectorAll(".feature-down").forEach(item => {
  const downOverlay = document.createElement("div");
  downOverlay.className = "down-overlay";
  downOverlay.innerHTML = `<div class="down-overlay-text">FEATURE UNAVAILABLE AT THE MEANTIME.</div>`;
  item.appendChild(downOverlay);
});