const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello Ninjas from Firebase!");
});


const createNotification = (notification=>{
    return admin.firestore().collection("notifications").add(notification)
    .then(doc => console.log('Notificcation added', doc))
})

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project = doc.data();
    const notification = {
        content: "Added a new Project",
        user: `${project.authorFirstName} ${project.authorLastName}`, //or u could just concat instead of using template syntaxing
        time:admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);

})

exports.userJoined = functions.auth.user().onCreate(user => {

    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});
// in functions/package.json
// "engines": {
//     "node": "10" requires billing plan pay as you go
//   },
//   "engines": {
//     "node": "8" The Node.js 8 runtime is deprecated and will be decommissioned on 2021-03-15.
//   },
// firebase deploy --only functions