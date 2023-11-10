const cache = {}

export default {
  async load (app) {
    console.log(app)
    if (cache[app.name]) {
      return cache[app.name]
    }

    const cssList = await Promise.all(
      app.css?.map((cssFile) => {
        return fetch(cssFile).then((res) => res.text())
      })
    )

    const styleEl = document.createElement('style')
    styleEl.textContent = cssList.join('\n')

    cache[app.name] = styleEl

    return styleEl
  }
}
