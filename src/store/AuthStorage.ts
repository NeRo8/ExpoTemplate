import { create } from 'zustand';

type AuthStorageState = {
  isAuthenticated: boolean;
};

type AuthStorageActions = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  clearAuthStorage: () => void;
};

type AuthStorage = AuthStorageState & AuthStorageActions;

const initialState: AuthStorageState = {
  isAuthenticated: false,
};

export const useAuthStorage = create<AuthStorage>((set) => ({
  ...initialState,
  setIsAuthenticated: (isAuthenticated: boolean) => {
    set({ isAuthenticated });
  },
  clearAuthStorage: () => {
    set({ ...initialState });
  },
}));

export const useIsAuthenticatedSelector = () => {
  return useAuthStorage((state) => state.isAuthenticated);
};

export const useSetIsAuthenticatedAction = () => {
  return useAuthStorage((state) => state.setIsAuthenticated);
};

export const useClearAuthStorageAction = () => {
  return useAuthStorage((state) => state.clearAuthStorage);
};
