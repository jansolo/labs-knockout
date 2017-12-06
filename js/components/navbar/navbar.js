define(['knockout', 'text!./navbar.html'], function(ko, templateHtml) {
    return {
        viewModel: function(params) {
            var self = this;
            self.title = params.title;
        },
        template: templateHtml
    };
});