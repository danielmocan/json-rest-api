var http = require( "http" );
var dbLayer = require( "./dataInteraction.js" );
var utils = require( "./utilities.js" );

var server = http.createServer( function( request, response ){
    var url = request.url;
    var requestMethod = request.method;

    if( requestMethod === "GET" ) {
        const data = dbLayer.getData( url );
        response.writeHead( data.status, { "Content-Type": "application/json" } );
        response.end( JSON.stringify( data.body ) );
    }
    
    if( requestMethod === "POST" ) {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = utils.getBodyInformation( body );
            data = dbLayer.createNewData( url, body );
            response.writeHead( data.status, { "Content-Type": "application/json" } );
            response.end( JSON.stringify( data.body ) );
        });
    }

    if( requestMethod === "PUT" ) {
        var body = [];
        request.on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = utils.getBodyInformation( body );
            data = dbLayer.modifyData( url, body );
            response.writeHead( data.status, { "Content-Type": "application/json" } );
            response.end( JSON.stringify( data.body ) );
        });
    }

    if( requestMethod === "DELETE" ) {
        data = dbLayer.deleteData( url );
        response.writeHead( data.status, { "Content-Type": "application/json" } );
        response.end( JSON.stringify( data ) );
    }
} );

server.listen(3000);
console.log( "Listening on port 3000 " );