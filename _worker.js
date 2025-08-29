let urls = [
	'https://yycloud.tz69.vip#YYCloud CDN',
	'https://yycloud.tz86.vip#YYCloud CDN',
	'https://www.tz86.vip#Vercel CDN',
	'https://velcel.yycloud.tz86.vip#Vercel1 CDN',
	'https://velcel.yycloud.tz69.vip#Vercel2 CDN',
	'https://dooki.yycloud.tz86.vip#Dooki CDN'
];

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const path = url.pathname;
		const params = url.search;

		// 如果 env.URLS 存在，则添加到数组
		if (env.URL) urls = await ADD(env.URL);
		
		const ads = env.ADS || 'google.com, pub-9350003957494520, DIRECT, f08c47fec0942fa0';
		const 网站图标 = env.ICO || 'https://tencentcdna.production.link3.cc/user_create_images/link3_1750703159775/multiple_images/1751906091715';
		const 网站头像 = env.PNG || 'https://tencentcdna.production.link3.cc/user_create_images/link3_1750703159775/multiple_images/1751906091715';
		const 网络备案 = env.BEIAN || `<a href='https://www.link3.cc/fnyun'`;
		const 网页标题 = env.TITLE || 'YYCloud歪歪云νPN订阅🚀';
		const 站点名称 = env.NAME || 'YYCloud智能访问';
		if (url.pathname.toLowerCase() == '/ads.txt') {
			return new Response(ads, {
				headers: {
					'content-type': 'text/plain;charset=UTF-8'
				}
			});
		} else if (url.pathname.toLowerCase() == '/favicon.ico') {
			return fetch(网站图标);
		} else {
			// 先测速，不加载背景图片
			let bgImgs = [
			'https://raw.cmliussss.com/keqing1080p.jpg',
			'https://pic.imgdb.cn/item/66f6c978f21886ccc06c2315.jpg',
			'https://pic.imgdb.cn/item/66f6c978f21886ccc06c22bc.jpg',
			'https://pic.imgdb.cn/item/66f6c978f21886ccc06c2337.jpg'
		];
		if (env.IMG) {
			bgImgs = await ADD(env.IMG);
		}
		const imgIndex = Math.floor(Math.random() * bgImgs.length);
		const img = bgImgs[imgIndex];

      const html = `
			<!DOCTYPE html>
			<html lang="zh-CN">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${\u7AD9\u70B9\u540D\u79F0} - ${\u7F51\u9875\u6807\u9898}</title>
				<style>
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
					}
					
					body {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						margin: 0;
						padding: 0;
						background-image: url('${img}');
						background-size: cover;
						background-position: center;
						background-attachment: fixed;
						min-height: 100vh;
						display: flex;
						justify-content: center;
						align-items: center;
					}
			
					.container {
						background: rgba(255, 255, 255, 0.6);
						backdrop-filter: blur(10px);
						border-radius: 24px;
						padding: 30px;
						width: 480px;
						min-height: 620px;
						box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						transition: all 0.3s ease;
					}
			
					.container:hover {
						transform: translateY(-5px);
						box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
					}
			
					.logo-container {
						position: relative;
						width: 180px;
						height: 180px;
						margin-bottom: 20px;
					}
			
					.logo {
						width: 100%;
						height: 100%;
						border-radius: 50%;
						border: 8px solid white;
						box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
						animation: pulse 2s infinite;
						object-fit: cover;
					}
			
					@keyframes pulse {
						0% {
							box-shadow: 0 0 0 0 rgba(107, 223, 143, 0.4);
						}
						70% {
							box-shadow: 0 0 0 20px rgba(107, 223, 143, 0);
						}
						100% {
							box-shadow: 0 0 0 0 rgba(107, 223, 143, 0);
						}
					}

					@keyframes blink {
						0% { opacity: 1; }
						50% { opacity: 0.6; }
						100% { opacity: 1; }
					}
			
					h1 {
						color: #1a1f36;
						font-size: 28px;
						font-weight: 700;
						text-align: center;
						margin: 0 0 30px 0;
						padding-bottom: 15px;
						position: relative;
					}
			
					h1::after {
						content: '';                    /* 创建伪元素内容，空字符串表示不显示文字 */
						position: absolute;             /* 绝对定位，相对于最近的相对定位父元素 */
						bottom: 0;                      /* 距离父元素底部0像素，紧贴底部 */
						left: 50%;                      /* 左边距离父元素左侧50%，用于居中定位 */
						transform: translateX(-50%);    /* 向左移动自身宽度的50%，实现水平居中 */
						width: 100px;                   /* 下划线宽度为100像素 */
						height: 4px;                    /* 下划线高度为4像素 */
						background: linear-gradient(90deg, #6bdf8f, #a7f3d0, #34d399, #10b981);
						background-size: 200% 100%;     /* 背景尺寸为200%，用于流光动画 */
						animation: flowingLight 2s linear infinite;  /* 流光动画效果 */
						border-radius: 2px;             /* 圆角半径2像素，让下划线边角更圆润 */
					}
			
					@keyframes flowingLight {
						0% {
							background-position: 200% 50%;
						}
						100% {
							background-position: 0% 50%;
						}
					}

					.description {
						width: 100%;
						padding: 0 15px;
						margin-bottom: 15px;
						font-weight: 600;  // 添加这一行来加粗文字
					}
			
					ul {
						list-style: none;
						width: 100%;
					}
			
					ul li {
						color: #1a1f36;
						font-size: 16px;
						line-height: 1.6;
						padding: 12px 15px;
						margin-bottom: 10px;
						background: rgba(255, 255, 255, 0.5);
						border-radius: 12px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						transition: all 0.3s ease;
					}
			
					ul li:hover {
						background: rgba(255, 255, 255, 0.8);
						transform: translateX(5px);
					}

					.beian-info a {
						color: var(--primary-color);
						text-decoration: none;
						border-bottom: 1px dashed var(--primary-color);
						padding-bottom: 2px;
					}

					.beian-info a:hover {
						border-bottom-style: solid;
					}
			
					#visitCount, #liveuser {
						font-weight: 600;
						color: #2d3748;
						margin: 0 4px;
					}

					.github-corner {
						position: fixed;
						top: 0;
						right: 0;
						z-index: 1000;
					}

					.github-corner svg {
						position: absolute;
						top: 0;
						right: 0;
						border: 0;
						fill: #6bdf8f;
						color: #ffffff;
						width: 80px;
						height: 80px;
						transition: fill 0.3s ease;
					}
					
					.github-corner:hover svg {
						fill: #5bc77d;
					}
					
					.github-corner .octo-arm {
						transform-origin: 130px 106px;
					}
					
					@keyframes octocat-wave {
						0%, 100% { transform: rotate(0) }
						20%, 60% { transform: rotate(-25deg) }
						40%, 80% { transform: rotate(10deg) }
					}
					
					.github-corner:hover .octo-arm {
						animation: octocat-wave 560ms ease-in-out;
					}
					
					@media (max-width: 500px) {
						.github-corner {
							width: 60px;
							height: 60px;
						}
						.github-corner:hover .octo-arm {
							animation: none;
						}
						.github-corner .octo-arm {
							animation: octocat-wave 560ms ease-in-out;
						}
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="logo-container">
						<img class="logo" src="${网站头像}" alt="Logo">
					</div>
					<h1>${网页标题}</h1>
					<ul class="description" id="urls"></ul>
					<!-- 新增：urls跳转按钮 -->
					<div id="urls-btns-container" style="width:100%;text-align:center;margin:10px 0;"></div>
					<div class="beian-info" style="text-align: center; font-size: 13px;">
					<h3>✅网页无响应时 点击按钮 跳转访问</h3>
					</div>
				</div>
				<script>
					const urls = ${JSON.stringify(urls)};
					
					// 动态生成URL列表
					const ul = document.getElementById("urls");
					urls.forEach((url, index) => {
						const [testUrl, name] = url.split('#');
						const li = document.createElement("li");
						li.id = \`result\${index}\`;
						li.innerHTML = \`\${name} <span id="latency\${index}">测速中...</span>\`;
						ul.appendChild(li);
					});
			
					const timeout = 3000;
			
					function testLatency(url) {
						return new Promise((resolve) => {
							const start = Date.now();
							const xhr = new XMLHttpRequest();
							xhr.open('HEAD', url, true);
							xhr.timeout = timeout;
			
							xhr.onload = function () {
								const latency = Date.now() - start;
								if (xhr.status === 200) {
									resolve({ url, latency });
								} else {
									resolve({ url, latency: \`状态码: \${xhr.status}\` });
								}
							};
			
							xhr.ontimeout = function () {
								resolve({ url, latency: \`响应超时 \${timeout}ms\` });
							};
			
							xhr.onerror = function () {
								const latency = Date.now() - start;
								// 如果状态码为0，表示请求失败但可能是跨域问题
								if (xhr.status === 0 && latency > 10 && latency < timeout) {
									resolve({ url, latency });
								} else {
									resolve({ url, latency: '请求失败' });
								}
							};
			
							xhr.send();
						});
					}
			
					function getLatencyColor(latency) {
						if (latency <= 100) return '#22c55e';
						if (latency <= 200) return '#84cc16';
						if (latency <= 500) return '#eab308';
						if (latency <= 1000) return '#f97316';
						if (latency > 1000) return '#ef4444';
						return '#dc2626';
					}
			
					// 只需要修改 runTests 函数中处理最快结果的部分:

					async function runTests() {
						const results = await Promise.all(urls.map(url => {
							const [testUrl, name] = url.split('#');
							return testLatency(testUrl).then(result => ({
								...result,
								name
							}));
						}));

						results.forEach((result, index) => {
							const li = document.getElementById(\`result\${index}\`);
							const latencySpan = document.getElementById(\`latency\${index}\`);
							if (typeof result.latency === 'number') {
								latencySpan.textContent = \`\${result.latency}ms\`;
								latencySpan.style.color = getLatencyColor(result.latency);
							} else {
								latencySpan.textContent = result.latency;
								latencySpan.style.color = '#dc2626';
							}
						});

						const validResults = results.filter(result => typeof result.latency === 'number');
						if (validResults.length > 0) {
							const fastest = validResults.reduce((prev, current) => 
								(prev.latency < current.latency ? prev : current), validResults[0]);

							results.forEach((result, index) => {
								if (result.name === fastest.name) {
									const li = document.getElementById(\`result\${index}\`);
									li.style.background = 'rgba(107, 223, 143, 0.3)';
									li.style.border = '2px solid rgba(107, 223, 143, 0.5)';
									li.style.transform = 'translateX(5px)';
								}
							});

							const currentPath = '${path}';
							const currentParams = '${params}';
							const redirectUrl = fastest.url + currentPath + currentParams;
							window.location.href = redirectUrl;
						}
					}
			
					window.onload = runTests;
					// 新增：生成urls跳转按钮
					function renderUrlsBtns() {
					  const btnsContainer = document.getElementById('urls-btns-container');
					  btnsContainer.innerHTML = '';
					  urls.forEach((url, idx) => {
					    const [jumpUrl, name] = url.split('#');
					    const btn = document.createElement('button');
					    btn.textContent = \`点击跳转 \${name || jumpUrl}\`;
					    btn.style = 'margin:4px 6px 4px 0;padding:6px 16px;border-radius:8px;border:none;background:#22c55e;color:#fff;cursor:pointer;font-weight:600;';
					    btn.onclick = () => window.open(jumpUrl, '_blank');
					    btnsContainer.appendChild(btn);
					  });
					}
					renderUrlsBtns();
				<\/script>
				<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>
			</body>
			</html>
			`;

			return new Response(html, {
				headers: { 'content-type': 'text/html;charset=UTF-8' }
			});
		}
	}
};

// 辅助函数：将env.URLS字符串处理成数组
async function ADD(envadd) {
	// 将制表符、双引号、单引号和换行符都替换为逗号
	// 然后将连续的多个逗号替换为单个逗号
	var addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');
	
	// 删除开头和结尾的逗号（如果有的话）
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	
	// 使用逗号分割字符串，得到地址数组
	const add = addtext.split(',');

	return add;
}




