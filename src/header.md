# 使用说明

调用api接口需要先使用 “获取access token” 或 “根据refreshToken刷新access token” 接口来获取 access token，在header中增加 "Authorization"，值为"Bearer "+accessToken，即可访问接口

其中“设备注册”和"设备上报数据"接口不需要access token来访问，这两个接口是给设备使用的。
