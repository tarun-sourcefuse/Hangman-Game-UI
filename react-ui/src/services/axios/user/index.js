import React from 'react';
import apiClient from '../apiClient';
import { notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export async function login({ email }) {
  return apiClient
    .get(`/login?email=${email}`)
    .then((response) => {
      if (!response) {
        throw new Error('No response');
      }

      const {
        data: { data: user, error, msg },
      } = response;

      if (error) throw msg;

      return user;
    })
    .catch((err) => {
      console.log(err);
      notification.open({
        message: 'Something Bad Happens',
        description: 'Please try again later',
        icon: <CloseOutlined style={{ color: '#108ee9' }} />,
      });
    });
}
