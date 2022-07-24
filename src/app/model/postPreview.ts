import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export interface postPreview {
    id: string;
    title: string,
    description: string,
    date: Timestamp;
}

