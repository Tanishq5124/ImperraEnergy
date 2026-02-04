#!/bin/bash
# Quick Database Check Script
# Usage: bash check_inquiries.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 IMPERRA ENERGY - DATABASE QUICK CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Count total inquiries
TOTAL=$(curl -s https://solar-migration.preview.emergentagent.com/api/contact-inquiries | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")

echo "✅ Total Inquiries in Database: $TOTAL"
echo ""

# Count by status
NEW=$(curl -s "https://solar-migration.preview.emergentagent.com/api/contact-inquiries?status=new" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
CONTACTED=$(curl -s "https://solar-migration.preview.emergentagent.com/api/contact-inquiries?status=contacted" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
CONVERTED=$(curl -s "https://solar-migration.preview.emergentagent.com/api/contact-inquiries?status=converted" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")

echo "📋 Status Breakdown:"
echo "   🟢 New:       $NEW"
echo "   🔵 Contacted: $CONTACTED"
echo "   🟣 Converted: $CONVERTED"
echo ""

# Show latest 3 inquiries
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🕒 LATEST INQUIRIES:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

curl -s https://solar-migration.preview.emergentagent.com/api/contact-inquiries | python3 << 'EOF'
import sys, json
from datetime import datetime

data = json.load(sys.stdin)

# Sort by timestamp (newest first)
data.sort(key=lambda x: x['timestamp'], reverse=True)

# Show top 3
for i, inquiry in enumerate(data[:3]):
    print(f"{i+1}. {inquiry['name']}")
    print(f"   📧 {inquiry['email']}")
    print(f"   📱 {inquiry['phone']}")
    print(f"   🏢 {inquiry.get('company', 'N/A')}")
    print(f"   🏷️  {inquiry['projectType']}")
    print(f"   ⚡ {inquiry.get('capacity', 'N/A')}")
    
    # Format timestamp
    try:
        dt = datetime.fromisoformat(inquiry['timestamp'].replace('Z', '+00:00'))
        formatted = dt.strftime('%d %b %Y, %I:%M %p')
    except:
        formatted = inquiry['timestamp']
    
    print(f"   🕒 {formatted}")
    print(f"   📍 Status: {inquiry['status'].upper()}")
    print("")
EOF

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 For full details, run: python3 /app/view_inquiries.py"
echo "🌐 Web Admin: https://solar-migration.preview.emergentagent.com/admin"
echo "📡 API View: https://solar-migration.preview.emergentagent.com/api/contact-inquiries"
echo ""
