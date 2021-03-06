import { trigger, state, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    transition('void <=> *', animate(2000)),
  ]);
