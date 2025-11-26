import React from 'react';
import Card from '../components/card/Card';
import { useGetDashboardDataQuery } from '../features/JobDashboard/api/service';

// HR Home Dashboard (single-file React component)
// Tailwind CSS required in the project



const recentCandidates = [
    { id: 1, name: 'Ravi Kumar', role: 'Frontend Developer', status: 'Screening' },
    { id: 2, name: 'Priya Sharma', role: 'Data Analyst', status: 'Technical Round' },
    { id: 3, name: 'Amit Joshi', role: 'Backend Developer', status: 'HR Round' },
    { id: 4, name: 'Neha Verma', role: 'UI/UX Designer', status: 'Interview Scheduled' },
    { id: 5, name: 'Sahana Rao', role: 'Full Stack', status: 'Offered' },
];



const interviewsToday = [
    { id: 1, name: 'Ravi Kumar', role: 'Frontend', time: '10:00 AM', interviewer: 'Maya' },
    { id: 2, name: 'Priya Sharma', role: 'Data', time: '11:30 AM', interviewer: 'Ajay' },
    { id: 3, name: 'Amit Joshi', role: 'Backend', time: '2:00 PM', interviewer: 'Karan' },
];

// Small helper components


const SummaryCard: React.FC<any> = ({ item }) => (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col">
        <div className="text-sm text-gray-500">{item.title}</div>
        <div className="mt-2 flex items-baseline justify-between">
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-xs text-gray-600">{item.delta}</div>
        </div>
    </div>
);

const HRDashboard: React.FC = () => {
   const { data, isLoading, isError } = useGetDashboardDataQuery();
   
    const summary = data?.summary ?? [];
    const jobs = data?.jobs ?? [];
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Navbar */}
            <header className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold">HR</div>
                    <h1 className="text-xl font-semibold">HR Dashboard</h1>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        className="px-3 py-2 rounded border border-gray-200 bg-white text-sm"
                        placeholder="Search candidates, jobs..."
                    />
                    <button className="px-3 py-2 bg-blue-600 text-white rounded">+ Add</button>
                </div>
            </header>

            {/* Summary */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {
                    isLoading ? <div>Loading....</div> : isError ? <div>Something went Wrong</div> : <> {summary.map((s) => (
                        <SummaryCard key={s.id} item={s} />
                    ))}</>
                }

            </section>

            {/* Main grid */}
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column: Recent candidates + Interviews */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold">Recent Candidates</h2>
                            <button className="text-sm text-blue-600">View all</button>
                        </div>
                        <div className="divide-y">
                            {recentCandidates.map((c) => (
                                <div key={c.id} className="py-3 flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">{c.name}</div>
                                        <div className="text-sm text-gray-500">{c.role}</div>
                                    </div>
                                    <div className="text-sm text-gray-600">{c.status}</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold">Interviews Today</h2>
                            <div className="text-sm text-gray-500">{interviewsToday.length} scheduled</div>
                        </div>
                        <div className="space-y-3">
                            {interviewsToday.map((iv) => (
                                <div key={iv.id} className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">{iv.name}</div>
                                        <div className="text-sm text-gray-500">{iv.role} · {iv.interviewer}</div>
                                    </div>
                                    <div className="text-sm text-gray-600">{iv.time}</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Candidate pipeline placeholder (chart) */}
                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold">Candidate Pipeline</h2>
                            <div className="text-sm text-gray-500">Snapshot</div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-3">
                            <div className="p-3 bg-gray-50 rounded">Applied<br /><span className="font-bold">320</span></div>
                            <div className="p-3 bg-gray-50 rounded">Screening<br /><span className="font-bold">120</span></div>
                            <div className="p-3 bg-gray-50 rounded">Interview<br /><span className="font-bold">45</span></div>
                        </div>
                    </Card>
                </div>

                {/* Right column: Jobs, Quick Actions */}
                <div className="flex flex-col gap-6">
                    <Card className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-lg font-semibold">Open Job Positions</h2>
                            <button className="text-sm text-blue-600">View all</button>
                        </div>
                        <div className="space-y-3">
                            {jobs.map((j) => (
                                <div key={j.id} className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">{j.title}</div>
                                        <div className="text-sm text-gray-500">{j.location}</div>
                                    </div>
                                    <div className="text-sm text-gray-600">{j.applicants} appl.</div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-4">
                        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-2 px-3 rounded border text-sm">+ Add Job</button>
                            <button className="py-2 px-3 rounded border text-sm">+ Add Candidate</button>
                            <button className="py-2 px-3 rounded border text-sm">Schedule Interview</button>
                            <button className="py-2 px-3 rounded border text-sm">Export CSV</button>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <h3 className="text-lg font-semibold mb-3">Alerts</h3>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>3 interviews pending feedback</li>
                            <li>2 documents missing for candidate <strong>Ravi Kumar</strong></li>
                            <li>Offer approval pending for <strong>Neha Verma</strong></li>
                        </ul>
                    </Card>
                </div>
            </main>

            <footer className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} HR Dashboard</footer>
        </div>
    );
};

export default HRDashboard;