CFPB Collab MySQL requirements.txt Installation Error
=====================================================

:slug: cfpb-collab-mysql-requirements-txt-installation-error
:category: blog
:date: 2014-01-17

In case you're trying to get `CFPB collab <https://github.com/cfpb/collab>`_
working in your environment, there's a few errors you might run into. This is
a quick post to highlight solutions to the issues I came across.

Collab currently requires MySQL for the backend. I do not believe MySQL is a
hard requirement, but that's what we had installed on our Linux servers at
the time I was working on it while consulting for the agency. If you run into
the following error::

    Downloading/unpacking MySQL-python (from -r requirements.txt (line 11))
      Downloading MySQL-python-1.2.5.zip (108kB): 108kB downloaded
      Running setup.py egg_info for package MySQL-python
        sh: 1: mysql_config: not found
        Traceback (most recent call last):
          File "<string>", line 16, in <module>
          File "/home/matt/Envs/collab/build/MySQL-python/setup.py", line 17, in <module>
            metadata, options = get_config()
          File "setup_posix.py", line 43, in get_config
            libs = mysql_config("libs_r")
          File "setup_posix.py", line 25, in mysql_config
            raise EnvironmentError("%s not found" % (mysql_config.path,))
        EnvironmentError: mysql_config not found
        Complete output from command python setup.py egg_info:
        sh: 1: mysql_config: not found

    Traceback (most recent call last):

      File "<string>", line 16, in <module>

      File "/home/matt/Envs/collab/build/MySQL-python/setup.py", line 17, in <module>

        metadata, options = get_config()

      File "setup_posix.py", line 43, in get_config

        libs = mysql_config("libs_r")

      File "setup_posix.py", line 25, in mysql_config

        raise EnvironmentError("%s not found" % (mysql_config.path,))

    EnvironmentError: mysql_config not found

    ----------------------------------------

Make sure you have the MySQL server package and the client development 
library installed. On Ubuntu you can accomplish this by running::

    sudo apt-get install mysql-server libmysqlclient-dev


