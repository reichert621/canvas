import React from 'react';
import styled from 'styled-components';
import {Box, Button, Modal} from '../Common';

const IframeContainer = styled('iframe')`
  width: 640px;
  height: 920px;

  @media (max-width: 768px) {
    width: 440px;
  }

  @media (max-width: 540px) {
    width: 360px;
  }
`;

export const GoogleFormModal = ({
  visible,
  onCancel,
}: {
  visible: boolean;
  onCancel: () => void;
}) => {
  return (
    <Modal
      style={{top: 40}}
      wrapClassName="GoogleFormModal"
      visible={visible}
      width={688}
      title="Request early access"
      onOk={onCancel}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Exit
        </Button>,
      ]}
    >
      <IframeContainer
        src="https://docs.google.com/forms/d/e/1FAIpQLSeaqKkpMJ2I3ox39g2f5S8_8yqI5w-X_EucgGXTtq7LhEe4WA/viewform?embedded=true"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading...
      </IframeContainer>
    </Modal>
  );
};

export default GoogleFormModal;
