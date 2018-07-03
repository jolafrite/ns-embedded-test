#import "NativescriptViewController.h"
#import "NativeScriptEmbedder.h"
#import <NativeScript/NativeScript.h>
#import "SWRevealViewController.h"

@interface NativescriptViewController () <NativeScriptEmbedderDelegate>

@end

@implementation NativescriptViewController
TNSRuntime *_runtime;

- (void)viewDidLoad {
    [super viewDidLoad];

    [NativeScriptEmbedder sharedInstance].delegate = self;
    [self _initializeRuntime];
    [_runtime executeModule: @"./"];
    
    self.title = @"Nativescript";
    
    SWRevealViewController *revealViewController = self.revealViewController;
    if(revealViewController) {
        [self.sidebarButton setTarget: self.revealViewController];
        [self.sidebarButton setAction: @selector( revealToggle: )];
        [self.view addGestureRecognizer: self.revealViewController.panGestureRecognizer];
    }
}

- (void)_initializeRuntime {
    extern char startOfMetadataSection __asm("section$start$__DATA$__TNSMetadata");
    [TNSRuntime initializeMetadata:&startOfMetadataSection];
    _runtime = [[TNSRuntime alloc] initWithApplicationPath:[[NSBundle mainBundle] bundlePath]];
    [_runtime scheduleInRunLoop:[NSRunLoop currentRunLoop] forMode:NSRunLoopCommonModes];
    [TNSRuntimeInspector setLogsToSystemConsole:YES];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (id)presentNativeScriptApp: (UIViewController*) vc {
    [self addChildViewController: vc];
    [vc.view setFrame: self.nativescriptContentView.bounds];
    [self.nativescriptContentView addSubview: vc.view];
    [vc didMoveToParentViewController: self];
    return 0;
}

@end
