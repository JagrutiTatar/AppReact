// src/components/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  return <h1>Profile Page for User ID: {userId}</h1>;
};

export default Profile;

