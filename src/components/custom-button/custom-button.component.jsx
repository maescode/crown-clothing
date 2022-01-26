import React from 'react';
import { CustomButtonContainer } from './custom-button.style';
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <CustomButtonContainer className={`custom-button`} {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
