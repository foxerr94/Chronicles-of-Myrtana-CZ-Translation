function GetFileID(node) {
	var id = node.getAttribute('id');
	var id = id.split('_');	

	return id[1];
}

function GetFileType(node) {
	var id = node.getAttribute('class');
	return (id.includes('directory')) ? 'directory' : 'file';
}

function GetFileName(node) {
	var nodeTitle = node.getElementsByClassName('node-inner')[0];
	nodeTitle = nodeTitle.getElementsByClassName('title')[0];
	nodeTitle = nodeTitle.getElementsByTagName('a')[0];

	return nodeTitle.innerText;
}

function GetFileProgress(node) {
	var nodeProgress = node.getElementsByClassName('node-inner')[0];
	nodeProgress = nodeProgress.getElementsByClassName('crowdin-progress-text')[0];
	nodeProgress = nodeProgress.getElementsByClassName('translation-progress-holder')[0];
	nodeProgress = nodeProgress.getElementsByTagName('span');

	nodeProgress = [
		nodeProgress[0].innerText, // translated
		nodeProgress[1].innerText  // approved
	];

	for (var i = 0; i < nodeProgress.length; i++) {
		nodeProgress[i] = nodeProgress[i].replace(/[^0-9]/g, ''); // keep only numbers
	}

	return nodeProgress;
}

function ParseElement(node, parentName, ouptutElem) {
	var fileID = GetFileID(node);
	var fileType = GetFileType(node);
	var fileName = parentName + "/" + GetFileName(node);
	var fileProgress = GetFileProgress(node);
	var nodeChildren = node.children;

	ouptutElem.innerHTML += fileType + "," + fileID + "," + fileName + ",," + fileProgress + "<br>";

	//console.log(node);
	//console.log(fileID);
	//console.log(fileType);
	//console.log(fileName);
	//console.log(fileProgress);
	//console.log(nodeChildren);

	// no child files -> stop recursion
	if (nodeChildren.length < 2)
		return;

	nodeChildren = nodeChildren[1].children;

	// recursively parse child files
	for (var i = 0; i < nodeChildren.length; i++) {
		ParseElement(nodeChildren[i], fileName, ouptutElem);
	}
}

function ParseHTML() {
	const output = document.getElementById('CoM_Crowdin_HTML_parser_Output');
	const files = document.getElementsByClassName('files-wrapper')[0];

	output.innerHTML = "";

	for (var i = 0; i < files.children.length; i ++) {
		ParseElement(files.children[i], "", output);
	}
}