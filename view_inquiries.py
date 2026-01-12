#!/usr/bin/env python3
"""
Simple CLI tool to view contact inquiries from the database
Usage: python3 view_inquiries.py [status]
"""

import requests
import sys
from datetime import datetime

BACKEND_URL = "https://energytomorrow.preview.emergentagent.com/api"

def format_date(date_str):
    """Format ISO date string to readable format"""
    try:
        dt = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        return dt.strftime('%d %b %Y, %I:%M %p')
    except:
        return date_str

def print_inquiry(inquiry, index):
    """Print a single inquiry in a formatted way"""
    print(f"\n{'='*80}")
    print(f"INQUIRY #{index + 1}")
    print(f"{'='*80}")
    print(f"Status:      [{inquiry['status'].upper()}]")
    print(f"Name:        {inquiry['name']}")
    print(f"Company:     {inquiry.get('company', 'N/A')}")
    print(f"Email:       {inquiry['email']}")
    print(f"Phone:       {inquiry['phone']}")
    print(f"Project:     {inquiry['projectType']}")
    print(f"Capacity:    {inquiry.get('capacity', 'N/A')}")
    print(f"Submitted:   {format_date(inquiry['timestamp'])}")
    if inquiry.get('message'):
        print(f"\nMessage:\n{inquiry['message']}")
    print(f"\nInquiry ID:  {inquiry['id']}")

def main():
    # Get status filter from command line argument
    status = sys.argv[1] if len(sys.argv) > 1 else None
    
    # Build URL
    url = f"{BACKEND_URL}/contact-inquiries"
    if status:
        url += f"?status={status}"
    
    try:
        print(f"\n🔍 Fetching contact inquiries from database...")
        if status:
            print(f"   Filter: Status = '{status}'")
        print()
        
        # Fetch data
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        inquiries = response.json()
        
        # Display results
        if not inquiries:
            print("❌ No inquiries found.")
            if status:
                print(f"   Try: python3 view_inquiries.py")
            return
        
        print(f"✅ Found {len(inquiries)} inquiry/inquiries\n")
        
        # Print each inquiry
        for i, inquiry in enumerate(inquiries):
            print_inquiry(inquiry, i)
        
        print(f"\n{'='*80}\n")
        print(f"Total: {len(inquiries)} inquiry/inquiries")
        print(f"\n💡 Usage:")
        print(f"   View all:          python3 view_inquiries.py")
        print(f"   Filter by status:  python3 view_inquiries.py new")
        print(f"   Filter by status:  python3 view_inquiries.py contacted")
        print(f"   Filter by status:  python3 view_inquiries.py converted")
        print()
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error fetching data: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
