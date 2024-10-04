import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup () {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const photoResponse = responses[0];
      const userResponse = responses[1];

      console.log(`${photoResponse.body} ${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
