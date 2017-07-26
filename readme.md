# FreeCodeCamp: Portfolio

This is my portfolio page for freeCodeCamp's second [basic front end challenge](https://www.freecodecamp.org/challenges/build-a-personal-portfolio-webpage). Demo is available [on my site](https://zsolti.co/fcc/portfolio/).

## User Stories

- [x] I can access all of the portfolio webpage's content just by scrolling
- [x] I can click different buttons that will take me to the portfolio creator's different social media pages
- [x] I can see thumbnail images of different projects the portfolio creator has built (if you haven't built any websites before, use placeholders)
- [x] I navigate to different sections of the webpage by clicking buttons in the navigation

## Tools Used

- [Gulp.js](https://github.com/gulpjs/gulp) task runner
- [Webpack](https://github.com/webpack/webpack) module bundler
- [Babel](https://github.com/babel/babel) compiler
- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Pug](https://github.com/pugjs/pug) template engine
- [Sass](http://sass-lang.com) with [PostCSS](https://github.com/postcss/postcss)' [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Particles.js](https://github.com/VincentGarreau/particles.js)

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer. (Actually, you could also use `npm` but I prefer `yarn` 👌)

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/fcc-portfolio.git
cd fcc-portfolio
```

#### Install dependencies

``` bash
yarn install
# OR
npm install
```

#### Start dev server with browser sync

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It uglifies JS, minifies CSS and images, replaces references to non-optimized scripts and stylesheets in HTML files and copies everything necessary to the `dist` folder - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Preview production build

It's the same as the build task above but it also starts a server so you can check your work.

``` bash
yarn preview
# OR
npm run preview
```
