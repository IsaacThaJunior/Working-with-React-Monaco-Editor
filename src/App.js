// // import MonacoEditor from 'react-monaco-editor';
// // import { useState, useEffect } from 'react';
// // import './App.css';

// // const FileUploader = ({ onFileLoad }) => {
// // 	return <input type="file" onChange={(e) => onFileLoad(e.target.files[0])} />;
// // };

// // function App() {
// // 	const [file, setFile] = useState();
// // 	const [value, setValue] = useState();
// // 	const [theme, setTheme] = useState('vs-dark');

// // 	const editorDidMount = (editor, monaco) => {
// // 		console.log('editorDidMount', editor);
// // 		editor.focus();
// // 	};

// // 	const editorWillMount = (monaco) => {
// // 		monaco.language.json.jsonDefaults.setDiagnosticsOptions({
// // 			validate: true,
// // 			schemas: [
// // 				{
// // 					uri: 'http://myserver/foo-schema.json',
// // 					fileMatch: ['*'],
// // 					schema: {
// // 						type: 'object',
// // 						properties: {
// // 							p1: {
// // 								enum: ['v1', 'v2'],
// // 							},
// // 							p2: {
// // 								$ref: 'http://myserver/bar-schema.json',
// // 							},
// // 						},
// // 					},
// // 				},
// // 			],
// // 		});
// // 	};

// // 	useEffect(() => {
// // 		if (file) {
// // 			var reader = new FileReader();
// // 			reader.onload = async (e) => {
// // 				setValue(e.target.result);
// // 			};
// // 			reader.readAsText(file);
// // 		}
// // 	}, [file]);

// // 	const handleThemeChange = () => {
// // 		if (theme === 'vs-dark') {
// // 			setTheme('vs');
// // 		} else {
// // 			setTheme('vs-dark');
// // 		}
// // 	};

// // 	return (
// // 		<>
// // 			<FileUploader onFileLoad={setFile} />
// // 			<button
// // 				style={{
// // 					background: theme === 'vs-dark' ? 'black' : 'white',
// // 					color: theme === 'vs-dark' ? 'white' : 'black',
// // 				}}
// // 				onClick={handleThemeChange}
// // 			>
// // 				Set {theme === 'vs-dark' ? 'light' : 'dark'} theme
// // 			</button>
// // 			<MonacoEditor
// // 				height="100vh"
// // 				language="javascript"
// // 				// editorWillMount={editorWillMount}
// // 				editorWillMount={editorWillMount}
// // 				theme={theme}
// // 				value={value}
// // 				// options={{ readOnly: true, lineNumbers: 'off', minimap: { enabled: false } }}
// // 			/>
// // 		</>
// // 	);
// // }

// // export default App;

import React, { useState, useEffect } from 'react';
import MonacoEditor, { MonacoDiffEditor } from 'react-monaco-editor';

const FileUploader = ({ onFileLoad }) => {
	return <input type="file" onChange={(e) => onFileLoad(e.target.files[0])} />;
};

const CodeEditor = () => {
	const [code, setCode] = useState('// type your code... \n');
	const [theme, setTheme] = useState('vs-light');
	const [file, setFile] = useState();
	// const [value, setValue] = useState();

	useEffect(() => {
		if (file) {
			var reader = new FileReader();
			reader.onload = async (e) => {
				setCode(e.target.result);
			};
			reader.readAsText(file);
		}
	}, [file]);

	// const editorWillMount = (monaco) => {
	// monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
	// 	noSemanticValidation: true,
	// 	noSyntaxValidation: false
	// });

	// monaco.languages.javascript.javascriptDefaults.setDiagnosticsOptions({
	// 	noSemanticValidation: false,
	// 	noSyntaxValidation: false,
	// });
	// monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
	// 	noSemanticValidation: false,
	// 	noSyntaxValidation: false,
	// });
	// validation settings
	// monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
	// 	noSemanticValidation: true,
	// 	noSyntaxValidation: false,
	// });

	// // compiler options
	// monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	// 	target: monaco.languages.typescript.ScriptTarget.ES6,
	// 	allowNonTsExtensions: true,
	// });

	// extra libraries
	// var libSource = [
	// 	'declare class Facts {',
	// 	'    /**',
	// 	'     * Returns the next fact',
	// 	'     */',
	// 	'    static next():string',
	// 	'}',
	// ].join('\n');
	// var libUri = 'ts:filename/facts.d.ts';
	// monaco.languages.typescript.javascriptDefaults.addExtraLib(
	// 	libSource,
	// 	libUri
	// );
	// When resolving definitions and references, the editor will try to use created models.
	// Creating a model for the library allows "peek definition/references" commands to work with the library.
	// 	monaco.editor.createModel(
	// 		libSource,
	// 		'typescript',
	// 		monaco.Uri.parse(libUri)
	// 	);

	// 	var jsCode = [
	// 		'"use strict";',
	// 		'',
	// 		'class Chuck {',
	// 		'    greet() {',
	// 		'        return Facts.next();',
	// 		'    }',
	// 		'}',
	// 	].join('\n');

	// 	monaco.editor.create(document.getElementById('container'), {
	// 		value: jsCode,
	// 		language: 'javascript',
	// 	});
	// };

	//getting syntax highlighting for javascript
	// const editorWillMount = (monaco) => {
	// 	monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	// 		target: monaco.languages.typescript.ScriptTarget.ES6,
	// 		allowNonTsExtensions: true,
	// 	});
	// };

	const changeBySetState = () => {
		setCode('// code changed by setState! \n');
	};

	const setDarkTheme = (e) => {
		// setTheme('vs-dark');
		e.preventDefault();

		setTheme((prev) => (prev === 'vs-dark' ? 'hc-black' : 'vs-dark'));
	};

	const setLightTheme = (e) => {
		e.preventDefault();
		
		setTheme('vs-light');
	};

	const options = {
		// autoIndent: 'full',
		// contextmenu: true,
		// fontFamily: 'monospace',
		// fontSize: 13,
		// lineHeight: 24,
		// hideCursorInOverviewRuler: true,
		// matchBrackets: 'always',
		// minimap: {
		// 	enabled: true,
		// },
		// scrollbar: {
		// 	horizontalSliderSize: 4,
		// 	verticalSliderSize: 18,
		// },

		selectOnLineNumbers: true,
		roundedSelection: false,
		readOnly: false,
		cursorStyle: 'line',
		automaticLayout: true,
	};

	return (
		<div>
			<div>
				<button onClick={changeBySetState} type="button">
					Change by setState
				</button>
				<button onClick={setDarkTheme} type="button">
					Set dark theme ({theme === 'vs-dark' ? 'hc-black' : 'vs-dark'})
				</button>
				{theme !== 'vs-light' && (
					<button onClick={setLightTheme} type="button">
						Set light theme
					</button>
				)}
				<FileUploader onFileLoad={setFile} />
			</div>
			<hr />
			<MonacoEditor
				height="400"
				language="javascript"
				// editorWillMount={editorWillMount}
				value={code}
				options={options}
				theme={theme}
			/>
		</div>
	);
};

const DiffEditor = () => {
	const [code, setCode] = useState('const a = "Hello Monaco"');
	const [original, setOriginal] = useState('const a = "Hello World"');

	useEffect(() => {
		setCode(original);
	}, [original]);

	const onChange = (newValue) => {
		console.log('onChange', newValue); // eslint-disable-line no-console
	};

	return (
		<div>
			<button onClick={() => setCode(original)} type="button">
				Reset
			</button>
			<hr />
			<MonacoDiffEditor
				width="800"
				height="300"
				language="javascript"
				value={code}
				original={original}
				onChange={onChange}
			/>
		</div>
	);
};

const App = () => (
	<div>
		<h2>Monaco Editor Sample (controlled mode)</h2>
		<CodeEditor />
		<hr />
		<hr />
		{/* <h2>Another editor (showing a diff)</h2>
		<DiffEditor /> */}
	</div>
);

export default App;

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
