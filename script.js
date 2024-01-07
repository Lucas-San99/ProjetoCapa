function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const desc = document.querySelector("#profile img")
  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}
  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    desc.setAttribute(
      "alt",
      "lucas ao ar livre com óculos escuros, com sol e sorrindo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    desc.setAttribute(
      "alt",
      "foto de lucas lima sorrindo, está usando óculos, encostado em uma parede."
    )
  }
}
