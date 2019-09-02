
# react-native-seven-audio-player

## Getting started

`$ npm install react-native-seven-audio-player --save`

### Mostly automatic installation

`$ react-native link react-native-seven-audio-player`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-seven-audio-player` and add `RNSevenAudioPlayer.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSevenAudioPlayer.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSevenAudioPlayerPackage;` to the imports at the top of the file
  - Add `new RNSevenAudioPlayerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-seven-audio-player'
  	project(':react-native-seven-audio-player').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-seven-audio-player/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-seven-audio-player')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSevenAudioPlayer.sln` in `node_modules/react-native-seven-audio-player/windows/RNSevenAudioPlayer.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Seven.Audio.Player.RNSevenAudioPlayer;` to the usings at the top of the file
  - Add `new RNSevenAudioPlayerPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSevenAudioPlayer from 'react-native-seven-audio-player';

// TODO: What to do with the module?
RNSevenAudioPlayer;
```
  