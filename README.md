# Pyjamas 2020

## Base template

We're using the Zeppeling template. Source: https://github.com/gdg-x/zeppelin

## Local development

Check if you have [all requirements for local environment](http://jekyllrb.com/docs/installation/).
To install all development dependencies install [Bundler](http://bundler.io/).
```bash
gem install bundler
```
and run next command from root folder:

```bash
bundle install --path vendor/bundle
```

To start Jekyll run:
```bash
bundle exec jekyll serve -w
```
Site will be available at http://127.0.0.1:4000/ or http://localhost:4000/ (on Windows)

**NOTE:** In this mode all changes to html and data files will be automatically regenerated, but after changing ```_config.yml``` you have to restart server.

### Documentation
Quick-start guide is not enough? Checkout [full documentation](https://github.com/gdg-x/zeppelin/wiki).

### Pyjamas Color Palette

This is our Color Palette: https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=B2DDF7&secondary.color=fcedb1

### Used libraries
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Animate.css](https://github.com/daneden/animate.css)
* [Waves](https://github.com/publicis-indonesia/Waves)
* [jquery.appear](https://github.com/bas2k/jquery.appear)
* [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Sticky-kit](https://github.com/leafo/sticky-kit)


### Contributors
* Design and web development: [Oleh Zasadnyy](https://github.com/ozasadnyy)
* Idea: [Vitaliy Zasadnyy](https://github.com/zasadnyy)
* Bug fixing and support: [Said Tahsin Dane](https://github.com/tasomaniac)

### License
Project is published under the [MIT license](https://github.com/gdg-x/zeppelin/blob/master/LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
