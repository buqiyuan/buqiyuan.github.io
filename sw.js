self.addEventListener('fetch', function (event) {
  // 拦截请求
  const { hostname, origin, pathname, search } = new URL(event.request.url)
  if (hostname === 'buqiyuan.gitee.io') {
    const newUrl = `${origin}/buqiyuan${pathname}${search}`
    event.respondWith(fetch(newUrl))
  }
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    // 删除旧的缓存
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            return caches.delete(cacheName)
          })
        )
      })
      .then(function () {
        // 立即接管所有客户端页面
        return self.clients.claim()
      })
  )
})
