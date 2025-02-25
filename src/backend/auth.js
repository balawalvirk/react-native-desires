import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast'
// import {
//     GoogleSignin,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export async function signUp(email, password) {
    let success = true;
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async user => {
            success = user
        })
        .catch(function (error) {
            success = false;
            Toast.show(error.code + ': ' + error.message);
            console.log(error.code + ': ' + error.message)
        });
    return success;
}

export async function signIn(email, password) {
    let success = false;
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async user => {
            success = { res: true, user: user.user.uid }
        })
        .catch(function (error) {
            success = { res: false, error: error.message };
        });
    return success;
}

export async function checkEmailAlreadyInUse(email, callback) {
    let emails = await firebase
        .auth()
        .fetchSignInMethodsForEmail(email.trim());

    callback(emails.length > 0)
}

//send  otp to phoneNumber

export const sendOtpToPhoneNo = async (phoneNumber) => {
    try {
        let confirmation = await auth().verifyPhoneNumber(phoneNumber)

        if (confirmation.error == null) {
            return confirmation
        }
        else {
            return false
        }
    } catch (error) {
        return false
    }

}
// otp verification
export const verifyPhoneNumber = async (verificationId, otp) => {
    try {
        const credential = auth?.PhoneAuthProvider?.credential(verificationId, otp);
        let userData = await auth().currentUser.linkWithCredential(credential);
        return { data: userData, success: true }
    } catch (error) {
        console.log('verification Error: ', error);
        return { success: false, error: error?.message }
    }
}


// Send email verification
export const sendVerificationEmail = async () => {
    try {
        const user = auth().currentUser;

        if (user) {
            await user.sendEmailVerification();
            Toast.show("Verification link sent your email")
        }
    } catch (error) {
        console.log(error?.message);

    }
};

// Check email verification status
export const checkEmailVerification = () => {
    try {
        const user = auth().currentUser;

        if (user) {
            user.reload(); // Refresh user data
            if (user.emailVerified) {
                // Email is verified
                Toast.show("your Email is verified")
                return true;
            } else {
                // Email is not verified
                Toast.show("Email is Not verified check your email")
                return false
            }
        }
    } catch (error) {
        console.log(error?.message);
        return false
    }
};

export async function connectAccount(email, password, callback) {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async user => {
            if (user.user.emailVerified) {
                callback({ ...user, success: true })
            }
            else {
                success = false
                await user.user.sendEmailVerification();
                // alert(`A verification link has been sent to ${email.trim()}, please verify and try connecting again`)
                alert(`A verification link has been sent to ${email.trim()}\nPlease check your spam folder if not initially found.  Click on the link to verify your email address and then please log into Click and go again.`)

            }
        })
        .catch(function (error) {
            alert(error.code + ': ' + error.message);
            callback({ ...error, success: false })
        });
}

export async function getCurrentUserId() {
    var user = firebase.auth().currentUser;
    console.log('user', user?.uid);
    if (user != null) {
        return user?.uid;
    }
    else {
        return false
        // Toast.show('Seccion Expired Please Login Again')
    }
}

export async function getCurrentUser() {
    var user = firebase.auth().currentUser;

    if (user != null) {

        return user;
    }
    else {
        // Toast.show('Seccion Expired Please Login Again')
    }
}
export async function Logout() {
    await firebase.auth().signOut().catch(error => { console.log("error", error) });
}

export async function resetPassword(email) {
    let success = true
    await firebase
        .auth().sendPasswordResetEmail(email)
        .then(function (user) {
            success = true
            // alert('Please check your email...', user)
        }).catch(function (e) {
            success = e.message
        })
    return success
}

export async function getCurrentUserToken() {

    return await firebase.auth().currentUser.getIdToken()
}

export async function deleteAccount(userId) {
    let success = true
    await firebase.auth()
        .currentUser.delete()
        .then(async (res) => {
            console.log('res 132:', res)
            console.log('userId to delete ------------', userId)
            await firebase.firestore()
                .collection('Users')
                .doc(userId)
                .delete()
                .then(async () => {
                    success = true
                    console.log('Your Account Is Deleted :(');
                })
                .catch(error => {
                    success = error.message
                });
        })
        .catch(error => {
            success = error.message
        });

    return success
}

// signin with google
// export async function googleAuthentication(setLoading) {
//     setLoading(true)
//     try {
//         console.log('start google signin');
//         await GoogleSignin.hasPlayServices({
//             showPlayServicesUpdateDialog: true,
//         });

//         const userInfo = await GoogleSignin.signIn();
//         const credential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)

//         const user = await auth().signInWithCredential(credential)
//         return user


//     } catch (error) {
//         setLoading(false)
//         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//             // user cancelled the login flow
//         } else if (error.code === statusCodes.IN_PROGRESS) {
//             Error('Google authentication is in progress already')
//             // operation (e.g. sign in) is in progress already
//         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//             Error('Play services not available or outdated')
//             // play services not available or outdated
//         } else {
//             Error(error.message)
//             // some other error happened
//         }

//     }
// }

// export async function facebookAuthentication(setLoading) {
//     setLoading(true)
//     try {
//         const result = await LoginManager.logInWithPermissions(["public_profile", "email"])

//         if (result.isCancelled) {

//         }
//         else {
//             const data = await AccessToken.getCurrentAccessToken();
//             if (!data) {
//                 setLoading(false)
//                 Toast.show('Something went wrong obtaining the users access token')
//             }
//             const credential = await auth.FacebookAuthProvider.credential(data.accessToken);
//             let imageURL = ''
//             const graphRequest = new GraphRequest(
//                 '/me',
//                 {
//                     accessToken: data.accessToken,
//                     parameters: {
//                         fields: {
//                             string: 'picture.height(961)',
//                         },
//                     },
//                 },
//                 (error, result) => {
//                     if (error) {
//                         console.error(error);
//                     } else {
//                         imageURL = result.picture.data.url;
//                     }
//                 },
//             );
//             new GraphRequestManager().addRequest(graphRequest).start();
//             var user = await auth().signInWithCredential(credential)
//             user.user.photoURL = imageURL.length > 0 ? imageURL : user.user.photoURL
//             return user
//         }
//     } catch (error) {
//         setLoading(false)
//         Toast.show(error.message)
//     }

// }