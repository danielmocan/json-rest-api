const utils = require( "./utilities.js" );
const type = require( "./types.js" );
let db = {  
    "posts": [
        {  
            "id": 200,
            "name":"To be DELETED"
        },
        {  
            "id": 2,
            "name":"Post number 1"
        },
        {  
            "id": 3,
            "name":"Post number 2"
        }
    ],
    id: 4
};

function getData( route ) {
    let specificItem;
    const routes = route.split("/");
    routes.shift();
    const mainCategory = routes[ 0 ];
    const itemID = routes[ 1 ] ? routes[ 1 ] : null;
    const category = db[ mainCategory ];
    if( category && category.length && itemID ) {
        specificItem = category.filter( ( item ) => item.id === parseInt( itemID, 10 ) );
        if( specificItem.length !== 0 ) {
            return utils.buildResponse( type.SUCCESS, specificItem );
        }
        return utils.buildResponse( type.NOT_FOUND );
    }

    if( category ) {
        return utils.buildResponse( type.SUCCESS, category );
    }

    return utils.buildResponse( type.NOT_FOUND );
}

function modifyData( route, newInfo ) {
    const routes = route.split("/");
    routes.shift();
    let item2;
    const mainCategory = routes[ 0 ];
    const category = db[ mainCategory ];
    if( category ) {
        for( var i = 0; i < db[ mainCategory ].length; i++ ) {
            if( db[ mainCategory ][ i ].id == routes[ 1 ] ) {
                db[ mainCategory ][ i ] = Object.assign( { }, db[ mainCategory ][ i ], newInfo );
                return utils.buildResponse( type.SUCCESS, db[ mainCategory ][ i ] );
            }
        }
        return utils.buildResponse( type.NOT_FOUND );
    }
    return utils.buildResponse( type.ERROR );
}

function createNewData( route, newInfo ) {
    const mainCategory = route.replace( "/", "" );
    const itemToAdd = Object.assign( { }, { id: db.id++ }, newInfo );
    const category = db[ mainCategory ];
    if( category ) {
        db[ mainCategory ].push( itemToAdd );
        return utils.buildResponse( type.SUCCESS, { message: "Successfully Added" } );
    }
    return utils.buildResponse( type.ERROR );
}

function deleteData( route ) {
    const routes = route.split("/");
    routes.shift();
    let item2;
    const mainCategory = routes[ 0 ];
    const itemToDeleteId = cat[ 1 ];
    const category = db[ mainCategory ];
    if( category && itemToDelete ) {
        for( var i = 0; i < db[ mainCategory ].length; i++ ) {
            if( db[ mainCategory ][ i ].id == itemToDeleteId ) {
                db[ mainCategory ].splice( i, 1 );
                return utils.buildResponse( type.SUCCESS, { message: "Deleted Successfully"  } );
            }
        }
    }
    return utils.buildResponse( type.NOT_FOUND );
}

module.exports = {
    createNewData,
    getData,
    modifyData,
    deleteData,
}

