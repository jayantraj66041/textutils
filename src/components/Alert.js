import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} fade alert-dismissible show`}>
        <strong>{capitalized(props.alert.type)}:</strong> {props.alert.msg}
    </div>
  )
}

export default Alert