# js_development_environment
Create a template for a development environment for javascript

This is based on the pluralsight "Build a JavaScript Development Environment Course"

Editor
- which one
 - Atom
 - WebStorm
 - Brackets 
 - VsCode
- plugins
- use built in terminal?
- config using EditorConfig

Package Management
- Bower
- Jam
- NPM
- JSPM
- Volo

Development Webservers
- HTTPServer
- Budo
- Live Server
- DevPack WebServer
- Express
- BrowserSync

Sharing WIP
- LocalTunnel
- NGrok
- Surge
- Now

Automation
- Gulp
- Grunt
- NPM Scripts

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
  - Babel
  - TypeScript
  - Elm

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
