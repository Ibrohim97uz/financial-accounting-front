import { orderBy as OrderBy } from "lodash";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import QueryHook from "@/app/hooks/queryHook";
import { cn } from "@/lib/utils";
import { DialogTrigger } from "@/components/ui/dialog";
import { Edit, Trash2 } from "lucide-react";

function TableBodyComponent({
  orderBy,
  data,
  className,
  setDialog,
}: Expense.Table.Body<Expense.IExpenseCategory>) {
  const { AddQueryParams, QueryParams } = QueryHook();

  return (
    <TableBody>
      {OrderBy([...data], [orderBy?.id], orderBy?.direction).map(
        (item: Expense.IExpenseCategory) => (
          <TableRow
            onClick={() =>
              AddQueryParams({
                id: item._id,
              })
            }
            className={cn(
              "cursor-pointer !h-1 bg-charcoal",
              QueryParams.id === String(item._id) && "bg-teal",
              className?.tr
            )}
            key={item._id}
          >
            <TableCell className={cn("font-medium", className?.td)}>
              {item.sortedId}
            </TableCell>
            <TableCell className={cn("font-medium", className?.td)}>
              {item.name}
            </TableCell>

            <TableCell className={cn("font-medium", className?.td)}>
              <div className="flex gap-2 justify-center">
                <DialogTrigger asChild>
                  <Edit
                    className="h-5 w-5"
                    onClick={() =>
                      setDialog({ open: true, type: "edit", data: item })
                    }
                  />
                </DialogTrigger>

                {/* <Trash2
                  onClick={() =>
                    setDialog({ open: true, type: "delete", data: item })
                  }
                  className="h-5 w-5"
                /> */}
              </div>
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  );
}

export default TableBodyComponent;
