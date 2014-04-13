Evaluating Third Party Services for Django Projects
===================================================

:category: blog
:date: 2013-08-14
:slug: evaluating-third-party-services-for-django

Every non-trivial modern Django project combines externally hosted third 
party services with custom code to create a complete web application. The
art of discovering, evaluating, integrating, and maintaining these third
party services is an important capability for any post-entry-level Django 
developer. I'm writing these posts as a framework for how to broadly think 
about working with third party services.

This is the second of four blog posts, following my
`discovering third party services post <../identifying-third-party-services-for-django.html>`_.

Company Evaluation Criteria
---------------------------
I start by evaluating the third party service company itself. Several 
questions immediately come to mind when looking at a newly discovered
service:

  1. Which languages and frameworks are shown in their tutorials?

I ask this question because it's common for newer services built on Rails to
only show Rails tutorials. In that case I know I may potentially spend a 
significant amount of time figuring out how to connect to their service. I
may also have to build a third party Python binding or fork an existing but
not well-maintained binding.

  2. What ecosystem is their platform built on?

What happens if you end up reliant upon the third party service and begin
to encounter edge cases? If they only have Ruby or PHP developers in their
company, you're going to have to figure it out on your own. On the other hand
if their platform is built on the Python ecosystem, they'll likely have 
developers passionate and interested in helping you solve the problems you
encounter while building and maintaining your Django app.

  3. Does the company have one or more developer evangelists?

This question has two parts. First, developer evangelists are great for
answering technical questions that come up while you're trying out a service.
Second, I'm wondering "does this company care about developers or are they
a sales outfit"? Some services launch to great fanfare but flame out quickly.
For example, look at 
`SimpleGeo <http://www.crunchbase.com/company/simplegeo>`_. If your Django
project is built on a service that's about to shut down that will shift your
focus from new development to ripping out an existing part of your project
and replacing it with a home-grown solution or another third party service.

  4. What's the service's "data gravity"?

`Chris Adams <https://twitter.com/acdha>`_ gave me the "data gravity" term 
while I was presenting the initial rough cut of my 
`DjangoCon talk <http://www.mattmakai.com/static/presentations/djangocon-2013.html>`_
at 
`Django District <http://www.meetup.com/django-district/events/131235942/>`_.
"Data gravity" struck me as an awesome concept for thinking about an 
increasingly valuable asset to any business: its data. The more data gravity
a service potentially holds over my Django project, the more careful 
consideration that needs to happen about testing, abstracting, and backing
up our project's data that could be compromised or lost on that service.

  5. StackExchange or forum discussions

Are people asking questions about a third party service? If so, that's a good
sign you're not alone in uncharted territory. StackExchange is the defacto
community for asking technical questions nowadays. Don't neglect blog posts
and other forums though. Sometimes companies have official forums for their
services. They are a great way to find out there's either an active, engaged
group of developers on the service's side ready to help you out. Or a broken
cesspool of empty promises and unanswered questions (for an example, see 
`LinkedIn's atrocious developer forums <http://developer.linkedin.com/forum>`_).

----

If you're going to DjangoCon this year, come see my talk on 
`Making Django Play Nice With Third Party Services <http://www.djangocon.us/schedule/presentation/47/>`_ 
on September 5 at 10am.

If you enjoyed this post you should read 
`my checklist for evaluating existing Django projects <../django-project-checklist.html>`_
and check out my `Coding Across America <http://www.codingacrossamerica.com/>`_
project.

