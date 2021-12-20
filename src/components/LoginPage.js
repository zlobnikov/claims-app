import React from 'react';
import LoginForm from './LoginForm';
import Footer from './Footer';
import './LoginPage.scss';

function LoginPage() {
  return (
    <>
      <div className="login-page">
        <div className="wrapper">
          <aside className="title-image"></aside>

          <LoginForm />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
