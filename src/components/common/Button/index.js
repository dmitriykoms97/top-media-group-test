import React from 'react';
// STYLES
import styles from './index.module.scss';

const Button = ({ label, onClick, type = 'button' }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
};

export default Button;