import { NextResponse } from 'next/server'

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

    // Forward to FastAPI backend
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8001'
    
    const backendPayload = {
      name,
      email,
      phone,
      company: company || '',
      projectType: service, // Map 'service' to 'projectType' for backend
      capacity: '',
      message
    }

    const response = await fetch(`${backendUrl}/api/contact-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(backendPayload),
    })

    if (response.ok) {
      const data = await response.json()
      return NextResponse.json(
        { 
          success: true, 
          message: 'Inquiry submitted successfully',
          id: data.id 
        },
        { status: 200 }
      )
    } else {
      const errorData = await response.json()
      console.error('Backend error:', errorData)
      return NextResponse.json(
        { error: 'Failed to submit inquiry' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8001'
    const response = await fetch(`${backendUrl}/api/contact-inquiries`)
    
    if (response.ok) {
      const data = await response.json()
      return NextResponse.json(data)
    }
    
    return NextResponse.json([])
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json([])
  }
}
