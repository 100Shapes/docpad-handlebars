# Docpad-Handlebars

## Objective
Create a Docpad app which rendered its views using Handlebar templates so that the same templates could be shared by a frontend JS app.

## Getting setup
1. Clone the repo `git clone https://github.com/100Shapes/docpad-handlebars.git`
1. Install the dependencies `cd docpad-handlebars && npm install`
1. Run the app `docpad run`

## Running the app
1. [Launch the app](http://localhost:9778/home.html)
1. Note the line of text
1. Turn JavaScript off in the browser and refresh
1. Docpad renders the same template


## Special Sauce
Due to the [Docpad-plugin-Handlebars](https://github.com/docpad/docpad-plugin-handlebars), we're actually precompiling the Handlebars templates for the browser.

## How does it work?
### The Docpad side
1. The `Home` document is a normal Docpad Document, but it calls a [template function](https://github.com/100Shapes/docpad-handlebars/blob/master/src/documents/home.html.eco#L5) to generate its view rather than doing it itself
1. The templates [referred to by name](https://github.com/100Shapes/docpad-handlebars/blob/master/docpad.coffee#L10), with a simple data object just like any other rendering any other Handlebars template

### The JS side
1. Here we take advantage of the Docpad Handlebars plugin and [point requirejs at the precompiled Handlebars templates](https://github.com/100Shapes/docpad-handlebars/blob/master/src/documents/js/main.js#L4)
1. Write the [view](https://github.com/100Shapes/docpad-handlebars/blob/master/src/documents/js/modules/home.js) to render the template 
1. Finally, call that view from [within the page](https://github.com/100Shapes/docpad-handlebars/blob/master/src/layouts/base.html.eco#L16) (here, we're cheating slightly by using the `layout`)


## License
The MIT License (MIT)

Copyright (c) 2013 ONEHUDNREDSHAPES LTD.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.