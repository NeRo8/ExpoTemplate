import { create } from 'zustand';

type AuthStorageState = {
  isAuthenticated: boolean;
};

type AuthStorageActions = {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

type AuthStorage = AuthStorageState & AuthStorageActions;

export const useAuthStorage = create<AuthStorage>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => {
    set({ isAuthenticated });
  },
}));

export const useIsAuthenticatedSelector = () => {
  return useAuthStorage((state) => state.isAuthenticated);
};

export const useSetIsAuthenticatedAction = () => {
  return useAuthStorage((state) => state.setIsAuthenticated);
};
