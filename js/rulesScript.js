//Elements
const btnRules = document.querySelector(".rules-button");
const btnCloseRules = document.querySelector(".rules-close");
const modal = document.querySelector(".modal");

//Listeners
btnRules.addEventListener("click", ModalHandler);
btnCloseRules.addEventListener("click", ModalHandler);

//Functions
function ModalHandler() 
{
    if(this.className == "rules-button")
    {
        modal.setAttribute("opened", "true");
        modal.showModal();
    }
    else 
    {
        modal.setAttribute("opened", "false");
        modal.close();
    }
}

