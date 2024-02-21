namespace User {
  interface IUser {
    password: string | null;
    login: string | null;
    isLogged: boolean;
  }
}

namespace Components {
  interface ILoading {
    icon?: JSX.Element;
    className?: string;
  }
  interface SvgIcon {
    svg: DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >;
  }
  interface ILanguageSwitcher {
    className?: string;
  }
  namespace Table {
    type Head = Array<{ value: string; label: string }>;
    interface IOrderBy {
      id: string;
      direction: "asc" | "desc";
    }
  }
  interface IDialog<T> {
    open: boolean;
    data: T | null;
    type: "edit" | "create" | "delete" | null;
  }

  namespace SortableTable {
    interface IHead {
      tableHead: Array<{ value: string; label: string }>;
      handleClick: (
        property: string
      ) => MouseEventHandler<HTMLTableCellElement>;
    }
  }
  interface ISelectOptions {
    label: string;
    value: string;
  }
  interface ISelect {
    name: string;
    options: Array<ISelectOptions>;
    className?: string;
    icon?: JSX.Element;
    placeholder: string;
    rightIcon?: JSX.Element;
    isDisabled?: boolean;
    value?: any;
    defaultValue?: any;
    onChange?: any;
  }
  interface AsyncSelect {
    url: string;
    name: string;
    label: string;
    defaultValue?: ISelectOptions;
    source: "income" | "expense";
  }

  interface EmptyWindow {
    title: string;
    description: string;
  }
  interface ICalendar {
    day: number;
    month: number;
    year: number;
  }

  interface ICalendarProps {
    name: string;
    label: string;
  }
  interface IChart {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor?: any[];
      borderWidth?: number;
    }[];
  }
  interface IAnalytics {
    name: string;
    totalPrice: number;
  }
  interface GeneralAnalytics {
    data: {
      totalExpenses: number;
      totalIncomes: number;
      currentMonthOfExpense: number;
      currentMonthOfIncome: number;
    };
  }
}

namespace Features {
  interface I18n {
    language: string | null;
  }
  type LanguageList = "uz" | "ru" | "en";
}

namespace Menu {
  namespace Pages {
    interface IPages {
      name: string;
      icon: JSX.Element;
      link: string;
      type: "child" | "parent";
      children?: Array<IPages>;
    }
  }
  interface ILinks {
    menuOpen: boolean;
  }

  interface ILogo {
    menuOpen?: boolean;
  }
  interface IMenu {
    open: boolean;
    openedParents: Array<String>;
  }
  interface IMainLayoutItem {
    handleOpenMenu: () => void;
    menuOpen: boolean;
  }
}

namespace Income {
  interface IIncome {
    category: IIncomeCategory;
    price: number;
    date: string;
    comment: string;
    sortedId?: string;
    _id: string;
  }
  interface IIncomeCategory {
    name: string;
    sortedId?: string;
    _id: string;
  }

  interface IIncomeTable<T> {
    data: Array<T>;
  }
  namespace Table {
    interface ITableHead {
      handleOrderChange(property: string): void;
    }
    interface Body<T> {
      orderBy: IOrderBy;
      data: Array<T>;
      className?: { tr: string; td: string };
      setDialog: (property: Components.IDialog<T>) => void;
    }
  }
}
namespace Expense {
  interface IExpense {
    category: IExpenseCategory;
    price: number;
    date: string;
    comment: string;
    sortedId?: string;
    _id: string;
  }
  interface IExpenseCategory {
    name: string;
    sortedId?: string;
    _id: string;
  }

  interface IExpenseTable<T> {
    data: Array<T>;
  }
  namespace Table {
    interface ITableHead {
      handleOrderChange(property: string): void;
    }
    interface Body<T> {
      orderBy: IOrderBy;
      data: Array<T>;
      className?: { tr: string; td: string };
      setDialog: (property: Components.IDialog<T>) => void;
    }
  }
}

declare module "*";
