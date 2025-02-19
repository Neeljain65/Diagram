export function initCanvasTexture() {
  const canvas = document.getElementById("textureCanvas") as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  if (!ctx) return

  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  const drawTexture = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let x = 0; x < canvas.width; x += 20) {
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.1})`
        ctx.fillRect(x, y, 2, 2)
      }
    }
  }

  drawTexture()

  setInterval(drawTexture, 3000) // Redraw every 3 seconds for a subtle animation
}

