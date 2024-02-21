import { useState } from "react";

function useSortableFilter(defaultValue?: any) {
  const [orderBy, setOrderBy] =
    useState<Components.Table.IOrderBy>(defaultValue);
  const handleOrderChange = (property: string) => (event: any) => {
    let direction: "asc" | "desc" = "desc";
    if (orderBy?.direction === "desc") {
      direction = "asc";
    }

    setOrderBy({
      direction,
      id: property,
    });
  };
  return { orderBy, handleOrderChange };
}

export default useSortableFilter;
