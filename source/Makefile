run:
	cp -R static-html/* ..
	pelican -t theme -s settings.py -o .. content
	cp -R ../pages/* ../
	rm -rf ../pages/

init:
	pip install -r requirements.txt
