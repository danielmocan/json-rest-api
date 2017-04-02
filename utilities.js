const types = require( "./types.js" );

function getBodyInformation( body ){
    return JSON.parse( Buffer.concat( body ).toString( ) );
}

function buildResponse( type, data ) {
    let response;
    switch( type ) {
        case types.ERROR:
            response = {
                status: 400,
                body: {
                    error: "Bad Request"
                }
            };
            break;
        case types.NOT_FOUND:
            response = {
                status: 404,
                body: {
                    error: "No Record Found"
                }
            };
            break;
        case types.SUCCESS:
            response = {
                status: 200,
                body: data
            };
            break;
        default: 
            response = {
                status: 400,
                body: {
                    error: "Bad Request"
                }
            }
    }
    return response;
}

module.exports = {
    buildResponse,
    getBodyInformation
}