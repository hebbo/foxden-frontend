# Setup environment

```bash
nvm install v8.11.1
nvm use v8.11.1
npm install -g yarn
yarn global add prettier
yarn add eslint --dev //locally and only for dev
yarn add babel-eslint --dev //locally and only for dev
./node_modules/.bin/eslint --init
yarn eslint src/*.js
```

