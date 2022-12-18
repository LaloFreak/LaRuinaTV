const { google } = require('googleapis');
const CLIENT_ID = "123061127373-q63jaqchko6ag9r0jochn69g9e62irdi.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04qqSsKUcGnmJCgYIARAAGAQSNwF-L9Iri8xFsSGJNrJnB6r4mwTD2XWvtD0MnHwg_3avlZwPS9mWPjKvoqwyyXzxDiTuzFnzoGA"

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

async function getDriveFiles(idFolder){
  var query = "'" + idFolder + "' in parents"
  try {
    const res = await drive.files.list(
      {
        q: query,
        fields: 'files(id, name)',
      });
    return res.data.files;
    
  } catch (error) {
    console.log(error.message)
  }
}

async function getElemUrlById(id){
  try {
  const res = await drive.files.get({
    fileId: `${id}`,
    supportsAllDrives: 'true',
    alt: 'media'
  })
  return res.config.url;

  } catch (error) {
    console.log(error.message)
  }
}


module.exports = {
  getDriveFiles,
  getElemUrlById
}