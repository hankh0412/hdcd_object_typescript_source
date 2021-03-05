# hdcd_object_typescript_source

버전문제로 package.json에서 아래부분 삭제
```json
  "devDependencies": {
    "ts-loader": "^2.0.3",
    "typescript": "^2.9.2"
  }
```

재설치
```
npm install ts-loader --save-dev
npm install typescript --save-dev
```
<br/>
<br/>

webpack.config.js   
loaders => rules 변경

<br/>
<br/>

### global로 설치된 webpack 연결
    npm link webpack