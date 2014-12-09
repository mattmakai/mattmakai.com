Women Who Code DC Workshop
==========================

:slug: women-who-code-dc-workshop
:category: post
:date: 2014-12-05


Hello and welcome to the 
`Women Who Code DC Twilio API workshop <http://www.meetup.com/Women-Who-Code-DC/events/219004596/>`_ 
for the 2014 Hour of Code week! In this workshop we're going to learn how
to send and receive text messages (SMS), multimedia messages (MMS) and voice
calls to any phone number through the Twilio 
`web API <https://www.twilio.com/api>`_.


Obtaining a Twilio account
--------------------------
Head to `Twilio <https://www.twilio.com/try-twilio>`_ and sign up for a free
account. After going obtaining a Twilio number, upgrade your account so you 
can send SMS, MMS and voice calls to any phone number. Use the "I have a promo 
code" link on the upgrade screen and enter the promo code given during the 
workshop to get free credit on your account.


Sending Your First SMS & MMS
----------------------------
Get your Python environment set up with a new virtualenv. You'll need to
install the 
`Twilio helper library <https://www.twilio.com/docs/python/install>`_: 

    pip install twilio
    
Then set the TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN 
`environment variables <https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps>`_
before firing up the Python REPL.


Ngrok
-----
We'll be using `Ngrok <https://ngrok.com/>`_ to create a localhost tunnel
so the `TwiML <https://www.twilio.com/docs/api/twiml>`_ files can be read
from the local filesystem.


Making Voice Calls
------------------



