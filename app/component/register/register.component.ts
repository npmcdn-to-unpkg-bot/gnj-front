import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Register } from "../../models/register";

@Component({
  moduleId: module.id,
  selector: 'register',
  template: `
    <form name="registerform" #registerform="ngForm" (ngSubmit)="onSubmit()">   
      <div id="registerform">
        <div class="col-md-5 col-sm-8 col-xs-10  col-md-offset-3 col-sm-offset-2 col-xs-offset-1">
            <h2>S'enregistrer</h2>
        </div>
        <div class="col-md-5 col-sm-8 col-xs-8  col-md-offset-3 col-sm-offset-2 col-xs-offset-1">
        <div class="form-group">
          <label class="col-md-4 control-label">Email</label>
          <div class="col-md-8">
            <input type="email" name="Email" [(ngModel)]="register.email" class="form-control" 
              ngControl="email" #e="ngForm" (change)="isValidEmail(e.email)"required/>                   
          </div>
        </div>   
        <div class="form-group">
          <label class="col-md-4 control-label">Mot de passe</label>
          <div class="col-md-8">
            <input type="password" name="Password" [(ngModel)]="register.password" ngControl="password" 
              class="form-control" #p="ngForm" (change)="isValidPassword(p.password)" required/>  
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label">Confirmation de votre mot de passe</label>
          <div class="col-md-8">
            <input type="password" name="PasswordConfirm" [(ngModel)]="register.confirmpassword" ngControl="password" 
              class="form-control" #pc="ngForm" (change)="isSamePassword(pc.confirmpassword)" required/> 
          </div>
        </div>
        <div style="clear:both;"></div>
        <div class="form-group">
          <label class="col-md-4 control-label">Nom</label>
          <div class="col-md-8">
            <input type="text" class="form-control" name="LastName" [(ngModel)]="register.lastname" required/> 
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label">Prénom</label>
          <div class="col-md-8">
            <input type="text" class="form-control"  name="Firstname" [(ngModel)]="register.firstname" required/> 
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-4 control-label">Téléphone</label>
          <div class="col-md-8">
            <input type="tel" class="form-control" name="PhoneNumber" [(ngModel)]="register.phonenumber"/> 
          </div>
        </div>        
        <div class="form-group">
          <label class="col-md-4 control-label">Adresse</label>
          <div class="col-md-8">
            <input type="text" class="form-control"  placeholder="Rue" name="Street" [(ngModel)]="register.street"/> 
            <input type="text" class="form-control"  placeholder="Code postal" name="ZipCode" [(ngModel)]="register.zipcode"/> 
            <input type="text" class="form-control"  placeholder="Ville" name="City" [(ngModel)]="register.city"/> 
          </div>
        </div>
        <div>
          <div class="col-md-1">
            <input type="checkbox" name="Legalinfo" [(ngModel)]="register.legalinfo" />
          </div>
          <div class="col-md-11">
            En cochant cette case, je reconnais avoir pris connaissance des 
            <a href="https://givenjoy.fr/Content/Cgu/InformationsLegales.pdf" target="_blank">Conditions Générales d'utilisation de Give'n'Joy</a>, ainsi que des <a href="https://www.lemonway.fr/legal/conditions-generales-d-utilisation#market" target="_blank">Conditions Générales d'utilisation de Lemonways</a> et je les accepte.
          </div>
        </div>
      </div>	
      <div style="clear:both;"></div>
      <div class="col-sm-12" style="text-align:center;">
        <button class="btn btn-default" [disabled]="!registerform.form.valid">S'enregistrer</button>
      </div>
    </div>  
  </form>
  `
})

export class RegisterComponent {
  register:Register;

  constructor() {
    this.register = new Register(null,null,null,null,null,null,null,null,null,false);
  }

  isValidEmail(value:string) {
    
  }

  isValidPassword(value:string) {

  }

  isSamePassword(value:string) {

  }

  onsubmit() {
    console.log(this.register);
    alert(JSON.stringify(this.register));
  }

    
}