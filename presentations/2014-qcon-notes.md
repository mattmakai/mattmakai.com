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
