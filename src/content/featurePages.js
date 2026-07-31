// Easy-to-read content for the 7 feature pages
export const featurePages = {
  "guard-tour-system": {
    title: "Guard Tour System",
    hero: {
      title: "Guard Tour Tracking & Mobile Patrol Software",
      description: "Track guards in real time, confirm checkpoints with QR code scans, and send reports to clients automatically. You can see all guard activity clearly from one place.",
      ctaText: "Request Guard Tour Demo",
      placeholderType: "map"
    },
    miniCards: [
      {
        icon: "FiMapPin",
        title: "Live GPS Tracking",
        text: "See where your guards are and when they complete each patrol route."
      },
      {
        icon: "FiSmartphone",
        title: "QR Codes Scanning",
        text: "Guards scan QR codes to prove they visited the right checkpoint."
      },
      {
        icon: "FiCheckSquare",
        title: "Digital Checklists",
        text: "Ask guards to complete safety, fire, and site checks from the mobile app."
      }
    ],
    deepDives: [
      {
        eyebrow: "Proof of Presence",
        title: "Make Sure Every Checkpoint Is Visited",
        description: "Stop fake or missed patrols. Guards scan QR codes at each checkpoint. The system records the guard name, time, and location. If a patrol is missed or late, supervisors get an alert right away.",
        placeholderType: "checkPoint"
      },
      {
        eyebrow: "Incident Reports",
        title: "Report Incidents with Photos and Videos",
        description: "When a guard sees a problem, like an open gate, water leak, or broken lock, they can report it immediately through the app. They can add photos, videos, text notes, voice notes, and severity level. The system then creates a clean PDF report and sends it to the client automatically.",
        placeholderType: "incidentLog"
      },
      {
        eyebrow: "Manager Dashboard",
        title: "Control All Field Work from One Dashboard",
        description: "Replace spreadsheets with one simple dashboard. You can see active shifts, checkpoint progress, guard locations, and past patrol logs in one place. Missed checkpoints are highlighted so managers can take action quickly.",
        placeholderType: "penal"
      }
    ],
    allFeatures: [
      { icon: "FiMap", name: "GPS Route History", description: "See the exact path a guard followed during a patrol shift." },
      { icon: "FiCamera", name: "Photo Attachments", description: "Add photo proof to incidents, checklists, and safety logs." },
      { icon: "FiWifiOff", name: "Offline Sync", description: "Guards can scan and save data without internet. The data uploads when the signal returns." },
      { icon: "FiBell", name: "Missed Patrol Alerts", description: "Send SMS or email alerts if a checkpoint is not scanned on time." },
      { icon: "FiActivity", name: "Panic SOS Button", description: "Guards can send an emergency alert with their live location." },
      { icon: "FiList", name: "Custom Checklists", description: "Create special questions for different sites, days, weather, or patrol types." }
    ],
    faqs: [
      { question: "Can we use QR codes instead?", answer: "Yes. The mobile app supports QR codes. Guards can scan to confirm their presence." },
      { question: "How do missed patrol alerts work?", answer: "You can set a time limit, such as 15 minutes. If the guard does not scan the checkpoint in that time, the dashboard shows an alert and notifications are sent." },
      { question: "Does the app use too much phone battery?", answer: "No. The app is built to save battery by using smart GPS updates and background battery-saving settings." }
    ],
    quote: {
      text: "This guard tour system helped us show clients clear scan times and GPS routes. It makes our service more trusted and professional.",
      name: "Arthur Pendelton",
      role: "Security Director",
      company: "Pendelton Safe & Guard"
    }
  },

  "smart-guard-dispatch": {
    title: "Smart Guard Dispatch",
    hero: {
      title: "Smart Alarm Dispatch & Response Management",
      description: "Connect your control room, send jobs to guards, guide them with GPS, and create reports automatically. It helps reduce response time and improves service quality.",
      ctaText: "Request Dispatch Demo",
      placeholderType: "mobile"
    },
    miniCards: [
      {
        icon: "FiZap",
        title: "Fast Job Assignment",
        text: "Send alarm details to the nearest guard automatically using live GPS location."
      },
      {
        icon: "FiNavigation",
        title: "GPS Navigation",
        text: "Guide guards to the correct entrance, building, or alarm panel using in-app navigation."
      },
      {
        icon: "FiFileText",
        title: "Billing Records",
        text: "Save response time, tasks, and job details to help create correct invoices."
      }
    ],
    deepDives: [
      {
        eyebrow: "Control Room Connection",
        title: "Connect Easily with Monitoring Centers",
        description: "When an alarm is triggered at a monitoring center, the details can be sent directly to SecuSync through an API. This reduces manual phone calls and radio messages. The system can read building codes, key details, and response instructions automatically.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Nearest Guard Dispatch",
        title: "Send the Closest Guard to the Job",
        description: "SecuSync checks which patrol vehicle or guard is closest to the alarm location. The selected guard receives a notification. After accepting the job, they can see key safe codes, alarm zone details, and previous incident history.",
        placeholderType: "map"
      },
      {
        eyebrow: "Standard Checklists",
        title: "Use Clear Alarm Response Checklists",
        description: "The guard app shows step-by-step checks, such as checking the perimeter fence, front doors, and alarm panel. The guard must complete these steps before closing the alarm task.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Automatic Follow-up",
        title: "Send Digital Reports to Clients Instantly",
        description: "When the guard finishes the alarm response, the system creates a PDF report with alarm time, dispatch time, arrival time, departure time, resolution notes, and photos. The report is emailed to the client automatically.",
        placeholderType: "mobile"
      }
    ],
    allFeatures: [
      { icon: "FiRadio", name: "Alarm System Integration", description: "Receive structured alarm details from monitoring stations." },
      { icon: "FiMapPin", name: "Live ETA Tracking", description: "Show dispatchers and clients the guard's live estimated arrival time." },
      { icon: "FiLock", name: "Secure Key Codes", description: "Show key codes and site instructions only when the guard is on-site." },
      { icon: "FiDollarSign", name: "Automatic Billing Logs", description: "Record dispatch fees and mileage details for invoicing." },
      { icon: "FiActivity", name: "Escalation Rules", description: "Reassign tasks if a guard does not accept or arrive on time." },
      { icon: "FiMail", name: "Keyholder Alerts", description: "Send live status updates to client emergency contacts." }
    ],
    faqs: [
      { question: "How does the dispatch system connect with control rooms?", answer: "It can connect with common monitoring software through API connections or email parsing." },
      { question: "What happens if a guard is stuck in traffic?", answer: "Dispatchers can see live ETA. If the delay is too long, they can reassign the alarm to another guard." },
      { question: "Can we charge different rates for night shifts?", answer: "Yes. You can set contract rules so night, weekend, or holiday rates are added automatically." }
    ],
    quote: {
      text: "Our response time improved a lot. Automatic reports also helped us avoid billing disputes with clients.",
      name: "Gavin Cross",
      role: "Operations Manager",
      company: "Vanguard Response Services"
    }
  },

  "static-security": {
    title: "Static Security",
    hero: {
      title: "Digital Logbooks & Guard Tools for Fixed Sites",
      description: "Replace paper logbooks, visitor sheets, and key records with simple digital tools for guards working at reception desks, gates, and fixed sites.",
      ctaText: "Request Static Site Demo",
      placeholderType: "checklist"
    },
    miniCards: [
      {
        icon: "FiBookOpen",
        title: "Digital Logbook",
        text: "Guards can record handovers, visitor details, and daily notes in a searchable system."
      },
      {
        icon: "FiUsers",
        title: "Visitor Check-In",
        text: "Register visitors, create digital badges, and notify hosts when guests arrive."
      },
      {
        icon: "FiKey",
        title: "Asset & Key Tracking",
        text: "Track keys, equipment, and building assets with digital records and signatures."
      }
    ],
    deepDives: [
      {
        eyebrow: "Shift Handovers",
        title: "Simple Digital Shift Handovers",
        description: "Outgoing guards can add handover notes, pending tasks, and key details. Incoming guards can review and sign them digitally. Managers can see a full history of all shift handovers.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Visitor Management",
        title: "Professional Visitor Check-In",
        description: "Use SecuSync on a tablet at the reception desk. Visitors can enter their details, sign forms, and receive badges. The host gets an SMS or email notification, making the check-in process faster and more secure.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Incident Tracking",
        title: "Track Incidents and Facility Checks",
        description: "Static guards can complete scheduled checks, such as fire exit checks or server room temperature checks. If they find a problem, they can report it as an active incident. Managers can track the status until it is resolved.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Client Visibility",
        title: "Give Facility Managers Real-Time Access",
        description: "Clients can use a portal to see guard status, daily logs, visitor logs, and incident counts. This reduces manual updates and saves admin time.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiClipboard", name: "Custom Form Builder", description: "Create site-specific checklists, risk forms, and sign-in forms." },
      { icon: "FiUserCheck", name: "Host Alerts", description: "Notify employees when their visitor signs in." },
      { icon: "FiEdit3", name: "Digital Signatures", description: "Collect signatures for keys, assets, and important forms." },
      { icon: "FiClock", name: "Attendance Check", description: "Ask guards to log in from the site or scan a site code." },
      { icon: "FiAlertTriangle", name: "Hazard Register", description: "Show important site warnings, such as high voltage or unsafe areas." },
      { icon: "FiSearch", name: "Searchable Logs", description: "Quickly search old visitor logs and incident reports." }
    ],
    faqs: [
      { question: "Can clients see the visitor log in real time?", answer: "Yes. Clients can use the Customer Portal to see live visitor numbers and active security tasks for their site." },
      { question: "Can the system scan visitor IDs?", answer: "Yes. The tablet or mobile app can capture photos of badges, passports, or ID cards for verification." },
      { question: "Is the data protected?", answer: "Yes. Data is encrypted, and you can set auto-delete rules to follow privacy and compliance requirements." }
    ],
    quote: {
      text: "Digital logbooks made our front desk work cleaner and faster. Clients can now see important updates in real time.",
      name: "Samantha Vance",
      role: "Corporate Services VP",
      company: "Vance Tactical & Guard"
    }
  },

  "contract-management": {
    title: "Contract Management",
    hero: {
      title: "Contract Management & Automatic Invoicing",
      description: "Manage client contracts, service rules, patrol rates, shift costs, price updates, and invoices from one simple system.",
      ctaText: "Request Contracts Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiLayers",
        title: "SLA Records",
        text: "Store contract tasks, schedules, service rules, and pricing for all clients in one place."
      },
      {
        icon: "FiDollarSign",
        title: "Automatic Billing",
        text: "Use patrol scans, shift hours, and alarm calls to prepare monthly invoices."
      },
      {
        icon: "FiPercent",
        title: "Price Updates",
        text: "Apply rate changes, holiday charges, and special price rules quickly."
      }
    ],
    deepDives: [
      {
        eyebrow: "SLA Connection",
        title: "Connect Shift Schedules with Client SLAs",
        description: "Make sure guard schedules match client contract rules. Set required hours, patrol frequency, and target response times. The system alerts you if the schedule does not meet the SLA.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Invoicing",
        title: "Reduce Missed Billing and Manual Entry",
        description: "Every patrol scan, alarm response, and guard hour is saved in the system. The billing engine turns these records into clear draft invoices based on each client's contract rates.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Bulk Changes",
        title: "Update Prices in Bulk",
        description: "Changing hourly rates because of inflation or wage changes can take a lot of time. SecuSync lets you update prices across all contracts or selected contract groups, with custom rounding rules.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Task Planning",
        title: "Schedule Contract Tasks Automatically",
        description: "Create repeated contract tasks, such as checking fire extinguishers every quarter or inspecting locks every month. The system creates these tasks automatically and sends them to active guards.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiCalendar", name: "Special Rate Schedules", description: "Add extra charges for holidays, night shifts, and emergency work." },
      { icon: "FiClock", name: "Grace Period Rules", description: "Set time limits for early or late check-ins and working hours." },
      { icon: "FiTrendingUp", name: "Revenue Forecast", description: "Estimate future income from active contracts." },
      { icon: "FiLink", name: "Accounting Integrations", description: "Export invoices to Sage, QuickBooks, Xero, or other systems." },
      { icon: "FiAlertCircle", name: "Renewal Reminders", description: "Get reminders 30, 60, or 90 days before contracts expire." },
      { icon: "FiUsers", name: "Multi-Client Profiles", description: "Manage clients with multiple sites, departments, or billing rules." }
    ],
    faqs: [
      { question: "Can we set different rates for different guards?", answer: "Yes. Rates can be set by contract, site, task type, or guard qualification." },
      { question: "Which accounting systems are supported?", answer: "You can export CSV or XML files for most platforms. API connections are also available for systems like Xero and QuickBooks." },
      { question: "Can the system handle travel and mileage charges?", answer: "Yes. You can add travel fees or mileage-based billing for patrol jobs." }
    ],
    quote: {
      text: "Before SecuSync, we missed billing for some alarm responses. Now every callout is tracked and added to invoices automatically.",
      name: "Richard Croft",
      role: "Finance Director",
      company: "Croft Integrated Services"
    }
  },

  "customer-reports": {
    title: "Customer Reports",
    hero: {
      title: "Customer Portals & Automatic PDF Reports",
      description: "Keep clients updated with a branded portal, clear KPIs, and automatic PDF reports sent by email.",
      ctaText: "Request Reports Portal Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiGlobe",
        title: "24/7 Customer Portal",
        text: "Clients can see patrol progress, active guards, and past reports anytime."
      },
      {
        icon: "FiMail",
        title: "Automatic Emails",
        text: "Send shift logs or urgent incident reports as clean PDFs after completion."
      },
      {
        icon: "FiBarChart2",
        title: "KPI Dashboard",
        text: "Show response times, checkpoint completion, and safety results with simple charts."
      }
    ],
    deepDives: [
      {
        eyebrow: "White Labeling",
        title: "Show Your Own Security Brand",
        description: "Clients can access a portal with your logo, colors, and domain name. This makes your company look more professional and helps clients trust your service.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Interactive Maps",
        title: "Client Maps and Checkpoints",
        description: "Clients can view their sites on a map, see where checkpoints are placed, check scan history, and download photos linked to specific checks.",
        placeholderType: "map"
      },
      {
        eyebrow: "Incident Portal",
        title: "Share Incident Updates Instantly",
        description: "Important incidents appear in the customer portal right away. Clients can read the details, view photos or videos, check timestamps, and comment on the resolution process.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Scheduled Reports",
        title: "Choose When Reports Are Sent",
        description: "Set report rules for each client. Send an instant email when an incident is reported, a daily patrol summary at 7 AM, or a monthly performance report on the first day of the month.",
        placeholderType: "checklist"
      }
    ],
    allFeatures: [
      { icon: "FiUserCheck", name: "Client Access Control", description: "Let clients manage keyholder contacts and request patrols." },
      { icon: "FiFileText", name: "PDF Report Designer", description: "Choose which fields, charts, and logos appear in reports." },
      { icon: "FiShield", name: "Secure Login", description: "Allow company clients to log in with secure business accounts." },
      { icon: "FiDownload", name: "Bulk Data Export", description: "Download scan records and report data in CSV format." },
      { icon: "FiCheck", name: "Supervisor Approval", description: "Review and approve guard reports before clients can see them." },
      { icon: "FiClock", name: "Response Time KPIs", description: "Show average response times for important alarm sites." }
    ],
    faqs: [
      { question: "Can we hide internal guard notes from clients?", answer: "Yes. Guards can mark notes as internal for supervisors only or external for clients." },
      { question: "Is there a limit on client portal users?", answer: "No. You can add unlimited client portal users." },
      { question: "Can clients request extra patrols through the portal?", answer: "Yes. You can enable a service request button so clients can ask for extra patrols." }
    ],
    quote: {
      text: "Our clients no longer need to call for updates. They can log in, check scans, and download PDF reports themselves.",
      name: "Regina George",
      role: "Client Relations Mgr",
      company: "Regis Capital Security"
    }
  },

  "task-shift-planning": {
    title: "Task & Shift Planning",
    hero: {
      title: "Shift Scheduling & Mobile Sync",
      description: "Assign guards to shifts, manage leave, avoid double bookings, and send schedule updates to the guard app in real time.",
      ctaText: "Request Planning Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiCalendar",
        title: "Visual Scheduling",
        text: "Plan shifts on a clear timeline. See working guards, leave days, and open shifts."
      },
      {
        icon: "FiUserCheck",
        title: "Compliance Checks",
        text: "Avoid assigning guards who do not have the required training, licenses, or rest time."
      },
      {
        icon: "FiRefreshCw",
        title: "Live Mobile Sync",
        text: "Shift updates appear in the guard app instantly with push notifications."
      }
    ],
    deepDives: [
      {
        eyebrow: "Easy Scheduling",
        title: "Create Shifts Quickly",
        description: "The calendar shows open shifts and available guards. Managers can assign a guard to a shift easily. The system checks schedule conflicts, working hour limits, and rest periods in real time.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Qualification Match",
        title: "Assign the Right Guard to Each Site",
        description: "Some sites need guards with special training or licenses. SecuSync highlights guards who match the requirements, helping you avoid compliance problems.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Attendance Tracking",
        title: "GPS-Verified Clock-In",
        description: "Guards clock in and out from the mobile app. The system checks if they are at the correct site. If a guard does not clock in on time, dispatchers get a warning.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Leave Management",
        title: "Manage Holidays and Sick Leave",
        description: "Manage time-off requests, sick leave, and availability inside the calendar. Once leave is approved, the guard cannot be assigned to shifts during that time.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiPlusCircle", name: "Recurring Shift Templates", description: "Copy weekly schedules to future weeks with one click." },
      { icon: "FiUserX", name: "Open Shift Bidding", description: "Post open shifts so qualified guards can claim them from the mobile app." },
      { icon: "FiClock", name: "Timesheet Export", description: "Turn clock-in records into timesheets for payroll." },
      { icon: "FiBell", name: "Push Notifications", description: "Notify guards about new shifts, changes, and schedule releases." },
      { icon: "FiShield", name: "Working Hours Compliance", description: "Help schedules follow local working time rules." },
      { icon: "FiMessageSquare", name: "Shift Swap Requests", description: "Allow guards to request shift swaps with manager approval." }
    ],
    faqs: [
      { question: "What happens if a guard does not clock in?", answer: "If the guard does not clock in within the allowed time, the dashboard marks the shift as a no-show and alerts the dispatcher." },
      { question: "Can we track guard licenses?", answer: "Yes. You can save license expiry dates. The system can block guards with expired documents from being scheduled." },
      { question: "Can we plan schedules far in advance?", answer: "Yes. You can plan schedules months or even years ahead using recurring shift templates." }
    ],
    quote: {
      text: "Scheduling mistakes dropped to zero. GPS clock-in also gives us confidence that guards are really on-site.",
      name: "Tom Henderson",
      role: "Operations Chief",
      company: "Apex Security Group"
    }
  },

  "secusync-hub": {
    title: "SecuSync Hub",
    hero: {
      title: "Security Partner Network & Subcontracting",
      description: "Send alarm jobs to trusted partners, share tasks, manage reports, and grow your service coverage without buying more vehicles.",
      ctaText: "Request SecuSync Hub Demo",
      placeholderType: "map"
    },
    miniCards: [
      {
        icon: "FiShare2",
        title: "Partner Dispatch",
        text: "Send alarm response jobs to trusted local partners when your own teams are busy."
      },
      {
        icon: "FiActivity",
        title: "Same Service Quality",
        text: "Make partner guards follow the same checklists and send reports under your brand."
      },
      {
        icon: "FiGlobe",
        title: "Wider Coverage",
        text: "Offer service in more locations by working with trusted security partners."
      }
    ],
    deepDives: [
      {
        eyebrow: "Task Forwarding",
        title: "Send Alarm Jobs with One Click",
        description: "When an alarm comes from an area outside your main patrol zone, you can send the job to a partner agency through SecuSync Hub. The system shares key codes, directions, and task details securely.",
        placeholderType: "map"
      },
      {
        eyebrow: "Quality Control",
        title: "Keep Service Quality Consistent",
        description: "Partner guards receive the task in the SecuSync app. They must follow your checklists and scan on-site codes. You receive the completed report first, so you can review it before sending it to the client.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Automatic Settlements",
        title: "Simple Partner Billing",
        description: "Manage buying and selling rates inside the Hub. The system tracks which partner completed each job and calculates partner fees automatically, reducing manual accounting work.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Partner Marketplace",
        title: "Find Trusted Security Partners",
        description: "Search for security agencies by city or postal code. Build partner relationships, agree on service rules, and start sending jobs to grow your coverage without heavy investment.",
        placeholderType: "mobile"
      }
    ],
    allFeatures: [
      { icon: "FiScale", name: "Partner Profiles", description: "Manage approved partners, coverage areas, and contact details." },
      { icon: "FiLock", name: "Secure Access Details", description: "Key codes and entry details are encrypted and shown only during active jobs." },
      { icon: "FiRepeat", name: "Two-Way Job Sharing", description: "Send jobs to partners and receive jobs from partners in one system." },
      { icon: "FiCheckSquare", name: "Unified PDF Reports", description: "Send client reports that look the same, even when a partner completes the job." },
      { icon: "FiDollarSign", name: "Partner Billing Audits", description: "Use dispatch records to verify partner billing accurately." },
      { icon: "FiPercent", name: "Margin Management", description: "Set custom markup percentages for outsourced services." }
    ],
    faqs: [
      { question: "Is our customer data safe in the Hub?", answer: "Yes. Partners only see the address and job details needed for the task you send them." },
      { question: "Do partners need to use SecuSync?", answer: "For the best automated flow, yes. You can also send jobs to non-SecuSync partners using a secure browser link." },
      { question: "How do we manage subcontracting invoices?", answer: "The Hub creates a monthly settlement report showing completed jobs, fees owed, and fees receivable." }
    ],
    quote: {
      text: "SecuSync Hub helped us cover more locations. We used trusted partners for remote stores while keeping control over service quality.",
      name: "Jean-Louis Dupont",
      role: "Managing Director",
      company: "Dupont Securité Nationale"
    }
  }
};