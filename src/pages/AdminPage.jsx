import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, Wrench, Shield, CheckCircle2, Clock, AlertTriangle, Search, Filter, Phone, MapPin, RefreshCw, Plus, ChevronRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AdminPage({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('dispatch'); // 'dispatch', 'bookings', 'amc', 'inventory'
  const [filterStatus, setFilterStatus] = useState('all');

  const [jobs, setJobs] = useState([
    {
      id: 'RC-90412',
      customer: 'Dr. Rohan Jayasinghe',
      phone: '077 412 8890',
      location: 'Colombo 07 (Ward Place)',
      service: 'Full Chemical Foam Wash (2 Units)',
      tech: 'Kumara (Senior Tech)',
      time: 'Today 10:30 AM',
      status: 'In Progress',
      amount: 'Rs. 15,000'
    },
    {
      id: 'RC-90415',
      customer: 'Aura Fitness Gym',
      phone: '071 889 0012',
      location: 'Pamankada Road, Colombo 06',
      service: 'Emergency Breakdown / Water Leak',
      tech: 'Samantha (Tech #2)',
      time: 'Today 01:00 PM',
      status: 'Dispatched',
      amount: 'Rs. 8,500'
    },
    {
      id: 'RC-90418',
      customer: 'Shehan Dias',
      phone: '070 334 1122',
      location: 'Kalubowila, Dehiwala',
      service: 'R32 Gas Top-up + PSI Inspection',
      tech: 'Unassigned',
      time: 'Today 03:30 PM',
      status: 'Pending',
      amount: 'Rs. 6,500'
    },
    {
      id: 'RC-90401',
      customer: 'Ceylon Tea Lounge',
      phone: '011 234 5678',
      location: 'Kollupitiya, Colombo 03',
      service: 'Cassette Unit Deep Cleaning',
      tech: 'Nimal (Tech #3)',
      time: 'Yesterday 04:00 PM',
      status: 'Completed',
      amount: 'Rs. 24,000'
    },
    {
      id: 'RC-90395',
      customer: 'Priyanka Fernando',
      phone: '077 990 1234',
      location: 'Wellawatte, Colombo 06',
      service: 'New Panasonic Inverter Installation',
      tech: 'Kumara (Senior Tech)',
      time: 'Yesterday 11:00 AM',
      status: 'Completed',
      amount: 'Rs. 18,500'
    }
  ]);

  const amcContracts = [
    {
      client: 'Havelock Medical Clinic',
      contact: '011 258 9012',
      units: '6 Units (Inverter)',
      plan: 'Corporate Quarterly AMC',
      lastService: '12 Aug 2026',
      nextDue: '15 Oct 2026',
      status: 'Due in 3 Days',
      urgent: true
    },
    {
      client: 'Blue Ocean Residencies (Apt 4B)',
      contact: '077 223 4455',
      units: '3 Units',
      plan: 'Residential Annual Care',
      lastService: '10 Jul 2026',
      nextDue: '10 Nov 2026',
      status: 'Scheduled',
      urgent: false
    },
    {
      client: 'Colombo Law Chambers',
      contact: '011 445 6677',
      units: '8 Units (Cassette + Split)',
      plan: 'Corporate Premium AMC',
      lastService: '01 Sep 2026',
      nextDue: '01 Dec 2026',
      status: 'Active',
      urgent: false
    }
  ];

  const handleUpdateStatus = (jobId, newStatus) => {
    setJobs(jobs.map(j => j.id === jobId ? { ...j, status: newStatus } : j));
  };

  const filteredJobs = filterStatus === 'all' 
    ? jobs 
    : jobs.filter(j => j.status.toLowerCase() === filterStatus.toLowerCase());

  return (
    <div className="bg-[#F1F5F9] min-h-screen">
      {/* 🌟 Top Banner with Breadcrumb & Ops Center Photo */}
      <PageBanner
        badge="REFCON OPERATIONS CONTROL HUB • LIVE SYNC"
        badgeIcon={Shield}
        title="Field Dispatch & Service Management"
        subtitle="Real-time Colombo technician telemetry, job dispatch queues, and AMC corporate service tracking across Western Province."
        bgImage="/assets/banner-services.jpg"
        breadcrumbCurrent="Operations Admin"
        onNavigateHome={onNavigateHome}
        extraContent={
          <div className="flex items-center space-x-3">
            <button
              onClick={() => alert('Exporting monthly invoice report (PDF)...')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold shadow-xs backdrop-blur-md transition-all"
            >
              Export Report
            </button>
            <a
              href="https://wa.me/94704702040"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
            >
              <span>Broadcast Team Alert</span>
            </a>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 📊 KPI Dashboard Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bookings This Month</div>
            <div className="text-3xl font-black text-slate-900 font-heading mt-1">148</div>
            <div className="text-[11px] text-emerald-600 font-bold mt-1">↑ +24% vs last month</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Field Technicians</div>
            <div className="text-3xl font-black text-sky-600 font-heading mt-1">6 / 8</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">In Colombo 1-15 & Dehiwala</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active AMC Contracts</div>
            <div className="text-3xl font-black text-slate-900 font-heading mt-1">42</div>
            <div className="text-[11px] text-amber-600 font-bold mt-1">3 due for service this week</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Estimated Revenue (Oct)</div>
            <div className="text-3xl font-black text-slate-900 font-heading mt-1">Rs. 842K</div>
            <div className="text-[11px] text-emerald-600 font-bold mt-1">Average ticket: Rs. 6,800</div>
          </div>
        </div>

        {/* Navigation Tabs for Admin */}
        <div className="flex border-b border-slate-200 space-x-4 mb-6">
          {[
            { id: 'dispatch', label: 'Live Job Dispatch Board' },
            { id: 'amc', label: 'AMC Maintenance Contracts' },
            { id: 'technicians', label: 'Technician Fleet Status' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-xs font-bold transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-sky-600 text-sky-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Live Job Dispatch Board */}
        {activeTab === 'dispatch' && (
          <div className="space-y-4">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-500">Filter Status:</span>
                {['all', 'pending', 'dispatched', 'in progress', 'completed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold capitalize transition-all ${
                      filterStatus === st
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-500 font-bold">
                Showing {filteredJobs.length} active service orders
              </div>
            </div>

            {/* Jobs Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3.5 px-4">Booking ID</th>
                      <th className="py-3.5 px-4">Customer & Phone</th>
                      <th className="py-3.5 px-4">Location</th>
                      <th className="py-3.5 px-4">Service Details</th>
                      <th className="py-3.5 px-4">Assigned Tech</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredJobs.map((j) => (
                      <tr key={j.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-4 font-black text-slate-900">{j.id}</td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-slate-900">{j.customer}</div>
                          <div className="text-slate-400 text-[11px]">{j.phone}</div>
                        </td>
                        <td className="py-4 px-4 text-slate-600">{j.location}</td>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-slate-900">{j.service}</div>
                          <div className="text-[11px] text-sky-600 font-bold">{j.time} • {j.amount}</div>
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-700">
                          {j.tech}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            j.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                            j.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            j.status === 'Dispatched' ? 'bg-amber-100 text-amber-800' :
                            'bg-rose-100 text-rose-800'
                          }`}>
                            {j.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-1.5 whitespace-nowrap">
                          {j.status === 'Pending' && (
                            <button
                              onClick={() => handleUpdateStatus(j.id, 'Dispatched')}
                              className="px-2.5 py-1 rounded-lg bg-sky-600 text-white font-bold text-[10px]"
                            >
                              Dispatch
                            </button>
                          )}
                          {j.status === 'Dispatched' && (
                            <button
                              onClick={() => handleUpdateStatus(j.id, 'In Progress')}
                              className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[10px]"
                            >
                              Start
                            </button>
                          )}
                          {j.status === 'In Progress' && (
                            <button
                              onClick={() => handleUpdateStatus(j.id, 'Completed')}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[10px]"
                            >
                              Mark Done
                            </button>
                          )}
                          <a
                            href={`https://wa.me/94${j.phone.replace(/[^0-9]/g, '').slice(-9)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-[10px] inline-block"
                          >
                            WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: AMC Contracts */}
        {activeTab === 'amc' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-base font-black text-slate-900 font-heading">
                  Recurring AMC Accounts & Automated Reminders
                </h3>
                <p className="text-xs text-slate-500">
                  Clients receive automated WhatsApp & SMS alerts 7 days prior to their quarterly service cycle.
                </p>
              </div>
              <button 
                onClick={() => alert('New AMC contract registration modal')}
                className="px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs"
              >
                + Register New AMC
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {amcContracts.map((c, i) => (
                <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900 text-sm">{c.client}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">
                        {c.units}
                      </span>
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      {c.plan} • Contact: {c.contact}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Next Service Due</div>
                      <div className={`font-black ${c.urgent ? 'text-rose-600' : 'text-slate-800'}`}>
                        {c.nextDue} ({c.status})
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Automated reminder sent to ${c.client} via WhatsApp!`)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-[11px] ${
                        c.urgent
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {c.urgent ? 'Send Auto Reminder' : 'Remind'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Technician Fleet Status */}
        {activeTab === 'technicians' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Kumara (Senior HVAC Tech)', phone: '077 810 6492', location: 'Ward Place, Colombo 07', jobsToday: 3, status: 'On Site' },
              { name: 'Samantha (Diagnostic Specialist)', phone: '070 470 2040', location: 'En Route to Havelock Rd', jobsToday: 2, status: 'Driving' },
              { name: 'Nimal (Installation Lead)', phone: '077 806 4308', location: 'Dehiwala Hub (Standby)', jobsToday: 4, status: 'Available' }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-black text-slate-900 font-heading text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-[11px]">{t.phone}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    t.status === 'On Site' ? 'bg-blue-100 text-blue-800' :
                    t.status === 'Driving' ? 'bg-amber-100 text-amber-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {t.status}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{t.location}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Completed {t.jobsToday} services today
                  </div>
                </div>

                <a
                  href={`tel:${t.phone}`}
                  className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3 text-sky-600" />
                  <span>Call Technician</span>
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
