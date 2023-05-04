export function usePermission() {
  function hasPermission(value, def = true) {
    if (!value) {
      return def
    }
    return true
  }

  return { hasPermission }
}