import React from 'react'
import Card from './Component/card.jsx'
function App() {

      const arr = [
      {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s',
            CName: 'Amazon',
            time: '5 days ago',
            position: 'Senior UI/UX designer',
            btn1: 'Part time',
            btn2: 'Senior Level',
            wage: '$120/hr',
            location: 'Mumbai, India'
      },
      {
            logo : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
            CName : 'Google',
            time : '30 days ago',
            position : 'Graphic Designer',
            btn1 : 'Part-Time',
            btn2 : 'Flexible Shedule',
            wage : '$150K-200k',
            location : 'Kochi, India'
      },
      {
            logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s',
            CName : 'Dribbble',
            time : '18 days ago',
            position : 'Senior Motion Designer',
            btn1 : 'Contract',
            btn2 : 'Remote',
            wage : '$85/hr',
            location : 'Chennai, India'
      },
      {
            logo : 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png',
            CName : 'Figma',
            time : '5 days ago',
            position : 'UX designer',
            btn1 : 'Full-Time',
            btn2 : 'In Office',
            wage : '$200-250K',
            location : 'Bangalore, India',
      },
      {
            logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwBtAUOzRZRqKSGLlH8lvC5EOdL03JZpbJA&s',
            CName : 'Airbnb',
            time : '5 days ago',
            position : 'Junior UI/UX designer',
            btn1 : 'Contract',
            btn2 : 'Remote',
            wage : '$100/hr',
            location : 'Delhi, India'
      },
      {
            logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s',
            CName : 'Apple',
            time : '5 days ago',
            position : 'Graphic Designer',
            btn1 : 'Full-Time',
            btn2 : 'Flexible Shedule',
            wage : '85k-120k',
            location : 'Kerela, India'
      },

      // 🔥 Added Below

      {
            logo : 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
            CName : 'Meta',
            time : '12 days ago',
            position : 'Product Designer',
            btn1 : 'Full-Time',
            btn2 : 'Remote',
            wage : '$180K-230K',
            location : 'Hyderabad, India'
      },
      {
            logo : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACUCAMAAACNzMQlAAAAclBMVEUQEBCwBg/lCRMAERBrDBCRChG0BRANEBAJEBAUEBF6Cw+tBg6aCBAtEBDoCRIAEBHcCRMiEBHvCRShBQ+mBQ/1CRWUBA7JBxEbEBB1Cw+EAw2KBQ7TCBK8BBFNDxGABg5fCg9aDhA+DxFFDxAoEBA0DxEt8CXwAAADi0lEQVR4nO2c63LaMBCFLd+LhGUsIYiFMeby/q9YGUjRMtP+S9N6zzf5Fc9k+GYPK2vtKEkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf586poqvVDHf9fG+jirZEF6KVfWDUH/jp/wSsrwlHPXzQvUjNypizL71c34B2altIrb9S301lBFucer6NDTpi2a3f0Y+qJciolicepbbWD3tPhO/fHWd2wNRV0/F5atneSm72L3hpO5I4rfTI/Ec1IXdkUZX8lGXwhD1dHO/eeGgLoQ5EPfHzQsTdbq0D9m8tPNQt5a0+MN9aWei/pb4uyUPdalKmviq5qIujG0j96bNNRt168jS3hldcVGXriT38cNZs1FXiiQ+zTMu6sJ60uM7N4+neKhLL8jSvrtoNurKzzl/lf0U1D9KyUBd2HFHGp3d10GdQ9XDl93FA4smPWs26mrVkkb3EdQFi8BLM5LtW7fLklyyUBe28GRE193qoC5ZqLtVG6tvfZZbJupqFKTRtUHdclCX0hSeTmaPkzE81K3zdDJrj8pEZV+s+px4Tx5BNe3kmKhL4wuytKfKK8NB/Z74t4euY1z25aoLaVVvUzKncoXiou4d2bW3sg+JlwzUpXHjW+J7x0I99Lk58bH6ITQ6y0LdquJtTiV6Juqh7ONAyr4rXolfsvqceK9SQvgFD3Wr3AdNfOmdZaEeyp7T1wwOTNTnxK8uJPCN84ZBm7uXfczo9m341eOXrR7K3u/zbVz2dnSWR9Vtv9F0ROc8C/XQ4/1Vl2ROtRsNj8DLYp2d6MuTo7Is1EWx1hvyzmwjPRN1t65r+gjq8Ez8wtXFrK4nkvi0UGzU69tA3IdH4peuXqp1XdU9Tfzjho6DeqInMpltjZNc1OtrSRNfsFFPtKfbt/vKzkR9Irv21Co26tXbzewwf9l5qCeZb0nijeWjfqNviUs+6kkm6MDCMFLPyRamDbfxXNTrjCZe2JKLeqLpZHZn+KhnFzqwYKSevCV+EIX+8x/6//iduh7jyWxodIzUr/Tf2i2fwFfZ8LZrX1zV9UP9eSDFYD7Vw4Vtd6d5lN8vsOrlMJTSuKJffeT59HlURVJv+t4XypbDoW26bisXp66P+XQ5n2/r62afVPGZPLXWdbK/rm/ny3HK+9XiAj/rPg8iej9y6H4IUbigdRZ+lngeEQAAAAAAAAAAAAAAAAAAAAAAAAAAAOAf5Cf6xEglnOkQnAAAAABJRU5ErkJggg==',
            CName : 'Netflix',
            time : '8 days ago',
            position : 'Senior Visual Designer',
            btn1 : 'Contract',
            btn2 : 'Flexible Schedule',
            wage : '$95/hr',
            location : 'Pune, India'
      },
      {
            logo : 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            CName : 'Microsoft',
            time : '2 days ago',
            position : 'UI Engineer',
            btn1 : 'Full-Time',
            btn2 : 'In Office',
            wage : '$150-180K',
            location : 'Noida, India'
      },
      {
            logo : 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
            CName : 'Tesla',
            time : '15 days ago',
            position : 'UX Researcher',
            btn1 : 'Part-Time',
            btn2 : 'Remote',
            wage : '$70/hr',
            location : 'Gurugram, India'
      }
];



  return (
      <div className="parent"> 
            {arr.map(function (data, idx){
                  
                  return (      
                  <div key = {idx} > 
                        <Card 
                        logo = {data.logo}
                        CName = {data.CName}
                        time = {data.time}
                        position = {data.position}
                        btn1 = {data.btn1}
                        btn2 = {data.btn2}
                        wage = {data.wage}
                        location = {data.location}
                        />
                  </div>
             );
            }
      )
}
      </div>
  )
}

export default App

