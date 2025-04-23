const username = "jayxdcode";
const manifestLoc = `/global/global_manifest.json`
const DATA_URL = `/global/${username}_data.json`;

function formatUTCDateString(utcDateString) {
  const date = new Date(utcDateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
  return date.toLocaleDateString('en-US', options).replace(',', '');
}

// Folder Tree
function generateProjectSectionHTML(manifest) {
  function formatSize(bytes) {
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${bytes} B`;
  }
  
  function createFolderHTML(name, folder) {
    let fileCount = 0,
      folderCount = 0,
      totalSize = 0;
    let childrenHTML = '';
    
    for (const [childName, child] of Object.entries(folder.contents)) {
      if (child.type === 'folder') {
        folderCount++;
        const result = createFolderHTML(childName, child);
        childrenHTML += result.html;
        fileCount += result.fileCount;
        folderCount += result.folderCount;
        totalSize += result.totalSize;
      } else {
        fileCount++;
        totalSize += child.size;
        childrenHTML += createFileHTML(childName, child);
      }
    }
    
    return {
      html: `
<div class="folder folderItem">
  <div class="folderHeader">
    <span class="dropdownIcon material-symbols-outlined">arrow_drop_down</span>
    <span class="folderName">${name}</span>
    <div class="folderDetails">
      <span class="folderMeta">
      <span class="material-symbols-outlined">folder</span> ${folderCount}
      </span>
      <span class="fileMeta">
        <span class="material-symbols-outlined">description</span> ${fileCount}
      </span>
      <span class="sizeMeta">
      <span class="material-symbols-outlined">database</span> ${formatSize(totalSize)}
      </span>
    </div>
  </div>
  
  <div class="folderChildren">
    ${childrenHTML}
  </div>
</div>`,
      fileCount,
      folderCount,
      totalSize
    };
  }
  
  function createFileHTML(name, file) {
    return `
<div class="fileItem">
  <div class="fileHeader">
    <span class="fileName">${name}</span>
  </div>
  <div class="fileDetails">
    <span class="material-symbols-outlined">database</span> <span id="size">${formatSize(file.size)}</span>
  </div>
  <span class="fileActions openBtn">
    <span class="material-symbols-outlined">open_in_new</span> <span class="opentxt">Open File</span>
  </span>
</div>`;
  }
  
  // root container
  const rootName = Object.keys(manifest)[0];
  const root = manifest[rootName];
  let finalHTML = '';
  
  for (const [childName, child] of Object.entries(root.contents)) {
    if (child.type === 'folder') {
      finalHTML += createFolderHTML(childName, child).html;
    } else {
      finalHTML += createFileHTML(childName, child);
    }
  }
  
  return finalHTML;
}

// End..........



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
      lineBreak.style.margin = "2em";
      
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
      lineBreak.style.margin = "2em";
      
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

fetch(manifestLoc)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json()
  })
  .then(data => {
    console.log('Fetched global_manifest. \n', data);
    
    const manifest = data;
    document.getElementById('exclusive').innerHTML = generateProjectSectionHTML(manifest);
    
    const dropdownIcons = document.querySelectorAll('.dropdownIcon');
    dropdownIcons.forEach(icon => {
      icon.addEventListener('click', expandFolder);
    });
  })
  .catch(error => {
    console.error("An error has occured during directory parsing: ", error)
  });


function expandFolder(event) {
  const expandBtn = event.currentTarget;
  
  let parent = expandBtn.closest('.folder');
  if (parent) {
    parent.classList.toggle("expanded");
  }
}