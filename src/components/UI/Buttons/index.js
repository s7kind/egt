import Image from 'next/image';

import cn from 'classnames';
import styles from './Buttons.module.scss';

const DefaultBtn = ({
  children,
  color = 'blue',
  load,
  className,
  icon: Icon,
  disabled,
  ...props
}) => (
  <button
    className={cn(
      styles.button,
      styles[`button__${color}`],
      {
        [styles.disabled]: disabled,
      },
      className,
    )}
    {...props}
  >
    {Icon && <Icon className={styles['button__icon']} />}
    {load ? (
      <Image
        src={`/images/load.gif`}
        width={16}
        height={16}
        alt="load"
        placeholder="empty"
        className={styles['button__load']}
      />
    ) : (
      <span>{children}</span>
    )}
  </button>
);

export const Buttons = (props) => {
  return <DefaultBtn {...props} />;
};
