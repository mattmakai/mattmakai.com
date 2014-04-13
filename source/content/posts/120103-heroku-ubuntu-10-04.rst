Heroku on Ubuntu 10.04
~~~~~~~~~~~~~~~~~~~~~~

:date: 2012-01-03
:category: post
:slug: heroku-ubuntu-10-04

A couple of guys from Heroku gave a talk tonight at DC Python and it looked like a good 
solution for running small sites. However, I was disappointed that set up was more 
difficult on Ubuntu 10.04 than turn key installers on Windows and Mac OS X. The set 
up `instructions <http://toolbelt.herokuapp.com/linux/readme>`_ required a few 
modifications to work properly.

.. code-block:: heroku-setup-code

  sudo apt-add-repository 'deb http://toolbelt.herokuapp.com/ubuntu ./'
  curl https://toolbelt.herokuapp.com/apt/release.key | sudo apt-key add -
  sudo apt-get update
  sudo apt-get install heroku-toolbelt
  sudo apt-get install ruby libopenssl-ruby ruby1.8-dev
  sudo apt-get install libreadline-ruby

Type "heroku" at the command line to check that the installation is working properly.

Sources:

[1] http://wmilesn.com/2011/10/code/avoiding-pitfalls-when-setting-up-heroku-for-node-js-on-ubuntu/

[2] http://rukuro-blog.heroku.com/2011/05/11/ruby-readline-loaderror
