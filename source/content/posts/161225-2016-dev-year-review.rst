My 2016 Software Development Year in Review
===========================================

:slug: 2016-software-development-year-review
:category: post
:date: 2016-12-25


In the past several years I have taken time at the end of December to
reflect on the coding projects, software talks and tutorials
that I worked on throughout the year. It is useful to have an account of my
software development highlights even though I do not expect this type of 
post to necessarily be riveting retrospectives for most readers. They are 
just an honest retrospective on what worked, didn't work and how I can get
better going forward.

This post differs slightly from past retrospectives in 
`2012 </2012-development-year-in-review.html>`_, 
`2013 </2013-development-year-in-review.html>`_,
`2014 </2014-software-development-year-review.html>`_ and
`2015 </2015-software-development-year-review.html>`_
by starting with a big picture summary before diving into the highlights
for what I created. I also wrote a forward-looking post on
`my year ahead in software development <2016-year-ahead-software-development.html>`_ 
to kick off this year so I'll take a look at how my results stacked up
to what I was expecting to accomplish.


Summary
-------
2016 was my first complete calendar year as a software developer in San 
Francisco. Without looking too far ahead into 2017, it will also be my last 
year here as I am moving back to Washington, DC in April to continue the 
work with Twilio that I started there in 2014.

Overall I made progress on becoming a better Swift & iOS developer. 
My work continued on the Python projects that are important to me while
also learning a bit more about the Bottle, Pyramid and Morepath web 
frameworks to branch out from my usual 
`Django <https://www.fullstackpython.com/django.html>`_ and 
`Flask <https://www.fullstackpython.com/flask.html>`_ work.
I invested significant time into live streaming programming and creating
tutorial videos to put onto YouTube.


Expectations vs. Results
------------------------
My four goals were stated in
`my 2016 year ahead in software development </2016-year-ahead-software-development.html>`_ as follows:

1. Code, launch and operate my 2016 side project Plapi
2. Inspire and equip fellow developers as a Twilio Developer Evangelist
3. Release new updates to The Full Stack Python Guide to Deployments book
4. Build on the Full Stack Python foundation with daily updates

Goal #1 to code, launch and operate the Programming Languages Web API was a 
semi-bust. I wrote a `decent initial version <https://github.com/mattmakai/plapi>`_ and deployed it on a Linode server. However, I fell on my face 
while trying to operate it. Essentially, the operations did not happen. 
There really needed to be daily updates to the content and code for 
this project to take off. In the late spring the whole thing was shelved
when Michael Kennedy and I started working on 
`the Python for Entrepreneurs video course <https://www.kickstarter.com/projects/mikeckennedy/python-for-entrepreneurs-video-course>`_.

I will have to take another swing at building this programming languages
web API again when I am more firmly committed to the project.

Goal #2 to continue inspiring and equipping developers as a Twilio Developer 
Evangelist was solid. Twilio is a special company completely focused on 
developers. I am just as stoked while entering my fourth year as a Twilion
as the day I joined.

Goal #4 was to release several 
`Guide to Deployments book <http://www.deploypython.com/>`_ updates. There 
was significant progress in the book toolchain, creation of the .mobi 
version and some content updates and tweaks. However, I really aim to get 
out an update each month or every other month at the least. In 2017 I need 
to do better to crank out regular meaty updates and keep the book's 
instructions fresh.

Goal #4 to continue building Full Stack Python with daily updates was very
successful. While I did not deliver updates every single day, I was 
intentional in the days I would not commit a code change because I needed
a break due to vacation or work commitments. I'm happy how this one turned
out with the addition of the 
`new tutorials blog <https://www.fullstackpython.com/blog.html>`_, a
revamped 
`table of contents that includes a roadmap for upcoming pages <https://www.fullstackpython.com/table-of-contents.html>`_ 
significantly reduced HTML+CSS file sizes and a ton of additional content 
across many new pages. Crossing the 800,000 reader mark for the year is also
a good stepping stone towards my 1+ million readers target in 2017.


Coding
------
I did a lot of coding this past year but a lot of it didn't feel as meaty
as some projects I worked on for extended periods of time when I was a
consultant in my pre-Twilio days.

* Spent significant time coding Python projects, both open source and some private side prototype projects
* Developed with Swift and released a small iOS mobile app on the App Store
* Coded occasionally on Windows with both Python and Java

Here was my GitHub commit log throughout the year, including both public
and private repositories.

.. image:: /source/static/img/161225-2016-year-review/contributions-2016.png
  :alt: GitHub commits for 2016
  :width: 100%


I'll need to think about longer-term projects in 2017 to make sure I do 
not get stuck spending all my time constantly creating new projects rather 
than maintaining and building upon existing ones.


Writing
-------
My writing is split between several locations, including the 
`Twilio blog <https://www.twilio.com/blog>`_, 
`Full Stack Python <https://www.fullstackpython.com/>`_, 
`this personal blog you're reading right now <http://www.mattmakai.com/>`_
and any outside sites I have the opportunity to write for, such as 
Real Python this year or O'Reilly's site in past years.


Twilio posts
~~~~~~~~~~~~
I wrote less Twilio posts than I would've like to put out there, but the
resulting list is decent.

* `iOS and Web Browser Video Calls with Python and Swift <https://www.twilio.com/blog/2016/02/ios-and-web-browser-video-calls-with-python-and-swift-2.html>`_
* `Tutorials from Twilio: Live Coding on Twitch This Week <https://www.twilio.com/blog/2016/03/tutorials-from-twilio-live-coding-on-twitch-this-week.html>`_
* `How to Build an SMS Slack Bot in Python <https://www.twilio.com/blog/2016/05/build-sms-slack-bot-python.html>`_
* `How to Add Phone Calling Bots to Slack with Python <https://www.twilio.com/blog/2016/05/add-phone-calling-slack-python.html>`_
* `Getting Started with Python, Bottle and Twilio SMS / MMS <https://www.twilio.com/blog/2016/08/getting-started-python-bottle-twilio-sms-mms.html>`_
* `How to Make and Receive Phone Calls with Python, Bottle and Twilio Voice <https://www.twilio.com/blog/2016/11/make-receive-phone-calls-python-bottle-twilio-voice.html>`_
* `First Steps with Python & Bottle <https://www.twilio.com/blog/2016/11/first-steps-python-bottle-web-framework.html>`_
* `How to Set Up Localhost Tunneling with Ngrok on Mac OS X <https://www.twilio.com/blog/2016/12/localhost-tunneling-ngrok-mac-os-x.html>`_


Full Stack Python posts
~~~~~~~~~~~~~~~~~~~~~~~
Back in May I started writing blog posts to supplement the explanation pages
typically found on Full Stack Python. Most were written between May and July
with a trickle of new ones throughout the remainder of the year.

* `The Full Stack Python Blog <https://www.fullstackpython.com/blog/full-stack-python-blog.html>`_
* `Setting up Python 3, Django and Gunicorn on Ubuntu 16.04 LTS <https://www.fullstackpython.com/blog/python-3-django-gunicorn-ubuntu-1604-xenial-xerus.html>`_ 
* `How to set up Python 3, Flask and Green Unicorn on Ubuntu 16.04 LTS <https://www.fullstackpython.com/blog/python-3-flask-green-unicorn-ubuntu-1604-xenial-xerus.html>`_
* `How to Send SMS Text Messages with Python <https://www.fullstackpython.com/blog/send-sms-text-messages-python.html>`_
* `Configuring Python 3, Bottle and Gunicorn for Development on Ubuntu 16.04 LTS <https://www.fullstackpython.com/blog/python-3-bottle-gunicorn-ubuntu-1604-xenial-xerus.html>`_
* `How to Send MMS Picture Messages with Python <https://www.fullstackpython.com/blog/send-mms-picture-messages-python.html>`_
* `How to Use Redis with Python 3 and redis-py on Ubuntu 16.04 <https://www.fullstackpython.com/blog/install-redis-use-python-3-ubuntu-1604.html>`_
* `Setting up PostgreSQL with Python 3 and psycopg on Ubuntu 16.04 <https://www.fullstackpython.com/blog/postgresql-python-3-psycopg2-ubuntu-1604.html>`_
* `How to Install and Use MySQL on Ubuntu 16.04 <https://www.fullstackpython.com/blog/install-mysql-ubuntu-1604.html>`_
* `Responding to SMS Text Messages with Python & Flask <https://www.fullstackpython.com/blog/respond-sms-text-messages-python-flask.html>`_
* `How to Build Your First Slack Bot with Python <https://www.fullstackpython.com/blog/build-first-slack-bot-python.html>`_
* `Replying to SMS Text Messages with Python and Bottle <https://www.fullstackpython.com/blog/reply-sms-text-messages-python-bottle.html>`_
* `Configuring Python 3, Pyramid and Gunicorn on Ubuntu 16.04 <https://www.fullstackpython.com/blog/python-3-pyramid-gunicorn-ubuntu-1604-xenial-xerus.html>`_
* `Setting Up Python 3, Django & Gunicorn on Linux Mint 17.3 <https://www.fullstackpython.com/blog/python-3-django-gunicorn-linux-mint-17.html>`_
* `Python for Entrepreneurs <https://www.fullstackpython.com/blog/python-entrepreneurs.html>`_
* `Dialing Outbound Phone Calls with a Bottle Web App <https://www.fullstackpython.com/blog/dial-outbound-phone-calls-python-bottle.html>`_
* `How to Make Phone Calls in Python <https://www.fullstackpython.com/blog/make-phone-calls-python.html>`_


Other Posts
~~~~~~~~~~~
I wrote a post for the guys who run one of my favorite Python sites,
`Real Python <https://realpython.com/>`_, on 
`Getting Started with the Slack API <https://realpython.com/blog>`_.

My personal blog only had three posts, the look ahead for 2016, this year
in review post and a 
`summary of my SIGNAL 2016 talk on bots </r2d2-skynet.html>`_.


Book updates
~~~~~~~~~~~~
Daily updates to Full Stack Python, including the blog posts listed above,
along with one major update to The Full Stack Python Guide to Deployments
were the highlights on the book update side. There is a lot of work to be
done in 2017 with more frequent updates to the Guide to Deployments book
to improve it based on reader feedback.


Streaming and Videos
--------------------
I started streaming on Livecoding.tv at the end of 2015 and then moved over
to Twitch Creative for the first six months of 2016. Finally I switched to
creating videos for YouTube and the Python for Entrepreneurs video course. 
The two public videos I created were:

* `First Steps with Python and Bottle <https://www.youtube.com/watch?v=qakG9BYJ1tw>`_
* `Localhost Tunneling with Ngrok on Mac OS X <https://www.youtube.com/watch?v=oy13mDsXC4s>`_

The rest of the videos I created are in the 
`Git chapter on the Python for
Entrepreneurs course page <https://training.talkpython.fm/courses/details/python-for-entrepreneurs-build-and-launch-your-online-business>`_. I have a
lot more videos coming in 2017 and that will be one focus area for me
heading into the new year.




Onward!
-------
That's my long list of what I achieved, didn't achieve and some insight into
what I hope to do better for 2017. Next up I'll do a short post sometime in
the next few weeks that will look ahead towards my goals for the new year.

