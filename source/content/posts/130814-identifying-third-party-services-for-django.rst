Discovering Third Party Services for Django Projects
====================================================

:category: blog
:date: 2013-08-14
:slug: identifying-third-party-services-for-django

Every non-trivial modern Django project combines externally hosted third 
party services with custom code to create a complete web application.

For example:

* Google Analytics for traffic and customer funnel analysis
* Stripe, Dwolla, or PayPal for payment processing
* Twilio for text message notifications
* GitHub API for code searches
* New Relic or CopperEgg for application and infrastructure monitoring
* Intercom.io for user engagement

A major part of being a knowledgeable developer in 2013 is knowing what
services are out there. This post provides resources for discovering third
party services you can use in your Django web application. How to evaluate 
known services is a separate topic that will come in a later post.

Some of these services, such as Google Analytics, are easy to drop into 
your application with a line of JavaScript. Other services, such as 
Intercom.io, Stripe, or Twilio are integrated on the back end. These services
are often critical to your application's full operation.

Even with simple drop-in third party services there are ways to properly
handle them in your Django project. For example, you should have a flag
that disables Google Analytics code in your local development environment 
when DEBUG is set to True in settings. That way the JavaScript does not 
load while you're working.


Mindset
-------
I prefer to do my research when I have extra time and do not yet have a 
specific purpose for a service in mind. This situation allows me to browse
services and their competitors without getting hung up on particular 
features. Then when I'm working on a particular project I have a wide
set of choices that I am aware of which I can evaluate further.

Your mileage may vary, but when I'm in the moment working on a specific 
application my mindset is just to try a service out and get it to work 
without thinking as objectively about potential alternatives. Identifying
services before starting a particular project helps me to avoid that 
narrow focus.


Weekly Updates
--------------
There are a couple of newsletters I subscribe to that push out information
about new and existing services. Weekly updates help me learn on a regular
basis bouth about the services themselves and also about the Python bindings
that exist:

* `Leanstack <http://leanstack.io/>`_
* `Lincoln Loop Django Newsletter <http://lincolnloop.com/django-round-up/>`_
* `Python Weekly <http://www.pythonweekly.com/>`_
* `Pycoder's Weekly <http://pycoders.com/>`_


Ongoing
-------
There are a few other sites that help give me ideas for what I can be using.
I browse these sites on a regular basis to see what's new or remind me about
a service I have not used in awhile:

* `Heroku Addons <https://addons.heroku.com/>`_
* `Geckoboard Widgets Directory <http://www.geckoboard.com/widget-directory/>`_
* `Ducksboard Services Integration <https://ducksboard.com/services-integrations/>`_
* `New Relic Platform Partners <http://newrelic.com/platform>`_

The great part about identifying these services is that the knowledge 
translates to other frameworks, such as Flask or Pyramid, and other languages
such as Ruby and Clojure. Although in my next blog post I'll describe why 
you should be evaluating these services from a language and framework
perspective before committing to them.

If you're going to DjangoCon this year, come see my talk on 
`Making Django Play Nice With Third Party Services <http://www.djangocon.us/schedule/presentation/47/>`_ 
on September 5 at 10am.

If you enjoyed this post you should read 
`my checklist for evaluating existing Django projects <../django-project-checklist.html>`_
and check out my `Coding Across America <http://www.codingacrossamerica.com/>`_
project.

