'use strict';

Object.defineProperty(exports, "__esModule", { value: true });


const { exchange } = require("@conversationalcomponents/sdk");


async function START() {
    var componentId = this.getActiveComponent().data["componentId"];
    var sessionId = this.getUserId();
    var userInput = this.getRawText();

    console.log(userInput);

    const compResponse = await exchange(componentId, sessionId, userInput, {});

    console.log(compResponse.response);
    this.tell(compResponse.response);
    this.getActiveComponent().data["context"] = compResponse.updated_context;


        //  if(!compResponse.component_done){
        //     return this.toIntent('TalkIntent');
        // }
        // else
        // {
        //     return this.toIntent('END');
        // }
    
}

async function TalkIntent() {
    var componentId = this.getActiveComponent().data["componentId"];
    var sessionId = this.getUserId();
    var userInput = this.$inputs.any.value;

    var context = this.getActiveComponent().data["context"];

    var compResponse = exchange(componentId, sessionId, userInput, context);  

    compResponse.then((compResponse) => {
        this.ask(compResponse.response);
        this.getActiveComponent().data["context"] = compResponse.updated_context;
    
        if(!compResponse.component_done){
            return this.toIntent('TalkIntent');
        }
        else
        {
            return this.toIntent('END');
        }
    })
}

async function END() {
    return sendComponentResponse(this, 'SUCCESSFUL', this.getActiveComponent().data["context"]);
}


function sendComponentResponse(jovo, status, data, error) {
    const response = { status };
    if (data) {
        response.data = data;
    }
    else if (error) {
        response.error = error;
    }
    return jovo.sendComponentResponse(response);
}

exports.CoCoHandler = {
    START,
    TalkIntent,
    END
};
