import React, { lazy } from 'react'
import Loader from "../components/loader";
const ViewMap = lazy(() => import('../components/views/details'));

const BlockPage = ({match}) => {
    return <Loader View={ViewMap} args={match}/>
}

export default BlockPage