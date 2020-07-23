import React, { FC, ReactNode } from 'react';
import { ToastWrapper } from '~/styles/components/toast';
import { variants } from '~/components/toast/animation';

interface ToastProps {
  children: ReactNode
}

const Toast: FC<ToastProps> = ({ children }) => (
  <ToastWrapper className="inner" initial="hidden" animate="visible" exit="exit" variants={variants}>
    <>{children}</>
  </ToastWrapper>
);

export default Toast;
