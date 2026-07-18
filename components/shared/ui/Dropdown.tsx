import React, { useState } from "react";

type DropdownProps = {
  label: string;
  items: { label: string; onClick: () => void }[];
};

export default function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button className="rounded-full border px-4 py-2" onClick={() => setOpen(!open)}>
        {label}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
