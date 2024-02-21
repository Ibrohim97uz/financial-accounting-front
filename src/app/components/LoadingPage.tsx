import { cn } from "@/lib/utils";

function LoadingPage({ icon, className }: Components.ILoading) {
  return (
    <div
      className={cn(
        "w-screen h-screen overflow-hidden flex items-center justify-center flex-col top-0 right-0 absolute z-50 bg-[#000000e8]",
        className
      )}
    >
      {icon || (
        <div className="h-14 w-10 flex items-end gap-1">
          <div className="animate-loading h-14 w-6 bg-teal"></div>
          <div
            style={{
              animationDelay: ".3s",
            }}
            className="animate-loading h-14 w-6 bg-teal"
          ></div>
          <div
            style={{
              animationDelay: ".6s",
            }}
            className="animate-loading h-14 w-6 bg-teal"
          ></div>
        </div>
      )}
    </div>
  );
}

export default LoadingPage;
