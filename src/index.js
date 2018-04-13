// @flow
import React from "react";
import ReactDOM from "react-dom";
import foxesData from "./data/foxes.json";
import { App } from "./foxden/foxden";

const appRoot = document.getElementById("root");
appRoot && ReactDOM.render(<App data={foxesData} />, appRoot);
