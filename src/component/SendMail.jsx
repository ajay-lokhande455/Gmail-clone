import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();

  const validate = () => {
    let newErrors = {};

    if (!formData.to) {
      newErrors.to = 'Recipient email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.to)) {
      newErrors.to = 'Enter a valid email address.';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message) {
      newErrors.message = 'Message cannot be empty.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear errors when user types
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
      await addDoc(collection(db, "email"),{
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
        starred: false,
        draft: false,
        isSpam: false,
        isImportant: false,
        isSent: false,
        isTrash: false,
        isJunk: false,
        isDraft: false,
        isArchive: false,
        isLabel: [],
        isStarred: false,
        
      })
      dispatch(setOpen(false)); // Close modal after submission
      setFormData({
        to: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className='flex px-3 py-2 bg-[#F2F6FC] justify-between rounded-t-md'>
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'
        >
          <RxCross2 size={'20px'} />
        </div>
      </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input
          onChange={changeHandler}
          type='text'
          value={formData.to}
          name='to'
          placeholder='To'
          className='outline-none py-1  px-2'
        />
        {errors.to && <p className='text-red-500 text-sm'>{errors.to}</p>}

        <input
          onChange={changeHandler}
          type='text'
          value={formData.subject}
          name='subject'
          placeholder='Subject'
          className='outline-none py-1  px-2'
        />
        {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}

        <textarea
          onChange={changeHandler}
          name='message'
          value={formData.message}
          cols='30'
          rows='10'
          placeholder='Message'
          className='outline-none py-1  px-2'
        />
        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}

        <button type='submit' className='rounded-full bg-[#0B57D0] w-fit px-4 text-white font-medium'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
