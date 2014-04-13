Consolidation in the Python Hosting Industry
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:date: 2012-04-19
:category: blog
:featured: True
:slug: consolidation-python-hosting-industry

The announcement yesterday about 
`Epio closing down <https://www.ep.io/blog/epio-closing-down/>`_ 
got me thinking about the Python PaaS industry. I did not have any personal
experience with Epio, but from the 
`discussion on Hacker News <http://news.ycombinator.com/item?id=3860196>`_
it sounded like these guys were top notch developers and just nice guys
in general. While it's difficult to see Epio's platform close down after
all the effort invested in it, I'm sure those guys will end up in a great
place. If they didn't already have multiple great job offers I'd be shocked.

I've only personally used Google App Engine, Heroku, and Gondor PaaS,
Amazon Web Services IaaS, and Slicehost and Linode for virtual private
servers. I currently use Linode (for my side business) and Amazon Web Services  (for this blog plus side projects). 

Linode is great, especially when combined with Ubuntu images along with 
Fabric and cuisine for server set up. Amazon Web Services is also a fantastic
platform when `boto <https://github.com/boto/boto>`_ is used to automate
EC2, S3, etc. Right now I'm very happy with the combination of those two
services.

A few years ago I worked with Google App Engine both on side projects and
some client projects. I still have a certain gut reaction when I think about
using GAE. I liked the ease of deployment and the tie in to the Google APIs.
However, I was really concerned about the lock in since the Python code
I wrote had to be written in a certain way. The Python 2.5 restriction,
which is now lifted to 2.7, didn't bother me too much. The big thing for me
on GAE was the uncertainty over the eventual production costs (I used the beta
version). Those pricing fears proved to be 
`an issue <http://www.informationweek.com/news/cloud-computing/platform/231600672>`_ for developers that went full-on in the platform. I'm glad I got out
when I did before production GAE went live.

`Gondor <https://gondor.io/>`_ seemed interesting, but I really only 
played with the beta. I was concerned that they were too small to really be 
a player in the field and
I didn't want to get locked to their platform. On the plus side, there really
wasn't much code modification necessary to deploy a Django project.

Heroku is a great platform - assuming you work within the boundaries. I found
the shared database performance very limited. The performance was often 
an order of magnitude worse than on a very small private VPS with PostgreSQL. 
However the ease of deployment was fantastic. "git push heroku master" felt
just as natural as interacting with Github all day. I could easily see
getting into the workflow where the only platform a developer uses is
Heroku. The dedicated database cost did scare me though. If there were a
lower cost, $50/month instance, that might help. I'd have to do more
research at that point to do a cost/benefit analysis over AWS or a VPS.

There's no silver bullet for Python developers looking to deploy on a PaaS.
Still, it's great to have options. For prototyping apps, Gondor and Heroku
make great choices (as long as you don't immediately need a lot of database
storage and performance). For production apps though, I still lean towards a 
mix of AWS and virtual private servers.
