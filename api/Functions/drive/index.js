const { google } = require('googleapis');
const CLIENT_ID = "123061127373-q63jaqchko6ag9r0jochn69g9e62irdi.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04Dy93dhKu0hdCgYIARAAGAQSNwF-L9IrwK2TGdYrMhtWkJ7oQW8kTzDozC8zoGA9gOgkKToAXQbyHaX5cXtJReK8vIwzUOmGOh8"

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
  return `https://www.googleapis.com/drive/v3/files/${id}?supportsAllDrives=true&key=AIzaSyCAR1h1chPnnLY6N8R8jF2yn6WR85eYqBI&alt=media`
}


module.exports = {
  getDriveFiles,
  getElemUrlById
}