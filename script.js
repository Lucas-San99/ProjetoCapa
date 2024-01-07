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
      "foto de lucas sorrindo, está usando óculos, encostado em uma parede."
    )
  }
}

function downloadCV() {
  // Primeiro, crie um link para o seu currículo
  var link = document.createElement("a")
  link.href = "./curriculo.pdf"
  link.download = "curriculoLucasLima.pdf"
  // Adicione um evento de clique ao botão
  // Exiba a mensagem
  alert("O currículo é um arquivo em PDF e em breve será parte da página HTML.")
  // Inicie o download
  link.click()
  // Por fim, adicione o botão ao corpo do documento
  document.body.appendChild(link)
}
