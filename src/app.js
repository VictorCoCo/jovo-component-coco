'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const { CoCo } = require("./components/jovo-component-coco");

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------
app.useComponents(new CoCo())

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloWorldIntent');
    },

    async HelloWorldIntent() {
        const delegationOptions = {
            onCompletedIntent: 'HelloWorldIntent',
            data: {

                componentId: "namer_vp3"
            }
        };
    
        return this.delegate('jovo-component-coco', delegationOptions);
    },

    MyNameIsIntent() {
        this.tell('Hey');
    },
});

module.exports.app = app;
