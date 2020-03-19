export function clearUser () {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }