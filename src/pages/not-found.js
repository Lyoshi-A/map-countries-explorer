import React from 'react'
import ErrorNotificationBlock from '../components/error-notification-block'

const NotFoundView = ({location, history}) => {
    return <div className="text-center">
        <ErrorNotificationBlock>
            404 PAGE NOT FOUND
        </ErrorNotificationBlock>
    </div>
}

export default React.memo(NotFoundView)
