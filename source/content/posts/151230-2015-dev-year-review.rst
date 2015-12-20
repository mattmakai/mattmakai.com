My 2015 Software Development Year in Review
===========================================

:slug: 2015-software-development-year-review
:category: post
:date: 2015-12-30


The end of the year is a good time to step back and take stock of everything
accomplished throughout the past 365 days. This software development 
year in review post continues the retrospectives I performed in 
`2012 </2012-development-year-in-review.html>`_, 
`2013 </2013-development-year-in-review.html>`_ and 
`2014 </2014-software-development-year-review.html>`_.


2015 Highlights
---------------
* Writing and releasing my first book, 
  `The Full Stack Python Guide to Deployments <http://www.deploypython.com/>`_
* Expanding `fullstackpython.com <https://www.fullstackpython.com/>`_'s 
  content with 
  `many open source code commits <https://github.com/makaimc/fullstackpython.com/commits/gh-pages>`_ while growing the audience from 18,000 to over 
  55,000 readers per month
* Speaking at PyCon US with both Renee Chu and Kate Heddleston
* Presenting my all time favorite tech talk at 
  `SF Python <http://www.meetup.com/sfpython/events/219577721/>`_:
  `Asynchronous Python Web Apps with WebSockets and gevent <https://www.youtube.com/watch?v=L5YQbNrFfyw>`_,
  which was all live-coded except for a few introduction slides
* Working with the 
  `Twilio Developer Network <https://www.youtube.com/watch?v=TF129ioe8kc>`_ 
  to execute the incredible 
  `Signal 2015 developers conference <https://www.twilio.com/signal>`_
* Creating and deploying the initial version of 
  `PLAPI <https://github.com/makaimc/plapi>`_ 
  (along with working on the 
  `Flask prototype <https://github.com/makaimc/plapi-prototype-flask>`_), 
  which will be my primary 2016 side project


Coding
------
All of my technical writing is based on open source coding projects. 
Typically I start a project prototype with a fury of programming in a couple 
of days or weeks. Then I'll write a blog post on it. In some cases, that's 
the end of both the programming and writing unless there are bugs found or 
unexpected questions asked by the community that make me want to take the
project further.

In other cases, the initial code is a foundation for a larger effort 
that weaves coding, writing and speaking together. In these cases, such
as with `Coding Across America <http://codingacrossamerica.com/>`_, 
Full Stack Python, Choose Your Own Adventure Presentations, The Full 
Stack Python Guide to Deployments and PLAPI, I seek a fast feedback loop 
based on in-person and online conversations, pull requests, GitHub issues, 
online comments, emails and tweets. Updates are made based on the feedback 
received.

These are some of the projects that followed the community feedback
formula that will continue in 2016:

* Started `comparing Python web frameworks <https://github.com/makaimc/compare-python-web-frameworks>`_
  to expand beyond my typical 
  `Django <http://www.fullstackpython.com/django.html>`_ and 
  `Flask <http://www.fullstackpython.com/flask.html>`_ frameworks usage

* Created an `open source Ansible playbook <https://github.com/makaimc/fsp-deployment-guide>`_
  for deploying WSGI applications as a companion to my deployments book

* Wrote a 
  `PLAPI prototype with Flask and Flask-RESTful <https://github.com/makaimc/plapi-prototype-flask>`_
  then began the version 1 codebase with
  `Django and Django REST Framework <https://github.com/makaimc/plapi>`_

* Updated the `Twilio Ansible module <http://docs.ansible.com/ansible/twilio_module.html>`_
  to support `multimedia messages <https://www.twilio.com/mms>`_ 

To keep the above projects moving forward I try to make an improvement and
Git commit every day to at least one of them. In 2014, I missed 3 days out
of 365. This year I missed 2 days, which snapped my 505 day commit streak
but is still crazy in how consistent I was able to be despite my intense 
travel schedule. There were several hundred more private commits but here
is how the public commit chart turned out:

.. image:: /source/static/img/151230-year-review/github-commits.png
  :alt: GitHub commits for 2015
  :width: 100%

The vast majority of the above commits were Python code. I probably wrote
85% of my code in Python (although some subset of that is JavaScript on the 
front end when necessary) and about 15% in Swift. That ratio will ideally 
change in 2016 to about 65% Python and 35% Swift, with far more of the
Swift code as open source than I was able to accomplish this year.

I also started `live code streaming </live-coding.html>`_ in the second 
half of this year on both Livecoding.tv and Twitch Creative. The dozen 
streams added up to about 18 hours of video. There is still a lot of work to
figure out how well these platforms work. However, the initial results
are encouraging.


Writing
-------
The majority of my technical writing this year was for
`Twilio <https://www.twilio.com/blog/author/mmakai>`_, 
`my Python deployments book <http:///www.deploypython.com/>`_ and
`Full Stack Python <http://www.fullstackpython.com/>`_. My goal in writing
is to be accessible to developers of all skill levels. I skew towards 
pragmatic projects and much of my writing boils down to "*try out this 
tutorial and you'll learn x, y and z*". My 2015 Twilio blog posts closely 
followed this formula:

* `City Chat with Python, Django and Twilio IP Messaging <https://www.twilio.com/blog/2015/12/city-chat-with-python-django-and-twilio-ip-messaging.html>`_
* `Warm Phone Call Transfers with Python, Flask and Twilio Voice <https://www.twilio.com/blog/2015/09/warm-phone-call-transfers-with-python-flask-and-twilio-voice.html>`_
* `Calculating Net Promoter Score with Python and SMS <https://www.twilio.com/blog/2015/01/net-promoter-score-python-sms.html>`_
* The three part series that continues building out the 
  `Choose Your Own Adventure Presentation <https://github.com/makaimc/choose-your-own-adventure-presentations>`_ 
  Flask application: 
    
  1. `Choose Your Own Adventure Presentations: Wizard Mode Part 1 of 3 <https://www.twilio.com/blog/2015/03/choose-your-own-adventures-presentations-wizard-mode-part-1-of-3.html>`_ 
  2. `Choose Your Own Adventure Presentations: Wizard Mode Part 2 of 3 <https://www.twilio.com/blog/2015/05/choose-your-own-adventure-presentations-wizard-mode-part-2-of-3.html>`_
  3. `Choose Your Own Adventure Presentations: Wizard Mode Part 3 of 3 <https://www.twilio.com/blog/2015/07/choose-your-own-adventure-presentations-flask-reveal-js-websockets.html>`_

* `How to Build Your Own Hackpack <https://www.twilio.com/blog/2015/05/how-to-build-your-own-hackpack.html>`_ 
  and `Building A Multi Channel Support Desk with TaskRouter <https://www.twilio.com/blog/2015/02/multi-channel-support-desk-taskrouter.html>`_
  which I had the pleasure of coding and writing with the incredible
  `Ricky Robinett <http://blog.rickyrobinett.com/>`_.

These tutorials are solid executions of inspiring and equipping fellow
software developers that I look forward to continuing to write in 2016.


