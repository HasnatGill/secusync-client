// Content for the 7 feature pages
export const featurePages = {
  "guard-tour-system": {
    title: "Guard Tour System",
    hero: {
      title: "Complete Guard Tour Verification & Mobile Patrol Software",
      description: "Get real-time tracking, NFC/QR checkpoint verification, and automatic client reporting. Put complete operations visibility in the palm of your hand.",
      ctaText: "Request Guard Tour Demo",
      placeholderType: "map"
    },
    miniCards: [
      {
        icon: "FiMapPin",
        title: "Live GPS Tracking",
        text: "Track your security officers' locations and route completion times live as they occur."
      },
      {
        icon: "FiSmartphone",
        title: "NFC & QR Scanning",
        text: "Ensure accurate proof-of-presence by requiring physical scans at designated checkpoints."
      },
      {
        icon: "FiCheckSquare",
        title: "Digital Checklists",
        text: "Prompt guards to complete safety, fire, and facility checks at specific locations."
      }
    ],
    deepDives: [
      {
        eyebrow: "Proof of Presence",
        title: "Ensure Checkpoints Are Actually Visited",
        description: "Eliminate pencil-whipping. Guards scan NFC tags, RFID tokens, or QR codes at defined intervals. The system registers the time, location, and user, instantly updating the dispatch center. If a patrol route is missed or delayed, automated alert protocols notify supervisors immediately.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Route Optimization",
        title: "Optimize Patrol Paths for Peak Efficiency",
        description: "View real-time map statistics detailing guard speeds and routes. Our route optimization tool calculates the most resource-efficient patrol schedule, helping you save fuel, reduce vehicle wear, and increase patrol frequencies across clustered client sites.",
        placeholderType: "map"
      },
      {
        eyebrow: "Instant Incident Reports",
        title: "Log Incidents with Photo & Video Proof",
        description: "When a guard encounters an issue—such as an open gate, water leak, or broken lock—they can file an incident report on the spot. The app enables them to capture images, add text or voice notes, and assign severity levels. Reports are compiled into clean PDFs and sent to clients automatically.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Manager Dashboard",
        title: "Central Control Over All Field Operations",
        description: "Ditch the spreadsheets. Our centralized web dashboard displays active shifts, checkpoint progress bars, map pins, and historical route logs. Monitor everything from a single browser tab, with visual warnings for missed checkpoints.",
        placeholderType: "dashboard"
      }
    ],
    allFeatures: [
      { icon: "FiMap", name: "GPS Breadcrumb Trails", description: "Verifiable map history showing the exact path taken during a patrol shift." },
      { icon: "FiCamera", name: "Media Attachments", description: "Attach photo evidence to incidents, checklists, and safety logs in real time." },
      { icon: "FiWifiOff", name: "Offline Syncing", description: "Guards scan and log data in underground cellars; data uploads when signal returns." },
      { icon: "FiBell", name: "Missed Tour Alerts", description: "SMS and email notifications if a checkpoint is not scanned within the grace window." },
      { icon: "FiActivity", name: "Panic SOS Button", description: "Immediate distress signal from the mobile app to dispatch with live coordinates." },
      { icon: "FiList", name: "Ad-hoc Checklists", description: "Create tailored questions for specific days, weather conditions, or holiday patrols." }
    ],
    faqs: [
      { question: "Can we use QR codes instead of NFC tags?", answer: "Yes, our mobile app supports both NFC tags and high-resolution QR codes. Guards simply tap or scan to verify presence." },
      { question: "How do alerts for missed tours work?", answer: "You can set up tolerance windows (e.g. 15 minutes). If a scheduled scan does not occur within this window, the web dashboard flashes red and alerts are sent." },
      { question: "Does the app drain mobile battery?", answer: "Our app is highly optimized for battery efficiency, using smart GPS ping intervals and background battery saving protocols." }
    ],
    quote: {
      text: "The guard tour system changed how we pitch clients. Showing them exact NFC scan times and GPS trails on live maps wins contracts every time.",
      name: "Arthur Pendelton",
      role: "Security Director",
      company: "Pendelton Safe & Guard"
    }
  },

  "smart-guard-dispatch": {
    title: "Smart Guard Dispatch",
    hero: {
      title: "Automated Alarm Dispatch & Response Coordination",
      description: "Connect to control rooms, automate callouts, guide responders with GPS, and issue immediate digital reports. Shrink response times by up to 40%.",
      ctaText: "Request Dispatch Demo",
      placeholderType: "mobile"
    },
    miniCards: [
      {
        icon: "FiZap",
        title: "Immediate Routing",
        text: "Send alarm details to the closest responder automatically based on current GPS location."
      },
      {
        icon: "FiNavigation",
        title: "Turn-by-Turn GPS",
        text: "Guide officers directly to the correct entrance and alarm panel with in-app navigation."
      },
      {
        icon: "FiFileText",
        title: "Instant Invoicing Data",
        text: "Automatically log response durations and tasks to create accurate, unarguable invoice bills."
      }
    ],
    deepDives: [
      {
        eyebrow: "Control Room Link",
        title: "Seamless Integration with Monitoring Centers",
        description: "When an alarm is triggered in a central monitoring station, it flows directly into SecuSync via API. There is no need for manual phone calls or radios. The system parses building codes, keys, and response instructions automatically.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Proximity Dispatch",
        title: "Intelligent Matching of the Closest Responder",
        description: "SecuSync computes which mobile patrol vehicle is closest to the alarm source. The selected guard receives a notification, and upon acceptance, the system displays key safe codes, alarm zone details, and previous incident histories.",
        placeholderType: "map"
      },
      {
        eyebrow: "Standardized Checklists",
        title: "Structured Alarm Intervention Checklists",
        description: "To ensure thorough investigation, the guard app forces checking specific zones—e.g. check perimeter fence, inspect front doors, check alarm panels. The guard completes these checks before they can resolve the alarm task.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Automated Follow-up",
        title: "Instant Digital Reports and Client Feedback",
        description: "As soon as the guard resolves the alarm, a formatted PDF report with timestamps (alarm time, dispatch time, arrival, departure, resolution) and pictures is compiled and emailed to your client, proving value and speed.",
        placeholderType: "mobile"
      }
    ],
    allFeatures: [
      { icon: "FiRadio", name: "SIA & CID Integration", description: "Receive structured alarm protocols directly from monitoring stations." },
      { icon: "FiMapPin", name: "Guaranteed ETA Tracking", description: "Provide dispatchers and clients with real-time ETA progress maps." },
      { icon: "FiLock", name: "Secure Key Code Safe", description: "Only reveals key codes and safe instructions when the guard is physically on-site." },
      { icon: "FiDollarSign", name: "Automated Billing Logs", description: "Logs precise dispatch and mileage fees to export directly to invoicing." },
      { icon: "FiActivity", name: "Escalation Workflows", description: "Redirect alarm tasks if a guard doesn't accept or arrive within set limits." },
      { icon: "FiMail", name: "Auto-notify Keyholders", description: "Trigger notifications to client emergency contacts with live status updates." }
    ],
    faqs: [
      { question: "How does the dispatch system connect to control rooms?", answer: "We support integrations with common monitoring software (Shorrock, Sentinel, MAS, etc.) via direct IP APIs or SMTP parsing." },
      { question: "What happens if a dispatched guard is blocked in traffic?", answer: "Dispatchers see active ETAs. If an ETA exceeds threshold limits, the dispatcher can quickly re-assign the alarm with one click." },
      { question: "Can we charge different fees for night shifts?", answer: "Yes. Contract conditions are linked to the system, so holiday, night, or weekend rates apply to dispatch logs automatically." }
    ],
    quote: {
      text: "Our dispatch dispatch-to-arrival time dropped from 35 minutes to under 19 minutes. The automated reporting has eliminated billing disputes entirely.",
      name: "Gavin Cross",
      role: "Operations Manager",
      company: "Vanguard Response Services"
    }
  },

  "static-security": {
    title: "Static Security",
    hero: {
      title: "Digital Logbooks & Guard Presence for Fixed Sites",
      description: "Replace physical paper logbooks, visitor sheets, and key logs. Provide guards at reception desks and static gates with powerful digital tools.",
      ctaText: "Request Static Site Demo",
      placeholderType: "checklist"
    },
    miniCards: [
      {
        icon: "FiBookOpen",
        title: "Digital Logbook",
        text: "Guards document handovers, visitor records, and general logs in a searchable database."
      },
      {
        icon: "FiUsers",
        title: "Visitor Registration",
        text: "Check in guests, issue digital badges, and automatically notify hosts upon arrival."
      },
      {
        icon: "FiKey",
        title: "Asset & Key Tracking",
        text: "Digitally log key handovers, equipment use, and building assets with signatures."
      }
    ],
    deepDives: [
      {
        eyebrow: "Shift Handovers",
        title: "Seamless Digital Duty Handovers",
        description: "Outgoing guards file shift handover notes, pending tasks, and key audits. Incoming guards review and sign off digitally, ensuring no critical task is forgotten. Management maintains a full audit log of all shift transfers.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Visitor Management",
        title: "Professional Guest & Visitor Check-In",
        description: "Run SecuSync on a tablet at your reception desk. Visitors register details, sign NDA forms, and receive badges. The host is instantly notified via SMS or email, streamlining lobby queues and elevating building security.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Incident Tracking",
        title: "Incident Tracking & Facility Checklists",
        description: "Static guards perform scheduled walkthroughs (e.g. fire escape checks, server room temperature readings). If an anomaly is spotted, it's filed under active incidents. Visual trackers show the status of resolving tasks.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Client Transparency",
        title: "Real-time Access for Facility Managers",
        description: "Provide clients with a portal where they can check active guard status, daily logs, visitor logs, and incident counts. Eliminate the need for weekly summaries, saving administrative resources.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiClipboard", name: "Custom Form Builder", description: "Design site-specific checklists, risk assessments, and sign-ins." },
      { icon: "FiUserCheck", name: "Host Alerts", description: "Automated notifications to employees when their guest signs in." },
      { icon: "FiEdit3", name: "Digital Signatures", description: "Capture sign-offs for key retrievals, asset handovers, and NDAs." },
      { icon: "FiClock", name: "Attendance Verifier", description: "Requires guards to log in from local IPs or scan unique on-site codes." },
      { icon: "FiAlertTriangle", name: "Hazards Register", description: "Persistent warning display for on-site hazards (asbestos, high voltage)." },
      { icon: "FiSearch", name: "Audit-ready Logs", description: "Search months of historical visitor logs and incident files instantly." }
    ],
    faqs: [
      { question: "Can clients view the visitor log in real time?", answer: "Yes. Using the Customer Portal, clients can view live visitor numbers and active security tasks for their specific location." },
      { question: "Does the system support scanning visitor IDs?", answer: "Yes, our mobile/tablet interface supports capturing photos of visitor badges, passports, or ID cards for verification." },
      { question: "Is data protected under local privacy laws?", answer: "Yes. All data storage is fully encrypted and supports configurable auto-deletion settings for compliance with GDPR and privacy rules." }
    ],
    quote: {
      text: "Moving to digital logbooks cleaned up our corporate front desks. Our clients log into the portal and see everything happening in real time.",
      name: "Samantha Vance",
      role: "Corporate Services VP",
      company: "Vance Tactical & Guard"
    }
  },

  "contract-management": {
    title: "Contract Management",
    hero: {
      title: "Centralized Contract Hub & Automatic Invoicing",
      description: "Manage customer SLAs, link patrol rates to shifts, automate indexations, and generate flawless invoices directly from service logs.",
      ctaText: "Request Contracts Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiLayers",
        title: "Central SLA Registry",
        text: "Store contract tasks, schedules, and custom pricing for all clients in one digital database."
      },
      {
        icon: "FiDollarSign",
        title: "Automatic Billing",
        text: "Feed scanned patrols, shift hours, and alarm calls directly into monthly invoicing pipelines."
      },
      {
        icon: "FiPercent",
        title: "Indexation & Price Changes",
        text: "Apply bulk price indexations, custom holiday surcharges, and rate adjustments instantly."
      }
    ],
    deepDives: [
      {
        eyebrow: "SLA Linking",
        title: "Link Shift Schedules directly to SLAs",
        description: "Ensure security guard schedules exactly match client contract constraints. Define required hours, frequencies, and target response times. The system alerts you if schedules fall short of SLA commitments.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Invoicing Integration",
        title: "Eradicate Billing Leaks and Double Entry",
        description: "Every scanned patrol tag, alarm response, and static guard hour is logged. The billing engine converts these operations records into clean draft invoices based on the contract's specific rate parameters.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Bulk Adjustments",
        title: "Manage Bulk Pricing Indexations",
        description: "Adjusting hourly rates due to inflation or minimum wage changes takes hours of work. SecuSync allows you to run bulk price indexations across all or specific groups of contracts, with customized rounding rules.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Task Tracking",
        title: "Contract Task Scheduling",
        description: "Specify periodic contract tasks—e.g. check fire extinguishers every quarter, inspect locks on the first of the month. The system generates these tasks automatically, dispatching them to active guards.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiCalendar", name: "Surcharge Schedules", description: "Apply percentage hikes for Christmas, night shifts, and emergencies." },
      { icon: "FiClock", name: "Grace Period Rules", description: "Configure tolerance limits for early/late guard check-ins and hours." },
      { icon: "FiTrendingUp", name: "Revenue Forecaster", description: "Project recurring revenues based on current contract structures." },
      { icon: "FiLink", name: "ERP Integrations", description: "Export draft invoices directly to Sage, QuickBooks, Xero, or custom ERPs." },
      { icon: "FiAlertCircle", name: "Renewal Reminders", description: "Get notifications 30, 60, and 90 days before contract expiry dates." },
      { icon: "FiUsers", name: "Multi-Client Profiles", description: "Manage complex clients with multiple sub-entities and billing rules." }
    ],
    faqs: [
      { question: "Can we set different rates for individual guards?", answer: "Yes, rate cards can be set by contract, by location, by specific task types, or by guard qualifications." },
      { question: "What accounting packages do you support?", answer: "We support CSV/XML exports for all standard platforms and direct API synchronizations for Xero, QuickBooks, and popular European ERPs." },
      { question: "Does the contract system handle travel and mileage?", answer: "Yes, you can configure automatic travel surcharges or mileage-based billing for patrol runs." }
    ],
    quote: {
      text: "We used to miss billing for about 5% of our alarm responses. With SecuSync, every single callout is tracked and automatically invoiced.",
      name: "Richard Croft",
      role: "Finance Director",
      company: "Croft Integrated Services"
    }
  },

  "customer-reports": {
    title: "Customer Reports",
    hero: {
      title: "Real-time Customer Portals & Automated PDF Reports",
      description: "Deliver absolute transparency. Provide your clients with a white-labeled portal, custom KPIs, and automated email reports.",
      ctaText: "Request Reports Portal Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiGlobe",
        title: "24/7 Customer Portal",
        text: "Let clients view patrol progress, active guards, and past reports on a secure web app."
      },
      {
        icon: "FiMail",
        title: "Automated Emailing",
        text: "Send daily shift logs or urgent incident alerts as clean PDFs immediately after completion."
      },
      {
        icon: "FiBarChart2",
        title: "KPI Analytics Dash",
        text: "Provide graphs showing response times, checkpoint percentages, and safety statistics."
      }
    ],
    deepDives: [
      {
        eyebrow: "White Labeling",
        title: "Promote Your Own Security Brand",
        description: "Your clients access a portal styled with your logo, brand colors, and domain name. Elevate your professionalism and make security reports a powerful retention tool that solidifies your brand presence.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Interactive Maps",
        title: "Interactive Client Maps and Checkpoints",
        description: "Clients can drill down into their properties, view where NFC tags are installed, check the exact history of when each tag was scanned, and download photo attachments associated with specific checks.",
        placeholderType: "map"
      },
      {
        eyebrow: "Incident Portal",
        title: "Instant Incident Communication",
        description: "When high-priority incidents occur, they appear on the customer portal instantly. Clients can read descriptions, view media files, verify guard timestamps, and comment on resolution paths directly.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Scheduled Summaries",
        title: "Flexible Scheduling for Report Delivery",
        description: "Define delivery rules per client. Send an instant email when an incident is logged, a daily summary of patrol runs at 7 AM, or a comprehensive monthly performance scorecard on the first of the month.",
        placeholderType: "checklist"
      }
    ],
    allFeatures: [
      { icon: "FiUserCheck", name: "Granular Client Access", description: "Allow clients to manage their own keyholder contact info and order tours." },
      { icon: "FiFileText", name: "PDF Report Designer", description: "Choose which fields, charts, and logos appear in exported reports." },
      { icon: "FiShield", name: "Secure SSO Portals", description: "Allow corporate clients to log in using standard company credentials." },
      { icon: "FiDownload", name: "Bulk Export Data", description: "Download CSV reports of scanned data for custom client data analysis." },
      { icon: "FiCheck", name: "Supervisor Approvals", description: "Review and approve guard reports before they become visible to clients." },
      { icon: "FiClock", name: "Response Time KPIs", description: "Display average dispatch-to-on-site times for critical alarm sites." }
    ],
    faqs: [
      { question: "Can we hide specific internal guard notes from clients?", answer: "Yes. Guards can mark notes as 'internal' (only visible to supervisors) or 'external' (shared with clients on the portal)." },
      { question: "Is there a limit to how many client portal users we can add?", answer: "No, SecuSync offers unlimited client portal accounts for all customers at no additional cost." },
      { question: "Can clients request extra patrol runs via the portal?", answer: "Yes, you can enable an optional service request button that places ad-hoc patrol orders on the dispatcher's queue." }
    ],
    quote: {
      text: "Our clients stopped calling us for updates. They just log in, see when the guards scanned the gates, and download the report PDFs. It saved our front desk endless calls.",
      name: "Regina George",
      role: "Client Relations Mgr",
      company: "Regis Capital Security"
    }
  },

  "task-shift-planning": {
    title: "Task & Shift Planning",
    hero: {
      title: "Drag-and-Drop Shift Scheduling & Mobile Sync",
      description: "Match qualified guards to shifts, track holiday and sickness, prevent double-bookings, and sync schedules to the guard app in real time.",
      ctaText: "Request Planning Demo",
      placeholderType: "dashboard"
    },
    miniCards: [
      {
        icon: "FiCalendar",
        title: "Visual Scheduling",
        text: "Plan shifts on a clean, visual timeline. See who is working, who is on holiday, and which shifts are open."
      },
      {
        icon: "FiUserCheck",
        title: "Compliance Checking",
        text: "Prevent scheduling guards who lack required training, certifications, or break limits."
      },
      {
        icon: "FiRefreshCw",
        title: "Live Mobile Sync",
        text: "Updates to shifts appear instantly in the guard mobile app with push notifications."
      }
    ],
    deepDives: [
      {
        eyebrow: "Drag-and-Drop",
        title: "Schedule Shifts in Seconds",
        description: "Our interactive calendar shows open shifts alongside active employee lists. Simply drag a guard's name onto a shift. The system checks for scheduling conflicts, maximum working hours, and rest periods in real time.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Qualification Match",
        title: "Assign the Right Guard to the Right Site",
        description: "Avoid compliance fines. If a corporate site requires a guard with a specific first-aid or firearms license, SecuSync highlights guards who match those credentials, preventing accidental allocation of unlicensed staff.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Attendance Tracking",
        title: "GPS-verified Mobile Clock-In",
        description: "Guards clock in and out directly from the mobile app. The system checks if their GPS location matches the site perimeter. If a guard fails to clock in on time, dispatchers receive a warning to call the officer.",
        placeholderType: "mobile"
      },
      {
        eyebrow: "Leave Management",
        title: "Consolidated Holiday & Sick Leave Tracker",
        description: "Manage time-off requests, sick leave, and availabilities directly inside the calendar. Approved leave automatically blocks the guard from being assigned, preventing double-bookings and last-minute callouts.",
        placeholderType: "map"
      }
    ],
    allFeatures: [
      { icon: "FiPlusCircle", name: "Recurring Shift Templates", description: "Copy weekly schedule structures to future periods in one click." },
      { icon: "FiUserX", name: "Open Shift Bidding", description: "Post unassigned shifts to qualified guards to claim via mobile app." },
      { icon: "FiClock", name: "Timesheet Export", description: "Convert GPS clock-in records directly to timesheets for payroll." },
      { icon: "FiBell", name: "Push Notifications", description: "Guards receive notifications for schedule releases, changes, or shifts." },
      { icon: "FiShield", name: "Working Hours compliance", description: "Ensures schedules align with European/local working time regulations." },
      { icon: "FiMessageSquare", name: "In-App Shift Swap", description: "Allow guards to request shift swaps, subject to manager approval." }
    ],
    faqs: [
      { question: "What happens if a guard fails to clock in?", answer: "If clock-in doesn't occur within a set grace period (e.g. 5 minutes), the dispatcher's screen flags the shift as a 'no-show' and sounds a warning." },
      { question: "Can we use this to track guard licenses?", answer: "Yes, license expiry dates can be logged. The system blocks guards with expired credentials from being scheduled." },
      { question: "Is there a limit on how far in advance we can schedule?", answer: "No, schedules can be planned months or years in advance using recurring shift templates." }
    ],
    quote: {
      text: "Our scheduling errors dropped to zero. The GPS-verified clock-in gives us absolute confidence that guards are on-site when they say they are.",
      name: "Tom Henderson",
      role: "Operations Chief",
      company: "Apex Security Group"
    }
  },

  "secusync-hub": {
    title: "SecuSync Hub",
    hero: {
      title: "Private Security Collaboration Network & Subcontracting",
      description: "Subcontract alarm responses, share security tasks, coordinate with external partners, and expand your service coverage without adding vehicles.",
      ctaText: "Request SecuSync Hub Demo",
      placeholderType: "map"
    },
    miniCards: [
      {
        icon: "FiShare2",
        title: "Dispatch Collaboration",
        text: "Easily forward alarm response tasks to trusted local partners when your cars are busy."
      },
      {
        icon: "FiActivity",
        title: "Unified Service Level",
        text: "Ensure subcontracted guards use the same checklists and send reports under your brand."
      },
      {
        icon: "FiGlobe",
        title: "Extended Coverage",
        text: "Offer nationwide security solutions by building a virtual network of independent partners."
      }
    ],
    deepDives: [
      {
        eyebrow: "Task Forwarding",
        title: "Outsource Alarms with One Click",
        description: "When an alarm comes in for a location outside your primary patrol zone, forward the task to a partner agency in the SecuSync Hub. The system handles secure key codes, directions, and task parameters automatically.",
        placeholderType: "map"
      },
      {
        eyebrow: "Quality Controls",
        title: "Ensure Consistent Service Quality",
        description: "Subcontracted guards download the tasks into their SecuSync app. They must follow your predefined checklists and scan on-site barcodes. You receive the completed report immediately to review before forwarding to the client.",
        placeholderType: "checklist"
      },
      {
        eyebrow: "Automated Settlements",
        title: "Clear Inter-Company Accounting",
        description: "Manage buying and selling rates inside the Hub. The platform tracks who did what job, calculating the inter-company fees automatically to eliminate complex manual cost reconciliations at the end of the month.",
        placeholderType: "dashboard"
      },
      {
        eyebrow: "Network Hub Marketplace",
        title: "Find Trusted Security Partners",
        description: "Search for security agencies in specific postal codes or cities that use SecuSync. Build relationships, agree on SLA terms, and start forwarding jobs to increase your national footprint without capital investment.",
        placeholderType: "mobile"
      }
    ],
    allFeatures: [
      { icon: "FiScale", name: "Partner Profiles", description: "Manage approved partners, coverage zones, and contact coordinates." },
      { icon: "FiLock", name: "Safe Credential Handover", description: "Key codes and entry data are encrypted and only visible during dispatch." },
      { icon: "FiRepeat", name: "Two-way Integrations", description: "Send jobs to partners and receive jobs from partners in a unified view." },
      { icon: "FiCheckSquare", name: "Consolidated PDF Reports", description: "Deliver reports to clients that look completely uniform, regardless of responder." },
      { icon: "FiDollarSign", name: "Hub Billing Audits", description: "Audited dispatch logs verify correct billing fees across partner contracts." },
      { icon: "FiPercent", name: "Margin Management", description: "Configure custom markup percentages for outsourced services." }
    ],
    faqs: [
      { question: "Is our customer list safe in the Hub?", answer: "Yes, customer data is strictly siloed. Partners only see the specific address and dispatch details for the active job forwarded to them." },
      { question: "Do partners need to be using SecuSync?", answer: "Yes, for the seamless automated flow. However, you can also dispatch to non-SecuSync partners who receive a secure link to log their report in a browser." },
      { question: "How do we settle subcontracting invoices?", answer: "The Hub provides a monthly settlement report showing all jobs swapped, fees owed, and fees receivable, simplifying accounts payable." }
    ],
    quote: {
      text: "SecuSync Hub enabled us to bid on a national retail contract. We outsourced remote stores to Hub partners while maintaining control over the service quality.",
      name: "Jean-Louis Dupont",
      role: "Managing Director",
      company: "Dupont Securité Nationale"
    }
  }
};
