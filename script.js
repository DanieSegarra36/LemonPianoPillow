function renderWindow(filePath) {
  let element = document.querySelector("#renderWindow");
  element.style.backgroundColor = filePath === "" ? "black" : "unset";
  element.src = filePath;
}

const cohortsDropdown = document.getElementById("cohorts");

cohortsDropdown.addEventListener("change", function () {
  // clear preview/render window
  renderWindow("");

  const selectedValue = cohortsDropdown.value;
  const selectedUL = document.getElementById(selectedValue);

  // Hide all ul elements
  const cohortFinalProjects = document.querySelectorAll(
    ".cohort-final-projects"
  );
  cohortFinalProjects.forEach((list) => list.classList.add("hidden"));

  // Show the selected ul element
  if (selectedUL) {
    selectedUL.classList.remove("hidden");
    let title = document.querySelector("#top>h1");
    title.innerHTML = `${selectedValue.replace(/-/g, ' ').toUpperCase()}<br /><span>Final Projects</span>`;
  }
});

// Reset the dropdown select on page refresh
window.addEventListener("load", function () {
  renderWindow("");
  // const selectedUL = document.getElementById("ITAG-2022-Cohort-4");
  // selectedUL.classList.remove("hidden");
  cohortsDropdown.selectedIndex = 0;
});
