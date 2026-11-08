import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X, MapPin } from 'lucide-react';

interface SearchableLocationSelectProps {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  emptyNotice?: string;
  icon?: React.ReactNode;
}

export const SearchableLocationSelect: React.FC<SearchableLocationSelectProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  emptyNotice = 'No matches found',
  icon
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearch('');
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setSearch('');
  };

  return (
    <div className="relative space-y-1.5" ref={containerRef}>
      <label className="flex items-center justify-between text-[11px] font-tech uppercase tracking-wider text-[#A8ADB5]">
        <span className="flex items-center gap-1.5">
          {icon || <MapPin className="w-3 h-3 text-[#C7F36B]" />}
          <span>{label}</span>
        </span>
        {value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="text-[10px] text-[#A8ADB5] hover:text-[#C7F36B] transition-colors"
          >
            Clear
          </button>
        )}
      </label>

      {/* Selector Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
            setTimeout(() => inputRef.current?.focus(), 50);
          }
        }}
        className={`w-full flex items-center justify-between px-3.5 py-3 text-left bg-[#15171B] border transition-all duration-200 text-xs ${
          disabled
            ? 'opacity-50 cursor-not-allowed border-hairline'
            : isOpen
            ? 'border-[#C7F36B] shadow-[0_0_12px_rgba(199,243,107,0.15)] ring-1 ring-[#C7F36B]'
            : 'border-hairline hover:border-hairline-light'
        }`}
      >
        <span className={`truncate ${value ? 'text-[#F4F2ED] font-medium' : 'text-[#717680]'}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#A8ADB5] shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#C7F36B]' : ''
          }`}
        />
      </button>

      {/* Searchable Dropdown Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#15171B] border border-hairline-light shadow-2xl shadow-black/80 max-h-64 flex flex-col animate-in fade-in zoom-in-95 duration-150">
          {/* Search Field */}
          <div className="p-2 border-b border-hairline relative">
            <Search className="w-3.5 h-3.5 text-[#A8ADB5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${label.toLowerCase()}...`}
              className="w-full bg-[#090A0C] border border-hairline pl-8 pr-7 py-1.5 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A8ADB5] hover:text-[#F4F2ED]"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Options List */}
          <div className="overflow-y-auto flex-1 divide-y divide-white/[0.04]">
            {filteredOptions.length === 0 ? (
              <div className="p-3 text-center text-[11px] text-[#A8ADB5]">
                {emptyNotice}
              </div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt === value;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleSelect(opt)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-xs transition-colors ${
                      isSelected
                        ? 'bg-[#C7F36B]/10 text-[#C7F36B] font-semibold'
                        : 'text-[#F4F2ED] hover:bg-[#1F2228] hover:text-[#C7F36B]'
                    }`}
                  >
                    <span className="truncate">{opt}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C7F36B] shrink-0 ml-2" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
