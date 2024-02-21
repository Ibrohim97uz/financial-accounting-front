import { ArrowDownUp } from "lucide-react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

function Head({ tableHead, handleClick }: Components.SortableTable.IHead) {
  return (
    <TableHeader className="sticky top-[-4px] ">
      <TableRow>
        {tableHead.map((item, index) => (
          <TableHead
            onClick={item.value ? handleClick(item.value) : undefined}
            className={cn(
              "font-semibold select-none ",
              item.value && "cursor-pointer"
            )}
            key={index}
          >
            <div className="flex items-center justify-center gap-2">
              {item.label}
              {item.value && <ArrowDownUp className="h-3 w-3" />}
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}

export default Head;
