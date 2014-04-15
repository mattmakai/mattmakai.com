The First Django Website Run On Python 3
========================================

:slug: first-django-website-run-python-3
:date: 2012-08-15
:category: post

The top post on `Hacker News <http://news.ycombinator.com/>`_ this morning 
is about a `Django (1.5 development branch) site running on Python 3 <http://myks.org/django-python3/>`_. 
Why is a Django site running on Python 3 newsworthy? Because while Django 
1.5 is tested and supported against Python 2.6 and Python 2.7 (dropping 
support for Python 2.5 found in Django 1.4), Python 3 compatibility is a
`new feature <https://docs.djangoproject.com/en/dev/topics/python3/>`_.

Python 3 breaks backwards compatibility with Python 2 to remove the cruft
from years of Python 1 & 2 development syntax. Python 3 is a better language.
But until the vast majority of libraries and frameworks support or move
exclusively to Python 3, Python 2 will continue to be used. Django in
particular is an important project because it is the most widely used Python
framework.

Python 3 is supported by Django through the 
`six compatibility layer <http://packages.python.org/six/>`_. It will be
interesting to see how many bugs in advanced Django features come up
throughout the development cycle and whether Python 3 is officially supported
(the current plan) or whether there is a backtrack to unofficial support
for this release to prevent too much of a delay in 
`releasing version 1.5 <https://docs.djangoproject.com/en/dev/releases/1.5/>`_.

