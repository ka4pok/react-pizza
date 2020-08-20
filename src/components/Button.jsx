import React from "react";
import PropTypes from 'prop-types'
import classNames from 'classnames'


const Button = ({className, outline, onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline
            })}
        >
            {children}
        </button>
    )

}

/* componentDidMount() { //Когда компонент внедрится(будет смонтирован)! для class Button extends React.Component{}
   console.log('Отобразился')
}

componentDidUpdate(prevProps, prevState, snapshot) {

}*/

Button.propTypes = {
    className: PropTypes.string.isRequired,
    outline:PropTypes.bool,
    onClick:PropTypes.func,
}
export default Button;