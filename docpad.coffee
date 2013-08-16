# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
handlebars = require 'handlebars'

docpadConfig = {
    
    templateData:
        render: (templateName, data) ->
            template = require "./src/documents/templates/#{templateName}.hbs"
            template data

    plugins:
        handlebars:
            precompileOpts:
                wrapper: "amd"
}

# Export the DocPad Configuration
module.exports = docpadConfig