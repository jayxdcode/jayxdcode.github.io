async function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
   
  // Encrypt password (AES Example)
  let encryptedPassword = btoa(password); 

  let response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password: encryptedPassword })
            });

  let result = await response.json();
  if (result.success) {
    alert("Login successful!");
    loadEntries(result.userId);
  } else {
    alert(result.message);
  }
}

function showNewEntry() {
  document.getElementById("entryForm").style.d.style.display = "block";
}


async function submitEntry() {    
  let title = document.getElementById("entryTitle").value;
  let content = document.getElementById("entryContent").value;

  
  let response = await fetch("/addEntry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  });
  
  let result = await response.json();
  if (result.success) {
    alert("Entry added!");
    document.getElementById("entryForm").style.display = "none";
    loadEntries();
  }
}
