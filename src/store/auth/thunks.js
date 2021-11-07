import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '@api/firebase';
import { deleteUser, setUser } from '@store/auth/actions';
import { clearChatsList, requestChatsList, setChatsList } from '@store/chats';
import { subscribeToChatsList } from '@api/database';
import { clearConversationsList } from '@store/conversations';

export const logIn = (email, password) => async dispatch => {
    try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { currentUser } = firebaseAuth;
        dispatch(setUser(currentUser));
    } catch (err) {
        console.error('При попытке входа возникла ошибка');
        console.error(err.message);
    }
};

export const logOut = () => async dispatch => {
    try {
        await signOut(firebaseAuth);
        dispatch(deleteUser());
    } catch (err) {
        alert(err.message);
    }
};

export const logUp = (email, password, name) => async dispatch => {
    try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        await updateProfile(firebaseAuth.currentUser, {
            displayName: name,
        });
        dispatch(setUser(firebaseAuth.currentUser));
    } catch (err) {
        alert(err.message);
    }
};

export const checkAuth = () => async dispatch => {
    onAuthStateChanged(firebaseAuth, user => {
        if (user) {
            dispatch(setUser(user));
            dispatch(requestChatsList());
            subscribeToChatsList(user.uid, chatsList => dispatch(setChatsList(chatsList)));
        } else {
            dispatch(deleteUser());
            dispatch(clearChatsList());
            dispatch(clearConversationsList());
        }
    });
};
