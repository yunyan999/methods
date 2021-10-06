import styles from './index.less';
import {Button,Modal,List,Row,Col,Form,Input} from 'antd';
import React,{useState} from 'react';
import ShowMoreLog from './ShowMoreLog.js';
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
import {isValidatorNumber,isValidatorCode} from './validatorTools.js'

export default function IndexPage() {
  const data = [{
    par1:'生活的际遇',
    par2:'彼此的相逢',
    par3:'化作千言万语',
  }]
  for(let i = 0;i<3;i++){
    data.push({
      par1:'高娟 我爱你'+5,
      par2:'高娟 我爱你'+2,
      par3:'高娟 我爱你'+0,
    })
  }
  const [value,setValue] = useState(false);
  const [visible,setVisible] = useState(false);
  const [dataArr,setDataArr] = useState(data);
  const onSumbit = () =>{
    setValue(true);
    console.log(value);
  }
  const onFous = () =>{
    setValue(false);
    console.log(value);
  }
  const showLog = () =>{
    setVisible(true);
  }
  const showMoreLog = ()=>{
    var data = dataArr;
    for(let i = 0;i<3;i++){
      data.push({
        par1:'高娟 我爱你'+5,
        par2:'高娟 我爱你'+2,
        par3:'高娟 我爱你'+0,
      })
    }
    setDataArr([...data]);
  }
  const closeModal = ()=>{
    setVisible(false)
  }


  return (
    <div>
      <h1 className={styles.title}>高大娟</h1>
      <Button onClick={onSumbit} disabled={value}>click me</Button>
      <Button onClick={onFous} >click me too</Button>
      <Button onClick={showLog} >显示祝福</Button>
      <ShowMoreLog
        dataSource = {dataArr}
        showMoreLog = {showMoreLog}
        visible={visible}
        onCancel={closeModal}
        title = {'爱情查看'}
      />
      <Form>
        <Form.Item
          label="测试"
          name="测试"
          rules={[{ validator:(...args)=>{isValidatorNumber( ...args)}}]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
