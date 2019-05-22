import React from 'react';

const Spinner = (props) => {
    const {showSpinner} = props;
    return (
        <>
        <i className={showSpinner ? ["show spinner", "fa fa-spinner", "fa-spin"].join(" ") : "hide"}></i>
        <div className={showSpinner ? "overlay" : "hide"} />
        </>
    )
}
export default Spinner