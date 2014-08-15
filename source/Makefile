run:
	pelican -t theme -s settings.py -o .. content
	cp -R ../pages/* ../
	rm -rf ../pages/
	cp -R static-html/* ..
	mkdir -p ../static/data/
	cp -R static-html/data/* ../static/data/

init:
	pip install -r requirements.txt
