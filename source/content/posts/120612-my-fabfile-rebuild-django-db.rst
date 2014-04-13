Fabric Function For Rebuilding a Django MySQL Database
======================================================

:category: blog
:date: 2012-06-12
:slug: fabfile-function-rebuilding-django-mysql-database

This is a very specific blog post on what my Fabric fabfile.py looks
like for rebuilding my database. This is particularly useful early in
a project lifecycle before I start using South for database migrations
and instead I am building new tables and columns at a fast clip.

.. code-block:: fabfile.py

  def rebuild_db():
    run('mysql -u %s -p%s -e "drop database if exists %s"' % (env.db_user,
      env.db_passwd, env.db_schema))
    run('mysql -u %s -p%s -e "create database %s"' % (env.db_user,
      env.db_passwd, env.db_schema))
    virtualenv('python %smanage.py syncdb --noinput' % \
      env.deploy_dir)
    virtualenv('python %smanage.py loaddata %s/core/' + 
      'fixtures/test.json' % (env.deploy_dir, env.deploy_dir))

A few notes: 

* You should define env.db_user, env.db_passwd, env.db_schema,
  env.deploy_dir in your fabfile before calling this function. 
* I put my main test.json fixture under a "core" app directory. Parameterize 
  these settings if your project structure differs.
