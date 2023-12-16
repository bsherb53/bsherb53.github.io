ral(){
	source C:\Users\Herbst\.bashrc
}

deploy(){
	git add -A
	git commit -am $1
	rm -r dist
	vue-cli-service build
	git add dist && git commit -m 'adding dist subtree'
	git subtree split --prefix dist -b gh-pages
	git push -f origin gh-pages:gh-pages
	git branch -D gh-pages
}