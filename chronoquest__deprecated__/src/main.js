document.addEventListener("DOMContentLoaded", () => {
  const storyContainer = document.getElementById("story");
  const choicesContainer = document.getElementById("choices");

  let currentNode = story.start;
  let history = [];

  function updateStory() {
    storyContainer.innerHTML = `<p>${currentNode.text}</p>`;
    choicesContainer.innerHTML = "";

    currentNode.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => {
        history.push(currentNode);
        currentNode = story[choice.next];
        updateStory();
      };
      choicesContainer.appendChild(button);
    });

    if (history.length > 0) {
      const undoButton = document.createElement("button");
      undoButton.textContent = "Undo";
      undoButton.onclick = () => {
        if (history.length > 0) {
          currentNode = history.pop();
          updateStory();
        }
      };
      choicesContainer.appendChild(undoButton);
    }

    // Disappear effect
    if (history.length > 0) {
      storyContainer.firstChild.style.opacity = 0.5;
    }
  }

  updateStory();
});
