import React from 'react';

export type ButtonType = {
    name: string
    callBack: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    const {name, callBack} = props;
    const onClickHandler = () => {
        callBack();
    }

    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
};

export default Button;