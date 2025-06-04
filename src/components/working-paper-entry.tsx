import React from "react";
import { WorkingPaperItem } from "@/data/working-papers";

interface Props {
  item: WorkingPaperItem;
}

export const WorkingPaperEntry: React.FC<Props> = ({ item }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-serif text-lg font-semibold text-zinc-900">
        {item.title}
      </h3>
      <p className="text-zinc-700 text-sm">{item.description}</p>
      {item.collaborators && (
        <p className="text-xs text-zinc-500">
          <span className="font-semibold">Collaborators:</span> {item.collaborators.join(", ")}
        </p>
      )}
      <div className="flex space-x-4 mt-2">
        {item.paperUrl && (
          <a
            href={item.paperUrl}
            className="text-blue-600 hover:underline text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paper
          </a>
        )}
        {item.codeUrl && (
          <a
            href={item.codeUrl}
            className="text-blue-600 hover:underline text-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}; 