My 2012 Software Development Year in Review
===========================================

:slug: 2012-development-year-in-review
:category: post
:date: 2012-12-26

Ever since I was a little kid I knew that I wanted to develop software.
From what I hear that clarity of purpose is rare. It wasn't until college
that I really felt I "got serious" about constantly improving on what I
know. That learning has accelerated in the past few years since I finished
my second Master's. 2012 has been a very good year for expanding my
capabilities in software development.

However, I sometimes forget about the improvements I make and why I'm
making them. I take some of what I've done and learned for granted.

  Along the journey we commonly forget its goal. 
  
  *Friedrich Nietzsche*

This post is a summary of what I've accomplished and learned during 2012.
Hopefully it helps me remember where I've been and where I may go next.


Languages
---------
I spent most of the year programming in Python and JavaScript, with a touch 
of Objective-C, Java, and Clojure. An approximate breakdown would be something
like 90% Python & JavaScript (hard to separate them since I work with both
on the same projects), 5% Objective-C, 5% Java & Clojure. If anything, my
time with Python and JavaScript might be higher.

I also learned LESS and got much better with CSS3.

Libraries & Open Source
-----------------------
I did some work with the `Urban Airship Python API binding library <https://github.com/mattmakai/python-library>`_ 
for a mobile app proof of concept to a client that unfortunately didn't pan 
out.

I issued a pretty simple but useful 
`pull request <https://github.com/bartaz/impress.js/pull/15>`_ 
on `impress.js <https://github.com/bartaz/impress.js>`_ after I saw it on
Hacker News but I found out it wouldn't work with my Logitech presentation
pointer. All my 
`2012 presentations <../pages/presentations.html>`_ 
were created with impress.js. I never really felt like I had enough time
to grasp the full power of the framework - but it's a really well written
open source project. I'm working with 
`deck.js <https://github.com/imakewebthings/deck.js>`_ for at least my
first several 2013 presentations but I may go back to impress.js at some
point.

I 
`open sourced on Github <https://github.com/mattmakai/Visualization-Portfolio>`_ 
my `Visualization Portfolio <http://visualizationportfolio.com/>`_ side 
project. I also open sourced 
`this blog <https://github.com/mattmakai/mattmakai.com>`_ and my
`Coding Across America blog <https://github.com/mattmakai/codingacrossamerica.com>`_. 
I need to figure out the licensing situations on those things though.


Side Projects
-------------
I launched (and relaunched) several side projects. 

First up was `ProofDriven <https://www.proofdriven.com/>`_, an attempt to 
create a full-stack Python web app that produces estimates of savings from 
software development upgrades (for example, going from no source control to
using Git) so developers could give a financial report to their managers. 
ProofDriven produces PDF reports that can be printed out. Each report can
be customized with various parameters, such as the total cost of the software
development project, the team size, and other assumptions. The models and
report outputs are based on input assumptions as well as other 
technology-inherent factors based on which report is chosen. I integrated
Stripe and PayPal for payments on reports other than the free default one.
I never marketed the idea but I may reboot it at some point and see if I
can apply the Customer Development approach to find out if there is any
potential market there.

I launched (and relaunched) this blog a couple of times on different 
platforms. More on that in the next section.

I created 
`Visualization Portfolio and deployed it on Heroku <http://visualizationportfolio.com/>`_. I'll begin adding more than the base three visualizations with
d3.js soon once I get caught up with the 3.0 release.

I also just created but haven't finished (more on this in a few days) 
`Full Stack Python <http://www.fullstackpython.com/>`_. It will be a site
dedicated to explaining everything you need to know to launch a Python-based
web application from server to browser. It should also be useful to people
who know other stacks (RoR, JVM, PHP) and what to compare them to the
Python stack. It'll probably take me into 2013 before I finish that site
up and officially launch it.


Blogging
--------
I moved from my `original Tumblr blog <http://www.mmakai.com/>`_ to a
statically generated `Pelican <http://docs.getpelican.com/en/3.1.1/>`_.
At first I hosted it on Amazon S3 but then I moved it over to Github Pages.
Github Pages is absolutely awesome and I've been really happy with it
ever since I made the switch.

My Coding Across America blog is also on Github Pages. Coding Across America 
should begin to get interesting in late January when I start talking to
startups in Washington, DC. Then on March 9th I'll hit the road for a
5 month tour of the US. Any startups out there in any of the 30 cities I'll
be in please contact me on Twitter @mattmakai or by email at 
matthew.makai@gmail.com.


Presentations and Technical Talks
---------------------------------
I gave a bunch of talks in 2012. Among my favorites were my April 2012 
DC Python talk about using 
`Urban Airship to send push notifications <../static/presentations/python-wrapper-urban-airship-dc-python.html>`_,
my high-level `Python Indoctrination class <../static/presentations/what-is-python-for-everyone.html#/step-1>`_, and my discussion of
`Agile Software Development in the Federal Government <../static/presentations/agile-software-development-in-federal-government.html#/step-1>`_.

I'm excited about my slate of talks for 2013, especially that many of them
will be in cities I've never been to before: Memphis, San Francisco, etc.


Learning Log
------------
I tried a little experiment in mid-September to write a daily 
`learning log </pages/learning-log.html>`_. Basically I force myself to
go look at the documentation of a programming language or library I'm 
using and learn something new about it - however esoteric or at that
moment seemingly useless. 

For example, I'm been reading the d3.js API documentation to learn more 
about the shortcut functions that make it easier to manipulate DOM-bound 
data. Many of the functions aren't *necessary* but are really useful for
cutting down on boilerplate code.

I really like the learning log and I'm going to continue doing it in 2013.
The only major issue I've had so far is sometimes I get caught up in other
things and I have to "catch up" - so I try to learn like 2 weeks worth at
a time. That's less useful than learning one, two, or three new topics a day.


What's Next
-----------
I've already written about what skills I'm currently working on developing
to be a better 
`full-stack software developer <../journey-to-true-full-stack-developer.html>`_
.

The majority of 2013 will be defined by my 
`Coding Across America <http://www.codingacrossamerica.com/>`_ trip.

I'll write up a separate post sometime in the near future to cover 2013.

