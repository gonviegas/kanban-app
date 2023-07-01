export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
}

export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}

export const removeDocumentClass = (_class: string) => {
  if (typeof window !== 'undefined') {
      document.documentElement.classList.remove(_class)
  }
}

export const addDocumentClass = (_class: string) => {
  if (typeof window !== 'undefined') {
      document.documentElement.classList.add(_class)
  }
}
