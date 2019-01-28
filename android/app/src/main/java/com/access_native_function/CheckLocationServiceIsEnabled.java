package com.access_native_function;

import android.content.Context;
import android.location.LocationManager;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CheckLocationServiceIsEnabled extends ReactContextBaseJavaModule{

    private ReactApplicationContext reactContext;


    public CheckLocationServiceIsEnabled(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void isLcationServiceEnabled(Promise promise)
    {
        LocationManager lm = (LocationManager)
                reactContext.getSystemService(Context.LOCATION_SERVICE);
         promise.resolve(lm.isProviderEnabled(LocationManager.GPS_PROVIDER));
    }

    @Override
    public String getName() {
        return "CheckLocationServiceIsEnabled";
    }
}
