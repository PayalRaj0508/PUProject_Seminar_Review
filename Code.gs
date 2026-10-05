/**
 * MCA / M.Sc.(IT) Seminar Guide Allocation Dashboard — Backend
 * Sheet ID: 1nqmMx-iq4xhfTh8PVS8419V9EIMPhcWE5q08XNC-Dp8
 *
 * ⚠️  FIRST TIME: Run function DIAGNOSTIC once from the editor toolbar.
 */

const SHEET_ID      = '1nqmMx-iq4xhfTh8PVS8419V9EIMPhcWE5q08XNC-Dp8';
const GROUPS_SHEET  = 'Groups';
const FACULTY_SHEET = 'Faculty';

const GROUP_HEADERS = [
  'S.No.','Group Name','Course','Semester','Group Email','Students (JSON)',
  'Research Topic','Domain','Type of Research','Guide Name',
  'Student Reviews (JSON)','Group Remark','Company Name','Company Letter URL'
];
const FACULTY_HEADERS = ['Faculty Name','Ph.D. Status','Max Groups'];

/* ================= SEED DATA ================= */
const SEED_GROUPS = [
{ id:1, course:"MCA", sem:2, group:"Hex", email:"2505112140079@paruluniversity.ac.in",
  students:[{name:"Sanghvi Jaimin B",enr:"2505112140079"},{name:"Prajapati Chandra Prakash R",enr:"2505112140078"}],
  topic:"Social Engineering Attacks", domain:"Others (Specify)", type:"Machine Learning / AI", guide:"Dr. Priya Swaminarayan" },
{ id:2, course:"MCA", sem:2, group:"SPArda", email:"2505112120002@paruluniversity.ac.in",
  students:[{name:"Antriksh khichi",enr:"2505112120002"},{name:"Sujal thakuri",enr:"2505112120128"},{name:"Prashik Ingle",enr:"2505112120065"}],
  topic:"AI-Induced Cognitive Laziness: Measuring Dependency Patterns in University Students Using Generative AI Systems",
  domain:"Education", type:"Machine Learning / AI", guide:"" },
{ id:3, course:"MSc IT", sem:2, group:"Sibashish, Dhruv (03,)Roy", email:"2505102140032@paruluniversity.ac.in",
  students:[{name:"Sibashish Panda",enr:"2505102140032"},{name:"Roy Akshay",enr:"2505102140029"},{name:"Ambaliya Dhruv",enr:"2505102140003"}],
  topic:"Effectiveness of Sandbox Evasion Techniques against VM-based analysis",
  domain:"Others (Specify)", type:"Cybersecurity", guide:"Dr. Hina Chokshi" },
{ id:4, course:"MCA", sem:2, group:"The Hype", email:"2505112070023@paruluniversity.ac.in",
  students:[{name:"Subratkumar Jaiprakash Yadav",enr:"2505112070023"}],
  topic:"Real-Time Air Quality Prediction with MLOps Pipeline", domain:"Environment",
  type:"Machine Learning / AI", guide:"" },
{ id:5, course:"MCA", sem:2, group:"EduHealth Analytics group", email:"2505112120225@paruluniversity.ac.in",
  students:[{name:"Twinkle Parmar",enr:"2505112120225"},{name:"Dev Jansari",enr:"2505112120007"},{name:"Malwana Raj Mahendrabhai",enr:"2505112120166"}],
  topic:"AI-Driven Integrated Platform for Child Education and Health Monitoring in ICDS",
  domain:"Others (Specify)", type:"Others", guide:"" },
{ id:6, course:"MCA", sem:2, group:"Researcher's", email:"2505112070012@paruluniversity.ac.in",
  students:[{name:"Sujal Patel",enr:"2505112070012"},{name:"Rushank Chokshi",enr:"2505112070036"},{name:"Kartik Sadhu",enr:"2505112070001"}],
  topic:"Design the smallest neural networks to solve ARC-AGI image transformations",
  domain:"Others (Specify)", type:"Machine Learning / AI", guide:"Dr. Priya Swaminarayan" },
{ id:7, course:"MCA", sem:2, group:"Methodical Minds", email:"2505112110056@paruluniversity.ac.in",
  students:[{name:"Manshi Gohil",enr:"2505112110056"},{name:"Souvik Sen",enr:"2505102110013"},{name:"Akanksha Kumari",enr:"2505112110055"}],
  topic:"Student Performance Prediction System", domain:"Education", type:"Data Science", guide:"" },
{ id:8, course:"MSc IT", sem:2, group:"White_Hat", email:"2505102140041@paruluniversity.ac.in",
  students:[{name:"KONATE IBRAHIM",enr:"2505102140041"},{name:"Nchakha Mantsoe",enr:"2505102140042"},{name:"LAURENT MWITA MAHEMBA",enr:"2505102140048"}],
  topic:"SECURITY FLAWS IN CORPORATE NETWORK: A CRITICAL ANALYSIS OF CRYPTOGRAPHIC CONTROLS AND INTRUSION DETECTION MECHANISMS",
  domain:"Others (Specify)", type:"Cybersecurity", guide:"Prof. Vivek Dave" },
{ id:9, course:"MSc IT", sem:2, group:"AI-Driven Smart ETL for Big Data Analytics", email:"2505102130003@paruluniversity.ac.in",
  students:[{name:"Kaustuv Mallick",enr:"2505102130003"},{name:"Padvi Jigarkumar Sureshbhai",enr:"2505102130007"},{name:"Tambat Dhruv Sachin",enr:"2505112130028"}],
  topic:"AI-Driven Smart ETL for Big Data Analytics", domain:"Others (Specify)", type:"Machine Learning / AI", guide:"" },
{ id:10, course:"MCA", sem:2, group:"Ethanol_productuion", email:"2505112110032@paruluniversity.ac.in",
  students:[{name:"Akshay Ashok Desai",enr:"2505112110065"},{name:"Sarthak Parashar",enr:"2505112110032"},{name:"Prathamesh Patil",enr:"2505112130004"}],
  topic:"Ethanol production", domain:"Agriculture", type:"Others", guide:"" },
{ id:11, course:"MCA", sem:2, group:"The Consensus Trio", email:"2505112110044@paruluniversity.ac.in",
  students:[{name:"Hunain Mahudawala",enr:"2505112110066"},{name:"Joel Kunjumon",enr:"2505112110044"},{name:"Rishi Mohinani",enr:"2505112110049"}],
  topic:"A Digital Platform for Peer-Assisted Mental Health Support Among Students",
  domain:"Healthcare", type:"Software Engineering", guide:"Dr. Abhishek Mehta" },
{ id:12, course:"MCA", sem:2, group:"Study Masters", email:"2505112130022@paruluniversity.ac.in",
  students:[{name:"Patel Krupaben Keyurkumar",enr:"2505112130022"},{name:"Chudasma Darshil Ashokbhai",enr:"2505112110009"},{name:"Vikas Kumar Choudhary",enr:"2505112110037"}],
  topic:"AI based solutions for environmental monitoring in urban cities",
  domain:"Environment", type:"Machine Learning / AI", guide:"Dr. Priya Swaminarayan" },
{ id:13, course:"MCA", sem:2, group:"Data Trinity", email:"2505112120032@paruluniversity.ac.in",
  students:[{name:"Thakar Tej",enr:"2505112120032"},{name:"Jyot Makadiya",enr:"2505112120082"},{name:"Bedabrata Nayak",enr:"2505112120003"}],
  topic:"Android Application for Carbon Footprint Calculation of Daily Student Activities",
  domain:"Environment", type:"Interdisciplinary", guide:"Dr. Abhishek Mehta" },
{ id:14, course:"MCA", sem:2, group:"NIVA", email:"2505112120168@paruluniversity.ac.in",
  students:[{name:"Ravi Pandey",enr:"2505112120179"},{name:"Nandani Gupta",enr:"2505112120168"}],
  topic:"Benchmarking Large Language Models on Trilingual Code-Mixed Sentiment Analysis",
  domain:"Others (Specify)", type:"Machine Learning / AI", guide:"" },
{ id:15, course:"MCA", sem:2, group:"AutoMl Pioneers", email:"2505112120080@paruluniversity.ac.in",
  students:[{name:"Machhi Tarunkumar Navinkumar",enr:"2505112120080"},{name:"Jeet Garg",enr:"250511212069"},{name:"Aditya Raj",enr:"2505112120038"}],
  topic:"ENHANCING AUTOML PERFORMANCE USING HYBRID FEATURE SELECTION AND MODEL EXPLAINABILITY TECHNIQUES",
  domain:"Others (Specify)", type:"Machine Learning / AI", guide:"" },
{ id:16, course:"MSc IT", sem:2, group:"Knowledge Seekers", email:"2505102130010@paruluniversity.ac.in",
  students:[{name:"Purushottam Sah",enr:"2505102130010"},{name:"Prateek Kumar Sinha",enr:"2505112130023"},{name:"Vishwraj Singh Rathore",enr:"2505112130042"}],
  topic:"Design and Implementation of a Scalable Big Data Architecture for COVID-19 Surveillance and Decision Support",
  domain:"Healthcare", type:"Data Science", guide:"Dr. Ghanshyam Rathod" },
{ id:17, course:"MCA", sem:2, group:"Neural Nexus", email:"2505112120029@paruluniversity.ac.in",
  students:[{name:"Shubham Suryavanshi",enr:"2505112120029"},{name:"Vishesh Jahangir",enr:"2505112120035"},{name:"Goutam purohit",enr:"2505112120221"}],
  topic:"Explainable AI-Based Pneumonia Detection using Deep Learning",
  domain:"Others (Specify)", type:"Machine Learning / AI", guide:"Dr. Priya Swaminarayan" },
{ id:18, course:"MCA", sem:2, group:"Brainstormers", email:"2505112120061@paruluniversity.ac.in",
  students:[{name:"HARSH PATEL",enr:"2505112120061"},{name:"ISHA RATHOD",enr:"2505112120066"},{name:"SAHIL PAL",enr:"2505112120025"}],
  topic:"Enhanced English Learning System with Typing Skill Evaluation",
  domain:"Education", type:"Software Engineering", guide:"Dr. Ghanshyam Rathod" }
];

const SEED_FACULTY = [
["Dr. Priya Swaminarayan","Ph.D. Completed"],["Dr. Hina Chokshi","Ph.D. Completed"],
["Prof. Vivek Dave","Ph.D. Pursuing"],["Dr. Abhishek Mehta","Ph.D. Completed"],
["Prof. Manishkumar Joshi","Ph.D. Pursuing"],["Prof. Vijya Tulsani","Ph.D. Pursuing"],
["Prof. Sohil Parmar","Ph.D. Pursuing"],["Prof. Faruk Abdulla","Ph.D. Pursuing"],
["Dr. Ghanshyam Rathod","Ph.D. Completed"],["Prof. Hardik Parmar","Ph.D. Pursuing"],
["Prof. Jigar Bhavsar","Ph.D. Pursuing"],["Prof. Megha Trivedi","Ph.D. Pursuing"],
["Prof. Sweta Jethva","Ph.D. Pursuing"],["Prof. Vipul Gamit","Ph.D. Pursuing"],
["Prof. Nirmit Shah","Ph.D. Pursuing"],["Prof. Shikha Bansal","Ph.D. Pursuing"],
["Prof. Rinku Patil","Ph.D. Pursuing"],["Prof. Arun U","Ph.D. Pursuing"],
["Prof. Mehulkumar Dalwadi","Ph.D. Pursuing"],["Prof. RamDeepak Yadagiri","Non Ph.D."],
["Prof. Vaishali Shah","Ph.D. Pursuing"],["Prof. Smarika Rai","Ph.D. Pursuing"],
["Prof. Saumil Trivedi","Ph.D. Pursuing"],["Prof. Rinkal Sarvaiya","Ph.D. Pursuing"],
["Prof. Preeti Sharma","Ph.D. Pursuing"],["Prof. Vishakha Bathwar","Ph.D. Pursuing"],
["Prof. Chandankumar Singh","Non Ph.D."],["Prof. Priyanka Mod","Non Ph.D."],
["Prof. Khyati Kariya","Ph.D. Pursuing"],["Prof. Tanmay Shah","Non Ph.D."],
["Prof. Komal Bharti","Non Ph.D."],["Prof. Aniket Paul","Non Ph.D."],
["Ms. Niharika Agarwal","Ph.D. Pursuing"],["Prof. Aesh Gada","Ph.D. Pursuing"],
["Prof. Madhav J Kapadiya","Ph.D. Pursuing"],["Prof. Adarsh Ashok","Non Ph.D."],
["Prof. Pratik Parmar","Non Ph.D."],["Prof. Shivaniba Dilipsinh Bhadoriya","Non Ph.D."],
["Prof. Honey Parmar","Ph.D. Pursuing"],["Prof. Chaitali Nayka","Non Ph.D."],
["Prof. Mini Bhola","Ph.D. Pursuing"],["Prof. Himanshu Yadav","Non Ph.D."],
["Prof. Payal Parekh","Ph.D. Pursuing"],["Prof. Sathwik Chebrolu","Non Ph.D."],
["Prof. Pratik Raj","Non Ph.D."],["Prof. Saikat Paramanik","Non Ph.D."],
["Prof. Anmol Singh","Ph.D. Pursuing"],["Prof. Jatin Morwal","Non Ph.D."],
["Prof. Pritam","Non Ph.D."],["Prof. Satyamani Gayatri","Non Ph.D."],
["Prof. Dipti Sharma","Non Ph.D."],["Prof. Ashutosh Solanki","Non Ph.D."],
["Prof. Ronak Mehta","Non Ph.D."],["Prof. Kashetti Harshith","Non Ph.D."],
["Prof. Lakshya Namdeo","Non Ph.D."],["Prof. Satyendra Sharma","Ph.D. Pursuing"],
["Prof. Nikunj Lathiya","Non Ph.D."],["Prof. Ashutosh Gautam","Non Ph.D."],
["Prof. Divya Vasoya","Non Ph.D."],["Prof. Isha Sevak","Non Ph.D."],
["Prof. Navneet Gupta","Ph.D. Pursuing"],["Prof. Shivam Bhakta","Non Ph.D."],
["Prof. Badgujar Sunny","Non Ph.D."],["Prof. Kritika Pandey","Ph.D. Pursuing"],
["Prof. Charmi Purohit","Non Ph.D."],["Prof. Mohd Affan Sheikh","Non Ph.D."],
["Prof. Natwar Jha","Ph.D. Pursuing"],["Prof. Bhojani Sanjay","Non Ph.D."],
["Prof. Sanjaykumar Parmar","Non Ph.D."],["Prof. Koushiki","Non Ph.D."],
["Prof. Biru Gond","Non Ph.D."],["Prof. Sunny Parmar","Non Ph.D."],
["Prof. Kuntal Prananik","Non Ph.D."],["Prof. Nilesh Panchotiya","Non Ph.D."],
["Prof. Naitik Doshi","Non Ph.D."],["Prof. Ishita Jain","Non Ph.D."],
["Prof. Khandelval Varshaben","Non Ph.D."],["Prof. Hiral Thakar","Non Ph.D."]
];

/* ================= WEB APP ENTRY ================= */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Seminar Guide Allocation Dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/* ================= DIAGNOSTIC — run once ================= */
function DIAGNOSTIC() {
  Logger.log('=== DIAGNOSTIC START ===');
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    Logger.log('Spreadsheet: ' + ss.getName() + ' / ' + ss.getId());
    Logger.log('Sheets: ' + ss.getSheets().map(s => s.getName()).join(', '));
    const r = loadData();
    Logger.log('loadData OK: groups=' + r.groups.length + ' faculty=' + r.faculty.length);
    Logger.log('=== DIAGNOSTIC SUCCESS ===');
    return 'OK';
  } catch (err) {
    Logger.log('ERROR: ' + err.message);
    Logger.log('STACK: ' + err.stack);
    Logger.log('=== DIAGNOSTIC FAILED ===');
    throw err;
  }
}

/* ================= SPREADSHEET HELPERS ================= */
function getSS_() {
  return SpreadsheetApp.openById(SHEET_ID);
}

function getOrCreateSheet_(name, headers) {
  const ss = getSS_();
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#f0f1fa');
  }
  return sheet;
}

/* ================= PUBLIC API ================= */
function loadData() {
  try {
    const gs = getOrCreateSheet_(GROUPS_SHEET,  GROUP_HEADERS);
    const fs = getOrCreateSheet_(FACULTY_SHEET, FACULTY_HEADERS);
    let groups  = readGroups_(gs);
    let faculty = readFaculty_(fs);

    if (groups.length === 0 && faculty.length === 0) {
      writeGroups_(gs, seedGroups_());
      writeFaculty_(fs, seedFaculty_());
      groups  = readGroups_(gs);
      faculty = readFaculty_(fs);
    }
    const nextGroupId = groups.reduce((m,g)=>Math.max(m, Number(g.id)||0), 0) + 1;
    return { ok: true, groups, faculty, nextGroupId };
  } catch (err) {
    throw new Error('loadData: ' + err.message);
  }
}

function saveData(payload) {
  try {
    if (!payload) payload = {};
    const groups  = Array.isArray(payload.groups)  ? payload.groups  : [];
    const faculty = Array.isArray(payload.faculty) ? payload.faculty : [];
    const gs = getOrCreateSheet_(GROUPS_SHEET,  GROUP_HEADERS);
    const fs = getOrCreateSheet_(FACULTY_SHEET, FACULTY_HEADERS);
    writeGroups_(gs, groups);
    writeFaculty_(fs, faculty);
    const nextGroupId = groups.reduce((m,g)=>Math.max(m, Number(g.id)||0), 0) + 1;
    return { ok: true, groups, faculty, nextGroupId };
  } catch (err) {
    throw new Error('saveData: ' + err.message);
  }
}

function resetToSeed() {
  try {
    const gs = getOrCreateSheet_(GROUPS_SHEET,  GROUP_HEADERS);
    const fs = getOrCreateSheet_(FACULTY_SHEET, FACULTY_HEADERS);
    clearSheet_(gs); clearSheet_(fs);
    writeGroups_(gs, seedGroups_());
    writeFaculty_(fs, seedFaculty_());
    const groups = readGroups_(gs), faculty = readFaculty_(fs);
    const nextGroupId = groups.reduce((m,g)=>Math.max(m, Number(g.id)||0), 0) + 1;
    return { ok: true, groups, faculty, nextGroupId };
  } catch (err) { throw new Error('resetToSeed: ' + err.message); }
}

function clearAllData() {
  try {
    const gs = getOrCreateSheet_(GROUPS_SHEET,  GROUP_HEADERS);
    const fs = getOrCreateSheet_(FACULTY_SHEET, FACULTY_HEADERS);
    clearSheet_(gs); clearSheet_(fs);
    return { ok: true, groups: [], faculty: [], nextGroupId: 1 };
  } catch (err) { throw new Error('clearAllData: ' + err.message); }
}

/* ================= READ / WRITE ================= */
function readGroups_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow-1, GROUP_HEADERS.length).getValues()
    .filter(r => (r[0]!=='' && r[0]!==null) || (r[1]!=='' && r[1]!==null))
    .map(rowToGroup_);
}
function rowToGroup_(row) {
  const studentsRaw = safeParse_(row[5], []);
  const reviewsRaw  = safeParse_(row[10], []);
  const students = Array.isArray(studentsRaw)
    ? studentsRaw.map(s => ({name:String((s&&s.name)?s.name:''), enr:String((s&&s.enr)?s.enr:'')}))
    : [];
  const reviews = students.map((_,i)=>{
    const r = reviewsRaw[i];
    if (Array.isArray(r) && r.length===6) return r.map(v=>(v===''||v===null||v===undefined)?null:Number(v));
    return [null,null,null,null,null,null];
  });
  return {
    id: Number(row[0])||0,
    group: String(row[1]??''),
    course: String(row[2]??'') || 'MCA',
    sem: Number(row[3])||2,
    email: String(row[4]??''),
    students, topic: String(row[6]??''), domain: String(row[7]??''),
    type: String(row[8]??''), guide: String(row[9]??''),
    studentReviews: reviews,
    remark: String(row[11]??''), company: String(row[12]??''), letterUrl: String(row[13]??'')
  };
}
function readFaculty_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow-1, FACULTY_HEADERS.length).getValues()
    .filter(r => r[0]!=='' && r[0]!==null)
    .map(r => ({
      name: String(r[0]),
      status: String(r[1]??'') || 'Ph.D. Pursuing',
      cap: Number(r[2])||0
    }));
}
function writeGroups_(sheet, groups) {
  const lr = sheet.getLastRow();
  if (lr > 1) sheet.getRange(2, 1, lr-1, GROUP_HEADERS.length).clearContent();
  if (!groups.length) return;
  const rows = groups.map(g => {
    const students = (g.students||[]).map(s=>({name:String(s.name||''), enr:String(s.enr||'')}));
    const reviews = (g.studentReviews||[]).map(arr => {
      const out = [null,null,null,null,null,null];
      if (Array.isArray(arr)) for (let i=0;i<6;i++) {
        const v = arr[i]; out[i] = (v===null||v===''||v===undefined)?null:Number(v);
      }
      return out;
    });
    return [
      Number(g.id)||0, String(g.group||''), String(g.course||''), Number(g.sem)||2,
      String(g.email||''), JSON.stringify(students), String(g.topic||''),
      String(g.domain||''), String(g.type||''), String(g.guide||''),
      JSON.stringify(reviews), String(g.remark||''), String(g.company||''),
      String(g.letterUrl||'')
    ];
  });
  sheet.getRange(2, 1, rows.length, GROUP_HEADERS.length).setValues(rows);
}
function writeFaculty_(sheet, faculty) {
  const lr = sheet.getLastRow();
  if (lr > 1) sheet.getRange(2, 1, lr-1, FACULTY_HEADERS.length).clearContent();
  if (!faculty.length) return;
  const rows = faculty.map(f => [String(f.name||''), String(f.status||'Ph.D. Pursuing'), Number(f.cap)||0]);
  sheet.getRange(2, 1, rows.length, FACULTY_HEADERS.length).setValues(rows);
}
function clearSheet_(sheet) {
  const lr = sheet.getLastRow(), lc = sheet.getLastColumn();
  if (lr > 1 && lc > 0) sheet.getRange(2, 1, lr-1, lc).clearContent();
}
function seedGroups_() {
  return SEED_GROUPS.map(g => ({
    id:g.id, course:g.course, sem:g.sem, group:g.group, email:g.email,
    students: g.students.map(s=>({name:s.name,enr:s.enr})),
    topic:g.topic, domain:g.domain, type:g.type, guide:g.guide,
    studentReviews: g.students.map(()=>[null,null,null,null,null,null]),
    remark:'', company:'', letterUrl:''
  }));
}
function seedFaculty_() {
  return SEED_FACULTY.map(f => ({name:f[0], status:f[1], cap:3}));
}
function safeParse_(s, fb) {
  if (s===null||s===undefined||s==='') return fb;
  if (Array.isArray(s)) return s;
  try { return JSON.parse(s); } catch(e){ return fb; }
}
