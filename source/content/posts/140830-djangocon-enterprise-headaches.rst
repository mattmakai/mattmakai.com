Links for Solving Django's Top Enterprise Headaches
===================================================

:slug: links-solve-djangos-top-enterprise-headaches
:category: post
:date: 2014-08-30

The following list is a collection of resources for solving many of the
headaches that come with using a dynamically typed language like Python
in the enterprise with Django as a commonly misunderstood web framework.
These resources I found very helpful when I found them during my time 
consulting on numerous enterprise Django apps across commercial, non-profit
and government clients before joining Twilio. These links also go along 
with my 
`How to Solve Django's Top 5 Enterprise Headaches </presentations/2014-djangocon-top-5-enterprise.html>`_
talk presented at 
`DjangoCon 2014 <http://www.djangocon.us/schedule/presentation/10/>`_.


Integrating with Active Directory
---------------------------------
* Check this Stack Overflow question on 
  `What are the differences between LDAP and Active Directory <http://stackoverflow.com/questions/663402/what-are-the-differences-between-ldap-and-active-directory>`_ 
  for some solid backround knowledge.

* Use `python-ldap <http://www.python-ldap.org/>`_ to integrate with
  Active Directory.

* Here's a 
  `snippet for working with Active Directory and the User object <https://djangosnippets.org/snippets/2604/>`_
  so the User model can be updated each time a user authenticates.

* This 
  `post on custom Django User models <http://www.roguelynn.com/words/django-custom-user-models/>`_ 
  is helpful for understanding how to integrate with external authentication
  mechanisms.


Passing Security Audits
-----------------------
* `Python vs OWASP Top 10 <https://www.youtube.com/watch?feature=player_embedded&v=sra9x44lXgU">`_
  is a video where Jacobian rolls through each of the top ten and what
  to do about addressing each security concern.

* The official `Django security docs page <https://docs.djangoproject.com/en/dev/topics/security/>`_
  provides a good overview of security features baked into Django.

* Reading `Django and the OWASP Top 10 <http://blog.mikeleone.com/2011/10/security-django-and-owasp-top-10.html>`_ 
  and watching 
  `Jacobian's talk on Django vs the OWASP Top 10 <https://www.youtube.com/watch?v=sra9x44lXgU>`_
  provide further insight into how Django assists with the top web
  application vulnerabilities.


Tranferring Data from Legacy Systems
------------------------------------
* `Working with legacy databases <https://docs.djangoproject.com/en/dev/howto/legacy-databases/>`_
  is the official Django documentation on the topic.

* `Generate Django models from a database <http://stackoverflow.com/questions/1179469/is-it-posible-to-generate-django-models-from-the-database>`_
  via the inspectdb command.

* Create a 
  `database graph from your Django models <http://django-extensions.readthedocs.org/en/latest/graph_models.html>`_ 
  using the django-extensions to genereate GraphViz files.


Securing Python Package Installations
-------------------------------------
* `How to get pip working behind a proxy server <http://stackoverflow.com/questions/19080352/how-to-get-pip-to-work-behind-a-proxy-server>`_ 
  basically explains how to set the https_proxy variable on Linux so pip
  can properly connect to PyPI.

* `Setting up a custom PyPI server <http://jamie.curle.io/blog/setting-up-a-custom-pypi-server/>`_
  walks through how to do exactly that.

* `Setting Up Your Own PyPI Server <http://cramer.io/2011/04/04/setting-up-your-own-pypi-server/>`_
  is another good article with a walkthrough for setting up your own server.


Correcting Dynamic Typing Misconceptions
----------------------------------------
* `CIO Magazine - Dynamic Languages: Not Just For Scripting Any More <http://www.cio.com/article/2431212/developer/dynamic-languages--not-just-for-scripting-any-more.html>`_
  provides social proof for CIOs who look to peer organizations for what
  they should or should not be doing.

* `Organizations that use Python <https://wiki.python.org/moin/OrganizationsUsingPython>`_
  is a list of exactly what it says. Examples can be used for social proof
  that Python is a widely used programming language.

