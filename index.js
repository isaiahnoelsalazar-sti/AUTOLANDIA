const modal = new ECModal({title:"Note", content:"This is an incomplete system. Any bugs encountered will be fixed in future updates.", buttonAmount:2, buttonLabels:["OK", "Close"]});
modal.setButtonAction(1, () => {
    modal.setContent("Thank you for your understanding!");
    setTimeout(() => {
        modal.hide();
        setTimeout(() => {
            modal.setContent("This is an incomplete system. Any bugs encountered will be fixed in future updates.");
        }, 200);
    }, 1000);
});
modal.setButtonAction(2, () => modal.hide());
modal.show();

function showNote(){
    modal.show();
}

function sidebarSwitcher(element){
    alert(element.textContent);
}