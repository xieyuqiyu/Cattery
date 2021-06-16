import React, {useState } from 'react'
import styles from './index.less'

const imgs = <svg t="1623318225842" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1565" width="40" height="40"><path d="M803.84 522.752c29.184 0 52.736 23.552 52.736 52.736v102.912h8.192c29.184 0 52.736 23.552 52.736 52.736s-23.552 52.736-52.736 52.736H160.256c-29.184 0-52.736-23.552-52.736-52.736s23.552-52.736 52.736-52.736h6.144v-102.4c0-29.184 23.552-52.736 52.736-52.736s52.736 23.552 52.736 52.736v30.72h479.744v-31.232c0-29.184 23.552-52.736 52.224-52.736z" fill="#3D8FDD" p-id="1566"></path><path d="M506.88 156.672c161.792 0 196.608 622.592 167.936 670.72-28.672 48.128-285.184 48.128-319.488 0-34.816-48.128-10.752-670.72 151.552-670.72z m2.56 160.768c-22.528 0-40.448 17.92-40.448 40.448v146.944h80.896V357.888c0-22.528-17.92-40.448-40.448-40.448z" fill="#1067AD" p-id="1567"></path><path d="M196.608 264.192h80.896v80.896H196.608V264.192z m585.216-4.096h80.896v80.896h-80.896V260.096z" fill="#4CC2A6" p-id="1568"></path><path d="M196.608 393.728h80.896v80.896H196.608V393.728z m585.728-3.584h80.896V471.04h-80.896V390.144z" fill="#E15D61" p-id="1569"></path></svg>

const Header = props => {
  const {uls} = props
  const [toMainProps,setToMainProps] = useState('handpick')


  const toMain = (e)=>{
    setToMainProps(e)
    console.log(e);
  }


  return <>
    <div className={styles.container}>
      <div className='header'>
        <div className='header-logo'>
          <span> Cattery</span>
          <div className='header-drivider'></div>
          {/* <ul>
            <li>
              <span onClick={()=>toMain('handpick')}>精选</span>
            </li>
            <li>
            <span onClick={()=>toMain('question')}>问答</span>
            </li>
            <li>
            <span onClick={()=>toMain('scenery')}>风景</span>
            </li>
            <li>
            <span onClick={()=>toMain('story')}>故事</span>
            </li>
          </ul> */}
          {uls}
          <a href={'www.baidu.com'} >{imgs}</a>
        </div>
      </div>
      {/* 虚拟背景 */}
      <div style={{ width: '100%', height: '60px' }}></div>
    </div>
  </>
}

export default Header;