Python Context Managers
=======================

:date: 2012-02-22
:category: post
:slug: python-context-managers

During my talk to django-district last night, I explained that Django 
1.4 drops support for Python 2.4 because the core committers wanted to 
use Python's context managers. Python 2.4 would not suffice because 
context managers are a 
`Python 2.5+ feature <http://www.python.org/dev/peps/pep-0343/>`_.

Someone in the audience asked what a context manager is, and I was annoyed 
with myself for not having a clear, concise answer. So to paraphrase the 
old saying, now "there's a blog post for that."

Python Context Managers
-----------------------

A context manager is created syntactically using the 'with' statement. 
Here is an example:

.. code-block:: context-manager-example

  with open("example.txt") as f:
      data = f.read()
      print len(data)

The code above opens a file, reads its contents, and prints the length 
of the string read from the file. Since we are using the with statement,
the file will always be closed after it is read. This behavior is because 
the 'with' statement performs actions on entry (the __enter__ method) 
and on exit (the __exit__ method), regardless of how the block of code 
exits. See this 
`blog post with a detailed explanation <http://preshing.com/20110920/the-python-with-statement-by-example>`_ 
of the process a context manager runs through.

The context manager essentially can be thought of as an alternative to a try-finally block (before context managers these blocks were more common). So the concise way of explaining a context manager is that it is a statement that defines the runtime context for how a block of code should be executed. Context managers are particularly useful for locking/unlocking as well as setting or reseting state before a code block is executed.

References
~~~~~~~~~~
[1] http://preshing.com/20110920/the-python-with-statement-by-example

[2] http://effbot.org/zone/python-with-statement.htm
