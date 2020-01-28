import React, {Suspense } from 'react'

const Loader = ({View, args = null}) => {
    const loader = () => <div>Loading...</div>;
    return <Suspense fallback={loader()}>
        <View loader={loader()} args={args} />
    </Suspense>
}

export default Loader