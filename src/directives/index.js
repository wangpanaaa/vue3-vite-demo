/**
 * Configure and register global directives
 */
import { setupLoadingDirective } from './loading';
import { setupPermissionDirective } from './permission'

export function setupGlobDirectives(app) {
  setupLoadingDirective(app);
  setupPermissionDirective(app);
}
