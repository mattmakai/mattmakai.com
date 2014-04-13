Django 1.4 Requires Python 2.5+
===============================

:date: 2012-01-25
:category: blog
:featured: True
:slug: django-1-4-requires-python-2-5

Django 1.4 is the first Django release to 
`remove support for Python 2.4 <https://docs.djangoproject.com/en/dev/releases/1.4/#backwards-incompatible-changes-in-1-4>`_. This change is an expected 
for two reasons. First, beginning with Django 1.2, Python 2.3 support 
was dropped and the community was notified that Django 1.4 would again 
increment the required Python version. Second, the Django core 
developers need `support for context managers <http://mmakai.com/post/8732320824/django-1-4-and-beyond>`_, which were added in Python 2.5.

Note that although Django 1.4 supports Python 2.5+, it does not 
yet support Python 3.x. Although progress has been made porting Django 
to Python 3.x, it is not fully tested or ready for release as specified 
in Django's release process.
