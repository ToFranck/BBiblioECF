
	 
     var formValid = document.getElementById('bouton_envoi');
     var prenom = document.getElementById('prenom');
     var nom = document.getElementById('nom');
     var missPrenom = document.getElementById('missPrenom');
     var missNom = document.getElementById('missNom');
     var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
     var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
     
     formValid.addEventListener('click', validation);
     
     function validation(event){
         //Si champ est vide
         if (prenom.validity.valueMissing){
             event.preventDefault();
             missPrenom.textContent = 'Prénom manquant';
             missPrenom.style.color = 'red';
         //Si données est incorrect
         }else if (prenomValid.test(prenom.value) == false){
             event.preventDefault();
             missPrenom.textContent = 'Format incorrect';
             missPrenom.style.color = 'orange';
         }else{ 
         }
         
         if (nom.validity.valueMissing){
           event.preventDefault();
           missNom.textContent = 'Nom manquant';
           missNom.style.color = 'red';
       //Si données est incorrect
       }else if (nomValid.test(nom.value) == false){
           event.preventDefault();
           missNom.textContent = 'Format incorrect';
           missNom.style.color = 'orange';
       }else{ 
        document.location.href="PageP.html"
       }
     }