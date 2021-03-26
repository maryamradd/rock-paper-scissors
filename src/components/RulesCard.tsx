import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import '../styles/components/rules-card.scss';
import rules from '../images/image-rules.svg';
import { createPortal } from 'react-dom';

const modalElement: any = document.getElementById('modal-root');

export const RulesCard = (
  { children, defaultOpened = false, fade = false }: any,
  ref: any
) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className="container modal">
        <div className="modal-overlay">
          <div className="card-header">
            <h1>RULES</h1>
            <button className="close-icon" onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#3B4262"
                  fillRule="evenodd"
                  d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                  opacity=".25"
                />
              </svg>
            </button>
          </div>
          <img className="rules-image" src={rules}></img>
        </div>
      </div>
    ) : null,
    modalElement
  );
};

export default forwardRef(RulesCard);
