describe('angularjs homepage todo list', function() {

    const exp = require("./exported.js");
    const func = exp.func;
    const glob = exp.glob;
    const elem = exp.elem;
    let seldomText = (glob.additionalText + func.seldom())

    beforeEach(function () {
        console.log("A new test begins");
    })

    it('Upload Image', function() {
        browser.get(glob.mainUrl);
        func.uploadImage();
        elem.sendkeysByName(glob.textTextbox,glob.descRorch);
        elem.clickFirstByButtonText(glob.createButton);
        elem.expectTextByLastCSS(glob.cssElement,glob.descRorch)
    })

    it('Delele Uploaded Image', function() {
        browser.get(glob.mainUrl);
        elem.clickLastByButtonText(glob.deleteButton);
        func.waitForVisibilityCSS(glob.deleteModalCss);
        elem.clickByCSS(glob.confirmDeleteCss);
        elem.expectTextByLastCSS(glob.rowFirstItem,glob.firstItemDesc)
    })

    it('300 Chars Max on description', function() {

        browser.get(glob.mainUrl);
        elem.clickFirstByButtonText(glob.editButton);
        elem.clearByName(glob.textTextbox);
        elem.sendkeysByName(glob.textTextbox,glob.longParagraph)
        elem.expectConditionByButtonText(glob.updateItemButton,glob.attributeDisabled,glob.conditionTrue);
    })

    it('Text Is required', function() {
        browser.get(glob.mainUrl);
        elem.clickFirstByButtonText(glob.editButton);
        elem.clearByName(glob.textTextbox);
        elem.expectTextByCSS(glob.detailsForm,glob.reqText);
        elem.clickByButtonText(glob.cancelButton);
    })

    it('Edit Text First Row', function() {
        browser.get(glob.mainUrl);
        elem.clickFirstByButtonText(glob.editButton);
        elem.clearByName(glob.textTextbox);
        elem.sendkeysByName(glob.textTextbox,seldomText);
        elem.clickByButtonText(glob.buttonUpdateItem)
        elem.expectTextByFirstCSS(glob.elementtextbox,seldomText)
    })

    afterEach(function () {
        console.log("Test is completed")
    })
})
