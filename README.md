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
- Webpack
- Browserfy
- Rollup
- JSPM



Linting
- Which linter
  - JSLint
  - JSHint
  - ESLint
- Enable which rules
- Set warnings or errors
- which plugin
- use a preset?

Testing
- Framework?
- Assertion library
- Helper Libraries
- Test File Location
- When To Run Tests
- File Naming Convention?
- What environment?
- Mocking?
- Code Coverage
- Continuous Integration
  - Jenkins
  - Travis
  - Appveyor
  - CircleCI
  - Semaphore
  - SnapCI

Project Structure
- By file type? Feature Type?
- centralized API?
- Allow inline JS?
- Extract to POJOs?

HTTP
- Library
- Mock schema format
- Mock data generation
- Mock server
- Call Approaches
  - Node
    - HTTP
    - Request
  - Browser
    - XmlHttpRequest
    - JQuery
    - Fetch
  - Node and Browser
    - isomorphic fetch
    - xhr
    - SuperAgent
    - Axios
    

Production build
- Minification
- source maps
- bundle splitting
- Cache busting
- Error logging

The checklist Manifesto - Atul Gawande

Frameworks can be very opinionated, like ember, not as opinionated like angular or unopinionated, like Node or React

What belongs in the starter kit?
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
