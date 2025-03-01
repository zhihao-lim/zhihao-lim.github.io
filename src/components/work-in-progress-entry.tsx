"use client";

import { WorkInProgressItem } from "@/data/work-in-progress";
import { useState } from "react";

export function WorkInProgressEntry({ item }: { item: WorkInProgressItem }) {
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
        </div>
      </div>
    </div>
  );
} 