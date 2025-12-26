function startCountdown(el) {
  const target = new Date(el.dataset.date).getTime()

  const update = () => {
    const now = Date.now()
    const diff = target - now

    if (diff <= 0) {
      clearInterval(timer)
      el.innerHTML = "<strong>It's happening! 🎉</strong>"
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    el.querySelector('[data-days]').textContent = days
    el.querySelector('[data-hours]').textContent = hours
    el.querySelector('[data-minutes]').textContent = minutes
    el.querySelector('[data-seconds]').textContent = seconds
  }

  update()
  const timer = setInterval(update, 1000)
}

document.querySelectorAll('.countdown').forEach(startCountdown)