package com.secureapp

import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceAdminModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext = reactContext

    override fun getName(): String {
        return "DeviceAdmin"
    }

    @ReactMethod
    fun requestAdminPermission() {
        val context = reactContext.applicationContext
        val devicePolicyManager = context.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
        val compName = ComponentName(context, MyDeviceAdminReceiver::class.java)
        val intent = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN)
        intent.putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, compName)
        intent.putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Your explanation")
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
    }
}
