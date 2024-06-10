let state = false

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
