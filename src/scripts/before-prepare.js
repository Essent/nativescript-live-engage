var fs = require('fs-extra');
var path = require('path');

module.exports = function ($logger, $projectData, hookArgs) {
	var platform = hookArgs.platform.toLowerCase();
	if (platform === 'android') {
		// No actions necessary for Android
		return Promise.resolve();
	} else if (platform === 'ios') {
		var iosSrc = 'node_modules/nativescript-live-engage/platforms/ios/LPMessagingSDKModels.bundle';
		var iosDest = path.resolve(__dirname, '../../../app/App_Resources/iOS/LPMessagingSDKModels.bundle');

		return fs.exists(iosDest)
			.then(function (fileExists) {
				if (!fileExists) {
					return fs.copy(iosSrc, iosDest)
						.then(function () {
							$logger.out('LiveEngage - File didn\'t exist, copied: ' + iosSrc + ' to: ' + iosDest);
						});
				} else {
					$logger.out('LiveEngage - File already exists:', iosDest);
					// do nothing
					return;
				}
			});
	}
};
