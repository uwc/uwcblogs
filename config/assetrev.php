<?php
return array(
	// The path to your asset manifest; most likely generated by a task runner
	// such as Gulp or Grunt. The path will be relative to your Craft base
	// directory, unless you supply an absolute path.
	'manifestPath' => 'public/assets/revisions.json',

	// The path where your built asset files can be found. Required for query
	// string creation. Again, this is relative to your Craft base directory,
	// unless you supply an absolute path.
	'assetsBasePath' => 'public/' . getenv('ASSETS_PREFIX'),

	// A prefix to apply to your asset filenames when they are output. You would
	// likely want to set this if the paths in your manifest file are going to
	// be different to the final intended asset URL.
	'assetUrlPrefix' => getenv('ASSETS_PREFIX'),
);
