import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AppleCardAnimationComponent } from './apple-card-animation/apple-card-animation.component';
import { AppleCardRoutingModule } from './apple-card.routing.module';

@NgModule({
  declarations: [AppleCardAnimationComponent],
  imports: [
    NativeScriptCommonModule,
    AppleCardRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppleCardModule { }
