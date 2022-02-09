// resize event
export function addResizeEventListener(cb) {
  return []
}
export function removeResizeEventListener(cb) {
  return []
}

export function createDispatcher(source) {
  function dispatch(event, data) {
    source.dispatchEvent(
      new CustomEvent(event, {
        detail: data,
      })
    )
  }
  return dispatch
}
