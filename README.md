The development environment uses [SASS](https://sass-lang.com/) CSS preprocesssor and [Twig](https://twig.symfony.com/doc/3.x/) for HTML templating. The automation is done by [gulp JS](https://gulpjs.com/). 

# Prerequisite
This uses an older version of nodejs so make sure to have NVM installed.
[nvm](https://github.com/nvm-sh/nvm)
or
[nvm-windows](https://github.com/coreybutler/nvm-windows)
Node JS is installed [Download Here](https://nodejs.org/en/download/)

Install Gulp cli `npm install --g gulp-cli`


# Usage
1. Clone Repo 

1. Install Dependencies `npm install`

If there is error then install Node sass `npm install -g node-sass`

# Issues
For older `gulp-cli` there will be an issue with the `gulp` task. To update gulp-cli run `npm i -g gulp-cli`.

# Folder Structure
<pre>
├── README.md
├── app
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── html
│   │   ├── layouts
│   │   │   └── base.twig
│   │   ├── partials
│   │   │   ├── footer.twig
│   │   │   └── header.twig
│   │   └── views
│   │       └── index.twig
│   ├── js
│   │   └── app.js
│   └── scss
│       ├── __hacks.sass
│       ├── _bootstrap.sass
│       ├── _fonts.sass
│       ├── _settings.sass
│       ├── components
│       │   └── _components.sass
│       ├── layout
│       │   └── _layout.sass
│       ├── main.sass
│       ├── mixins
│       │   ├── _assets.sass
│       │   └── _mixins.sass
│       └── utils
│           └── _utils.sass
├── gulp
│   ├── config.js
│   ...  
├── gulpfile.js
├── package-lock.json
└── package.json
</pre>
For HTML, the pages inside the `app/html/views` are compiled as pages. Other files are used as partials or components. 

For CSS, `main.sass` in compiled into `main.css`.

# Dist
To generate distribution files, run `gulp dist`. The distribution files are under the `dist` folder.
