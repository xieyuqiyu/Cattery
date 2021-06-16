import React, { useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.less'
import config from '../../assets/data/config.js'

const imgs = <svg t="1623320033533" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1149" width="40" height="40"><path d="M657.2 308.9C421.5 136.3 164.4 86.5 82.9 197.7s43.6 341.3 279.3 514S855 934.1 936.5 822.9s-43.6-341.4-279.3-514zM384.1 681.7c-200.6-146.9-307-342.8-237.7-437.4 69.3-94.7 288.2-52.3 488.8 94.6 200.6 146.9 307 342.8 237.7 437.4-69.3 94.7-288.2 52.3-488.8-94.6z" fill="#FFD301" p-id="1150"></path><path d="M507.4 512.1m-370.3 0a370.3 370.3 0 1 0 740.6 0 370.3 370.3 0 1 0-740.6 0Z" fill="#EA590A" p-id="1151"></path><path d="M346.4 463.8m-72.5 0a72.5 72.5 0 1 0 145 0 72.5 72.5 0 1 0-145 0Z" fill="#0D4D90" p-id="1152"></path><path d="M491.3 286.7m-48.3 0a48.3 48.3 0 1 0 96.6 0 48.3 48.3 0 1 0-96.6 0Z" fill="#0D4D90" p-id="1153"></path><path d="M620.1 471.8m-32.2 0a32.2 32.2 0 1 0 64.4 0 32.2 32.2 0 1 0-64.4 0Z" fill="#0D4D90" p-id="1154"></path><path d="M82.9 197.7C1.4 308.9 126.5 539 362.2 711.7S855 934.1 936.5 822.9m-63.6-46.6c-69.3 94.7-288.2 52.3-488.8-94.6-200.6-146.9-307-342.8-237.7-437.4" fill="#FFD301" p-id="1155"></path></svg>
const titles = <div style={{ display: 'flex', alignItems: 'center' }}>
    {imgs} <span style={{ marginLeft: '1%' }}>精选</span>
</div>

const PageInfo = props => {
    const {isShow} = props


    useEffect(()=>{
        console.log(config.storyData);
    },[])
    return <>
        <div style={{display:`${isShow}`}} className={styles.container}>
            <Row>
                {config.storyData.map(e=>{
                    return  <Col md={8} xs={24} className='row-col'>
                    <Card title={titles} bordered={false} className='row-card'>
                        <div>
                            <span style={{ display: 'flex', fontSize: '14px', textAlign: 'left' }}>
                                {e.context}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', float: 'right' }}>——
                           <span style={{ display: 'flex', color: '#fb7299', fontSize: '14px', }}>
                                    {e.name} {e.title === ''?'':`《${e.title}》`}
                            </span></div>
                        </div>
                    </Card>
                </Col>
                })}
               
            </Row>

        </div>

    </>

}

export default PageInfo;