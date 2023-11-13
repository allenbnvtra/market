import { RiDeleteBin2Line } from "react-icons/ri";

const HandleDelete = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer text-xl text-red-400">
      <RiDeleteBin2Line />
    </button>
  );
};

export default HandleDelete;
