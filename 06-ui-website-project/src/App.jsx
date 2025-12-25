import React from 'react'
import Section1 from './assets/Components/Section1/Section1.jsx'
import Section2 from './assets/Components/Section2/Section2.jsx'

const App = () => {
const users = [
  {
    img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop',
    description: 'Granted priority access to premium services, faster approvals, and dedicated support.',
    tag: 'Prime Access',
    color: '#2F3E5C'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1663100403716-15caecbc3101?q=80&w=1170&auto=format&fit=crop',
    description: 'Allowed standard access to essential banking services and routine customer assistance.',
    tag: 'Standard Access',
    color: '#374151'
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop',
    description: 'Has internal access to manage customer accounts, transactions, and banking operations.',
    tag: 'Employee Access',
    color: '#2E4F3E'
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=687&auto=format&fit=crop',
    description: 'Limited access to digital banking features with restricted transaction capabilities.',
    tag: 'Restricted Access',
    color: '#5A3E2B'
  },
  {
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop',
    description: 'Temporary access granted for verification, onboarding, or short-term banking needs.',
    tag: 'Guest Access',
    color: '#4B3A63'
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop',
    description: 'Read-only access to account details without permission to perform transactions.',
    tag: 'View Only',
    color: '#1F3A44'
  }
];

  return (
    <>
    <Section1 users = {users}/>
    <Section2 />
    </>
  )
}

export default App
