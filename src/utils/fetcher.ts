const fetcher = (url: string) =>
  fetch(`${url}${url.indexOf('?') === -1 ? '?' : '&'}${Date.now()}`).then(
    (res) => res.json()
  )

export default fetcher
