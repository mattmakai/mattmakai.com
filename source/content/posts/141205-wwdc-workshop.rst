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


Hellooooo Twiliooooo!
---------------------
Head to `Twilio <https://www.twilio.com/try-twilio>`_ and sign up for a free
account. After going obtaining a Twilio number, upgrade your account so you 
can send SMS, MMS and voice calls to any phone number. Use the "I have a promo 
code" link on the upgrade screen and enter the promo code given during the 
workshop to get free credit on your account.


Sending Your First SMS & MMS
----------------------------
Get your Python environment set up with a new virtualenv. Note that if you
don't have a Python environment ready to go you can use 
`Nitrous.io <https://www.nitrous.io/>`_ to do all these tasks in the browser. 
With your environment and new virtualenv, install the 
`Twilio helper library <https://www.twilio.com/docs/python/install>`_:

.. code::

    pip install twilio


Then set the ``TWILIO_ACCOUNT_SID`` and ``TWILIO_AUTH_TOKEN`` 
`environment variables <https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps>`_
before firing up the Python REPL. These variables can be found on the 
`Twilio account dashboard <https://www.twilio.com/user/account/voice-messaging>`_. 
On Mac OS X or Linux you can set environment variables using the following 
commands:

.. code::

    export TWILIO_ACCOUNT_SID='my account sid'
    export TWILIO_AUTH_TOKEN='my auth token'

Now you should be able to fire up the Python REPL and enter the following
code:

.. code::

    from twilio.rest import TwilioRestClient
    client = TwilioRestClient()

    # next put your cell phone for the "to" and your twilio number for "from\_"
    client.messages.create(to="+12025551234", from_="+12025553456", 
                           body="Hello world!")


You should get a text message to your cell phone! Next up let's add an image
of Grace Hopper with an early computer to your next message.

.. code::

    media = "http://www.nww2m.com/wp-content/uploads/2013/10/hopper-large.jpg"

    # again replace the numbers on the next line with your numbers
    client.messages.create(to="+12025551234", from_="+12025553456", 
                           body="Grace Hopper!", media_url=media)


If you got the MMS then awesome! If not, call me or one of the mentors over
and we'll help you get there. Once you've done the SMS & MMS then it's time
to make a voice call.


Tunneling with Ngrok
--------------------
We'll be using `Ngrok <https://ngrok.com/>`_ to create a localhost tunnel
so the `TwiML <https://www.twilio.com/docs/api/twiml>`_ files can be read
from the local filesystem. 
`Sign up for a free ngrok account <https://ngrok.com/user/signup>`_ and 
`download the software <https://ngrok.com/download>`_. Fire it up by
going to the directory where you downloaded it and running this command:

.. code::

    ./ngrok 5000

That will create a tunnel to your port 5000 where you'll be running the
local web server or Flask web application.


Making Voice Calls
------------------
Create a file named "voice.xml" and put the following content in it:

.. code::

    <Response>
        <Say voice="alice" language="en-GB">Hello world! Thanks for making a voice call with Twilio.</Say>
    </Response>

Save the file and run the following command in that directory:

.. code::

    python -m SimpleHTTPServer 5000

Now in the Python interpreter let's make a voice call:

.. code::

    from twilio.rest import TwilioRestClient

    client = TwilioRestClient()

    # next put your cell phone for the "to" and your twilio number for "from\_"
    # replace the url with your ngrok url plus voice.xml

    client.calls.create(to="+12025551234", from_="+12025553456", 
    url="https://6e351c5f.ngrok.com/voice.xml")


You should now get a call on your phone and the automated "alice" voice will
read off whatever text you typed in. After the voice call is done you can 
CTRL-C out of the SimpleHTTPServer since we'll need that port for the next
tutorial.


Mustachin' Selfies with MMS
---------------------------
Now that we've got the basics of the API out of the way, let's use it for a
real practical purpose. That is, adding mustaches to selfies. Test out the
app we're going to build by taking a selfie with your cell phone camera and
sending it to:

.. code::

    (202) 759-2423

Once you get your selfie back go ahead and check out the tutorial for building
your own 
`selfie mustacher with Flask <https://www.twilio.com/blog/2014/09/how-to-build-a-mustached-message-service-with-twilio-mms-and-python.html>`_. When you
run into trouble be sure to flag down a mentor and we'll get it sorted out.

After the mustachifier is working move on to the final tutorial for creating
real-time Choose Your Own Adventure Presentations.


Choose Your Own Adventure Presentations with SMS
------------------------------------------------
One more advanced tutorial for those of you who finish early with the 
mustacher. Give this 
`Choose Your Own Adventure Presentations tutorial <https://www.twilio.com/blog/2014/11/choose-your-own-adventure-presentations-with-reveal-js-python-and-websockets.html>`_ 
a try even if you don't have time to finish this service as you can always 
go back to the post or the 
`companion GitHub repository <https://github.com/makaimc/choose-your-own-adventure-presentations>`_ 
to polish it off on your own time.


