const username = "jayxdcode";
const manifestLoc = `/global/global_manifest.json`;

const openedList = localStorage.getItem('opened-folders');

let openedFolders = ["f0"];
!openedList ? localStorage.setItem('opened-folders', openedFolders) : console.info('Local Storage Item `opened-folder` already set!')

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

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

function createFileHTML(name, file, last = false) {
  return `
<div class="fileItem${last == true ? " lastItem" : ""}">
  <div class="fileHeader">
    <span class="fileName">${name}</span>
  </div>
  <div class="fileDetails">
    <span class="material-symbols-outlined">database</span> <span id="size">${formatSize(file.size)}</span>
  </div>
  <a class="fileActions openBtn clickable" href="${typeof file.path !== 'undefined' ? file.path : 'javascript:void(0)'}">
    <span class="material-symbols-outlined">open_in_new</span> <span class="opentxt">Open File</span>
  </a>
</div>`;
}

function generateProjectSectionHTML(manifest) {
  let fidCounter = 0;
  
  function createFolderHTML(name, folder, last = false) {
    const thisFid = fidCounter++;
    
    let fileCount = 0,
      folderCount = 0,
      totalSize = 0;
    let childrenHTML = '';
    
    let totalChildren = folder.files + folder.folders;
    let childCount = 0;
    
    for (const [childName, child] of Object.entries(folder.contents)) {
      if (child.type === 'folder') {
        folderCount++;
        childCount++;
        const result = createFolderHTML(childName, child, childCount == totalChildren);
        childrenHTML += result.html;
        fileCount += result.fileCount;
        folderCount += result.folderCount;
        totalSize += result.totalSize;
      } else {
        fileCount++;
        childCount++;
        totalSize += child.size;
        childrenHTML += createFileHTML(childName, child, childCount == totalChildren);
      }
    }
    
    return {
      html: `
<div class="folder folderItem" id="f${thisFid}">
  <div class="lineConnect"></div>
  <div class="folderHeader${last == true ? " lastItem" : ""}">
    <span class="dropdownIcon material-symbols-outlined clickable">expand_more</span>
    <span class="folderName">${name}</span>
    <div class="folderDetails">
      <span class="folderMeta"><span class="material-symbols-outlined">folder</span> ${folderCount}</span>
      <span class="fileMeta"><span class="material-symbols-outlined">description</span> ${fileCount}</span>
      <span class="sizeMeta"><span class="material-symbols-outlined">database</span> ${formatSize(totalSize)}</span>
    </div>
  </div>
  <div class="folderChildren">${childrenHTML}</div>
</div>`,
      fileCount,
      folderCount,
      totalSize
    };
  }
  
  const rootName = Object.keys(manifest)[0];
  const root = manifest[rootName];
  let finalHTML = '';
  
  for (const [childName, child] of Object.entries(manifest)) {
    if (child.type === 'folder') {
      finalHTML += createFolderHTML(childName, child).html;
    } else {
      finalHTML += createFileHTML(childName, child);
    }
  }
  
  return finalHTML;
}

function expandFolder(event) {
  const expandBtn = event.currentTarget;
  const par = expandBtn.closest('.folderHeader')
  par.classList.toggle("active");
  expandBtn.innerHTML = par.classList.contains("active") ? "expand_less" : "expand_more";
  
  
  const parent = expandBtn.closest('.folder');
  if (parent) {
    parent.classList.toggle("expanded");
  }
  
  document.querySelectorAll(".expanded").forEach(folder => {
    openedFolders.push(folder.id)
    openedFolders = [...new Set(openedFolders)];

  })
  
  localStorage.setItem('opened-folders', openedFolders)
}

// UNAVAILABLE FEATURES OVERLAY
document.querySelectorAll(".feature-down").forEach(item => {
  const downOverlay = document.createElement("div");
  downOverlay.className = "down-overlay";
  downOverlay.innerHTML = `<div class="down-overlay-text">FEATURE UNAVAILABLE AT THE MEANTIME.</div>`;
  item.appendChild(downOverlay);
});

// MANIFEST TREE
fetch(manifestLoc)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    document.getElementById('exclusive').innerHTML = generateProjectSectionHTML(data);
    
    // Add expand toggle
    document.querySelectorAll('.dropdownIcon').forEach(icon => {
      icon.addEventListener('click', expandFolder);
    });
    
    // Set class to all folder headers and file items for style handling
    document.querySelectorAll('.folder').forEach(folder => {
      folder.querySelectorAll('.folderChildren .folderHeader').forEach(header => header.classList.add('childElement'));
      folder.querySelectorAll('.fileItem').forEach(item => item.classList.add('childElement'));
    });
    
    document.querySelector(".folderHeader").classList.add('active');
    document.querySelector(".folder").classList.add('expanded');
    updateAllConnectSizes();
    
    setTimeout(function() {
      document.querySelector(".folderHeader").classList.add('active');
      document.querySelector(".folder").classList.add('expanded');
      updateAllConnectSizes();
      
      restoreLastSave()
    }, 50);
  })
  .catch(error => console.error("Error loading manifest:", error));

function restoreLastSave() {
  if (!openedList) return;

  const lastUpd = openedList.split(',').map(x => x.trim());

  lastUpd.forEach(id => {
    const folderEl = document.getElementById(id);
    if (folderEl) {
      folderEl.classList.add('expanded');
      const header = folderEl.querySelector('.folderHeader');
      if (header) header.classList.add('active');
    }
  });

  updateAllConnectSizes();
}

function setLineConnector(lastItem) {
  const container = lastItem.closest('.folderChildren');
  if (!container) return;
  
  const containerRect = container.getBoundingClientRect();
  const itemRect = lastItem.getBoundingClientRect();
  
  const height = itemRect.bottom - containerRect.top;
  lastItem.style.setProperty('--connect-size', `${height}px`);
}

function updateAllConnectSizes() {
  document.querySelectorAll('.lastItem').forEach(setLineConnector);
}

document.getElementById('exclusive')?.addEventListener('click', e => {
  if (e.target.closest('span.dropdownIcon')) {
    updateAllConnectSizes();
  }
});

