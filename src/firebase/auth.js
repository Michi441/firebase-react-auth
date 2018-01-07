

import { auth } from './firebase';


// Sign Up

export const doCreateUsersWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In

export const doSignInUsersWithEmailAndPassword = (email,password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign Out

export const doSignOut = () =>
  auth.signOut();


// Password Change

export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change

export const doPasswordChange = (password) =>
  auth.currentUser.updatePassword(password);
