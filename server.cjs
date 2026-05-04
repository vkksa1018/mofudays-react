/*
  json-server 0.17.4 + json-server-auth 2.1.0
  1. json-server 0.17.4 只認 CommonJS, 
     因此檔名用 cjs, 強制 Node.js 用 CommonJS 解析這個檔案,不受 "type": "module" 影響。
  2. 將 package.json 的 script 中 的 "server": "json-server-auth db.json --port 3000"
     換成 "server": "node server.cjs"
  3. cmd指令 : node server.cjs
     出現 "JSON Server + Auth is running on port 3001" 就OK
  4. url : http://localhost:3001/db.json => server 啟動
  5. url : http://localhost:3001/users => 確認資料打得開
*/
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// CORS 設定
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

// json-server-auth 必須在 router 前掛載
server.db = router.db
server.use(middlewares)
server.use(auth)
server.use(router)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`JSON Server + Auth is running on port ${PORT}`)
})