Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons"),Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript=function(t){Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript.initializeBase(this,[t])},Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript.prototype={callMethod:function(){return!!Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript.callBaseMethod(this,"callMethod")&&void this._designPanel._execCommand("subScript",!1,null)},checkState:function(){return!!Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript.callBaseMethod(this,"checkState")&&this._designPanel._queryCommandState("subScript")}},Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.SubScript",Sys.Extended.UI.HtmlEditor.ToolbarButtons.EditorToggleButton);