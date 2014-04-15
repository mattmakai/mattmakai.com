Learning Vim - A Colleague's Question
=====================================

:category: post
:date: 2012-10-15
:slug: learning-vim-colleague-question

I received the following email from my colleague this morning:

  Hey buddy, finally taking the plunge to learn VIM because it will make 
  me a lot more productive when working with Puppet manifests.  Any 
  helpful tips you've come across?  I already set up my client with 
  pathogen to allow me to easily use new plugins and I pulled in things 
  like tabular, syntastic and puppet syntax highlighting.  Love to hear 
  anything else you'd recommend.

  Thanks!

I love Vim and I've been using it for about four years as my only editor
when coding in Python, typing up blog posts, or learning new 
programming languages. I even tried switching to Sublime Text 2 with Vim
mode but I ended up switching back to straight Vim. So here are my 
recommendations for getting started.

It takes awhile to learn VIM but it's amazing once you do. I took the 
`Vim cheatsheet <http://www.tuxfiles.org/linuxhelp/vimcheat.html>`_ and 
tried to learn a command each day. Just look for something that you either
didn't know you could do, or try to do on a regular basis but aren't quite
sure how. For example, I find/replace things all the times with regular
expressions. Here's how you can easy do that globally in a file:

.. code-block:: vim-global-regex

    :%s/replace-this-text/replace-with-this-text/g

..

The major logical leap is understanding that Vim is basically a language where you have a command and it can be prefixed by a number to execute it multiple times. For example,

dd <-- cut the line and move it into the "clipboard"

5dd <-- cut 5 lines and move them into the "clipboard"

Definitely start out by checking out some interesting web tutorials. Here are
some resources that I have found helpful over the years:

1. `Vim as your IDE <http://haridas.in/vim-as-your-ide.html>`_. Awesome
   article.

2. `7 Habits of Effective Text Editing <http://www.moolenaar.net/habits.html>`_
   great article on how to effectively use Vim.

3. `Syntastic <https://github.com/scrooloose/syntastic>`_. Plugins for
   Vim. Important for things like syntax checking and code completion.

4. `Vim Koans <http://blog.sanctum.geek.nz/vim-koans/>`_. A bit 
   tongue-and-cheek but you can learn a lot from them as well.

5. `Vim University <http://vimuniversity.com/>`_. Some good introductory
   articles and screencasts. 

A few random tips. I disabled the use of the arrow keys so I could get used 
to the "hlkj" movement. Do that with the following in your .vimrc file:

.. code-block:: vim-disable-arrow-keys

    " disable arrow keys
    map <up> <nop>
    map <down> <nop>
    map <left> <nop>
    map <right> <nop>
    imap <up> <nop>
    imap <down> <nop>
    imap <left> <nop>
    imap <right> <nop>

..

Also if you prefer spaces to tabs just use *set tabexpand* in your .vimrc.
Shift width and tab spaces usually default to 8 spaces, so I change that
to 4 spaces with:

.. code-block:: vim-tab-spaces

    set ts=4
    set shiftwidth=4

..

Vim takes awhile to get the hang of but once you get over that initial
curve the editor feels like a natural extension of your thought process.
The speed at which you can accomplish most tasks skyrockets after 
learning enough commands and embracing the philosophy of just using
the keyboard for editing.
