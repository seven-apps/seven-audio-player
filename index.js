import { NativeModules } from "react-native";

const { RNSevenAudioPlayer } = NativeModules;

const _soundPlayerEmitter = new NativeEventEmitter(RNSevenAudioPlayer);
let _finishedPlayingListener = null;
let _finishedLoadingListener = null;

module.exports = {
  playSoundFile: (name, type) => {
    RNSoundPlayer.playSoundFile(name, type);
  },

  loadSoundFile: (name, type) => {
    RNSoundPlayer.loadSoundFile(name, type);
  },

  playUrl: url => {
    RNSoundPlayer.playUrl(url);
  },

  loadUrl: url => {
    RNSoundPlayer.loadUrl(url);
  },

  onFinishedPlaying: callback => {
    if (_finishedPlayingListener) {
      _finishedPlayingListener.remove();
      _finishedPlayingListener = undefined;
    }

    _finishedPlayingListener = _soundPlayerEmitter.addListener(
      "FinishedPlaying",
      callback
    );
  },

  onFinishedLoading: callback => {
    if (_finishedLoadingListener) {
      _finishedLoadingListener.remove();
      _finishedLoadingListener = undefined;
    }

    _finishedLoadingListener = _soundPlayerEmitter.addListener(
      "FinishedLoading",
      callback
    );
  },

  addEventListener: (eventName, callback) =>
    _soundPlayerEmitter.addListener(eventName, callback),

  play: () => {
    // play and resume has the exact same implementation natively
    RNSoundPlayer.resume();
  },

  pause: () => {
    RNSoundPlayer.pause();
  },

  resume: () => {
    RNSoundPlayer.resume();
  },

  stop: () => {
    RNSoundPlayer.stop();
  },

  seek: seconds => {
    RNSoundPlayer.seek(seconds);
  },

  setVolume: volume => {
    RNSoundPlayer.setVolume(volume);
  },

  setSpeaker: on => {
    if (Platform.OS === "android") {
      console.log("setSpeaker is not implement on Android");
    } else {
      RNSoundPlayer.setSpeaker(on);
    }
  },

  getInfo: async () => RNSoundPlayer.getInfo(),

  unmount: () => {
    if (_finishedPlayingListener) {
      _finishedPlayingListener.remove();
      _finishedPlayingListener = undefined;
    }

    if (_finishedLoadingListener) {
      _finishedLoadingListener.remove();
      _finishedLoadingListener = undefined;
    }
  }
};
