## Overview

Petbase is a SaaS platform for animal dealers and breeders to manage inventory, publish a professional online storefront, and handle enquiries in one place.

It replaces fragmented workflows (spreadsheets, social media listings, and messaging apps) with a structured, unified system designed specifically for the animal trade.

---

## Challenge

Animal sellers typically operate across multiple disconnected tools:

- inventory tracked in spreadsheets or notes
- listings posted manually across social platforms
- enquiries handled through DMs and messaging apps

This creates inconsistency, duplicated effort, and poor visibility over available stock.

The challenge was to design a system that:

- structures animal inventory in a consistent way across multiple types
- provides a clean, public-facing storefront without requiring a custom website
- integrates enquiry handling directly with listings
- remains simple enough for non-technical users while being robust enough for real business use

---

## Solution

Petbase was built as a full-stack SaaS application using:

- Next.js (App Router) for a scalable, server-first architecture
- Supabase for authentication, database, and backend services
- Tailwind CSS and shadcn/ui for a consistent, accessible UI system

Key implementation areas included:

- **Structured inventory system**  
  Type-specific data models with a unified read layer to support consistent filtering and display across animal categories

- **Dealer storefronts**  
  Public-facing pages generated from inventory data, enabling sellers to share a professional listing presence instantly

- **Enquiry workflows**  
  Direct enquiry handling tied to listings, with server-side validation and controlled submission flows

- **Access control and gating**  
  Request-access flow and controlled onboarding to manage platform quality during early stages

- **Analytics integration**  
  Privacy-focused tracking via Plausible, with typed event instrumentation for key user actions

- **Production-ready architecture**  
  Clean separation of concerns, typed interfaces, and patterns designed for maintainability and future feature expansion

---

## Outcome

Petbase is a production-ready SaaS foundation with:

- a complete dealer workflow from inventory → storefront → enquiry
- a scalable data model supporting multiple animal types
- a clean, responsive UI suitable for both desktop and mobile usage
- a deployable architecture with domain, email, and analytics fully configured

The platform is designed to evolve into a broader discovery layer over time, with structured supply (dealer inventory) already in place.
