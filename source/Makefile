run:
	pelican -t theme -s settings.py -o .. content
	cp -R ../pages/* ../
	rm -rf ../pages/
	cp -R static-html/* ..

init:
	pip install -r requirements.txt
