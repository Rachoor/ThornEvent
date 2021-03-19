import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {
//   MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule,MatCardModule
// } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { MatSidenavModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
         MatRadioModule, MatGridListModule, MatCardModule, MatMenuModule, MatPaginatorModule,
         MatSortModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
         MatExpansionModule, MatListModule, MatProgressBarModule,  MatProgressSpinnerModule, MatRippleModule,
         MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTooltipModule
        } from '@angular/material';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSelectModule } from '@angular/material/select';



@NgModule({
  imports: [CommonModule, MatSidenavModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatGridListModule, MatCardModule, MatMenuModule, MatPaginatorModule,
    MatSortModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
    MatExpansionModule, MatListModule, MatProgressBarModule,  MatProgressSpinnerModule, MatRippleModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, 
    MatTooltipModule,MatTableModule,MatCheckboxModule, MatToolbarModule,MatButtonModule,MatFormFieldModule,MatIconModule],

  exports: [MatSidenavModule, MatTabsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule, MatGridListModule, MatCardModule, MatMenuModule, MatPaginatorModule,
    MatSortModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatDialogModule,
    MatExpansionModule, MatListModule, MatProgressBarModule,  MatProgressSpinnerModule, MatRippleModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, 
    MatTooltipModule,MatTableModule,MatCheckboxModule, MatToolbarModule,MatButtonModule,MatFormFieldModule,MatIconModule]
})
export class AngularMaterialModule { }