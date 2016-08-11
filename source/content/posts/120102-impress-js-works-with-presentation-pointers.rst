Impress.js With Presentation Pointers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:date: 2012-01-02
:category: post
:slug: impress-js-works-with-presentation-pointers

I saw `impress.js <https://github.com/bartaz/impress.js>`_, a really cool CSS3 
transformation-based presentation Javascript library on Hacker News yesterday. 
The `demo <http://bartaz.github.com/impress.js/>`_ is flashy - similar to Prezi 
but without Flash, plus new 3D effects. The only downside compared to an 
established browser slideshow library such as 
`S6 <https://github.com/geraldb/s6>`_ was 
that my Logitech presentation pointer didn't work for advancing and 
reversing the slides.

After a little digging, I found out that presentation pointers emulate page 
up/down key strokes. So I 
`forked the impress.js <https://github.com/mattmakai/impress.js>`_ 
library, updated the code, and issued a 
`pull request <https://github.com/bartaz/impress.js/pull/15>`_ to add 
the presentation pointer capability. Thanks to 
`Bartek <https://github.com/bartaz>`_'s quick response, 
the pull request was merged and closed just a few hours later. So now 
presentation pointers work great with impress.js.
