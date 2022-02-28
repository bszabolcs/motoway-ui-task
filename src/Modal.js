import React, { useEffect, useRef, useCallback } from 'react';

const Modal = ({ onCloseRequest, children, contentId }) => {
  const modal = useRef(null);

  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          onCloseRequest();
          window.removeEventListener('keyup', handleKeyUp, false);
        }
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onCloseRequest]
  );

  const handleOutsideClick = useCallback(
    e => {
      if (modal) {
        if (!modal.current.contains(e.target)) {
          onCloseRequest();
          document.removeEventListener('click', handleOutsideClick, false);
        }
      }
    },
    [onCloseRequest]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);
    document.querySelector(`#img${contentId}`).classList.remove('hidden');

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
      document.querySelector(`#img${contentId}`).classList.add('hidden');
    };
  }, [handleKeyUp, handleOutsideClick]);

  return (
    <div className='modal-wrapper'>
      <div className='modal-content' ref={modal}>
        <button
          type='button'
          className='close-button'
          onClick={onCloseRequest}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;