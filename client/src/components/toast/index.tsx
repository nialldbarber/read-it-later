import React from 'react';
import { ToastWrapper } from '~/styles/components/toast';
import { variants } from '~/components/toast/animation';
import { Props } from '~/components/toast/types';

const Toast = ({ children }: Props) => (
  <ToastWrapper className="inner" initial="hidden" animate="visible" exit="exit" variants={variants}>
    <>{children}</>
  </ToastWrapper>
);

export default Toast;
