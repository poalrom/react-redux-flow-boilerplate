// @flow

import * as React from 'react';
import classnames from 'classnames';
import omit from 'object.omit';
import './Button.styl';

type Props = {
  /** Тип кнопки */
  type?: 'button' | 'submit',
  /** Функция, вызываемая по клику на кнопку, если она не выключена */
  onClick?: () => void,
  /** Флаг лоадера */
  loading?: boolean,
  /** Дополнительные классы */
  className?: string,
  /** Элементы, вкладываемые в кнопку */
  children?: React.Node,
  /** Флаг выключения */
  disabled?: boolean,
};

const Button = (props: Props) => {
  const buttonProps = omit(props, ['className', 'loading']);
  return (
    <button
      className={classnames(
        'button',
        props.className,
        {
          button_loading: props.loading,
          button_disabled: props.disabled,
        },
      )}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  loading: false,
  className: '',
  children: null,
  disabled: false,
  onClick: () => {},
};

export default Button;
