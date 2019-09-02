import { NativeModules } from "react-native";

const { Player } = NativeModules;

module.exports = {
  prepare: url => {
    Player.prepare(url);
  }
};
