const username = "jayxdcode";
const DATA_URL = `${username}_data.json`;

function formatUTCDateString(utcDateString) {
  const date = new Date(utcDateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleDateString('en-US', options).replace(',', '');
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data fetched successfully:", data);
    
    const pinnedData = data.pinnedRepos;
    const pinned = document.querySelector("div#pinnedRepos");
    pinned.querySelectorAll(".sectionItem").forEach(item => item.remove());
    
    for (let i = 0; i < pinnedData.length; i++) {
      const repo = pinnedData[i];
      
      const name = repo.name || "No name";
      const url = repo.url || "#";
      const desc = repo.description ?? "No description provided.";
      const stars = repo.stars ?? 0;
      const forks = repo.forks ?? 0;
      const updated = formatUTCDateString(repo.updatedAt) ?? "Date Unknown";
      
      const lineBreak = document.createElement("div");
      lineBreak.className = "lineBreak";
      
      lineBreak.style.width = "calc(100% - 4em)";
      
      pinned.appendChild(lineBreak);
      
      const repoDiv = document.createElement("div");
      repoDiv.className = "sectionItem";
      repoDiv.id = `a${i}`;
      
      repoDiv.innerHTML = `
			<a class="repoItem" href="${url}" target="_blank">
				<div class="repoTitle">${name}</div>
				<div class="repoDesc">${desc}</div>
				<div class="repoStats">
					<span class="stars">★ ${stars}</span>
					<span class="forks">⑂ ${forks}</span>
				</div>
				<div class="upd">
          <span class="updated">Updated: ${updated}</span>
				</div>
			</a>
		`;
      
      pinned.appendChild(repoDiv);
    }
    
    const latestMods = data.latestModifiedRepos;
    const latest = document.querySelector("div#latestMods");
    latest.querySelectorAll(".sectionItem").forEach(item => item.remove());
    
    for (let i = 0; i < latestMods.length; i++) {
      const repo = latestMods[i];
      
      const name = repo.name || "No name";
      const desc = repo.description ?? "No description provided.";
      const url = repo.url || "#";
      const updated = formatUTCDateString(repo.updatedAt) ?? "Date Unknown";
      
      const lineBreak = document.createElement("div");
      lineBreak.className = "lineBreak";
      
      lineBreak.style.width = "calc(100% - 4em)";
      lineBreak.style.justifySelf = "center";
      
      latest.appendChild(lineBreak);
      
      const repoDiv = document.createElement("div");
      repoDiv.className = "sectionItem";
      repoDiv.id = `a${i}`;
      
      repoDiv.innerHTML = `
			<a class="repoItem" href="${url}" target="_blank">
				<div class="repoTitle">${name}</div>
				<div class="repoDesc">${desc}</div>
				<div class="upd">
          <span class="updated">Updated: ${updated}</span>
				</div>
			</a>
		`;
      
      latest.appendChild(repoDiv);
    }
  })
  .catch(error => {
    console.error("An error has occurred while fetching data: ", error);
  });

document.querySelectorAll(".feature-down").forEach(item => {
  const downOverlay = document.createElement("div");
  downOverlay.className = "down-overlay";
  
  downOverlay.innerHTML = `
		<div class="down-overlay-text">FEATURE UNAVAILABLE AT THE MEANTIME.</div>`;
  
  item.appendChild(downOverlay);
});