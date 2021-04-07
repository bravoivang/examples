import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import './style.module.scss';

const PrimaryButton = (props) => {
  const { onClick } = props;
  return <Button claseName={"primaryButton"} type="primary" shape="round" onClick={onClick}>
    {props.children}</Button>;
} 


const SecondayButton = (props) => {
  const { onClick } = props;
  return <Button claseName={"secondayButton"} type="secondary" shape="round" onClick={onClick}>
    {props.children}</Button>;
} 

PrimaryButton.propTypes = {
  onClick : PropTypes.func,
}

SecondayButton.propTypes = {
  onClick : PropTypes.func,
}

export {
  PrimaryButton,
  SecondayButton,
} 