# hdcd_object_typescript_source

버전문제로 package.json에서 아래부분 삭제
  "devDependencies": {
    "ts-loader": "^8.0.17",
    "typescript": "^4.2.3"
  }

재설치
npm install ts-loader --save-dev
npm install typescript --save-dev



webpack.config.js 
loaders => rules 변경



# global로 설치된 webpack 연결
npm link webpack