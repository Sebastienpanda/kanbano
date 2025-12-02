import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast as ToastService, ToastMessage } from '../services/toast';

@Component({
  selector: 'app-toast-container',
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainer {
  private toastService = inject(ToastService);

  protected toasts = this.toastService.toasts;

  dismiss(id: string) {
    this.toastService.dismiss(id);
  }

  getIcon(type: ToastMessage['type']): string {
    switch (type) {
      case 'success':
        return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'error':
        return 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'warning':
        return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
      case 'info':
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }

  getColorClasses(type: ToastMessage['type']): string {
    switch (type) {
      case 'success':
        return 'bg-success/10 border-success/50 text-success';
      case 'error':
        return 'bg-error/10 border-error/50 text-error';
      case 'warning':
        return 'bg-warning/10 border-warning/50 text-warning';
      case 'info':
        return 'bg-info/10 border-info/50 text-info';
    }
  }
}
