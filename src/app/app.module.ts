import { CharacterManagerService } from './Services/character-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterSelectorComponent } from './Components/character-selector/character-selector.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { HomeComponent } from './Components/home/home.component';
import { CharacterSheetComponent } from './Components/character-sheet/character-sheet.component';
import { StatPointSelectorComponent } from './Components/stat-point-selector/stat-point-selector.component';

import { ResourcePointSelectorComponent } from './Components/resource-point-selector/resource-point-selector.component';
import { FormsModule } from '@angular/forms';
import { ActionComponent } from './Components/action/action.component';
import { AbilityComponent } from './Components/ability/ability.component';
import { SpecializationComponent } from './Components/specialization/specialization.component';
import { SpecializationAdderComponent } from './Components/specialization-adder/specialization-adder.component';
import { AbilityAdderComponent } from './Components/ability-adder/ability-adder.component';

import { NgxElectronModule } from 'ngx-electron';
import { SpecialSheetComponent } from './Components/special-sheet/special-sheet.component';
import { SpecialEditorComponent } from './Components/special-editor/special-editor.component';
import { SpecialComponent } from './Components/special/special.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSelectorComponent,
    HomeComponent,
    CharacterSheetComponent,
    StatPointSelectorComponent,
    ResourcePointSelectorComponent,
    ActionComponent,
    AbilityComponent,
    SpecializationComponent,
    SpecializationAdderComponent,
    AbilityAdderComponent,
    SpecialSheetComponent,
    SpecialEditorComponent,
    SpecialComponent
  ],
  imports: [
    NgxElectronModule,
    FormsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
  ],
  entryComponents: [
    SpecializationAdderComponent,
    AbilityAdderComponent,
    SpecialEditorComponent
  ],
  providers: [CharacterManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
