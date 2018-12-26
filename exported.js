const func = {
    waitForVisibilityCSS: function (elem){
        let EC = protractor.ExpectedConditions;
        //let css = element(by.css(elem);
        browser.wait(EC.visibilityOf(element(by.css(elem))), 5000);
    },

    seldom: function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },

    uploadImage: function () {
        let path = require('path');
        let fileToUpload = './Rorch.jpg';
        let absolutePath = path.resolve(__dirname, fileToUpload);
        $('input[type="file"]').sendKeys(absolutePath);
    }
}

const glob = {
    mainUrl: "http://immense-hollows-74271.herokuapp.com",
    editButton: 'Edit',
    textTextbox: 'text',
    longParagraph: "Trying to fill the 300 characters max validation. I'm close now, but not really. It's gonna take a whole lot more than this. Maybe now? Well not, still not even close. Ok, so I'll just say that I love music, going to the movies, and cooking. Also, I got married this year, and I had an awesome party!!!",
    updateItemButton: 'Update Item',
    attributeDisabled: 'disabled',
    conditionTrue: 'true',
    conditionFalse: 'false',
    detailsForm: "i[ng-show='strangerlist.detailsForm.text.$error.required']",
    reqText: "*required",
    cancelButton: "Cancel",
    buttonUpdateItem: "Update Item",
    elementtextbox: "p[class='story ng-binding']",
    additionalText: "This is going to be a little weird: ",
    descRorch: "Description Of Automated Rorscharch",
    createButton: "Create Item",
    cssElement: "p[class='story ng-binding']",
    deleteButton: "Delete",
    confirmDeleteCss: "[ng-click='submit()']",
    rowFirstItem: "p[class='story ng-binding']",
    firstItemDesc: "Will sends messages through the lights",
    deleteModalCss: "h3[class='modal-title']",
    lastMediaObject: "img[class='media-object img-responsive img-rounded']"
}

const elem = {
    clickFirstByButtonText: function (buttontext){
        element.all((by.buttonText(buttontext))).first().click();
    },

    clearByName: function(elemname){
        element(by.name(elemname)).clear();
    },

    sendkeysByName: function (elemname,paragraph){
        element(by.name(elemname)).sendKeys(paragraph);
    },

    expectConditionByButtonText: function(buttontext,attribute,condition){
        expect(element(by.buttonText(buttontext)).getAttribute(attribute)).toBe(condition)
    },

    expectTextByCSS: function (elemcss,reqText) {
        expect(element(by.css(elemcss)).getText()).toBe(reqText);
    },

    clickByButtonText: function(buttontext){
        element(by.buttonText(buttontext)).click();
    },

    expectTextByFirstCSS: function (elemcss, seldomText) {
        expect(element.all((by.css(elemcss))).first().getText()).toBe(seldomText);
    },

    expectTextByLastCSS: function (elemcss, rorchDesc) {
        expect(element.all((by.css(elemcss))).last().getText()).toBe(rorchDesc);
    },

    clickLastByButtonText: function (buttontext){
        element.all((by.buttonText(buttontext))).last().click();
    },

    clickByCSS: function(elemcss){
        element(by.css(elemcss)).click();
    },

    elemByCSS: function(cssElem){
        element(by.css(cssElem))
    }
}

module.exports.func = func
module.exports.glob = glob
module.exports.elem = elem
