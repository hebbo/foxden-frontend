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
./node_modules/.bin/eslint --init
yarn eslint src/*.js
```

## Flow

```bash
flow init
flow coverage src/*.js
flow coverage -pretty src/*.js
```

## Testing with Jest

```bash
yarn add jest --dev
yarn jest
```
