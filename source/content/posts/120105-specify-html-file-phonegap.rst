Specify HTML File for PhoneGap and iOS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:date: 2012-01-05
:category: blog
:featured: True
:slug: specify-html-file-phonegap-ios

When working with iOS applications and using PhoneGap, you'll often want to use a different 
file name than "index.html" for your first page. This can be tricky for first time 
PhoneGap/iOS developers because there is no stub function or properties file for 
specifying the file like there is in Android and BlackBerry projects.

In your AppDelegate.m file, add the following method and change the return value to the 
HTML file you want to use.

.. code-block:: html-file-phonegap-ios

  + (NSString*) startPage
  {
    return @"different.html";
  }

Bonus: you can also use this to specify a different path than www. For example, if 
you have a combined Android and iOS project where Android requires the assets directory, 
specify "../assets/www/yourfile.html" as the return value.
