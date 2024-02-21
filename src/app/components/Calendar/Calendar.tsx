import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar from "@hassanmojab/react-modern-calendar-datepicker";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AddZeroToOneDigit, cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import ErrorMessage from "@/components/ui/error-message";
import { getDateFromString, today, uzLocale } from "./utils";

const CalendarComponent = ({ name, label }: Components.ICalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Components.ICalendar>(today);

  const {
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  const handleChange = (date: Components.ICalendar) => {
    setSelectedDate(date);
    setValue(name, new Date(`${date.month}/${date.day}/${date.year}`).toJSON());
    console.log(
      date,
      new Date(`${date.month}/${date.day}/${date.year}`).toJSON()
    );
  };
  useEffect(() => {
    const value = getValues(name);
    const datefromString = getDateFromString(value);

    setSelectedDate(datefromString || today);
  }, []);

  const renderCustomInput = ({ ref }: any) => (
    <button type="button" className="w-full p-2 rounded-lg">
      {selectedDate ? (
        <input
          disabled
          ref={ref} // necessary
          placeholder={label}
          id={name}
          value={
            selectedDate !== today
              ? `${AddZeroToOneDigit(selectedDate.day)}.${AddZeroToOneDigit(
                  selectedDate.month
                )}.${selectedDate.year}`
              : ""
          }
          className={cn(
            "w-full justify-start text-left font-normal relative cursor-pointer text-charcoal",
            !selectedDate && "text-muted-foreground"
          )}
        />
      ) : (
        <span className="text-charcoal">{label}</span>
      )}
      <CalendarIcon className="text-charcoal absolute right-[15px] top-2/4 -translate-y-2/4 text-secondary h-5 w-5" />
    </button>
  );

  return (
    <div className="flex flex-col w-full">
      <label className="font-normal mb-2" htmlFor={name}>
        {label}
      </label>
      <div
        className={cn("inline-block w-full font-light relative cursor-pointer")}
      >
        <Calendar
          inputPlaceholder={label}
          value={selectedDate}
          onChange={handleChange}
          locale={uzLocale} // custom locale object
          shouldHighlightWeekends
          colorPrimary="#3B499D"
          renderInput={renderCustomInput}
          calendarClassName="bg-white text-charcoal"
          wrapperClassName="w-full !static bg-white text-charcoal rounded-sm"
          calendarPopperPosition="top"
        />
      </div>
      <ErrorMessage error={errors && errors[name] && errors[name]?.message} />
    </div>
  );
};

export default CalendarComponent;
