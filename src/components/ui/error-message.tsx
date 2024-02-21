import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ErrorMessage({ error, className }: any) {
  return (
    <div className={cn("relative", className)}>
      {error ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className={cn("m-0 text-xs absolute text-red-600", className)}>
            {error}
          </p>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}
