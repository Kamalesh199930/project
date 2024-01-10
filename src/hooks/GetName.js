//CONTEXT HOOKS
import { useContext } from "react";
import { AppContext } from "./ContextHooks";
const GetName = () => {
  const { setName } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
};
export default GetName;
