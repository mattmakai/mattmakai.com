What the Django's ORM Author Hates About It
===========================================

:date: 2012-01-20
:slug: what-author-django-orm-hates-about-it
:category: blog

Alex Gaynor, a Django core committer and author of much of the 
object-relational mapping (ORM) code, 
`gave a presentation <http://speakerdeck.com/u/alex/p/why-i-hate-the-django-orm>`_ on what he hates about the mapping layer. Every ORM layer in 
existence has issues, especially for edge cases, but Django's has 
been criticized lately for 
`various <http://www.nitinh.com/2009/02/why-django-orm-sucks-it-takes-a-hell-lot-of-memory-in-processing/>`_ 
`reasons <http://jeffcroft.com/blog/2008/jul/25/top-ten-things-suck-about-django-revisited/>`_. 
Alex's presentation addresses concerns are in three areas of the ORM layer:

1. Inconsistencies in querying syntax are confusing and were 
built up without an overall strategy over time

2. Complex queries are virtually impossible with the existing syntax, 
especially compared to SQLAlchemy

3. Aggregation queries take strings instead of objects, which is 
inconsistent with other query types and limits the aggregation 
queries' usefulness

Alex's point during the presentation is to bring up the most glaring issues, 
show why they need to be fixed in future Django releases, and move the 
Django ORM from an "80/20" solution closer to a "90/10" solution that 
is easier to apply across a broader set of use cases.

Slides: `Why I hate the Django ORM <http://speakerdeck.com/u/alex/p/why-i-hate-the-django-orm>`_ (Speaker Deck)
