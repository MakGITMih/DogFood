import { notification } from 'antd';

export const openNotification = (
    type = 'success',
    message  = 'Success',
    description = '',
  ) => {
    return notification[type]({ 
      message,description, placement: 'bottomRight' });
  };