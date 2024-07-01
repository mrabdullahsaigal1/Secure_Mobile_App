package com.secureapp

import android.content.IntentFilter
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter

class IncorrectPasswordListenerModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), LifecycleEventListener {
    private val receiver = IncorrectPasswordReceiver(reactContext)
    private var isReceiverRegistered = false

    init {
        reactContext.addLifecycleEventListener(this)
    }

    override fun getName(): String {
        return "IncorrectPasswordListener"
    }

    @ReactMethod
    fun startListening() {
        if (!isReceiverRegistered) {
            Log.d("IncorrectPasswordListener", "Start listening for incorrect password attempts")
            val filter = IntentFilter()
            filter.addAction("android.app.action.ACTION_PASSWORD_FAILED")
            reactContext.registerReceiver(receiver, filter)
            isReceiverRegistered = true
        }
    }

 @ReactMethod
fun addListener(type: String?) {
    // Keep: Required for RN built in Event Emitter Calls.
}

@ReactMethod
fun removeListeners(type: Int?) {
    // Keep: Required for RN built in Event Emitter Calls.
}
    @ReactMethod
    fun stopListening() {
        if (isReceiverRegistered) {
            Log.d("IncorrectPasswordListener", "Stop listening for incorrect password attempts")
            reactContext.unregisterReceiver(receiver)
            isReceiverRegistered = false
        }
    }

    private fun sendEvent(eventName: String, params: WritableMap?) {
        reactContext.getJSModule(RCTDeviceEventEmitter::class.java).emit(eventName, params)
    }

    override fun onHostResume() {
        startListening()
    }

    override fun onHostPause() {
        stopListening()
    }

    override fun onHostDestroy() {
        stopListening()
    }
}
