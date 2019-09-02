#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface Player : RCTEventEmitter <RCTBridgeModule, AVAudioPlayerDelegate>
@end
