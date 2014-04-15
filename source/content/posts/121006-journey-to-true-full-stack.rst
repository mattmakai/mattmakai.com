The Journey to True Full-Stack Developer
========================================

:category: post
:date: 2012-10-06
:slug: journey-to-true-full-stack-developer

There are several areas in which I need to improve to be a truly self-reliant
full-stack software engineer. My full-stack focus is on web development, both
traditional desktop and tablet browsers as well as constrained smartphone
mobile browsers. This post describes those areas and what I'm doing through 
the next year to improve those deficiencies.

The technical areas I need to improve in are:

  1. **Web design**

  2. **Server monitoring**
 
  3. **Data analysis & visualization**

I also want to get better at content creation, marketing, and working with
end users to understand their needs better, but I won't cover those less
technical topics in this post.

Web Design
----------
I'm fine with CSS, LESS, and JavaScript although there's always room to get
better in those areas. What I really need to get better in is creating 
interesting graphics that aid users' understanding of the products I develop.
A great example of this is 
`Team Treehouse's current home page <http://teamtreehouse.com/>`_ where
the site asks "What do you want to learn today?" with intuitive icons for
web design, web development, and iOS development. Creating simple icons
like those and using them where appropriate goes a long way towards converting 
a ho-hum web design into both a more appealing aesthetic and easier for users.

Towards this end I will (finally) purchase a copy of Adobe Illustrator CS6,
work on tutorials, and pick up tips from my web design friends. Retrofitting
`ProofDriven <https://www.proofdriven.com/>`_ with new icons will likely be
my first conversion project so I have a goal to work towards.

Server Monitoring
-----------------
Lately I have started using Heroku to deploy many of my side projects, but
I still do a lot of DevOps for clients with Linux, Apache, nginx, 
mod_wsgi, Green Unicorn, MySQL, and PostgreSQL.

I am ashamed to admit I have very little insight into how well the servers
I'm using are holding up under load. This situation really needs to be 
corrected by using a combination of Graphite & statsd, Raven & Sentry (I 
do already use these in many cases), New Relic, and some quick and dirty
custom code with Python's cProfile and psutil.

Monitoring is a complicated subject and every application has a different 
server resource utilization profile. Once I collect the metrics, my next
area for improvement will be important.

Data analysis and visualization
-------------------------------
There's something about working with Python that makes data analysis 
appealing. Maybe it's the easy-to-use built-in data structures or the
abundance of analysis libraries such as 
`pandas <http://pandas.pydata.org/>`_, `NumPy <http://numpy.scipy.org/>`_,
and `SciPy <http://www.scipy.org/>`_. Whatever the reason, I plan to study
O'Reilly's excellent 
`Data Analysis with Python <http://shop.oreilly.com/product/0636920023784.do>`_
book to learn more, particularly about Pandas.

On the visualization side, d3.js is fantastic. I've already been using it to
create simple visualizations such as 
`prgrmrlvlup <http://www.prgrmrlvlup.com/>`_ and some other internal Excella
applications for business development. I'm a huge fan of using CSS to style
the visualizations and the enter(), exit(), and data joins model. Overall
d3.js will provide the foundation for visualizing the results of  interesting 
data sets processed on the server side with Python. I'll write blog posts and
add many d3.js-related entries in my 
`learning log <../pages/learning-log.html>`_ over the next several months.

