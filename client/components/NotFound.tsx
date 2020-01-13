import * as React from 'react';
import {Button, Flex, Icon, Result} from './Common';

const NotFound = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={5}
      px={4}
    >
      <Result
        status="warning"
        title="This page does not exist."
        icon={<Icon type="warning" theme="twoTone" twoToneColor="#faad14" />}
        extra={
          <Button type="primary" href="/">
            Go home
          </Button>
        }
      />
    </Flex>
  );
};

export default NotFound;
