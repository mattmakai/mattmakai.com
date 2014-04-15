Django in Production
~~~~~~~~~~~~~~~~~~~~

:date: 2012-04-16
:category: post
:slug: django-in-production

Django is easy to get started with, especially if you already have a 
programming background in a "heavier" language like Java. When I first
started creating websites with Django 0.96, I was programming Java systems
during the day and relaxed in the evenings by using Python/Django. I found
the speed at which I could create sites allowed me to feel like I was
accomplishing something even though I did not have full days to focus on
side project development.

One of the hurdles I found with Django was just figuring out how to deploy
the projects to a production server. "python manage.py runserver" wasn't
going to cut it. In addition, once I got the sites live, I was not sure
of how to properly monitor them. The following links helped me a lot to
learn what the "big boys" in the Django space were using in production:

1. `Setting up a Production Django Environment <http://f.souza.cc/2011/11/setting-up-a-django-production-environment-compiling-and-configuring-nginx/>`_
2. `Instagram Production Engineering <http://instagram-engineering.tumblr.com/post/20541814340/keeping-instagram-up-with-over-a-million-new-users-in>`_
3. `Yipit Monitoring Key Metrics <http://tech.yipit.com/2011/12/15/introducing-xenia-smart-monitoring-of-custom-application-level-metrics/>`_
4. `Django in Production - Part 1 <http://www.robgolding.com/blog/2011/11/12/django-in-production-part-1---the-stack/>`_
5. `Django Settings for Production and Development <http://www.sparklewise.com/django-settings-for-production-and-development-best-practices/>`_
6. `Automatic Set Up of Django With nginx & gunicorn <http://adrian.org.ar/python/automatic-setup-of-django-nginx-and-gunicorn-on-ec2>`_

Those are the best articles I've come across recently that I wish I had when
I first started deploying Django projects (to be fair, those links didn't
yet exist nor did many of the technologies that are now commonplace).
