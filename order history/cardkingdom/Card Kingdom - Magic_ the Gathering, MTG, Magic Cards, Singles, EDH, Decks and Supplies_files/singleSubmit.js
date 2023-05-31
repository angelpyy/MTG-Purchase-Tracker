//display loading animation on button, and prevent multiple clicks on any element with class "singleSubmit"
$(document).on('click', '.singleSubmitCancel', function () {
    $('.singleSubmitCancel').addClass('disabled processing');
    if (confirm("Are you sure you wish to cancel your order? This action can not be undone.")) {
        $('.singleSubmitCancel').text("Processing...");
        setTimeout(function () { //let form handlers trigger before disabling button
            $('.singleSubmitCancel:visible').attr('disabled', true);
        }, 0);
    } else {
        $('.singleSubmitCancel').removeClass('disabled processing');
        return false;
    }
});

//display loading animation on button, and prevent multiple clicks on any element with class "singleSubmit"
$(document).on('click', '.singleSubmitReorder', function () {
    $('.singleSubmitReorder').addClass('disabled processing');
    if (confirm("Are you sure you wish to add all items from this order to your shopping cart? Prices and availability may have changed. NOTE: your original order will remain unchanged. Please contact Customer Support if you wish to edit your original order.")) {
        $('.singleSubmitReorder').text('Processing...');
        setTimeout(function () { //let form handlers trigger before disabling button
            $('.singleSubmitReorder:visible').attr('disabled', true);
        }, 0);
    } else {
        $('.singleSubmitReorder').removeClass('disabled processing');
        return false;
    }
});
