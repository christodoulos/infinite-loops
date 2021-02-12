import { Component } from '@angular/core';
import { DefaultControlErrorComponent } from '@ngneat/error-tailor';
// Custom error component that will replace the standard DefaultControlErrorComponent.
@Component({
  template: `
    <div class="text-xs font-semibold text-red-600">
      {{ errorText }}
    </div>
  `,
})
export class UIFormsErrorComponent extends DefaultControlErrorComponent {}

export function anchorErrorComponent(
  hostElement: Element,
  errorElement: Element
) {
  hostElement.parentElement.insertAdjacentElement('afterend', errorElement);
  return () => {
    let errorNode = hostElement.parentElement.querySelector('custom-error');
    if (errorNode) {
      errorNode.remove();
    }
  };
}
