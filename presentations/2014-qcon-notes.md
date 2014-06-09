# Notes

# e-commerce website, 6 month redesign and deployment

## 5 whys
* App code checked local Redis server for
  user account data and charged incorrect amounts
* 3 of 5 Redis instances did not properly invalidate
  their cache upon user account update
* A background cache invalidation program deployed
  to only 2 web servers.
* One deploy used puppet to automate deployment,
  other one used shell scripts.
* Official policy mired in political BS, app dev
  VP wants Chef, ops folks perfer Puppet but officially
  no decision made and you must use shell scripts to
  automate

## what a mess
* many companies would ask how do we control this?
  we need controls in place. lets have review boards
* instead, they took a different approach

## light bulb?
* what are the biggest changes we can make as investments to
  go from deploying in 6 months to 60 minutes? 


## results
* continuous integration also includes automated testing, deployment
