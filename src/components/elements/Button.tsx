// import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";
import { IElements } from "@/utils/components/elements";
interface IButton extends IElements {
  onClickOpen?: () => void;
}
const Button = ({ children, className, onClickOpen }: IButton) => {
  // const { onClick } = useGlobalStateContext();

  return (
    <button className={className} onClick={onClickOpen}>
      {children}
    </button>
  );
};
export default Button;
