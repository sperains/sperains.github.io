

```json
{
	"dependencies": {
		"chalk": "^4.1.1",
		"compression": "^1.7.4",
		"connect-history-api-fallback": "^1.6.0",
		"express": "^4.17.1"
	}
}
```

添加以上依赖`pnpm install`


创建`app.js`
```javascript

// app.js
const express = require('express');

//创建web服务器
const app = express();

//导入gzip包
const compression = require("compression")

const path = require('path');

const chalk = require('chalk')

const history = require('connect-history-api-fallback');

//启用gzip中间件,在托管之前
app.use(compression()).use(history())
//托管静态资源
app.use(express.static(path.resolve(__dirname, '/Users/sperains/jd/dist')))

//启动web服务器
app.listen(8888, res => {
    console.log(chalk.yellow('Start Service On 8888'));
});

```