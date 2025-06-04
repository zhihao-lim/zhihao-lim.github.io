"use client";

import { WorkingPaperItem } from "@/data/working-papers";
import { useState } from "react";

export function WorkingPaperEntry({ item }: { item: WorkingPaperItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-base font-serif font-medium text-zinc-900">{item.title}</h3>
      
      <div className="space-y-4">
        {isExpanded && (
          <p className="text-sm leading-relaxed text-zinc-700">{item.description}</p>
        )}
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            {isExpanded ? "Show Less" : "↗ Abstract"}
          </button>
          {item.paperUrl && (
            <a
              href={item.paperUrl}
              className="text-sm text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 