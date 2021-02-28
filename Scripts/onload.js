// Underline current page's nav link
window.addEventListener("load", function() {
  const navLink = document.getElementById(parseFilePathToNavLinkId(window.location.pathname))
  navLink.style.textDecoration = "underline"
  navLink.style.textDecorationColor = "white"
  navLink.style.textDecorationThickness = "1.5px"
});

function parseFilePathToNavLinkId(filePath) {
  // Homepage file path is blank
  if (filePath === "/")
    return "home-link"
  return filePath.slice(1).concat("-link")
}