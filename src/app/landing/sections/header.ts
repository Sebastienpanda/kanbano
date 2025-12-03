import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Theme} from '../../shared/services/theme';

@Component({
    selector: "app-header",
    templateUrl: "./header.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
    protected readonly theme = inject(Theme);
}
