NPM module that allows you to add an instance of Twitter Bootstrap 3.3.x to an instance of jQuery. 

Install Package:

```
npm install --save bootstrap-detached-3.3
```

# Usage

The idea is that this module would be used in conjunction with jquery-detached.

E.g.:

```
var $ = require('jquery-detached-2.1.4').newJQuery();            
var bootstrap = require('bootstrap-detached-3.3');

bootstrap.addToJQuery($);

```

This pattern can be extended to allow you to create a "private" jQuery instance having a controlled
set of jQuery plugins/extensions.