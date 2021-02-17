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
  if (hostElement.parentElement !== null) {
    const parent = hostElement.parentElement;
    parent.insertAdjacentElement('afterend', errorElement);
    return () => {
      let errorNode = parent.querySelector('custom-error');
      if (errorNode) {
        errorNode.remove();
      }
    };
  } else {
    return () => {};
  }
}
