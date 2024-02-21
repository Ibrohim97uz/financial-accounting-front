import { StickyNote } from "lucide-react";

function EmptyWindow({ title, description }: Components.EmptyWindow) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <StickyNote className="h-24 w-24" />
        <h1 className="text-3xl font-medium mt-6">{title}</h1>
        <p className="max-w-[314px] text-xl text-center text-inputPlaceholder">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EmptyWindow;
