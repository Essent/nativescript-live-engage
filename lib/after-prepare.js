var fs = require('fs-extra');
var path = require('path');
var xcode = require('xcode');

var bundleFilePath = 'node_modules/nativescript-live-engage/platforms/ios/LPMessagingSDKModels.bundle';
var xcodeBundleFilePath = '$(SRCROOT)/../../' + bundleFilePath;

module.exports = function ($logger, $projectData, hookArgs) {
    var platform = hookArgs.platform.toLowerCase(),
        lpBundle = path.join($projectData.projectDir, bundleFilePath);
    return new Promise(function (resolve, reject) {
        if (fs.existsSync(lpBundle)) {
            if (platform === 'android') {
                // No actions necessary for Android
                resolve();
            } else if (platform == 'ios') {
                var appName = path.basename($projectData.projectDir);
                var sanitizedName = appName.split('').filter(function (c) {
                    return /[a-zA-Z0-9]/.test(c);
                }).join('');
                var projectPath = path.join($projectData.projectDir, 'platforms', 'ios', sanitizedName + '.xcodeproj', 'project.pbxproj');
                $logger.trace('Using Xcode project', projectPath);
                var xcodeProject = xcode.project(projectPath);
                xcodeProject.parseSync();
                xcodeProject.addResourceFile(xcodeBundleFilePath);
                fs.writeFileSync(projectPath, xcodeProject.writeSync());

                resolve();
            }
        } else {
            $logger.error('Please create: ', lpBundle);
            reject();
        }
    });
};