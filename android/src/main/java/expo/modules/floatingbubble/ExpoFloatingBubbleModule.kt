package expo.modules.floatingbubble

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import android.provider.Settings
import android.content.Context
import android.content.Intent
import android.net.Uri
import expo.modules.kotlin.Promise

class ExpoFloatingBubbleModule : Module() {
    private val context
        get() = requireNotNull(appContext.reactContext)

    override fun definition() = ModuleDefinition {
        Name("ExpoFloatingBubble")

        Function("hasPermission") {
            return@Function hasPermission()
        }

        AsyncFunction("requestPermission") {
            return@AsyncFunction requestPermission()
        }
    }

    private fun hasPermission(): Boolean {
        return Settings.canDrawOverlays(context)
    }

    private fun requestPermission(): Boolean {
        if (hasPermission()) {
            return true
        }

        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:${context.packageName}")
        )
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)

        return false
    }
}