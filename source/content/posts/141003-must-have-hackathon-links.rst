How to Impress at Hackathons
============================

:slug: must-have-hackathon-links
:category: post
:date: 2014-10-03

What's the difference between a hackathon project result that brings the 
audience to their feet and one that lands with a thud? For better or worse 
if you're looking to win a hackathon it takes more than just code to 
impress the audience.

Here's the list of winning attributes I've seen after spending 
much of 2014 assisting and judging teams at both college and professional 
hackathons.

1. Idea is not a blatant copy of an existing app or product

2. Hack scope is estimated to be 3-4 hours of work

3. Pitch is clear, concise and demos the solution

I'll elaborate further on each of the above items and provide links to
resources that'll help your team effectively handle each one.


Idea not a blatant copy of an existing solution
-----------------------------------------------
For example, a messaging app that allows you to text to your friends over
a cell phone data connection instead of through SMS would be silly 
because there are so many well-known apps for that already out there: 
WhatsApp, SnapChat, Facebook Messenger, etc.

However, the reverse of the SMS-data connection is brilliant: if you 
don't have a data connection but you do have SMS you can use 
SMS as a data connection instead. This is what the 
`MHacks <http://mhacks.org/>`_ team that built the 
`Cosmos Browser <http://cosmosbrowser.org/>`_ showed
`an amazed audience <https://gigaom.com/2014/09/11/cosmos-browser-uses-sms-to-provide-web-access-without-wi-fi-or-mobile-broadband/>`_
earlier this fall.

The idea doesn't have to be mind-blowingly original though. You can often
take something that already exists, such as a 
`public government web API <http://18f.github.io/API-All-the-X/pages/individual_apis>`_
and make it accessible to a group of people who previously had 
trouble accessing a resource. For example, Boston recently launched their 
`v2 API for bus schedules <http://www.mbta.com/rider_tools/developers/>`_.
Instead of building a mobile app that only worked on iOS or Android, a
team at `PayPal BattleHack Boston <https://2014.battlehack.org/boston>`_ 
combined the new API with `Twilio's SMS API <https://www.twilio.com/sms>`_
so anyone could text a phone number for the bus schedule. That opens up
bus schedule access to feature phones in addition to iPhone and Android 
smartphones.


Hack is estimated to be 3-4 hours of work
-----------------------------------------
Estimating software development effort is notoriously difficult even on
short time frames. Pare the scope of your idea back to what you believe 
your team can accomplish in 3-4 hours. If you start with an idea that takes
36 hours and you run over you could end up not finishing and even worse,
not sleeping. Teams that don't sleep usually end up not pitching well 
because their brains are fried.

Small scope doesn't mean an unimpressive project. There's a huge shortcut 
here. If you take one thing away from this blog post: 
**leverage open source libraries and web APIs**. 

Pretty much every winning team uses a combination of open source libraries 
and web APIs in their hacks because it's like adding hundreds of 
other developers to your team. Depending on your language of choice 
familiarized yourself with and use a project template.

For Python, check out the project templates for 
`Django <http://www.fullstackpython.com/django.html>`_ and 
`Flask <http://www.fullstackpython.com/flask.html>`_ listed on 
`Full Stack Python <http://www.fullstackpython.com/>`_.

For other langauges check out this handy 
`hackathon starter project page <https://github.com/geekcamp-ph/hackathon-starters>`_ on GitHub.

If you don't know what libraries exist for your programming language
check out the 
`awesome-lists <https://github.com/bayandin/awesome-awesomeness>`_ which
break down libraries by functional area.

For web APIs the usual suspects are `Twilio <https://www.twilio.com/>`_ for
voice and text message (and now MMS) functionality. 
`Sendgrid <http://sendgrid.com/>`_ works well for email, 
`GitHub <https://developer.github.com/v3/>`_ offers up pretty much all their
data through their API and 
`Google's APIs <https://developers.google.com/apis-explorer/#p/>`_ work
well for hooking into their services. 

Remember: less is more. I've seen groups try to demo their web API, web app
and Android and iOS mobile apps all together in under 2 minutes only 
to have the presentation feel rushed and disappointing. It's better 
for a group to come up with a single amazing solution with a tightly
scripted demo than several apps that you will not have time to show.


Pitch is concise and demos solution
-----------------------------------
Pitching requires practice. At PayPal BattleHack the teams have to do their
presentations to hackathon organizers during the weekend before they get 
to participate in the final pitches. Do the same even if it's not required
for your hackathon. Find another group or an engaged sponsor to give you
constructive feedback on how to improve your pitch and demo. 

I wrote a page on 
`pitching resources for startups <http://www.howdoistartup.com/pitching.html>`_
that's just as applicable to hackathon pitches as small companies.

View the demo and pitch as 60% of the work that goes into a hackathon if
you want it to work well. And if you're just at the hackathon to have 
fun and learn instead of trying to win (which is how I would approach a
hackathon), it's still a great experience to get up on stage 
and demo software to the crowd.


One more thing...
-----------------
When I'm at a hackathon representing Twilio I'm there to help your team,
regardless of whether you're using our API or not. I'll usually be in my
red track jacket walking around or posted up in a visible location. If you
can't find me tweet me `@mattmakai <https://twitter.com/mattmakai>`_ to get
the fastest response. You can also email me at makai@twilio.com.

