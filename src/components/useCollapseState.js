import { useState } from "react";

export default initialValue => {
  const [collapsed, setCollapsed] = useState(initialValue);

  return {
    collapsed,
    SwitchCollapse: collapsed => {
      setCollapsed(collapsed => !collapsed);
    }
  };
};
