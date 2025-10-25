# two_minute_heroes

## To Deploy

Normal Terminal

```
rm -r dist && vue-cli-service build && git add dist && git commit && git subtree split --prefix dist -b gh-pages && git push -f origin gh-pages:gh-pages && git branch -D gh-pages
```

Windows IntelliJ Terminal

```
rm -r dist ; vue-cli-service build ; git add dist ; git commit -am "Dist Release" ; git subtree split --prefix dist -b gh-pages ; git push -f origin gh-pages:gh-pages ; git branch -D gh-pages
```

Mac IntelliJ Terminal
```
rm -r dist && vue-cli-service build && git add dist && git commit -am "Deployment" && git subtree split --prefix dist -b gh-pages && git push -f origin gh-pages:gh-pages && git branch -D gh-pages
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
