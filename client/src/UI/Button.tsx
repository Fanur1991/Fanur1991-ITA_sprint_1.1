import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
