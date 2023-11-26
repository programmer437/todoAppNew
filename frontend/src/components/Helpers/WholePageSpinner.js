import React from 'react'

const WholePageSpinner = () => {
  
    return (
        <div className="d-flex align-items-center justify-content-center flex-column" style={{height: "85vh"}}>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default WholePageSpinner