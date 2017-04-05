This is react web project using cordova to produce mobile application.<br>
React Web & Mobile one source based.

## What I followed to create this project
React Environment using webpack and babel<br>
https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel<br>

cordova create <path> --template <react_project_path><br>

## Command
- to generate dist source<br>
npm run dist

- to run web server (hot deploy)<br>
npm start

- to run dev mode (hot deploy into distribution directory)<br>
npm run dev

## How to Start
- npm install -g cordova
- npm dist
- cordova platform add <ios or android>

## Cordova hot deploy
https://github.com/nordnet/cordova-hot-code-push<br>
apply mobile hot deploy plugin<br>
- cordova plugin add cordova-hot-code-push-plugin
- cordova plugin add cordova-hot-code-push-local-dev-addon
- npm install -g cordova-hot-code-push-cli
* In case if you are working inside proxy, I added hot code plugins as a zip file(plugins-proxy.zip)

start local mobile server<br>
- cordova-hcp server

