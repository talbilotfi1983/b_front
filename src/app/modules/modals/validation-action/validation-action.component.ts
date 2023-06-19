import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-validation-action',
  templateUrl: './validation-action.component.html',
  styleUrls: ['./validation-action.component.scss']
})
export class ValidationActionComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  /**
   * @author lgary
   * @file Permet la fermeture de la snackbar au clique.
   */
  dismiss() {
    this.snackBar.dismiss();
  }

}
