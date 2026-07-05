// // Content for the 7 feature pages
// export const featurePages = {
//   "guard-tour-system": {
//     title: "Guard Tour System",
//     hero: {
//       title: "Complete Guard Tour Verification & Mobile Patrol Software",
//       description: "Get real-time tracking, NFC/QR checkpoint verification, and automatic client reporting. Put complete operations visibility in the palm of your hand.",
//       ctaText: "Request Guard Tour Demo",
//       placeholderType: "map"
//     },
//     miniCards: [
//       {
//         icon: "FiMapPin",
//         title: "Live GPS Tracking",
//         text: "Track your security officers' locations and route completion times live as they occur."
//       },
//       {
//         icon: "FiSmartphone",
//         title: "NFC & QR Scanning",
//         text: "Ensure accurate proof-of-presence by requiring physical scans at designated checkpoints."
//       },
//       {
//         icon: "FiCheckSquare",
//         title: "Digital Checklists",
//         text: "Prompt guards to complete safety, fire, and facility checks at specific locations."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "Proof of Presence",
//         title: "Ensure Checkpoints Are Actually Visited",
//         description: "Eliminate pencil-whipping. Guards scan NFC tags, RFID tokens, or QR codes at defined intervals. The system registers the time, location, and user, instantly updating the dispatch center. If a patrol route is missed or delayed, automated alert protocols notify supervisors immediately.",
//         placeholderType: "mobile"
//       },
//       {
//         eyebrow: "Route Optimization",
//         title: "Optimize Patrol Paths for Peak Efficiency",
//         description: "View real-time map statistics detailing guard speeds and routes. Our route optimization tool calculates the most resource-efficient patrol schedule, helping you save fuel, reduce vehicle wear, and increase patrol frequencies across clustered client sites.",
//         placeholderType: "map"
//       },
//       {
//         eyebrow: "Instant Incident Reports",
//         title: "Log Incidents with Photo & Video Proof",
//         description: "When a guard encounters an issue—such as an open gate, water leak, or broken lock—they can file an incident report on the spot. The app enables them to capture images, add text or voice notes, and assign severity levels. Reports are compiled into clean PDFs and sent to clients automatically.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Manager Dashboard",
//         title: "Central Control Over All Field Operations",
//         description: "Ditch the spreadsheets. Our centralized web dashboard displays active shifts, checkpoint progress bars, map pins, and historical route logs. Monitor everything from a single browser tab, with visual warnings for missed checkpoints.",
//         placeholderType: "dashboard"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiMap", name: "GPS Breadcrumb Trails", description: "Verifiable map history showing the exact path taken during a patrol shift." },
//       { icon: "FiCamera", name: "Media Attachments", description: "Attach photo evidence to incidents, checklists, and safety logs in real time." },
//       { icon: "FiWifiOff", name: "Offline Syncing", description: "Guards scan and log data in underground cellars; data uploads when signal returns." },
//       { icon: "FiBell", name: "Missed Tour Alerts", description: "SMS and email notifications if a checkpoint is not scanned within the grace window." },
//       { icon: "FiActivity", name: "Panic SOS Button", description: "Immediate distress signal from the mobile app to dispatch with live coordinates." },
//       { icon: "FiList", name: "Ad-hoc Checklists", description: "Create tailored questions for specific days, weather conditions, or holiday patrols." }
//     ],
//     faqs: [
//       { question: "Can we use QR codes instead of NFC tags?", answer: "Yes, our mobile app supports both NFC tags and high-resolution QR codes. Guards simply tap or scan to verify presence." },
//       { question: "How do alerts for missed tours work?", answer: "You can set up tolerance windows (e.g. 15 minutes). If a scheduled scan does not occur within this window, the web dashboard flashes red and alerts are sent." },
//       { question: "Does the app drain mobile battery?", answer: "Our app is highly optimized for battery efficiency, using smart GPS ping intervals and background battery saving protocols." }
//     ],
//     quote: {
//       text: "The guard tour system changed how we pitch clients. Showing them exact NFC scan times and GPS trails on live maps wins contracts every time.",
//       name: "Arthur Pendelton",
//       role: "Security Director",
//       company: "Pendelton Safe & Guard"
//     }
//   },

//   "smart-guard-dispatch": {
//     title: "Smart Guard Dispatch",
//     hero: {
//       title: "Automated Alarm Dispatch & Response Coordination",
//       description: "Connect to control rooms, automate callouts, guide responders with GPS, and issue immediate digital reports. Shrink response times by up to 40%.",
//       ctaText: "Request Dispatch Demo",
//       placeholderType: "mobile"
//     },
//     miniCards: [
//       {
//         icon: "FiZap",
//         title: "Immediate Routing",
//         text: "Send alarm details to the closest responder automatically based on current GPS location."
//       },
//       {
//         icon: "FiNavigation",
//         title: "Turn-by-Turn GPS",
//         text: "Guide officers directly to the correct entrance and alarm panel with in-app navigation."
//       },
//       {
//         icon: "FiFileText",
//         title: "Instant Invoicing Data",
//         text: "Automatically log response durations and tasks to create accurate, unarguable invoice bills."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "Control Room Link",
//         title: "Seamless Integration with Monitoring Centers",
//         description: "When an alarm is triggered in a central monitoring station, it flows directly into SecuSync via API. There is no need for manual phone calls or radios. The system parses building codes, keys, and response instructions automatically.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Proximity Dispatch",
//         title: "Intelligent Matching of the Closest Responder",
//         description: "SecuSync computes which mobile patrol vehicle is closest to the alarm source. The selected guard receives a notification, and upon acceptance, the system displays key safe codes, alarm zone details, and previous incident histories.",
//         placeholderType: "map"
//       },
//       {
//         eyebrow: "Standardized Checklists",
//         title: "Structured Alarm Intervention Checklists",
//         description: "To ensure thorough investigation, the guard app forces checking specific zones—e.g. check perimeter fence, inspect front doors, check alarm panels. The guard completes these checks before they can resolve the alarm task.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Automated Follow-up",
//         title: "Instant Digital Reports and Client Feedback",
//         description: "As soon as the guard resolves the alarm, a formatted PDF report with timestamps (alarm time, dispatch time, arrival, departure, resolution) and pictures is compiled and emailed to your client, proving value and speed.",
//         placeholderType: "mobile"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiRadio", name: "SIA & CID Integration", description: "Receive structured alarm protocols directly from monitoring stations." },
//       { icon: "FiMapPin", name: "Guaranteed ETA Tracking", description: "Provide dispatchers and clients with real-time ETA progress maps." },
//       { icon: "FiLock", name: "Secure Key Code Safe", description: "Only reveals key codes and safe instructions when the guard is physically on-site." },
//       { icon: "FiDollarSign", name: "Automated Billing Logs", description: "Logs precise dispatch and mileage fees to export directly to invoicing." },
//       { icon: "FiActivity", name: "Escalation Workflows", description: "Redirect alarm tasks if a guard doesn't accept or arrive within set limits." },
//       { icon: "FiMail", name: "Auto-notify Keyholders", description: "Trigger notifications to client emergency contacts with live status updates." }
//     ],
//     faqs: [
//       { question: "How does the dispatch system connect to control rooms?", answer: "We support integrations with common monitoring software (Shorrock, Sentinel, MAS, etc.) via direct IP APIs or SMTP parsing." },
//       { question: "What happens if a dispatched guard is blocked in traffic?", answer: "Dispatchers see active ETAs. If an ETA exceeds threshold limits, the dispatcher can quickly re-assign the alarm with one click." },
//       { question: "Can we charge different fees for night shifts?", answer: "Yes. Contract conditions are linked to the system, so holiday, night, or weekend rates apply to dispatch logs automatically." }
//     ],
//     quote: {
//       text: "Our dispatch dispatch-to-arrival time dropped from 35 minutes to under 19 minutes. The automated reporting has eliminated billing disputes entirely.",
//       name: "Gavin Cross",
//       role: "Operations Manager",
//       company: "Vanguard Response Services"
//     }
//   },

//   "static-security": {
//     title: "Static Security",
//     hero: {
//       title: "Digital Logbooks & Guard Presence for Fixed Sites",
//       description: "Replace physical paper logbooks, visitor sheets, and key logs. Provide guards at reception desks and static gates with powerful digital tools.",
//       ctaText: "Request Static Site Demo",
//       placeholderType: "checklist"
//     },
//     miniCards: [
//       {
//         icon: "FiBookOpen",
//         title: "Digital Logbook",
//         text: "Guards document handovers, visitor records, and general logs in a searchable database."
//       },
//       {
//         icon: "FiUsers",
//         title: "Visitor Registration",
//         text: "Check in guests, issue digital badges, and automatically notify hosts upon arrival."
//       },
//       {
//         icon: "FiKey",
//         title: "Asset & Key Tracking",
//         text: "Digitally log key handovers, equipment use, and building assets with signatures."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "Shift Handovers",
//         title: "Seamless Digital Duty Handovers",
//         description: "Outgoing guards file shift handover notes, pending tasks, and key audits. Incoming guards review and sign off digitally, ensuring no critical task is forgotten. Management maintains a full audit log of all shift transfers.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Visitor Management",
//         title: "Professional Guest & Visitor Check-In",
//         description: "Run SecuSync on a tablet at your reception desk. Visitors register details, sign NDA forms, and receive badges. The host is instantly notified via SMS or email, streamlining lobby queues and elevating building security.",
//         placeholderType: "mobile"
//       },
//       {
//         eyebrow: "Incident Tracking",
//         title: "Incident Tracking & Facility Checklists",
//         description: "Static guards perform scheduled walkthroughs (e.g. fire escape checks, server room temperature readings). If an anomaly is spotted, it's filed under active incidents. Visual trackers show the status of resolving tasks.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Client Transparency",
//         title: "Real-time Access for Facility Managers",
//         description: "Provide clients with a portal where they can check active guard status, daily logs, visitor logs, and incident counts. Eliminate the need for weekly summaries, saving administrative resources.",
//         placeholderType: "map"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiClipboard", name: "Custom Form Builder", description: "Design site-specific checklists, risk assessments, and sign-ins." },
//       { icon: "FiUserCheck", name: "Host Alerts", description: "Automated notifications to employees when their guest signs in." },
//       { icon: "FiEdit3", name: "Digital Signatures", description: "Capture sign-offs for key retrievals, asset handovers, and NDAs." },
//       { icon: "FiClock", name: "Attendance Verifier", description: "Requires guards to log in from local IPs or scan unique on-site codes." },
//       { icon: "FiAlertTriangle", name: "Hazards Register", description: "Persistent warning display for on-site hazards (asbestos, high voltage)." },
//       { icon: "FiSearch", name: "Audit-ready Logs", description: "Search months of historical visitor logs and incident files instantly." }
//     ],
//     faqs: [
//       { question: "Can clients view the visitor log in real time?", answer: "Yes. Using the Customer Portal, clients can view live visitor numbers and active security tasks for their specific location." },
//       { question: "Does the system support scanning visitor IDs?", answer: "Yes, our mobile/tablet interface supports capturing photos of visitor badges, passports, or ID cards for verification." },
//       { question: "Is data protected under local privacy laws?", answer: "Yes. All data storage is fully encrypted and supports configurable auto-deletion settings for compliance with GDPR and privacy rules." }
//     ],
//     quote: {
//       text: "Moving to digital logbooks cleaned up our corporate front desks. Our clients log into the portal and see everything happening in real time.",
//       name: "Samantha Vance",
//       role: "Corporate Services VP",
//       company: "Vance Tactical & Guard"
//     }
//   },

//   "contract-management": {
//     title: "Contract Management",
//     hero: {
//       title: "Centralized Contract Hub & Automatic Invoicing",
//       description: "Manage customer SLAs, link patrol rates to shifts, automate indexations, and generate flawless invoices directly from service logs.",
//       ctaText: "Request Contracts Demo",
//       placeholderType: "dashboard"
//     },
//     miniCards: [
//       {
//         icon: "FiLayers",
//         title: "Central SLA Registry",
//         text: "Store contract tasks, schedules, and custom pricing for all clients in one digital database."
//       },
//       {
//         icon: "FiDollarSign",
//         title: "Automatic Billing",
//         text: "Feed scanned patrols, shift hours, and alarm calls directly into monthly invoicing pipelines."
//       },
//       {
//         icon: "FiPercent",
//         title: "Indexation & Price Changes",
//         text: "Apply bulk price indexations, custom holiday surcharges, and rate adjustments instantly."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "SLA Linking",
//         title: "Link Shift Schedules directly to SLAs",
//         description: "Ensure security guard schedules exactly match client contract constraints. Define required hours, frequencies, and target response times. The system alerts you if schedules fall short of SLA commitments.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Invoicing Integration",
//         title: "Eradicate Billing Leaks and Double Entry",
//         description: "Every scanned patrol tag, alarm response, and static guard hour is logged. The billing engine converts these operations records into clean draft invoices based on the contract's specific rate parameters.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Bulk Adjustments",
//         title: "Manage Bulk Pricing Indexations",
//         description: "Adjusting hourly rates due to inflation or minimum wage changes takes hours of work. SecuSync allows you to run bulk price indexations across all or specific groups of contracts, with customized rounding rules.",
//         placeholderType: "mobile"
//       },
//       {
//         eyebrow: "Task Tracking",
//         title: "Contract Task Scheduling",
//         description: "Specify periodic contract tasks—e.g. check fire extinguishers every quarter, inspect locks on the first of the month. The system generates these tasks automatically, dispatching them to active guards.",
//         placeholderType: "map"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiCalendar", name: "Surcharge Schedules", description: "Apply percentage hikes for Christmas, night shifts, and emergencies." },
//       { icon: "FiClock", name: "Grace Period Rules", description: "Configure tolerance limits for early/late guard check-ins and hours." },
//       { icon: "FiTrendingUp", name: "Revenue Forecaster", description: "Project recurring revenues based on current contract structures." },
//       { icon: "FiLink", name: "ERP Integrations", description: "Export draft invoices directly to Sage, QuickBooks, Xero, or custom ERPs." },
//       { icon: "FiAlertCircle", name: "Renewal Reminders", description: "Get notifications 30, 60, and 90 days before contract expiry dates." },
//       { icon: "FiUsers", name: "Multi-Client Profiles", description: "Manage complex clients with multiple sub-entities and billing rules." }
//     ],
//     faqs: [
//       { question: "Can we set different rates for individual guards?", answer: "Yes, rate cards can be set by contract, by location, by specific task types, or by guard qualifications." },
//       { question: "What accounting packages do you support?", answer: "We support CSV/XML exports for all standard platforms and direct API synchronizations for Xero, QuickBooks, and popular European ERPs." },
//       { question: "Does the contract system handle travel and mileage?", answer: "Yes, you can configure automatic travel surcharges or mileage-based billing for patrol runs." }
//     ],
//     quote: {
//       text: "We used to miss billing for about 5% of our alarm responses. With SecuSync, every single callout is tracked and automatically invoiced.",
//       name: "Richard Croft",
//       role: "Finance Director",
//       company: "Croft Integrated Services"
//     }
//   },

//   "customer-reports": {
//     title: "Customer Reports",
//     hero: {
//       title: "Real-time Customer Portals & Automated PDF Reports",
//       description: "Deliver absolute transparency. Provide your clients with a white-labeled portal, custom KPIs, and automated email reports.",
//       ctaText: "Request Reports Portal Demo",
//       placeholderType: "dashboard"
//     },
//     miniCards: [
//       {
//         icon: "FiGlobe",
//         title: "24/7 Customer Portal",
//         text: "Let clients view patrol progress, active guards, and past reports on a secure web app."
//       },
//       {
//         icon: "FiMail",
//         title: "Automated Emailing",
//         text: "Send daily shift logs or urgent incident alerts as clean PDFs immediately after completion."
//       },
//       {
//         icon: "FiBarChart2",
//         title: "KPI Analytics Dash",
//         text: "Provide graphs showing response times, checkpoint percentages, and safety statistics."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "White Labeling",
//         title: "Promote Your Own Security Brand",
//         description: "Your clients access a portal styled with your logo, brand colors, and domain name. Elevate your professionalism and make security reports a powerful retention tool that solidifies your brand presence.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Interactive Maps",
//         title: "Interactive Client Maps and Checkpoints",
//         description: "Clients can drill down into their properties, view where NFC tags are installed, check the exact history of when each tag was scanned, and download photo attachments associated with specific checks.",
//         placeholderType: "map"
//       },
//       {
//         eyebrow: "Incident Portal",
//         title: "Instant Incident Communication",
//         description: "When high-priority incidents occur, they appear on the customer portal instantly. Clients can read descriptions, view media files, verify guard timestamps, and comment on resolution paths directly.",
//         placeholderType: "mobile"
//       },
//       {
//         eyebrow: "Scheduled Summaries",
//         title: "Flexible Scheduling for Report Delivery",
//         description: "Define delivery rules per client. Send an instant email when an incident is logged, a daily summary of patrol runs at 7 AM, or a comprehensive monthly performance scorecard on the first of the month.",
//         placeholderType: "checklist"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiUserCheck", name: "Granular Client Access", description: "Allow clients to manage their own keyholder contact info and order tours." },
//       { icon: "FiFileText", name: "PDF Report Designer", description: "Choose which fields, charts, and logos appear in exported reports." },
//       { icon: "FiShield", name: "Secure SSO Portals", description: "Allow corporate clients to log in using standard company credentials." },
//       { icon: "FiDownload", name: "Bulk Export Data", description: "Download CSV reports of scanned data for custom client data analysis." },
//       { icon: "FiCheck", name: "Supervisor Approvals", description: "Review and approve guard reports before they become visible to clients." },
//       { icon: "FiClock", name: "Response Time KPIs", description: "Display average dispatch-to-on-site times for critical alarm sites." }
//     ],
//     faqs: [
//       { question: "Can we hide specific internal guard notes from clients?", answer: "Yes. Guards can mark notes as 'internal' (only visible to supervisors) or 'external' (shared with clients on the portal)." },
//       { question: "Is there a limit to how many client portal users we can add?", answer: "No, SecuSync offers unlimited client portal accounts for all customers at no additional cost." },
//       { question: "Can clients request extra patrol runs via the portal?", answer: "Yes, you can enable an optional service request button that places ad-hoc patrol orders on the dispatcher's queue." }
//     ],
//     quote: {
//       text: "Our clients stopped calling us for updates. They just log in, see when the guards scanned the gates, and download the report PDFs. It saved our front desk endless calls.",
//       name: "Regina George",
//       role: "Client Relations Mgr",
//       company: "Regis Capital Security"
//     }
//   },

//   "task-shift-planning": {
//     title: "Task & Shift Planning",
//     hero: {
//       title: "Drag-and-Drop Shift Scheduling & Mobile Sync",
//       description: "Match qualified guards to shifts, track holiday and sickness, prevent double-bookings, and sync schedules to the guard app in real time.",
//       ctaText: "Request Planning Demo",
//       placeholderType: "dashboard"
//     },
//     miniCards: [
//       {
//         icon: "FiCalendar",
//         title: "Visual Scheduling",
//         text: "Plan shifts on a clean, visual timeline. See who is working, who is on holiday, and which shifts are open."
//       },
//       {
//         icon: "FiUserCheck",
//         title: "Compliance Checking",
//         text: "Prevent scheduling guards who lack required training, certifications, or break limits."
//       },
//       {
//         icon: "FiRefreshCw",
//         title: "Live Mobile Sync",
//         text: "Updates to shifts appear instantly in the guard mobile app with push notifications."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "Drag-and-Drop",
//         title: "Schedule Shifts in Seconds",
//         description: "Our interactive calendar shows open shifts alongside active employee lists. Simply drag a guard's name onto a shift. The system checks for scheduling conflicts, maximum working hours, and rest periods in real time.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Qualification Match",
//         title: "Assign the Right Guard to the Right Site",
//         description: "Avoid compliance fines. If a corporate site requires a guard with a specific first-aid or firearms license, SecuSync highlights guards who match those credentials, preventing accidental allocation of unlicensed staff.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Attendance Tracking",
//         title: "GPS-verified Mobile Clock-In",
//         description: "Guards clock in and out directly from the mobile app. The system checks if their GPS location matches the site perimeter. If a guard fails to clock in on time, dispatchers receive a warning to call the officer.",
//         placeholderType: "mobile"
//       },
//       {
//         eyebrow: "Leave Management",
//         title: "Consolidated Holiday & Sick Leave Tracker",
//         description: "Manage time-off requests, sick leave, and availabilities directly inside the calendar. Approved leave automatically blocks the guard from being assigned, preventing double-bookings and last-minute callouts.",
//         placeholderType: "map"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiPlusCircle", name: "Recurring Shift Templates", description: "Copy weekly schedule structures to future periods in one click." },
//       { icon: "FiUserX", name: "Open Shift Bidding", description: "Post unassigned shifts to qualified guards to claim via mobile app." },
//       { icon: "FiClock", name: "Timesheet Export", description: "Convert GPS clock-in records directly to timesheets for payroll." },
//       { icon: "FiBell", name: "Push Notifications", description: "Guards receive notifications for schedule releases, changes, or shifts." },
//       { icon: "FiShield", name: "Working Hours compliance", description: "Ensures schedules align with European/local working time regulations." },
//       { icon: "FiMessageSquare", name: "In-App Shift Swap", description: "Allow guards to request shift swaps, subject to manager approval." }
//     ],
//     faqs: [
//       { question: "What happens if a guard fails to clock in?", answer: "If clock-in doesn't occur within a set grace period (e.g. 5 minutes), the dispatcher's screen flags the shift as a 'no-show' and sounds a warning." },
//       { question: "Can we use this to track guard licenses?", answer: "Yes, license expiry dates can be logged. The system blocks guards with expired credentials from being scheduled." },
//       { question: "Is there a limit on how far in advance we can schedule?", answer: "No, schedules can be planned months or years in advance using recurring shift templates." }
//     ],
//     quote: {
//       text: "Our scheduling errors dropped to zero. The GPS-verified clock-in gives us absolute confidence that guards are on-site when they say they are.",
//       name: "Tom Henderson",
//       role: "Operations Chief",
//       company: "Apex Security Group"
//     }
//   },

//   "secusync-hub": {
//     title: "SecuSync Hub",
//     hero: {
//       title: "Private Security Collaboration Network & Subcontracting",
//       description: "Subcontract alarm responses, share security tasks, coordinate with external partners, and expand your service coverage without adding vehicles.",
//       ctaText: "Request SecuSync Hub Demo",
//       placeholderType: "map"
//     },
//     miniCards: [
//       {
//         icon: "FiShare2",
//         title: "Dispatch Collaboration",
//         text: "Easily forward alarm response tasks to trusted local partners when your cars are busy."
//       },
//       {
//         icon: "FiActivity",
//         title: "Unified Service Level",
//         text: "Ensure subcontracted guards use the same checklists and send reports under your brand."
//       },
//       {
//         icon: "FiGlobe",
//         title: "Extended Coverage",
//         text: "Offer nationwide security solutions by building a virtual network of independent partners."
//       }
//     ],
//     deepDives: [
//       {
//         eyebrow: "Task Forwarding",
//         title: "Outsource Alarms with One Click",
//         description: "When an alarm comes in for a location outside your primary patrol zone, forward the task to a partner agency in the SecuSync Hub. The system handles secure key codes, directions, and task parameters automatically.",
//         placeholderType: "map"
//       },
//       {
//         eyebrow: "Quality Controls",
//         title: "Ensure Consistent Service Quality",
//         description: "Subcontracted guards download the tasks into their SecuSync app. They must follow your predefined checklists and scan on-site barcodes. You receive the completed report immediately to review before forwarding to the client.",
//         placeholderType: "checklist"
//       },
//       {
//         eyebrow: "Automated Settlements",
//         title: "Clear Inter-Company Accounting",
//         description: "Manage buying and selling rates inside the Hub. The platform tracks who did what job, calculating the inter-company fees automatically to eliminate complex manual cost reconciliations at the end of the month.",
//         placeholderType: "dashboard"
//       },
//       {
//         eyebrow: "Network Hub Marketplace",
//         title: "Find Trusted Security Partners",
//         description: "Search for security agencies in specific postal codes or cities that use SecuSync. Build relationships, agree on SLA terms, and start forwarding jobs to increase your national footprint without capital investment.",
//         placeholderType: "mobile"
//       }
//     ],
//     allFeatures: [
//       { icon: "FiScale", name: "Partner Profiles", description: "Manage approved partners, coverage zones, and contact coordinates." },
//       { icon: "FiLock", name: "Safe Credential Handover", description: "Key codes and entry data are encrypted and only visible during dispatch." },
//       { icon: "FiRepeat", name: "Two-way Integrations", description: "Send jobs to partners and receive jobs from partners in a unified view." },
//       { icon: "FiCheckSquare", name: "Consolidated PDF Reports", description: "Deliver reports to clients that look completely uniform, regardless of responder." },
//       { icon: "FiDollarSign", name: "Hub Billing Audits", description: "Audited dispatch logs verify correct billing fees across partner contracts." },
//       { icon: "FiPercent", name: "Margin Management", description: "Configure custom markup percentages for outsourced services." }
//     ],
//     faqs: [
//       { question: "Is our customer list safe in the Hub?", answer: "Yes, customer data is strictly siloed. Partners only see the specific address and dispatch details for the active job forwarded to them." },
//       { question: "Do partners need to be using SecuSync?", answer: "Yes, for the seamless automated flow. However, you can also dispatch to non-SecuSync partners who receive a secure link to log their report in a browser." },
//       { question: "How do we settle subcontracting invoices?", answer: "The Hub provides a monthly settlement report showing all jobs swapped, fees owed, and fees receivable, simplifying accounts payable." }
//     ],
//     quote: {
//       text: "SecuSync Hub enabled us to bid on a national retail contract. We outsourced remote stores to Hub partners while maintaining control over the service quality.",
//       name: "Jean-Louis Dupont",
//       role: "Managing Director",
//       company: "Dupont Securité Nationale"
//     }
//   }
// };


// Easy-to-read content for the 7 feature pages
export const featurePages = {
  "guard-tour-system": {
    title: "Guard Tour System",
    hero: {
      title: "Guard Tour Tracking & Mobile Patrol Software",
      description: "Track guards in real time, confirm checkpoints with NFC or QR scans, and send reports to clients automatically. You can see all guard activity clearly from one place.",
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
        title: "NFC & QR Scanning",
        text: "Guards scan NFC tags or QR codes to prove they visited the right checkpoint."
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
        description: "Stop fake or missed patrols. Guards scan NFC tags, RFID tokens, or QR codes at each checkpoint. The system records the guard name, time, and location. If a patrol is missed or late, supervisors get an alert right away.",
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
      { question: "Can we use QR codes instead of NFC tags?", answer: "Yes. The mobile app supports both NFC tags and QR codes. Guards can tap or scan to confirm their presence." },
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