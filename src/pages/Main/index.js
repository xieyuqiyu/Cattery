import React, { useState } from 'react';
import styles from './index.less'
import PageInfo from '../PageInfo';
import Header from '../Header';



const Main = props => {
    const [showContent,setShowContent] = useState('handpick')
    const toMain = e => {
        console.log(e);
        setShowContent(e)
    }
    const uls = <ul>
        <li onClick={() => toMain('handpick')}>
            <span >精选</span>
        </li>
        <li  onClick={() => toMain('question')}>
            <span>问答</span>
        </li>
        <li onClick={() => toMain('scenery')}>
            <span >风景</span>
        </li>
        <li onClick={() => toMain('story')}>
            <span >故事</span>
        </li>
    </ul>


    return <>
        <Header uls={uls} />
        <div className={styles.container}>
            <PageInfo isShow={showContent === 'handpick'?'':'none'} />
        </div>

    </>

}

export default Main;