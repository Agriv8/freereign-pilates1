#!/usr/bin/env python3
"""
MCP Submission Script for Free Rein Pilates Project
Submits reusable components to the Master Claude MCP library
"""

import json
import os
from datetime import datetime

# MCP submissions from this project
mcps = [
    {
        "name": "mega-menu-service-preview",
        "type": "component",
        "category": "navigation",
        "description": "React mega menu with service preview cards including thumbnails",
        "tags": ["react", "typescript", "tailwind", "navigation", "mega-menu", "services"],
        "version": "1.0.0",
        "dependencies": ["react", "react-router-dom", "tailwindcss"],
        "code_path": "src/components/Header.tsx",
        "code_snippet": """// Service Preview Mega Menu
<div className="relative group">
  <button className="text-spa-text hover:text-spa-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
    Services
  </button>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-spa-ivory shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 p-4">
      <Link to="/service-url" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
        <div className="flex items-center space-x-3">
          <img src="/service-image.webp" alt="Service Name" className="w-16 h-16 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">Service Name</h4>
            <p className="text-xs text-spa-text/70 mt-1">Brief description</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>""",
        "enhancement_for": "mega-menu-mcp"
    },
    {
        "name": "spa-wellness-theme",
        "type": "theme",
        "category": "design-system",
        "description": "Spa and wellness Tailwind theme with earthy colors and organic shapes",
        "tags": ["tailwind", "theme", "spa", "wellness", "design-system"],
        "version": "1.0.0",
        "dependencies": ["tailwindcss"],
        "code_path": "tailwind.config.js",
        "code_snippet": """// Spa Wellness Theme Colors
colors: {
  'spa-warm': '#E8DDD4',
  'spa-cream': '#F5F1EB', 
  'spa-sand': '#D4C4B0',
  'spa-earth': '#8B6914',
  'spa-charcoal': '#2D2D2D',
  'spa-ivory': '#FFFFF0',
  'spa-stone': '#9E9E93',
  'spa-text': '#1A1A1A',
  'spa-accent': '#7A5928',
  'spa-background': '#FDFCFB'
}""",
        "new_submission": True
    },
    {
        "name": "organic-blob-backgrounds",
        "type": "utility",
        "category": "styling",
        "description": "CSS technique for creating organic blob shapes as decorative backgrounds",
        "tags": ["css", "design", "backgrounds", "organic-shapes", "spa"],
        "version": "1.0.0",
        "dependencies": [],
        "code_path": "src/components/About.tsx",
        "code_snippet": """// Organic Blob Shape Generator
<div className="absolute top-16 left-0 w-80 h-80 bg-spa-accent/15 transform -translate-x-40 rotate-12" 
     style={{borderRadius: '50% 60% 40% 50% / 60% 50% 60% 40%'}}></div>

// More organic shapes
style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}
style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}
style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'}}
style={{borderRadius: '72% 28% 48% 48% / 28% 28% 72% 72%'}}""",
        "new_submission": True
    },
    {
        "name": "service-showcase-grid",
        "type": "component",
        "category": "content",
        "description": "Responsive service showcase grid with hover effects and CTAs",
        "tags": ["react", "typescript", "tailwind", "services", "grid", "cards"],
        "version": "1.0.0",
        "dependencies": ["react", "react-router-dom", "tailwindcss"],
        "code_path": "src/components/Services.tsx",
        "code_snippet": """// Service Showcase Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Link to="/service-url" className="group relative overflow-hidden">
    <div className="relative h-80 overflow-hidden">
      <img src="/service-image.webp" alt="Service Name" 
           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-spa-charcoal/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-spa-ivory">
        <h3 className="text-2xl font-serif mb-2">Service Name</h3>
        <p className="text-sm opacity-90 mb-4">Service description here</p>
        <span className="inline-flex items-center text-sm font-medium group-hover:text-spa-earth transition-colors">
          Learn More
          <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  </Link>
</div>""",
        "new_submission": True
    },
    {
        "name": "pilates-website-template",
        "type": "template",
        "category": "full-site",
        "description": "Complete Pilates/wellness business website template with booking focus",
        "tags": ["react", "typescript", "tailwind", "pilates", "wellness", "business", "template"],
        "version": "1.0.0",
        "dependencies": ["react", "react-router-dom", "tailwindcss", "vite"],
        "code_path": "src/",
        "features": [
            "Service showcase with detail pages",
            "Instructor bio section",
            "Testimonials component",
            "Contact form with validation",
            "Responsive mega menu navigation",
            "Organic decorative backgrounds",
            "Spa/wellness theme",
            "Mobile-first responsive design"
        ],
        "new_submission": True
    }
]

def submit_mcps():
    """Submit MCPs to the master system"""
    submission_data = {
        "project": "freereign-pilates1",
        "submitted_at": datetime.now().isoformat(),
        "submitted_by": "Child Claude - Free Rein Pilates Project",
        "mcps": mcps,
        "notes": "Contributing spa/wellness themed components and enhancements to existing MCPs"
    }
    
    # Save submission file
    with open('mcp-submission.json', 'w') as f:
        json.dump(submission_data, f, indent=2)
    
    print("MCP Submission Created!")
    print(f"Total MCPs: {len(mcps)}")
    print(f"- New submissions: {sum(1 for m in mcps if m.get('new_submission', False))}")
    print(f"- Enhancements: {sum(1 for m in mcps if m.get('enhancement_for'))}")
    print("\nMCPs submitted:")
    for mcp in mcps:
        status = "Enhancement" if mcp.get('enhancement_for') else "New"
        print(f"  - {mcp['name']} ({status})")

if __name__ == "__main__":
    submit_mcps()