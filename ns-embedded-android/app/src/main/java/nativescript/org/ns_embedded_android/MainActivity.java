package nativescript.org.ns_embedded_android;

import android.app.Application;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import com.tns.Runtime;
import com.tns.RuntimeHelper;

public class MainActivity extends AppCompatActivity {

    private Runtime runtime;
    private DrawerLayout drawerLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true);
            actionBar.setHomeAsUpIndicator(R.drawable.ic_menu);
        }

        drawerLayout = findViewById(R.id.drawer_layout);

        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(
                new NavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                        switch (menuItem.getItemId()) {
                            case R.id.home:
                                navigate(new HomeFragment());
                            case R.id.nativescript:
                                openNativeScriptActivity();
                        }
                        menuItem.setChecked(true);
                        drawerLayout.closeDrawers();
                        return true;
                    }
                }
        );
        navigate(new HomeFragment());
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem menuItem) {
        switch (menuItem.getItemId()) {
            case android.R.id.home:
                drawerLayout.openDrawer(GravityCompat.START);
                return true;
        }

        return super.onOptionsItemSelected(menuItem);
    }

    private void navigate(Fragment fragment) {
        getSupportFragmentManager().beginTransaction().
                replace(R.id.content_frame, fragment).addToBackStack(null).
                commit();
    }

    private void openNativeScriptActivity() {
        if (runtime == null) {
            Application currentApplication =  MainActivity.this.getApplication();
            runtime = RuntimeHelper.initRuntime(currentApplication);
            if (runtime != null) {
                runtime.run();
            } else {
                return;
            }
        }

        android.content.Intent intent = new android.content.Intent(MainActivity.this, NativeScriptActivity.class);
        intent.setAction(android.content.Intent.ACTION_DEFAULT);
        startActivity(intent);
    }

}
