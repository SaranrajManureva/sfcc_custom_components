'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for storefront component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content; 
    model.buttontext = content.buttontext ? content.buttontext : null;
    model.image = ImageTransformation.getScaledImage(content.image_banner);
    model.image_mobile = ImageTransformation.getScaledImage(content.bannerimage2);
    model.link = content.redirecturl ? content.redirecturl : '#';
    model.color = content.color ? content.color : null;
    model.positionhorizontal = content.positionhorizontal ? content.positionhorizontal : null;
    model.positionvertical = content.positionvertical ? content.positionvertical : null;

    return new Template('experience/components/commerce_assets/customCompo').render(model).text;
};
