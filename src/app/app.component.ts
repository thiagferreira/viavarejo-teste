import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transitionLessThanOne = true;
  transitionValuesShow = "";
  transitionValuesTotalShow = "";
  onClick(type, name, value) {
    if(type && name && value){
      let transitionValues = [
        {
          "type": type,
          "name": name,
          "value": value,
        }
      ];

      let localVerification = JSON.parse(localStorage.getItem("transitionValues")) || ""; 
      let localVerificationValue = localStorage.getItem("totalTransitionValue") || "";  
      this.transitionValuesShow = localVerification ;             
      if(localVerification && localVerificationValue){
        this.transitionLessThanOne = false; 
        localVerification.push.apply(localVerification, transitionValues);
        if(type === "compra"){         
          localStorage.setItem(`totalTransitionValue`, (+localVerificationValue + +value))   
          this.transitionValuesTotalShow = localStorage.getItem("totalTransitionValue");       
          return localStorage.setItem(`transitionValues`, JSON.stringify(localVerification))
        }
        localStorage.setItem(`totalTransitionValue`, (+localVerificationValue - +value))
        this.transitionValuesTotalShow = localStorage.getItem("totalTransitionValue");
        return localStorage.setItem(`transitionValues`, JSON.stringify(localVerification))
      }  
      localStorage.setItem(`totalTransitionValue`, value)  
      this.transitionValuesTotalShow = value;
      this.transitionValuesShow = JSON.stringify(transitionValues);
      return localStorage.setItem(`transitionValues`, JSON.stringify(transitionValues))

    }

    alert(`erro ao adicionar`);
  }
}
