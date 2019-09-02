//
//  RNSevenAudioPlayer.swift
//  RNSevenAudioPlayer
//
//  Created by Gabriel Avila Rangel on 02/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Player)
class Player: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
    
  @objc
    func prepare(url: String) {
        print("URL IS \(url)")
    }
}
