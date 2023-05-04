/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-auth="RoleEnum.TEST"
 */

import { usePermission } from '/@/utils/usePermission';

function isAuth(el, binding) {
  const { hasPermission } = usePermission();

  const value = binding.value;
  if (!value) return;
  if (!hasPermission(value)) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el, binding) => {
  isAuth(el, binding);
};

const authDirective = {
  mounted,
};

export function setupPermissionDirective(app) {
  app.directive('auth', authDirective);
}

export default authDirective;
