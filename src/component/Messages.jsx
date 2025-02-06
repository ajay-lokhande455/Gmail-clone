import React, { useEffect } from 'react';
import Message from './Message';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

const Messages = () => {
  const dispatch = useDispatch();
  const emails = useSelector((store) => store.appSlice.emails || []); // Ensure emails is always an array

  useEffect(() => {
    const q = query(collection(db, 'email'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmail = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmail));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {emails.length > 0 ? (
        emails.map((email) => <Message key={email.id} email={email} />)
      ) : (
        <p>No messages yet.</p> // Show when there are no messages
      )}
    </div>
  );
};

export default Messages;
