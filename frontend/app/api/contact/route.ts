import { NextResponse } from 'next/server'

// For now, we'll store in memory. In production, connect to MongoDB
const inquiries: Array<{
  id: string
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  timestamp: string
  status: string
}> = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create inquiry object
    const inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || '',
      service,
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Store inquiry (in production, save to MongoDB)
    inquiries.push(inquiry)

    // Log for debugging
    console.log('New contact inquiry:', inquiry)

    // In production, you could also:
    // 1. Send email notification using Resend/Nodemailer
    // 2. Save to MongoDB database

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully',
        id: inquiry.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Return all inquiries (in production, add authentication)
  return NextResponse.json(inquiries)
}
