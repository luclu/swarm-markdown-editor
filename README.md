# Swarm Markdown Editor

Simple [simplemde-markdown-editor](https://github.com/NextStepWebs/simplemde-markdown-editor) bundled and hosted on [swarm](http://swarm-guide.readthedocs.io/).

Demo at: http://swarm-gateways.net/bzz:/31c1384c835eb0fc7a9a24d82089f67cff2ef6bcc0012da349fddd9f361ab10b/

**NOTE** local content persistency for now. Content storage on swarm to come.


## Development

Using [Meteor](http://meteor.com/install):

    cd app
    meteor

Go to [http://localhost:3000](http://localhost:3000)

## Deployment

Using [meteor-build-client](https://github.com/frozeman/meteor-build-client)>

    npm install -g meteor-build-client

To bundle the app run and upload it to swarm run:

    cd app
    meteor-build-client ../build --path "/"
    swarm --recursive --defaultpath dist/index.html up dist