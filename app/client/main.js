const Template = require('meteor/templating').Template;
const SimpleMDE = require('simplemde');
require('simplemde/dist/simplemde.min.css');

Template.body.onRendered(function() {
    TemplateVar.set('render', true);
});

Template.textarea.onRendered(function() {
    TemplateVar.set('render', true);
    var simplemde = new SimpleMDE({
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: "content",
            delay: 1000,
        },
        hideIcons: ["fullscreen"],
        spellChecker: false,
        autoDownloadFontAwesome: false,
    });
    simplemde.toggleSideBySide();
});
