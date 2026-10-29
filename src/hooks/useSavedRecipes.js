import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "foodease:saved-recipes";

function readSavedRecipes() {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed)
      ? [...new Set(parsed.filter((id) => typeof id === "string" || typeof id === "number").map(String))]
      : [];
  } catch {
    return [];
  }
}

export function useSavedRecipes() {
  const [savedIds, setSavedIds] = useState(readSavedRecipes);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Saving remains available for this session if browser storage is unavailable.
    }
  }, [savedIds]);

  const toggleSaved = useCallback((id) => {
    if (id === undefined || id === null) return;
    const normalizedId = String(id);
    setSavedIds((current) =>
      current.includes(normalizedId)
        ? current.filter((savedId) => savedId !== normalizedId)
        : [...current, normalizedId]
    );
  }, []);

  return { savedIds, toggleSaved };
}
