# Setup environment

## Yarn

```bash
nvm install v8.11.1
nvm use v8.11.1
npm install -g yarn
```

## Linting

```bash
yarn global add prettier
yarn add eslint --dev //locally and only for dev
yarn add babel-eslint --dev //locally and only for dev
yarn add eslint-plugin-flowtype --dev
yarn add eslint-plugin-react --dev
./node_modules/.bin/eslint --init

yarn eslint src/*.js
```

## Flow

```bash
yarn add flow-bin --dev
yarn global add flow-typed
flow-typed install jest@22.4.3
flow-typed install enzyme@3.3.0
flow-typed install enzyme-adapter-react-16@1.1.1
flow init
flow coverage src/*.js
flow coverage -pretty src/*.js
```

## Testing with Jest

```bash
yarn add jest --dev
yarn jest
```
