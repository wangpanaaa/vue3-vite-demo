/**
 * Configure and register global directives
 */
import { setupLoadingDirective } from './loading';

export function setupGlobDirectives(app) {
  setupLoadingDirective(app);
}
