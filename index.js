const modal = new ECModal({title:"Hello", content:"This is an incomplete system. Any bugs encountered will be fixed in future updates.", buttonAmount:2, buttonLabels:["OK", "Close"]});
modal.setButtonAction(1, () => {
    modal.setContent("Thank you for your understanding!");
    setTimeout(() => {
        modal.hide();
    }, 1000);
});
modal.setButtonAction(2, () => modal.hide());
modal.show();