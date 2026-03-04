
let activeTab = 'all';

const jobs = [
  {
    id: 1,
    company: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130k - $175k',
    description: 'Build cross-platform mobile applications using React Native.',
    status: 'not_applied'
  },
  {
    id: 2,
    company: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$80k - $120k',
    description: 'Create modern and responsive websites for global clients.',
    status: 'not_applied'
  },
  {
    id: 3,
    company: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125k - $165k',
    description: 'Transform complex data into meaningful visual insights.',
    status: 'not_applied'
  },
  {
    id: 4,
    company: 'CloudNine',
    position: 'Cloud Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $160k',
    description: 'Manage and optimize cloud infrastructure systems.',
    status: 'not_applied'
  },
  {
    id: 5,
    company: 'AI Labs',
    position: 'Machine Learning Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140k - $190k',
    description: 'Develop scalable machine learning pipelines.',
    status: 'not_applied'
  },
  {
    id: 6,
    company: 'FinTech Hub',
    position: 'Backend Engineer',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$135k - $170k',
    description: 'Build secure and high-performance financial systems.',
    status: 'not_applied'
  },
  {
    id: 7,
    company: 'HealthTech',
    position: 'Software Engineer',
    location: 'Remote',
    type: 'Contract',
    salary: '$110k - $150k',
    description: 'Develop software solutions for healthcare platforms.',
    status: 'not_applied'
  },
  {
    id: 8,
    company: 'Creative Studio',
    position: 'UI Engineer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$115k - $145k',
    description: 'Design and maintain scalable UI systems.',
    status: 'not_applied'
  }
];


const jobList = document.getElementById('jobList');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const tabJobCount = document.getElementById('tabJobCount');


function updateDashboard() {
  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(j => j.status === 'interview').length;
  rejectedCount.textContent = jobs.filter(j => j.status === 'rejected').length;
}

function updateTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === activeTab);
  });
}


function renderJobs() {
  jobList.innerHTML = '';

  const filteredJobs =
    activeTab === 'all'
      ? jobs
      : jobs.filter(job => job.status === activeTab);

  tabJobCount.textContent = `${filteredJobs.length} jobs`;

  // Empty state handling
  if (filteredJobs.length === 0) {
    emptyState.style.display = 'block';
    return;
  } else {
    emptyState.style.display = 'none';
  }

  filteredJobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';

    const badgeText =
      job.status === 'not_applied'
        ? 'NOT APPLIED'
        : job.status.toUpperCase();

    card.innerHTML = `
      <span class="delete">🗑</span>
      <h3>${job.company}</h3>
      <strong>${job.position}</strong>
      <p>${job.location} • ${job.type} • ${job.salary}</p>
      <span class="badge ${job.status}">${badgeText}</span>
      <p>${job.description}</p>
      <div class="actions">
        <button class="interview">Interview</button>
        <button class="rejected">Rejected</button>
      </div>
    `;

    /* ===== TOGGLE LOGIC (FIXED) ===== */



}