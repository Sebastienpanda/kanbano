import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class Toast {
  private toastsSignal = signal<ToastMessage[]>([]);

  readonly toasts = this.toastsSignal.asReadonly();

  show(type: ToastType, title: string, message?: string, duration = 3000) {
    const id = this.generateId();
    const toast: ToastMessage = { id, type, title, message, duration };

    this.toastsSignal.update(toasts => [...toasts, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }

    return id;
  }

  success(title: string, message?: string, duration?: number) {
    return this.show('success', title, message, duration);
  }

  error(title: string, message?: string, duration?: number) {
    return this.show('error', title, message, duration);
  }

  warning(title: string, message?: string, duration?: number) {
    return this.show('warning', title, message, duration);
  }

  info(title: string, message?: string, duration?: number) {
    return this.show('info', title, message, duration);
  }

  dismiss(id: string) {
    this.toastsSignal.update(toasts => toasts.filter(t => t.id !== id));
  }

  clear() {
    this.toastsSignal.set([]);
  }

  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
