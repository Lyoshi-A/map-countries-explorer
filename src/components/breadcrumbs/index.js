import React  from 'react'

const Breadcrumbs = props => {
    const {
      path
    } = props;
    return <div className="breadcrumbs">
        {path.map(item =>
            <div key={item.value} className="breadcrumbs-item">
                <span><a href={item.url}>{item.value}</a></span>
            </div>
        )}
    </div>
}

export default Breadcrumbs;