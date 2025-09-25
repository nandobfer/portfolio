import React from "react"
import { SectionWrapper } from "./SectionWrapper"
import { Project, type ProjectProps } from "../Project"

interface ProjectsProps {}

const projects: ProjectProps[] = [
    {
        name: "WhatsApp Business Management SaaS (Web and Meta API, Tenant-Isolated on GCE)",
        type: "professional",
        technologies: [
            "React.js",
            "Node.js (Express)",
            "Socket.IO",
            "MySQL",
            "Meta WhatsApp Cloud API",
            "wweb.js",
            "Docker",
            "Google Compute Engine",
            "Reverse Proxy",
        ],
        platforms: ["Web"],
        descriptionLines: [
            "WhatsApp operations for multi-number teams: shared inbox (WhatsApp Web–inspired), Kanban boards, bulk messaging, and chatbot automation.",
            "Role-based number assignment, conversation routing across boards/rooms, audit logging, and real-time monitoring via Socket.IO.",
            "Master control plane provisions a dedicated Google Compute Engine VM per customer; all HTTP/WebSocket traffic is reverse-proxied to the correct tenant.",
            "Each tenant VM runs a Dockerized stack (wweb.js driver, Meta Cloud API workers, Express API, MySQL) for isolation, stability, and zero noisy-neighbor interference.",
        ],
        highlights: [
            // Product features
            "Role-Based Number Assignment: Admins link WhatsApp numbers to users/departments and set permissions",
            "Conversational Workspace: WhatsApp Web-inspired inbox plus Kanban boards; move threads across columns/boards",
            "Chatbot Builder: Visual routing and replies; bots can hand off to rooms/boards based on scenario rules",
            "Bulk Messaging: Utility/promotional sends through Meta’s official platform, integrated with boards and bots",
            "Auditability: Every action is logged and queryable by administrators",
            // Control plane & isolation
            "Master API Orchestrator: Admin panel triggers per-customer provisioning on GCE (golden image + startup scripts) and registers routing/credentials",
            "Strong Tenant Isolation: One VM per customer; failures and spikes are contained. No cross-tenant impact",
            "Edge Proxy & WS Tunneling: Reverse proxy routes HTTPS and Socket.IO namespaces to the correct tenant VM with sticky sessions",
            "Per-Tenant Docker Stack: Containers for wweb.js (WhatsApp Web), Meta Cloud API workers, Express API, and a dedicated MySQL instance",
            "Data Separation: Distinct databases and secrets per tenant; optional automated backups/snapshots at the VM or DB level",
            // Tech notes
            "Stack: React (TypeScript) front end; Node.js (Express) + Socket.IO; Dockerized services on per-tenant GCE VMs; MySQL per tenant",
        ],
    },
    {
        name: "Invoice Automation and Management Platform - SaaS",
        type: "professional",
        technologies: ["React Native", "Express.js", "MySQL", "FocusNfe API", "Expo"],
        platforms: ["Android", "iOS", "Web"],
        descriptionLines: [
            "Agricultural producers struggled with complex bureaucratic processes for issuing NFP-e tax invoices, requiring physical presence and wasting valuable time that could be spent on farm operations.",
            "Developed a mobile-first solution that enables farmers and accountants to generate legally compliant tax invoices in seconds from any location, with direct integration to Brazil's Federal Revenue systems.",
            "Users authenticate once, then can create, send, and manage agricultural invoices directly from their mobile devices while in the field, at the office, or on-the-go, with all documents automatically stored for compliance.",
        ],
        highlights: [
            "NF-e Generation: Direct integration with Receita Federal for instant invoice validation",
            "Dual User Modes: Separate interfaces for farmers (simple input) and accountants (advanced features)",
            "Location Flexibility: Issue invoices from farm fields without office visits",
            "Compliance Automation: Automatic tax calculations and regulatory updates",
            "Document Management: Cloud storage with organized invoice history",
            "Time Savings: 90% reduction in invoice processing time (avg. 2 min → 10 sec)",
            "Cost Reduction: Eliminates travel costs for invoice processing",
            "Real-Time Sync: Immediate data synchronization between farmers and accountants",
        ],
    },
    {
        name: "Franchise-Localized Educational Toys Marketplace",
        type: "professional",
        technologies: ["React.js", "Express.js", "MySQL", "Geolocation API", "Payment Gateway", "Admin Dashboard"],
        platforms: ["Web (Customer Marketplace)", "Web (Admin Portal)"],
        descriptionLines: [
            "A franchisor of educational toys needed a digital solution that respected territorial franchise agreements while offering a unified shopping experience, preventing cross-franchise sales conflicts that could violate franchisee territories.",
            "Developed a dual-platform system with: 1) A customer marketplace that automatically selects the appropriate franchise (or headquarters) based on user location (GPS/ZIP), dynamically adjusting products, prices and coupons; 2) An admin portal for franchise management, user promotions, and sales analytics.",
            "Customers shop through a territory-aware interface while franchisor administrators use the dedicated portal to promote users to franchisees (granting wholesale access), analyze sales by franchise, create coupons, update banners, and monitor all marketplace activity.",
        ],
        highlights: [
            "Automatic Territory Mapping: GPS/ZIP-based franchise selection preventing cross-territory sales",
            "Dynamic Pricing & Inventory: Franchise-specific products, prices, and coupons displayed based on location",
            "Sales Analytics: Franchise-specific performance dashboards",
            "Centralized Control: Banner management, coupon creation, order oversight",
            "Geofencing Technology: Strict enforcement of franchise sales territories",
            "Inventory Synchronization: Real-time stock updates across franchise locations",
        ],
    },
]

export const HighlightedProjects: React.FC<ProjectsProps> = (_) => {
    return (
        <SectionWrapper title="Projects">
            {projects.map((project) => (
                <Project key={project.name} {...project} />
            ))}
        </SectionWrapper>
    )
}
