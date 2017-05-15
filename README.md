# js_development_environment
Create a template for a development environment for javascript

This is based on the pluralsight "Build a JavaScript Development Environment Course"

Editor
- Important Features
  - String ES2015+ support
    - autocompletion
    - Parse ES6 imports
    - report unused imports
    - Automated Refactoring
  - Framework Intelligence... understanding the framework you are using like node
  - built-in terminal (some editors like Atom allow you to add it as a plugin)
- which one
 - Atom
 - WebStorm - favorite of the author but costs $$
 - Brackets 
 - VsCode
- Using an IDE like Eclipse is OK, but doesn't quite have the focus of the recommended editors. If you are writing front end (javascript) and backend (i.e. python) code, there is nothing wrong with using a different editor for each.
- plugins
- use built in terminal?
- config using EditorConfig
  - create a file called .editorconfig to control common editor parameters
  - http://editorconfig.org/
  - many editors have support built in, like webstorm
  - others like Atom, brackets, and VSCode have plugins for support
  
Package Management
- Bower - Allows you to skip build, but irrelevant because most projects have build steps
- Jam
- NPM - defacto standard for package managers
- JSPM - Javascript Package Manager - allows install of packages from its own list of package repositories as well as other locations such as github, NPM and Bower. It also does bundling and so is recommended in that step
- Volo
- Security Scanning
Anyone can put anything into the node library. It's a good idea to scan for security issues.
  - retire.js
  - Node Security Platform - call "nsp check" as part of your build to scan for vulnerabilities
  - Add check as part of start script; running manually easy to forget, running as part of install may not catch issues on updates, and running as part of production build is expensive to change
  
Development Webservers
- http-server - ultra simple. single command serves current directory
- Budo - integrates with browserfy for bundling, includes hot reloading
- Live Server - lightweight, adds live reloading
- WebPack WebServer - integrates with WebPack bundler, serves from memory, includes hot reloading
- Express - comprehensive, highly configurable, only option that can also be used as a production server; common configuration, can run everywhere
- BrowserSync - useful for cross-device testing of browsers of different sizes, devices.  Great way to share, but does not expose a public IP outside your network. Integrates with Browserfy, Webpack, Express, and Gulp

Sharing WIP
- LocalTunnel - easily share work on your local machine
  - install localtunnel globally
  - start your app
  - lt --port <port_number>
- NGrok - More sophisticated than localtunnel but requires more configuration, you can password protect access
  - sign up
  - install ngrok
  - install authtoken
  - start your app
  - ./ngrok http <port_number>
- Surge - Assumes app is static files (html, js, and css), push files to surge then get a public IP
  - install surge globally
  - type "surge"
- Now - easy to deploy application to the cloud instead of punching a hole in your firewall
   - install now
   - create start script
   - just type "now"

Automation
- Gulp 
  - focuses on in-memory streams (pipes), 
  - faster than grunt, 
  - code over configuration, 
  -large plugin ecosystem
- Grunt 
  - Configuration over code, 
  - writes intermediate files between steps, 
  - large plugin ecosystem
  
- NPM Scripts
  - declared in script section of package.json
  - leverage OS command line
  - directly use NPM packages
  - offers convention based pre/post hooks
  - advantages:
    - use tools directly
    - no need for separate plugins
    - simpler debugging
    - better docs
    - easy to learn and simple
    - see bit.ly/npmvsgulp
Module Format 
- ES6 Modules, CommonJS, etc

HTML Generation
- Minify
- Use Plugin
- Inject Production only concerns
- Use a Templating language

Transpiling
- Native ES or different language?
- Use experimental features?
- Which plugins
- Production vs dev config
- Transpilers
  - Babel - will use this
  - TypeScript
  - Elm
- can setup either .babelrc file or babel section in package.json
- setting up babelrc with the following will get the latest standard es6 features:
    {
       "presets" : [
           "latest"
       ]
    }

Bundler 
- five different module formats
  - Immediately Invoked Function Expressions (IIFE)
    - Encapsulates Java script, eliminates global variables
  - Asynchronous Module Definition (AMD)
  - CommonJS (CJS) - Node Standard, but doesn't work for browsers
  - Universal Module Definition (UMD)
  - ES6 Modules - Standard format going forward
    - Standardized
    - Statically analyzable
    - improved autocompletion support
    - intelligent refactoring
    - code fails fast, in a quicker manner
    - tree shaking - finding unused code 

Node CommonJS format does not work in browsers

You may also want to package project into files
- Require.JS - first popular bundler, generates AMD format
- Webpack
  - huge ecosystem of loaders (CSS, Images, Fonts, HTML), not just JS
  - Strategic bundle splitting
  - Hot module reloading
  - Webpack 2 offers tree shaking (they are on 2.5.1 now!)
  - used by majority of users
  - This is what we will use, Joe Eames has a separate course on Webpack
- Browserify
  - First bundler to get mass adoption
  - bundles NPM packages for the web
  - Large plugin ecosystem
- Rollup
  - tree shaking - eliminates code you're not using from the final bundle
  - faster loading production code
  - quite new, so less examples
  - no hot reloading or code spitting (yet)
  - good choice if you are building a library
- JSPM
  - Uses SystemJS, a univeral module loader
  - supports loading modules at runtime
  - has its own package manager
  - Uses rollup so you get its' tree shaking benefits as well
  - can load modules from npm 

Sourcemaps
- Allows one to debug transpiled and bundled code
- Maps code back to original source
- part of the build process

Linting
- why?
  - enforce consistency
    - curly brace position
    - prevent use of features team has decided to avoid
  - avoid mistakes
    - adding extra parenthesis
    - overwriting function
    - assignment in a conditional when you meant to do a comparision
    - missing default case in switch
    - leaving debugger/console.log in your code
- Which linter
  - JSLint - original linter for JS. It's opinionated and not very configuration
  - JSHint - better because of configurability
  - ESLint - Best, no good reason to choose the others
  
  Except! None of the above linters work with TypeScript, so for that you'll have to use TSLint
  
  
- What configuration format to use? 
  - either a dedicated .eslintrc.json file 
  - or inside package.json ("eslintConfig" section)
- Enable which rules - get together as a team and agree on it
- Set warnings or errors
  - warnings
    - can continue development
    - can be ignored
    - team must agree to fix
  - errors
    -Breaks the build 
    - cannot be ignored
- which plugins
  - depends on what you are doing
  - eslint-plugin-x
    - react
    - angular
    - node
  - List available at "Awsome ESLint"
  (github/dustinspecker/awesome-eslint)
- use a preset?
many options
  - start from scratch
  - Use ESLint's recommended list then tweak
  - use an existing set of rules like AirBnB, XO or standard JS
- issues
  - ESLint doesn't watch files
    - use eslint-loader in webpack everytime you hit save and build
    - use eslint-watch 
      - stands alone and isn't tied to any bundler
      - better warning messages
      - can lint all files, even if they are not being bundled
  - ESLint does not support many experimental features
    - supports ES6 and ES7 features natively
    - also supports object spread
    - use babel-eslint instead otherwise, as it support stage 0-4 features
- why lint during an automated build?
  - one place to check
  - universal configuration
  - part of continuous integration
- if you use automated linting, need to disable linting in your editor to prevent overriding
  
Testing
- Framework?
  - Mocha - more configurable, mature, flexible and large ecosystem of support
  - Jasmine  - includes its' own assertion library
  - Tape - leanest and simplest
  - qUnit - for testing jQuery
  - AVA - parallel testing and only runs impacted tests
  - Jest - wrapper over Jasmine includes code coverage, JSDom and popular conventions for finding test files built in
  - Any of these frameworks will work!
- Assertion library
  - a way to declare what you expect from the test
  - chai - popular and offers an array of assertion styles to choose from
  - should.js
  - expect
  - need one for mocha since it doesn't include one
- Helper Libraries
  - JSDom - Can run tests that rely on the dom without opening an actual browser
  - Cheerio - jQuery for the server; query virtual DOM using jQuery selectors
  - 
- Test File support
  - testing in a browser - Karma, Testem
  - testing in a headless browser - PhantomJS
  - In memory DOM - JSDOM 
- When To Run Tests
  - unit tests should run whenever you hit save
  - rapid feedback
  - facilitates TDD
  - Automatic = Low Friction
  - increases visibility of existing tests
- Test File Location
  - Alongside is better because it's easy to remove files from deliverables
  - easy imports
  - clear visibility
  - convenient to open
  - no need to recreate folder structures
  - easier to refactor and move files
- File Naming Convention?
  - file.spec.js
  - file.test.js
- What environment?
- Mocking?
- Code Coverage
- Continuous Integration
  - why?
    - Forgot to commit a new file
    - Forgot to update package.json
    - commit doesn't run cross-platform
    - node version conflicts
    - bad merge
    - didn't run tests
    - summary: It catches developer mistakes quickly
  - what does a CI server do?
    - run automated build
    - run your tests
    - check code coverage
    - automated deployment
  - which CI Server?     
    - Jenkins - popular and highly configurable, available for download
    - Travis - Linux based server and popular, hosted
    - Appveyor - windows based server
    - CircleCI
    - Semaphore
    - SnapCI
    - setup two... travis for linux and appveyor for windows, get multiple platform coverage
    - setup for travisCI... login to travisCI with your github account, and select the repo associated with the project you want to run CI on. Setup .travis.yml file
Project Structure
- By file type? Feature Type?
- centralized API?
- Allow inline JS?
- Extract to POJOs?

HTTP
- Library
- Mock API
  - Unit testing
  - instant response
  - keep working when services are down
  - rapid prototyping
  - avoid interteam bottlenecks
  - allow work offline
- Mock Frameworks
  - Nock
  - static HTTP
  - create Development Webserver
    - api-mock
    - JSON Server
    - BrowserSync or Express
- Mock schema format- JSON Schema Faker
- Mock data generation
- Mock server
- Mock Plan
  - Declare Mock Schema using JSON Schema Faker
  - Generate Random Data using
    - faker.js
    - chance.js
    - randexp.js
  - check out JSON Schema repl online to see how it produces random data
  - Serve Data via API
    - JSON Server
  
- Call Approaches
  - Node
    - HTTP
    - Request - good if you're only working on node
  - Browser
    - XmlHttpRequest - manually check ready state, verbose
    - JQuery - $ajax logical way to handle http calls
    - framework-based like angular
    - Fetch - streamlined, so not feature rich - has polyfill if needed
  - Node and Browser
    - isomorphic fetch - fetch-like API 
    - xhr - subset of request library run on both node and browser
    - SuperAgent - full feature
    - Axios - full feature
  - centralize API calls
    - configure all calls
    - handle preloader logic
    - handle errors
    - single seam for mocking

Production build
- Minification
- source maps
- bundle splitting
- Cache busting
- Error logging

The checklist Manifesto - Atul Gawande

Frameworks can be very opinionated, like ember, not as opinionated like angular or unopinionated, like Node or React

Starter App
- why a starter app
  - examples of Directory structure and file naming
  - examples of framework usage
  - examples of testing
  - examples of mock api
  - example of automated deployment
  - codifies decisions
  - interactive example of teh starter kit working in a real scenario
- tips to build app
  - javascript belongs in a js file, not embedded in html
    - you can't test, lint, reuse or transpile it!
    - cannot import explicit dependencies
    - use configuration object pattern to inject JSON into html script, not custom javascript
  - organize larger projects by feature
  - extract as much logic as possible in "Plain Old Javascript Objects", no framework-specific code
- What belongs in the starter kit?
  - Package Management
  - Bundling
  - Minification
  - Sourcemaps
  - Transpiling
  - Dynamic HTML Generation
  - Centralized HTTP requests
  - Mock API Framework
  - Component Libraries
  - Development Webserver
  - Linting
  - Automated Testing
  - Continuous Integration
  - Automated Build
  - Automated Deployment
  - Working Example App - to show how all of this comes together including directory structure and file name practices

  Production build
  - minification - about speeding pageloads and saving bandwidth
    - shorten variable and function names
    - remove comments
    - remove whitespace and newlines
    - some use tree shaking to remove dead code
    - can still debug using source maps
  - sourcemaps
  - Dynamic HTML
    - hardcoding references
    - manipulate html via node
    - html-webpack-plugin
  - cache busting
  - bundle splitting
    - speed initial page load
    - avoid redownloading all libraries
    - so split application code from third party libraries
  - error logging
    - TrackJS - Specific to javascript
    - Sentry
    - New Relic - broader than javascript
    - Raygun
   - error metadata
     - browser used
     - stacktrace
     - previous action logging
     - custom api for enhanced tracking
     - Notifications and Integrations
     - Analytics and filtering
     - pricing - all costs $
   - turn off error logging using conditional logic
     - use templating supported by webpack plugin
     - by default it uses embedded JS (EJS)
     - store TrackJS token in webpack production config
     - wrap in if statement that looks for token in htmlWebpackPlugin.options
     - pass in token from plugin options above
       <% if (htmlWebpackPlugin.options.trackJSToken) { %>
       <!-- BEGIN TRACKJS -->
       <script type="text/javascript">window._trackJs = { token : '<%=htmlWebpackPlugin.options.trackJSToken%>' }; </script>
       <script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
       <!-- END TRACKJS -->
       <% } %>
     