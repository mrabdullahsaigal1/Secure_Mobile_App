package com.secureapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter

class IncorrectPasswordReceiver(private val reactContext: ReactApplicationContext) : BroadcastReceiver() {

    override fun onReceive(context: Context?, intent: Intent?) {
        Log.d("IncorrectPasswordReceiver", "onReceive called")
        if (intent?.action == "android.app.action.ACTION_PASSWORD_FAILED") {
            Log.d("IncorrectPasswordReceiver", "Incorrect password attempt detected")
            sendEvent("IncorrectPasswordAttempt")
        }
    }

    private fun sendEvent(eventName: String) {
        Log.d("IncorrectPasswordReceiver", "Sending event to React Native: $eventName")
        reactContext.getJSModule(RCTDeviceEventEmitter::class.java).emit(eventName, null)
    }
}
