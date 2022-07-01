import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Landing/Home';






export default (childProps) => {
  return (
    <Routes>
      
      <Route path="/" element={
        <Home {...childProps} />
      } />
      
      
      
      {/* <Route path="/new_profile" element={
        <PrivateRoute>
          <New {...childProps} />
        </PrivateRoute>
      } />
      <Route path="/home" element={
        <PrivateRoute>
          <Home {...childProps} />
        </PrivateRoute>
      } />

      <Route path="/profile/:handle" element={
        <PrivateRoute>
          <ViewProfile {...childProps} />
        </PrivateRoute>
      } />

      <Route path="/me" element={
        <PrivateRoute>
          <MyProfile {...childProps} />
        </PrivateRoute>
      } />


      <Route path="/stream" element={
        <PrivateRoute>
          <Meet {...childProps} />
        </PrivateRoute>
      } /> */}
     
    </Routes>
  )
}