Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons"),Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy=function(t){Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy.initializeBase(this,[t])},Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy.prototype={canBeShown:function(){return Sys.Extended.UI.HtmlEditor.isIE},callMethod:function(){if(!Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy.callBaseMethod(this,"callMethod"))return!1;var t=this._designPanel;Sys.Extended.UI.HtmlEditor.isIE?(t.openWait(),setTimeout(function(){t.isShadowed(),t._copyCut("c",!0),t.closeWait(),t._ifShadow()},0)):t._copyCut("c",!0)}},Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.Copy",Sys.Extended.UI.HtmlEditor.ToolbarButtons.MethodButton);