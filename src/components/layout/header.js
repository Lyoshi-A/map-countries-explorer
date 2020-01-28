import React from 'react'
import logo from '../../logo.svg'
import Breadcrumbs from '../breadcrumbs'

const Header = () => {
    return  <div className="container-menu">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <Breadcrumbs path={[{value: 'World', url: '/'}]}/>
                </div>
                <div className="text-center">Test App: List</div>
            </div>
}

export default React.memo(Header)