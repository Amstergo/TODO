import { useState } from "react";

export default initialValue => {
  const [collapsed, setCollapsed] = useState(initialValue);

  return {
    collapsed,
    onCollapse: collapsed => {
      setCollapsed(collapsed => !collapsed);
    }
  };
};
