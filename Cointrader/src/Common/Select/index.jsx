import React from 'react';
import { Select } from 'antd';
import style from './style.module.scss';

const { Option } = Select;

const CustomSelector = (props) => {
  return (
    <div className={style.customSelect}>
      <Select 
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}>
        {props.options.map(option => {
          return <Option value={option}>{option}</Option>
        })}
      </Select>
    </div>
  );
}

export default CustomSelector;