import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from 'react';
// import MonacoEditor from 'react-monaco-editor';
// import * as monaco from 'monaco-editor';
// import { MonacoServices } from 'monaco-languageclient';

// const MONACO_OPTIONS = {
// 	autoIndent: 'full',
// 	automaticLayout: true,
// 	contextmenu: true,
// 	fontFamily: 'monospace',
// 	fontSize: 13,
// 	lineHeight: 24,
// 	hideCursorInOverviewRuler: true,
// 	matchBrackets: 'always',
// 	minimap: {
// 		enabled: false,
// 	},
// 	readOnly: false,
// 	scrollbar: {
// 		horizontalSliderSize: 4,
// 		verticalSliderSize: 18,
// 	},
// };

// export default function App() {
// 	const editorDidMount = (editor) => {
// 		MonacoServices.install(monaco);
// 		if (editor && editor.getModel()) {
// 			const editorModel = editor.getModel();
// 			if (editorModel) {
// 				editorModel.setValue('{\n    "sayHello": "hello"\n}');
// 			}
// 		}
// 		editor.focus();
// 	};

// 	const onChange = (newCode, event) => {
// 		console.log('onChange', newCode);
// 	};

// 	return (
// 		<div>
// 			<h1>My React App</h1>

// 			<div>
// 				<MonacoEditor
// 					width="100%"
// 					height="80vh"
// 					language="json"
// 					theme="vs"
// 					options={MONACO_OPTIONS}
// 					onChange={onChange}
// 					editorDidMount={editorDidMount}
// 				/>
// 			</div>
// 		</div>
// 	);
// }
