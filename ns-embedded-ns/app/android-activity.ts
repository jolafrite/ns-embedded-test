/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />

import { AndroidActivityCallbacks, setActivityCallbacks } from "ui/frame";

@JavaProxy("nativescript.org.ns_embedded_android.NativeScriptActivity")
export class NativeScriptActivity extends android.app.Activity {
    private _callbacks: AndroidActivityCallbacks;

    onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
    }

    onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    onRequestPermissionsResult(requestCode: number, permissions: Array<String>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(
            this,
            requestCode,
            permissions,
            grantResults,
            undefined /*TODO: Enable if needed*/
        );
    }

    onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}
