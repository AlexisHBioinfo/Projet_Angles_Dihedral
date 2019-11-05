/*
*
*
*Load/Parse Local PDB File
Calc phi and psy angle
2019
mmj
*
*/



const cutAtom = (accu,line) =>{
    let cuts = [
	{start:13,end:16,name:'Atom',type:"string"},
	{start:31,end:38,name:'x',type:"float"},
	{start:39,end:46,name:'y',type:"float"},
	{start:47,end:54,name:'z',type:"float"}
    ];

    let obj = cuts.reduce((acc, cut) => {
	let token = line.substring(cut.start-1, cut.end).trim();
	acc[cut.field] = (cut.type === 'float') ? parseFloat(token) : token;
	console.log(acc);
	return acc;

    },
	{});
}


const parseLine = (accu,line,i) => {
    let key = line.substring(0,6).trim();
    if (key==='ATOM'){
	cutAtom(accu,line);
    }
}


const parsePDB = (text) =>{
    let lines =text.split('\n');
    let s3D = lines.reduce(parseLine, {atoms:[]});
}


const getContent =(ev) => {
    console.log(ev);
    let f = ev.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) =>{
	let text = reader.result;
	let structure = parsePDB(text);
    }
    reader.readAsText(f);
    
}

//add event list
let pdbBrowse = document.querySelector("#pdb");
pdbBrowse.addEventListener('change',getContent);
