import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export interface postArticle {
    id: string;
    title: string,
    date: Timestamp;
    description: string,
}

