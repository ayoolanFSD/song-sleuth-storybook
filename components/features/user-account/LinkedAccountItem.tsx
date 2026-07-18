import React from "react";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/shared/ui/Button";

type LinkedAccountItemProps = {
  icon: React.ReactNode;
  name: string;
  isLinked: boolean;
  onLink: () => void;
  onRemove: () => void;
};

export default function LinkedAccountItem({
  icon,
  name,
  isLinked,
  onLink,
  onRemove,
}: LinkedAccountItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 px-4 border border-gray-200 max-h-14">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-medium text-gray-800">{name}</span>
      </div>
      {isLinked ? (
        <button
          onClick={onRemove}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 transition font-medium"
          aria-label={`Remove ${name} account`}
        >
          <FaTrash />
          Remove
        </button>
      ) : (
        <Button variant="outlined" onClick={onLink}>
          Link
        </Button>
      )}
    </div>
  );
}
