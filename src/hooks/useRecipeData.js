import { useCallback, useEffect, useReducer } from "react";
import { fetchRecipes } from "../services/recipeService";

const initialState = {
  error: null,
  loading: true,
  recipes: [],
};

function recipeDataReducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, error: null, loading: true };
    case "success":
      return { error: null, loading: false, recipes: action.payload };
    case "error":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

async function loadRecipes(dispatch) {
  dispatch({ type: "loading" });

  try {
    const meals = await fetchRecipes();
    dispatch({ type: "success", payload: meals });
  } catch (fetchError) {
    dispatch({ type: "error", payload: fetchError.message });
  }
}

export function useRecipeData() {
  const [state, dispatch] = useReducer(recipeDataReducer, initialState);

  const refetchRecipes = useCallback(() => {
    loadRecipes(dispatch);
  }, []);

  useEffect(() => {
    refetchRecipes();
  }, [refetchRecipes]);

  return {
    error: state.error,
    loading: state.loading,
    recipes: state.recipes,
    refetchRecipes,
  };
}
