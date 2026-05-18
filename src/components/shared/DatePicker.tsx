"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  highlight?: boolean;
}

const MONTHS = [
  "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
  "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec",
];

const WEEKDAYS = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

function formatDateCs(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${parseInt(d)}. ${parseInt(m)}. ${y}`;
}

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function DatePicker({ value, onChange, placeholder = "Vyberte datum", highlight }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() =>
    value ? new Date(value) : new Date()
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = value ? new Date(value) : null;

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", escHandler);
    };
  }, [isOpen]);

  // Build calendar grid
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  // Convert Sunday=0 to Monday=0
  const startWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const goPrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const selectDate = (d: Date) => {
    onChange(toIso(d));
    setIsOpen(false);
  };

  const clearDate = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-3 px-4 py-3 bg-[#202424] border text-left transition-colors focus:outline-none focus:border-[#F5C451] ${
          highlight || isOpen ? "border-[#F5C451]" : "border-[#38352E] hover:border-[#8D867A]"
        }`}
      >
        <Calendar className={`h-5 w-5 flex-shrink-0 ${value ? "text-[#F5C451]" : "text-[#8D867A]"}`} />
        <span className={`flex-1 text-sm ${value ? "text-[#F5F1E8]" : "text-[#8D867A]"}`}>
          {value ? formatDateCs(value) : placeholder}
        </span>
        {value && (
          <span
            role="button"
            tabIndex={0}
            onClick={clearDate}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onChange("");
              }
            }}
            className="text-[#8D867A] hover:text-[#F5C451] transition-colors p-1 -m-1 cursor-pointer"
            aria-label="Zrušit datum"
          >
            <X className="h-4 w-4" />
          </span>
        )}
      </button>

      {/* Calendar Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-[#1A1D1D] border border-[#38352E] shadow-2xl z-50 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={goPrevMonth}
              className="p-2 text-[#C9C2B6] hover:text-[#F5C451] hover:bg-[#202424] transition-colors"
              aria-label="Předchozí měsíc"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8]">
              {MONTHS[month]} {year}
            </div>
            <button
              type="button"
              onClick={goNextMonth}
              className="p-2 text-[#C9C2B6] hover:text-[#F5C451] hover:bg-[#202424] transition-colors"
              aria-label="Další měsíc"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {WEEKDAYS.map((wd) => (
              <div
                key={wd}
                className="text-center text-[10px] uppercase tracking-wider text-[#8D867A] py-1"
              >
                {wd}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const isPast = d < today;
              const isToday = isSameDay(d, today);
              const isSelected = selectedDate && isSameDay(d, selectedDate);
              const isWeekend = d.getDay() === 0 || d.getDay() === 6;

              return (
                <button
                  key={i}
                  type="button"
                  disabled={isPast}
                  onClick={() => selectDate(d)}
                  className={`
                    h-9 w-full text-sm transition-all relative
                    ${isPast ? "text-[#38352E] cursor-not-allowed" : "cursor-pointer"}
                    ${
                      isSelected
                        ? "bg-[#F5C451] text-[#0D0F0F] font-bold"
                        : isToday
                        ? "border border-[#F5C451] text-[#F5C451] hover:bg-[#F5C451]/10"
                        : !isPast
                        ? isWeekend
                          ? "text-[#8D867A] hover:bg-[#202424] hover:text-[#F5F1E8]"
                          : "text-[#C9C2B6] hover:bg-[#202424] hover:text-[#F5F1E8]"
                        : ""
                    }
                  `}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-[#38352E] flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                selectDate(today);
              }}
              className="text-xs uppercase tracking-wider text-[#F5C451] hover:underline"
            >
              Dnes
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-wider text-[#8D867A] hover:text-[#F5F1E8]"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
