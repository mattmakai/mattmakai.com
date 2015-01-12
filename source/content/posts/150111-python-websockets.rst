WebSockets with Python Resources
================================

:slug: websockets-python-resources
:category: post
:date: 2015-01-14

Before you to node.js to handle WebSockets or any type of full-duplex 
client-server communication, learn some of the options for getting the job
done with Python. I'll lay out some of the resources here that I found most
helpful for getting started coding Python web applications that use 
WebSockets. It's not necessary to have seen the talk but this page goes along 
with the 
`San Francisco Python January 2015 meetup <www.meetup.com/sfpython/events/219577721/>`_. 

Before diving in make sure you check out the  
`WebSockets page on Full Stack Python <http://www.fullstackpython.com/websockets.html>`_. 
The page is new so it's a bit sparse at the moment but I'll continue filling 
it out throughout the rest of the month.


General WebSocket resources
---------------------------
The below WebSocket resources aren't specific to Python but it's a good
idea to get grounded in the technology itself first.

* There is an official 
  `RFC for WebSockets <http://www.faqs.org/rfcs/rfc6455.html>`_ that is a good
  place to start if you prefer to go straight to the source. I generally 
  read a few summaries by other folks before diving into an RFC.

* `WebSockets 101 <http://lucumr.pocoo.org/2012/9/24/websockets-101/>`_
  provides context for what's good and not so good about the WebSockets
  protocol.

* Can I Use? has a nice chart for what 
  `browsers and versions support WebSockets <http://caniuse.com/#feat=websockets>`_.

* `Mozilla's WebSockets documentation <https://developer.mozilla.org/en-US/docs/WebSockets>`_ is good for a range of explanations and tutorials.

* This 
  `chapter from High Performance Browsering Networking <http://chimera.labs.oreilly.com/books/1230000000545/ch17.html>`_ 
  is a comprehensive overview of WebSockets.


Evented networking frameworks
-----------------------------
I recommend reading the 
`awesome-python list of concurrency and networking libraries <https://github.com/vinta/awesome-python#concurrency-and-networking>`_.

In the SF Python January 2015 meetup group I used 
`gevent <http://www.gevent.org/>`_ with Flask, 
`Flask-SocketIO <https://flask-socketio.readthedocs.org/en/latest/>`_ and 
`SocketIO <http://socket.io/>`_ to handle WebSocket connections.


WebSockets with Python web frameworks
-------------------------------------
These resources are specific to using WebSockets with Python web frameworks
like Django, Flask and Bottle and Klein. Each tutorial will show you 
step-by-step how to implement WebSockets with that framework.

* I highly recommend Miguel Grinberg's blog post on 
  `WebSockets with Flask <http://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent>`_.

* My `Choose Your Own Adventure Presentations <https://www.twilio.com/blog/2014/11/choose-your-own-adventure-presentations-with-reveal-js-python-and-websockets.html>`_ 
  blog post shows how to use Flask, gevent, Reveal.js and SMS to create
  interactive presentations.

* `Going asynchronous: from Flask to Twisted Klein <http://tavendo.com/blog/post/going-asynchronous-from-flask-to-twisted-klein/>`_
  explains how to use Klein for async apps as a replacement for Flask.

* `Real-time Web Apps with Django and WebSockets <http://blog.jupo.org/2011/08/13/real-time-web-apps-with-django-and-websockets/>`_
  is a few years old but still relevant for implementing WebSockets if you're 
  using Django.

* `Async with Bottle <http://bottlepy.org/docs/dev/async.html>`_ is a 
  walkthrough for the Bottle framework.


WebSockets vs WebRTC Data vs SSE
--------------------------------
There are multiple ways to accomplish server push and full duplex 
communication between web browsers and a server. The WebRTC Data Channel and 
`Server-Sent Events <http://www.w3schools.com/html/html5_serversentevents.asp>`_
(SSE) can provide similar functionality to WebSockets, although there are
differences such as SSE not being able to push from client to server, only
server to client. There is often confusion for how these technologies 
compare so it's a good idea to read a few of the posts below to survey the 
landscape.

* This post on 
  `WebRTC Data Channels vs WebSockets <http://www.tokbox.com/blog/webrtc-data-channels-vs-websockets/>`_
  specifically addresses where data channels are currently appropriate and 
  where they are less useful.

* There's a well done 
  `Stack Overflow discussion on WebSockets vs SSE <http://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource>`_.

* These slides roll through 
  `what WebSockets, SSE and WebRTC are <http://www.slideshare.net/swanandpagnis/lets-get-real-time-serversent-events-websockets-and-webrtc-for-the-soul>`_.


