import { FC } from "react";
import useMenu from "../../_components/menu";

function withMainLayout(Item: FC<Menu.IMainLayoutItem>) {
  return () => {
    const { handleOpenMenu, menu, open } = useMenu();

    return (
      <div className="h-screen w-screen flex shrink-0 bg-charcoal text-white overflow-hidden">
        {menu}
        <main className={`w-full h-full overflow-hidden `}>
          {<Item menuOpen={open} handleOpenMenu={handleOpenMenu} />}
        </main>
      </div>
    );
  };
}

export default withMainLayout;
