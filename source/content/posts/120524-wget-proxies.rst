wget and Proxy Servers 
======================

:category: blog
:date: 2012-05-24
:slug: wget-proxy-servers

Short answer: before you use wget, specify 
'export http_proxy=my.proxy.server:port' then wget will use the proxy.

I needed to grab some files with wget while working on a Linux server I was
setting up for a Django deployment. Unfortunately, I was behind a firewall
and had to use a specific proxy for HTTP connections.

pip makes it easy, just do 'pip install --proxy my.proxy.server:8080 packages'
and I figured wget would have the same commandline argument to specify a
proxy. No such luck.

I found the following link that specified 
`'man wget' as the answer <http://www.linuxquestions.org/questions/linux-software-2/wget-with-proxy-276075/>`_ unhelpful (and a dick answer anyway).

So for future reference, 'export http_proxy=my.proxy.server:port', will
specify a proxy server to use with wget. I also found 
`this proxies link <http://www.gnu.org/software/wget/manual/html_node/Proxies.html>`_ 
useful as well.
