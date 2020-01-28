import React from 'react'

function ErrorNotificationBlock({children}) {
    return <div>
        <div className="text-center">
            <a href="/">Back to home page</a>
        </div>
        <h2 className="p404">{children}</h2>

    </div>
}


export default React.memo(ErrorNotificationBlock)