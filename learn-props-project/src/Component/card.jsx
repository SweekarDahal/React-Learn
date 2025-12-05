import React from 'react'
import { Bookmark } from 'lucide-react'

function card(props) {

  return (
    <>
      <div className="card">
              <div className="card-top">
                <div className="logo">
                    <img src={props.logo} alt="logo" />
                </div>
                <div className="save">
                  <button>save <Bookmark /></button>
                </div>
              </div>
              <div className="card-body"><h4>{props.CName}<span>{props.time}</span></h4>
                  <h3>{props.position} </h3>
                  <button>{props.btn1}</button> <button>{props.btn2}</button>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-left">
                  <h3>{props.wage}</h3>
                  <p>{props.location}</p>
                </div>
                <div className="card-bottom-right">
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
    </>
    
  )
}

export default card




// <div className="parent">
//       <Card logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s'
//             CName = 'Amazon'
//             time = '5 days ago'
//             position = 'Senior UI/UX designer'
//             btn1 = 'Part time'
//             btn2 = 'Senior Level'
//             wage = '$120/hr'
//             location = 'Mumbai, India'
//       />
//       <Card logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png'
//             CName = 'Google'
//             time = '30 days ago'
//             position = 'Graphic Designer'
//             btn1 = 'Part-Time'
//             btn2 = 'Flexible Shedule'
//             wage = '$150K-200k'
//             location = 'Kochi, India'
//       />
//       <Card logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zdLpQ1XogOHnpR9MuW1MD9oXYxuPS5FCgQ&s'
//             CName = 'Dribble'
//             time = '18 days ago'
//             position = 'Senior Motion Designer'
//             btn1 = 'Contract'
//             btn2 = 'Remote'
//             wage = '$85/hr'
//             location = 'Chennai, India'
//       />
//       <Card logo = 'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png'
//             CName = 'Figma'
//             time = '5 days ago'
//             position = 'UX designer'
//             btn1 = 'Full-Time'
//             btn2 = 'In Office'
//             wage = '$200-250K'
//             location = 'Bangalore, India'
//       />
//       <Card logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwBtAUOzRZRqKSGLlH8lvC5EOdL03JZpbJA&s'
//             CName = 'Airbnb'
//             time = '5 days ago'
//             position = 'Junior UI/UX designe'
//             btn1 = 'Contract'
//             btn2 = 'Remote'
//             wage = '$100/hr'
//             location = 'Delhi, India'
//       />
      // <Card logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s'
      //       CName = 'Apple'
      //       time = '5 days ago'
      //       position = 'Graphic Designer'
      //       btn1 = 'Full-Time'
      //       btn2 = 'Flexible Shedule'
      //       wage = '85k-120k'
      //       location = 'Kerela, India'
      // />
