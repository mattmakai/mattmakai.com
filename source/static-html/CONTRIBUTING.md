# Contributing

Contributions are welcome and greatly appreciated! 


## Fix Typos, Grammar Errors, etc
Create pull requests on the 
[GitHub repository](https://github.com/makaimc/mattmakai.github.io/pulls).


## Submit Feedback
The best way to send feedback is to file an issue is on 
[repository issues page](https://github.com/makaimc/mattmakai.github.io/issues).


## Get Started!
If you are not familiar with [Pelican](http://docs.getpelican.com/), 
check out the blog post on 
[Getting Started with Pelican and GitHub Pages](http://www.mattmakai.com/introduction-to-pelican.html).

Ready to contribute? Here is how to set up this repository for local 
development.

1. Fork the 
   [mattmakai.github.io](https://github.com/makaimc/mattmakai.github.io) 
   Git repository.

2. Clone your fork locally.

        $ git clone git@github.com:your_name_here/mattmakai.github.io.git mm

3. Install your local copy into a Python virtualenv and set up your fork for 
   local development

        $ virtualenv --no-site-packages venvs/mm
        $ source venvs/mm/bin/activate
        $ cd mm

Note: make changes to the source/content/pages/\*.markdown files then execute a
*make run* command from the source/ directory.

4. Commit your changes and push your branch to GitHub

        $ git add .
        $ git commit -m "Your description of the changes."
        $ git push origin gh-pages

5. Submit a pull request through the GitHub website.

