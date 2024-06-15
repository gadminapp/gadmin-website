let state = false

const card = document.getElementById('whatsApp-card')

export function setState() {
  if (state) {
    state = false
  } else {
    state = true
  }
  return state
}

export function setIcons(updateIcons: void) {
  updateIcons
}

export function updateCard() {
  if (state) {
    card?.classList.remove('card--close')
  } else {
    card?.classList.add('card--close')
  }
}
