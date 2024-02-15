import RxDB from 'rxdb';  
import mySchema from './rmsSchema';  

RxDB.plugin(require('pouchdb-adapter-http'));
RxDB.plugin(require('pouchdb-adapter-asyncstorage-new').default);
 
const syncURL = 'http://admin:admin$123@174.129.114.106:5984/'  //Replace this with couch host URL 

export async function initializeDB(dbName: any, password: any) {

    try {
        
        const db = await RxDB.create({
            name: dbName.toLowerCase(),
            adapter: 'asyncstorage',
            password:'nfc@1234',
            multiInstance: false,
            ignoreDuplicate: true,
        });

        const collection = await db.collection({
            name:'rms',
            schema: mySchema,
        });

        collection.sync({
            remote: syncURL + dbName.toLowerCase() + '/',
            options: {
                live: true,
                retry: true,
            },
        });

        return db;
    }
    catch (error) {
        console.error('Error initializing the database:', error);
    }


    // const myDatabase = await createRxDatabase({
    //     name: 'mydatabase',
    //     storage: getRxStorageDexie()
    // });

    // const collectionss = await myDatabase.addCollections({
    //     todos: {
    //         schema: mySchema
    //     }
    // }); 

}

// export async function initializeDB(dbName: any, password: any) {
//     console.log('dbName = ', dbName.toLowerCase());
//     console.log('password = ', password.toLowerCase());
//     const db = await createRxDatabase({
//         name: dbName.toLowerCase(),
//         password: 'nfc@1234',
//         multiInstance: false,
//         ignoreDuplicate: true,
//         storage: getRxStorageDexie()

//     });         

//     const collectionKey : CollectionKeys = {
//         name: 'rms',
//         userData: schema,
//     };

//     const collection = await db.collections[collectionKey];
//     //  ({
//     //     name: 'rms',
//     //     schema,
//     // });

//     collection.sync({
//         remote: syncURL + dbName.toLowerCase() + '/',
//         options: {
//             live: true,
//             retry: true,
//         },
//     });
//     return db;
// }
 