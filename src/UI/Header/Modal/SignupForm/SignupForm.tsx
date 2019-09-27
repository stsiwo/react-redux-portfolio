import * as React from 'react';
import './SignupForm.scss';
import { useSignupFormModalQuery } from '../../../Base/Hooks/Queries/useSignupFormModalQuery';
import { useToggleSignupFormModalMutation } from '../../../Base/Hooks/Mutations/useToggleSignupFormModalMutation';

const SignupForm: React.FunctionComponent<{}> = (props: {}) => {

  const isSignupFormModalOpen: boolean = useSignupFormModalQuery();
  
  const toggleSignupFormModal = useToggleSignupFormModalMutation();

  const handleToggleSignupFormModal: React.EventHandler<React.MouseEvent<HTMLDivElement>> = (e) => {
    toggleSignupFormModal();
  }

  const handleStopPropagation: React.EventHandler<React.MouseEvent<HTMLDivElement>> = (e) => {
    e.stopPropagation();
  }

  return (
    isSignupFormModalOpen && (
      <div className="modal-form-wrapper signup-form-wrapper" onClick={handleToggleSignupFormModal}>
        <div className="modal-form-cover signup-form-cover" onClick={handleStopPropagation}>
          <h2 className="signup-form-title">Signup Form</h2>
          <form className="signup-form-content">
            <div className="signup-form-content-item signup-form-content-user-name">
              <label htmlFor="user-name" className="signup-form-content-item-label">User Name</label>
              <input type="text" name="user-name" id="user-name" className="signup-form-content-item-input" placeholder="enter your name..." />
            </div>
            <div className="signup-form-content-item signup-form-content-email">
              <label htmlFor="email" className="signup-form-content-item-label">Email</label>
              <input type="email" name="email" id="email" className="signup-form-content-item-input" placeholder="enter your email..." />
            </div>
            <div className="signup-form-content-item signup-form-content-password">
              <label htmlFor="password" className="signup-form-content-item-label">Password</label>
              <input type="password" name="password" id="password" className="signup-form-content-item-input" placeholder="enter your password..." />
            </div>
            <div className="signup-form-content-item signup-form-content-password-confirm">
              <label htmlFor="password-confirm" className="signup-form-content-item-label">Password Confirm</label>
              <input type="password" name="password-confirm" id="password-confirm" className="signup-form-content-item-input" placeholder="enter your password again..." />
            </div>
            <div className="signup-form-content-btn-wrapper">
              <input className="signup-form-content-btn" type="button" value="Cancel" onClick={handleToggleSignupFormModal} />
              <input className="signup-form-content-btn" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default SignupForm;

