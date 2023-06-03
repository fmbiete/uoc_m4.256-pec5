import {
  OverlayRef,
  Overlay,
  GlobalPositionStrategy,
  OverlayConfig,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerOverlayComponent } from '../Components/spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) {}

  public show(message = '') {
    console.debug(`${new Date()} ${location.href} calling show`);

    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'spinner-backdrop',
      panelClass: 'spinner-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    this.overlayRef = this.overlay.create(overlayConfig);

    const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
    this.overlayRef.attach(spinnerOverlayPortal);
  }

  public hide() {
    console.debug(`${new Date()} ${location.href} calling hide`);
    this.overlayRef?.dispose();
  }
}
